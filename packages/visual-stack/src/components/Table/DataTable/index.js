import React from 'react';
import './DataTable.css';
import {
  TableContainer,
  TableTitle,
  THead,
  Tr,
  TBody,
  Table,
  Td,
  Th,
} from '../';
import Pagination from '../../Pagination';
import * as R from 'ramda';
import { getNextData, getNextOrder, getSortingIcon } from './sortingHelper';
import PropTypes from 'prop-types';
import './DataTable.css';
import LoadingAnimation from '../../LoadingAnimation';

const generateHeaders = ({ columns, ...tableProps }) => {
  return columns.map((column, index) => generateHeader(column, index, tableProps));
}

const generateHeader = (
  column,
  index,
  tableProps,
) => {
  const { sortable, sortingOption, onSort, data } = tableProps;
  const { label: currentLabel, width } = column;
  const isCurrentColumnSorted = () => {
    return sortingOption.label === currentLabel;
  };

  const headerClickHandler = () => {
    const { order } = sortingOption;
    const currentOrder = isCurrentColumnSorted() ? order : null;
    const nextOrder = getNextOrder(currentOrder);
    const nextData = getNextData(index, currentOrder, data);
    onSort({
      sortingOption: {
        label: currentLabel,
        order: nextOrder,
      },
      data: nextData,
    });
  };

  return (
    <Th
      id="label"
      style={width && { width }}
      className={`
        ${sortable && 'vs-data-table-header-sortable'}
        ${sortable && isCurrentColumnSorted() && 'vs-data-table-header-sorted'}
      `}
      key={index}
      onClick={sortable ? headerClickHandler : undefined}
    >
      <div>
        {currentLabel}
        <span>{sortable && getSortingIcon(sortingOption, currentLabel)}</span>
      </div>
    </Th>
  );
};

const generateRows = ({ data, ...tableProps }) => {
  return data.map((rowData, index) => generateRow(rowData, index, tableProps));
}

const generateRow = (rowData, index, tableProps) => {
  const { onClick, columns, selectable, onSelect } = tableProps;
  const { id, row, selected } = rowData;

  return <Tr key={id}>
    {selectable && <Td>
      <input type="checkbox" aria-label="Select row from data table" checked={selected} onChange={() => {
        onSelect(id)
      }} />
    </Td>}
    {row.map((item, columnIndex) => {
      const getColumn = R.compose(
        R.defaultTo({}),
        R.prop(columnIndex)
      );
      const { label, clickable, renderCell = R.identity } = getColumn(columns);
      return (
        <Td key={columnIndex}>
          {clickable && (
            <a
              className="vs-data-table-clickable-cell"
              onClick={() => {
                onClick({
                  value: item,
                  rowIndex: index,
                  label,
                });
              }}
            >
              {renderCell(item)}
            </a>
          )}
          {!clickable && renderCell(item)}
        </Td>
      );
    })}
  </Tr>
};

const getDataWithPagination = (rowsPerPage, page) =>
  R.compose(
    R.take(rowsPerPage),
    R.drop(rowsPerPage * (page - 1))
  );

const NoDataLabel = ({ label }) => {
  return <div className="vs-data-table-no-data-label">{label}</div>;
};

const omitGeneratedIdsFromData = data => R.map(R.dissoc("id"))(data)


const toggleSelectedInRowData = rowData => ({
  ...rowData,
  selected: !rowData.selected
})

const selectAllCheckbox = ({ data, onSelect }) => {
  const checked = R.all(R.propEq('selected', true))(data);
  let onChange = () => onSelect({
    data: R.map(rowData => ({ ...rowData, selected: !checked }))(data)
  });
  return <input type="checkbox" aria-label="Select all from data table" checked={checked} onChange={(onChange)} />
}


export const DataTable = ({
  caption = '',
  description = '',
  columns = [],
  data = [],
  isLoading = false,
  loadingMessage,
  rowsPerPage = 25,
  page = 1,
  onPageChange,
  pagination = false,
  sortingOption = {},
  sortable = false,
  onClick,
  onSort,
  renderToolbar,
  noDataLabel = 'No data available.',
  rowsPerPageTemplate,
  totalRecordsTemplate,
  selectable = false,
  onSelect,
  ...restProps
}) => {
  const paginatedData = pagination
    ? getDataWithPagination(rowsPerPage, page)(data)
    : data;

  const onSelectId = id => {
    const selectedRowIndex = R.findIndex(R.propEq('id', id), data);
    const dataWithSelectedRow = R.adjust(selectedRowIndex, toggleSelectedInRowData)(data);
    onSelect({ data: dataWithSelectedRow })
  }

  return (
    <TableContainer {...restProps} className="vs-data-table-container">
      <TableTitle>
        <div className="vs-data-table-top-level-header">
          <div>
            {caption}
            <p>{description}</p>
          </div>
          <div>{renderToolbar && renderToolbar({ columns, data: omitGeneratedIdsFromData(data) })}</div>
        </div>
      </TableTitle>
      {isLoading ? (
        <div className={'vs-data-table-loading-animation-wrapper'}>
          <LoadingAnimation loadingMessage={loadingMessage} />
        </div>
      ) : (
          <>
            <Table>
              <THead>
                <Tr>
                  {selectable && <Th>
                    {selectAllCheckbox({ data, onSelect })}
                  </Th>}
                  {generateHeaders({
                    columns,
                    sortable,
                    sortingOption,
                    onSort,
                    data
                  })}
                </Tr>
              </THead>
              <TBody>
                {generateRows({
                  data: paginatedData,
                  onClick,
                  columns,
                  selectable,
                  onSelect: onSelectId
                })}
              </TBody>
            </Table>
            {paginatedData.length === 0 && <NoDataLabel label={noDataLabel} />}
            {pagination && (
              <Pagination
                className="vs-table-pagination"
                numberOfRows={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChange={onPageChange}
                rowsPerPageTemplate={rowsPerPageTemplate}
                totalRecordsTemplate={totalRecordsTemplate}
              />
            )}
          </>
        )}
    </TableContainer>
  );
};

DataTable.propTypes = {
  caption: PropTypes.string,
  description: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  onPageChange: PropTypes.func,
  pagination: PropTypes.bool,
  sortingOption: PropTypes.shape({
    label: PropTypes.string,
    order: PropTypes.string,
  }),
  sortable: PropTypes.bool,
  onSort: PropTypes.func,
  selectable: PropTypes.bool,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
  renderToolbar: PropTypes.func,
  noDataLabel: PropTypes.string,
  rowsPerPageTemplate: PropTypes.string,
  totalRecordsTemplate: PropTypes.string,
};
