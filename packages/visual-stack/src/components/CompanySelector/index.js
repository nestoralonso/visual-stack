import React, { useState } from 'react';
import ReactSelect, { components } from 'react-select';

import companySelectorStyle from './CompanySelectorStyle';
import './CompanySelector.css';

/**
 *
 * @param {object} selectedCompany The currently selected company
 * @param {string} selectedCompany.name
 * @param {string} selectedCompany.id The company id
 * @param {array} companies A list of companies of the same shape as `selectedCompany`
 * @returns {JSX.Element}
 */
export const CompanySelector = ({ selectedCompany, companies }) => {
  const hasMultipleCompanies = companies.length > 1;

  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);
  const [company, setCompany] = useState({
    name: selectedCompany ? selectedCompany.name : null,
    id: selectedCompany ? selectedCompany.id : null,
  });

  const collapseDropdown = company => {
    if (company) setCompany(company);
    setIsDropdownExpanded(false);
  };

  const expandDropdown = () => setIsDropdownExpanded(true);

  return (
    <div className="top-nav-dropdown-container">
      <MenuItem
        name="AccountIndicator"
        title={company.name}
        text={`(${company.id})`}
        dataId={'topnav-accountswitcher'}
        onClick={hasMultipleCompanies ? () => expandDropdown() : () => {}}
        showDownArrow={hasMultipleCompanies}
        additionalClasses={'account-dropdown'}
      />
      {hasMultipleCompanies ? (
        <CompanySelectorDropdown
          companies={companies}
          selectedCompany={company.id}
          show={isDropdownExpanded}
          collapseDropdown={x => collapseDropdown(x)}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

const CompanySelectorDropdown = ({
  companies,
  selectedCompany,
  show,
  collapseDropdown,
}) => {
  const changeCompany = (value, { action }) => {
    if (action === 'select-option') {
      const selectedCompany = value ? value.value : null;
      if (selectedCompany) {
        collapseDropdown(selectedCompany);
      }
    }
  };

  const companyList = companies
    .map(c => ({ value: c, label: `${c.name} (${c.id})` }))
    .sort((a, b) => a.label.toUpperCase().localeCompare(b.label.toUpperCase()));

  const CustomMenu = props => (
    <components.Menu {...props}>
      {props.children}
      <div
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '4px',
          marginBottom: '8px',
          display: 'none',
        }}
      >
        ADD LINKED ACCOUNT
      </div>
    </components.Menu>
  );

  const CustomInput = props => (
    <components.Input {...props} autoFocus>
      {props.children}
    </components.Input>
  );

  return show ? (
    <div className="top-nav-dropdown company-switcher-dropdown">
      <DropdownHeader
        label={'Select Account'}
        collapseDropdown={collapseDropdown}
      />
      <ReactSelect
        components={{ Menu: CustomMenu, Input: CustomInput }}
        styles={companySelectorStyle}
        menuIsOpen={true}
        onChange={changeCompany}
        options={companyList}
        isOptionSelected={option => option.value === selectedCompany}
        placeholder={<CompanySelectorPlaceholder />}
      />
    </div>
  ) : (
    <div />
  );
};

const MenuItem = ({
  title,
  text,
  icon,
  onClick,
  additionalClasses,
  dataId,
  showDownArrow = false,
}) => {
  const textElement = text ? (
    <span className="top-nav-menu-item-text">{text}</span>
  ) : null;
  const maybeDownArrow = showDownArrow ? (
    <span className="material-icons icon-menu-item">expand_more</span>
  ) : null;
  return (
    <div
      className={`top-nav-menu-item ${additionalClasses || ''}`}
      onClick={onClick}
      data-id={dataId}
    >
      {icon}
      {title ? (
        <span className="top-nav-menu-item-title truncate">{title}&nbsp;</span>
      ) : null}
      {textElement}
      {maybeDownArrow}
    </div>
  );
};

const DropdownHeader = ({ label, collapseDropdown }) => (
  <div className="top-nav-dropdown-header">
    <div>{label}</div>
    {
      <div className="icon-dropdown" onClick={() => collapseDropdown()}>
        <i className="material-icons" alt="close">
          close
        </i>
      </div>
    }
  </div>
);

const CompanySelectorPlaceholder = () => (
  <>
    <div
      style={{
        width: '48px',
        height: '48px',
        display: 'inline-block',
        padding: '15px',
      }}
    >
      <i
        className="material-icons icon-search"
        style={{ fontSize: '18px' }}
        alt="search icon"
      >
        search
      </i>{' '}
    </div>
    <div
      style={{
        fontStyle: 'italic',
        lineHeight: '48px',
        display: 'inline-block',
        position: 'relative',
        top: '-2px',
      }}
    >
      {'Search for accounts...'}
    </div>
  </>
);
