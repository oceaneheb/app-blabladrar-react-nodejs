import CheckboxGroup from '../components/createCarJourney/Checkbox/CheckboxGroup'
import CrossingPointGroup from '../components/createCarJourney/CrossingPoint/CrossingPointGroup'
import DatePickerGroup from '../components/createCarJourney/Date/DatePickerGroup'
import DaysAndHoursGroup from '../components/createCarJourney/DaysAndHours/DaysAndHoursGroup'
// import DatePiker from '../components/createCarJourney/DatePicker'
import './CreateCarJourney.css'

function CreateCarJourney() {
        
    return (
        <div id='create-car-journey'>
            <h1>Créer un trajet</h1>
            <div>
                <h2>Itinéraire</h2>
                <hr />
                <div>
                    
                    <div>
                        <CheckboxGroup />
                        <CrossingPointGroup />
                        <DatePickerGroup />
                        {/* <DatePiker /> */}
                        <DaysAndHoursGroup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCarJourney