const DayCheck = ({label, isSelectedDay, onChangeDay, style}) => {
    return (
        <li style={style}>
            <label className='day'>
                <input type='checkbox' checked={isSelectedDay} onChange={onChangeDay}/>
                <div className="day-label">
                    {label}
                </div>
            </label>
        </li>
    )
}

export default DayCheck;
