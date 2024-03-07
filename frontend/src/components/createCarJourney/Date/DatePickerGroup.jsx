import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';

function DatePickerGroup() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div>
            <h2>Validité de l'annonce</h2>
            <hr />
            <div>
                <label htmlFor="startdate">A partir du<span className="astriccolor">*</span>
                <DatePicker 
                    selected={startDate}
                    onChange={(startDate) => setStartDate(startDate)} 
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                    placeholderText="jj/mm/YYYY"
                    id="startdate"
                    // customInput={<CustomInput />}
                />
                </label>
            </div>
            <div>
                <label htmlFor="enddate">Jusqu'au<span className="astriccolor">*</span></label>
                <DatePicker 
                    selected={endDate} 
                    onChange={(endDate) => setEndDate(endDate)} 
                    dateFormat='dd/MM/yyyy'
                    minDate={startDate}
                    placeholderText="jj/mm/aaaa"
                    id="enddate"
                />
            </div>
           
        </div>
    )
}

export default DatePickerGroup