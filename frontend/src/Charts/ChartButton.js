import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';

export default function ChartButton({ placeholder, options }) {
  return (
    <div className="col-2 p-2">
      <DropdownMultiselect
        options={options}
        buttonClass="btn btn-primary"
        placeholder={placeholder}
      />
    </div>
  );
}
