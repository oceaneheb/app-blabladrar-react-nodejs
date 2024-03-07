const CrossingPoint = ({value, isChangeDepartureAdress, placeholder}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={isChangeDepartureAdress}
            placeholder={placeholder}
        />
    )
}

export default CrossingPoint;