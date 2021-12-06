import React,{ useState,useEffect} from 'react';
import { Link, useHistory,useParams } from 'react-router-dom'
import Makepayment from './Makepayment';


import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Table } from 'semantic-ui-react';


    function  Transaction (){
    

 
        return(
            <div>
                <div className="Transaction">
               <h4 className="text-center">Transaction Details</h4>
               <table  className="table table-bordered table-striped">
                   <thead class="table-dark">
                       <tr>
                           <th>  TransactionId  </th>
                           <th>  SenderAccountNumber  </th>
                           <th>  TransferAmount  </th>
                           <th>  TransactionId  </th>
                           <th>  TransactionId  </th>
                       </tr>
                       <td></td>
                   </thead>
               </table>
                
                <Link   className="btn btn-info" 
                          to="/"> Go to HomeScreen </Link>
            </div>
            </div>
        );
    }
    

export default Transaction;