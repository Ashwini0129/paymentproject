import React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { getByDisplayValue, render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import {usestate} from 'react';
import Days from './Days';




function Calendar(){
    

 
    return(
        <div>
            <div className="Calendar">
            <DatePickerComponent placeholder="Enter Date"></DatePickerComponent>
            
            <Link   className="btn btn-info" 
                      to="/Days"> Proceed </Link>
        </div>
        </div>
    );
}


export default Calendar;