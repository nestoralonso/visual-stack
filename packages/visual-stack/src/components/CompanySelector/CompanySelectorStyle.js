const companySwitcherStyle = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: null,
    color: state.isSelected ? '#151C23' : '#757575',
    fontWeight: state.isSelected ? '500' : 'normal',
    fontSize: '1.3rem',
    lineHeight: '3.2rem',
    padding: '0px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F3F4F5',
      color: '#151C23',
    },
  }),
  menu: (provided, _state) => ({
    ...provided,
    marginTop: '0px',
    borderRadius: 0,
    cursor: 'pointer',
    boxShadow: '0px 8px 16px rgba(0,0,0,.16)',
    borderTop: '1px solid #D6D8DC',
  }),
  control: (provided, _state) => ({
    ...provided,
    borderRadius: 0,
    borderWidth: 0,
    boxShadow: 'none',
    borderTop: '1px solid #D6D8DC',
    '&:hover': {
      borderTop: '1px solid #D6D8DC',
    },
  }),
  input: provided => ({
    ...provided,
    marginLeft: '48px',
    marginBottom: '0px',
    '&:focus': {
      boxShadow: 'none',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    height: '48px',
    padding: '0px',
    margin: '0px',
  }),
  placeholder: provided => ({
    ...provided,
    marginLeft: '0px',
    marginRight: '0px',
    marginTop: '2px',
  }),
  indicatorsContainer: () => ({ display: 'none' }),
};

export default companySwitcherStyle;
