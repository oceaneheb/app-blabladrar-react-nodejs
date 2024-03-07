const Checkbox = ({label, value, isSelected, onCheckboxChange}) => {
    return (
        <label className="checkbox-type">
            <input 
                type="checkbox"
                value={value}
                checked={isSelected}
                onChange={onCheckboxChange}
            />
            {label}
        </label>
    );
};

export default Checkbox;