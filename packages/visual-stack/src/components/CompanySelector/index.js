import React from 'react';
import ReactSelect, { components } from 'react-select';

import companySelectorStyle from './CompanySelectorStyle';
import './CompanySelector.css';

export class CompanySelector extends React.Component {
  container = React.createRef();
  state = {
    isDropdownExpanded: false,
    company: { name: null, id: null },
  };

  constructor(props) {
    super(props);
    if (this.props.selectedCompany)
      this.state.company = {
        name: this.props.selectedCompany.name,
        id: this.props.selectedCompany.id,
      };
    this.collapseDropdown = this.collapseDropdown.bind(this);
    this.expandDropdown = this.expandDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  collapseDropdown(company) {
    if (company) {
      this.setState({ company: company });
      if (this.props.updateCompanyCallback) this.props.updateCompanyCallback();
    }
    this.setState({ isDropdownExpanded: false });
  }

  expandDropdown() {
    this.setState({ isDropdownExpanded: true });
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({ isDropdownExpanded: false });
    }
  };

  render() {
    const hasMultipleCompanies = this.props.companies.length > 1;

    return (
      <div className="top-nav-dropdown-container" ref={this.container}>
        <MenuItem
          name="AccountIndicator"
          title={this.state.company.name}
          text={`(${this.state.company.id})`}
          dataId={'topnav-accountswitcher'}
          onClick={
            hasMultipleCompanies ? () => this.expandDropdown() : () => {}
          }
          showDownArrow={hasMultipleCompanies}
          additionalClasses={'account-dropdown'}
        />
        {hasMultipleCompanies ? (
          <CompanySelectorDropdown
            {...this.props}
            companies={this.props.companies}
            selectedCompany={this.state.company.id}
            show={this.state.isDropdownExpanded}
            collapseDropdown={(x) => this.collapseDropdown(x)}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const CompanySelectorDropdown = ({
  companies,
  selectedCompany,
  show,
  collapseDropdown,
  ...restProps
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
    .map((c) => ({ value: c, label: `${c.name} (${c.id})` }))
    .sort((a, b) => a.label.toUpperCase().localeCompare(b.label.toUpperCase()));

  const CustomMenu = (props) => (
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

  const CustomInput = (props) => (
    <components.Input {...props} autoFocus>
      {props.children}
    </components.Input>
  );

  return show ? (
    <div className="top-nav-dropdown company-switcher-dropdown">
      <DropdownHeader
        label={restProps.selectText || 'Select Account'}
        collapseDropdown={collapseDropdown}
      />
      <ReactSelect
        components={{ Menu: CustomMenu, Input: CustomInput }}
        styles={companySelectorStyle}
        menuIsOpen={true}
        onChange={changeCompany}
        options={companyList}
        isOptionSelected={(option) => option.value === selectedCompany}
        placeholder={<CompanySelectorPlaceholder {...restProps} />}
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

const CompanySelectorPlaceholder = ({ ...restProps }) => (
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
      {restProps.searchAccountsText || 'Search for accounts...'}
    </div>
  </>
);
