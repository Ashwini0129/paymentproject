import React, { useState } from 'react';
import { render } from 'react-dom';
import Makepayment from './Makepayment';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Link } from 'react-router-dom';
import { Toast } from 'bootstrap';
const d=new Date()
const weekDay=['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];

const day= weekDay[d.getDay()];

const Days =() => {
    
    if(day=="Sat"|| day=="Sun"){
        return(
   
  alert ("Can't Make Transactions")
        )
        
    }
    else
    {
    return <Makepayment />
    }
    };


    export default Days;