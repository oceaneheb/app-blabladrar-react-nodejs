import { useState } from "react";
import DayCheck from "./DaysAndHours";
import './DaysAndHours.css'
import TimePicker from 'react-time-picker';
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

function DaysAndHoursGroup() {

    const [value, setValue] = useState(new Date().toLocaleTimeString());

    return (
        <div>
            <h2>Jours et Heures</h2>
            <div>
                <h3>Jours et horaires des allers</h3>
                <WeekCheck />
                {/* <TimePicker 
                    label="Heure de départ"
                    // views={['hours', 'minutes']}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                /> */}
                <TimePickerComponent></TimePickerComponent>
            </div>
            <div>
                <h3>Jours et horaires des retours</h3>
                <WeekCheck />
            </div>
            <TimePickerComponent></TimePickerComponent>
        </div>
    )
}

function WeekCheck() {

    const [isSelectedMonday, setIsSelectedMonday] = useState(false);
    const [isSelectedTuesday, setIsSelectedTuesday] = useState(false);
    const [isSelectedWednesday, setIsSelectedWednesday] = useState(false);
    const [isSelectedThursday, setIsSelectedThursday] = useState(false);
    const [isSelectedFriday, setIsSelectedFriday] = useState(false);
    const [isSelectedSaturday, setIsSelectedSaturday] = useState(false);
    const [isSelectedSunday, setIsSelectedSunday] = useState(false);

    const style = {background: '#65C0ED', color: 'white'}

    return (
        <ul>
            <DayCheck 
                label="Lun"
                key='monday'
                isSelectedDay={isSelectedMonday}
                onChangeDay={() => setIsSelectedMonday(!isSelectedMonday)}
                style={isSelectedMonday ? style : null}  
            />
            <DayCheck 
                label='Mar'
                key='tuesday'
                isSelectedDay={isSelectedTuesday}
                onChangeDay={() => setIsSelectedTuesday(!isSelectedTuesday)}
                style={isSelectedTuesday ? style : null} 
            />
            <DayCheck 
                label='Mer'
                key='mercredi'
                isSelectedDay={isSelectedWednesday}
                onChangeDay={() => setIsSelectedWednesday(!isSelectedWednesday)}
                style={isSelectedWednesday ? style : null} 
            />
            <DayCheck 
                label='Jeu'
                key='thursday'
                isSelectedDay={isSelectedThursday}
                onChangeDay={() => setIsSelectedThursday(!isSelectedThursday)}
                style={isSelectedThursday ? style : null} 
            />
            <DayCheck 
                label='Ven'
                key='friday'
                isSelectedDay={isSelectedFriday}
                onChangeDay={() => setIsSelectedFriday(!isSelectedFriday)}
                style={isSelectedFriday ? style : null} 
            />
            <DayCheck 
                label='Sam'
                key='saturday'
                isSelectedDay={isSelectedSaturday}
                onChangeDay={() => setIsSelectedSaturday(!isSelectedSaturday)}
                style={isSelectedSaturday ? style : null} 
            />
            <DayCheck 
                label='Dim'
                key='sunday'
                isSelectedDay={isSelectedSunday}
                onChangeDay={() => setIsSelectedSunday(!isSelectedSunday)}
                style={isSelectedSunday ? style : null} 
            />
        </ul>
    )
}

export default DaysAndHoursGroup;