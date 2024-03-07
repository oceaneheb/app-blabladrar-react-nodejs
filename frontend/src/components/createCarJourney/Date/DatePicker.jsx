import React, { useState } from 'react';

function DatePickerToFrom() {
    return (
        <React.Fragment>
            <form>
                <div>
                    <label htmlFor="">A partir du<span className='astriccolor'>*</span></label>
                    <input type="date" name='todate' placeholder='dd-mm-yyyy' />
                </div>

                <div>
                    <label htmlFor="">Jusqu'au<span className='astriccolor'>*</span></label>
                    <input type="date" name='fromdate' placeholder='dd-mm-yyyy' />
                </div>
            </form>
        </React.Fragment>
    )
}

export default DatePickerToFrom

