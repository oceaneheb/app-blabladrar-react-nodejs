import { useState } from 'react';
import CrossingPoint from './CrossingPoint';
import { CiLocationOn } from "react-icons/ci";

function CrossingPointGroup() {

    const [departureAdress, setDepartureAdress] = useState("");
    const [arrivalAdress, setArrivalAdress] = useState("");

    return (
        <div>
            <h3>Points de passage</h3>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <CiLocationOn />
                <CrossingPoint 
                    value={departureAdress}
                    isChangeDepartureAdress={(e) => setDepartureAdress(e.target.value)}
                    placeholder="Adresse de départ" //ajouter l'icon de localisation
                />
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <CiLocationOn />
                <CrossingPoint 
                    value={arrivalAdress}
                    isChangeDepartureAdress={(e) => setArrivalAdress(e.target.value)}
                    placeholder= "Adresse d'arrivée"
                />
            </div>
        </div>
    )
}

export default CrossingPointGroup;