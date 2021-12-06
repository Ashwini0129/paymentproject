import React,{ useState,useEffect} from 'react';
import { Link, useHistory,useParams } from 'react-router-dom'
import CustomerDataService from './Services/CustomerDataService';
import axios from 'axios';
import Transaction from './Transaction';
import raw from './Sdn.txt';
import Error from './Error';



const Makepayment=()=>  {
    
    const [accountNumber, setAccountNumber]=useState("");
    const [accountHolderName, setAccountHolderName]=useState("");
    const [clearBalance, setClearBalance]=useState("");
    const [overDraft, setOverDraft]=useState("");

    const [bicCode, setBicCode]=useState("");
    const [institutionName, setInstitutionName]=useState("");
    const [receiverName, setReceiverName]=useState("");
    const [customerTransfer,seCustomerTransfer]=useState("");
    const [bankTransfer,setBankTransfer]=useState("");

    const [amount, setAmount]=useState("");
    const [transferFee, setTransferFee]=useState("0.25");
    
    const [transferData, setTransferData ] = useState([]);
  
    const history = useHistory();
    const {id}=useParams();

   const handle=(e)=>{
        if(e.target.name==="accountNumber"){
            setAccountNumber(e.target.value);
            console.log(accountNumber)
            axios.get("http://localhost:8093/api/v1/customers/"+ e.target.value)
            .then(response =>{
                let data=response.data;
                console.log(data)
                setAccountHolderName(data.accountHolderName);
                setClearBalance(data.clearBalance);
                setOverDraft(data.overDraft);
          
            
    })
    .catch(error => {
        console.log(error)
    
    })
}
    }
    const handleChange=(e)=>{
        if(e.target.name==="bicCode"){
            setBicCode(e.target.value);
            console.log(bicCode)
            axios.get("http://localhost:8093/api/v1/receivers/" + e.target.value)
            .then (response =>{
                const data=response.data;
                console.log(data)
                setInstitutionName(data.institutionName);
            })
            
                       
}
else{
    console.log("Customer id not exists")
    alert("Customer id not exists")
}
} 



const handle1=(e)=>{
    if(e.target.name==="amount"){
        setAmount(e.target.value);
        if(e.target.value>clearBalance && overDraft=='No')
    {
    console.log("insufficient funds")
    alert("insufficient Funds")
        }
        else
        {
            setTransferFee(e.target.value*0.0025);
            setClearBalance(clearBalance-(e.target.value)-(e.target.value*0.0025));
        }
        
    }
        
}

const updataDatabase =(e)=>{
    e.preventDefault();
 /*  const clearBalance=clearbalance
    const accountHolderName=accountholdername
    const overDraft=overdraft*/

    const customer={ accountHolderName,clearBalance,overDraft}
    if(1){
        axios.put("http://localhost:8093/api/v1/customers/"+accountNumber,customer)
        .then(response=>{
            console.log(response.data)
            history.push("/customers");
        })
        .catch(error=>{
            console.log(error)
        })
    }

} 
<Link   className="btn btn-info" name="transfer" onClick={(e) => updataDatabase(e) }
                      to="/Transaction"> Submit </Link> 



/*const handle2=(e)=>{

        axios.get("http://localhost:8093/api/v1/customers/"+ accountNumber)
            .then(response =>{
                let data=response.data;
                console.log(data)
                setAccountHolderName(data.accountHolderName);
                setClearBalance(data.clearBalance);
                axios.put("http://localhost:8093/api/v1/customers/"+ accountNumber)
    
            
    })
}*/
const handle2=(e)=>{
    console.log("Transaction");
    alert("Transaction sucessful")
}



const checkname=(e)=>{
    setReceiverName(e.target.value) 
fetch(raw).then(r=>r.text()).then(text=>{
    console.log(receiverName)
    if(text.search(receiverName)>-1){
        console.log("sucess")
        alert("receiver is in sdn:")
    }
    else{
        console.log("sorry")
    }
});

}
    
   const checktransfer=(e)=>{
if(accountHolderName.search("HDFC BANK")>-1)
{
    console.log("good")
    if(e.target.value=="customerTransfer")
    {
        alert("cant transfer")
    }
    else{
        console.log("transfered")
    }
}
else
{
    if(e.target.value=="bankTransfer")
{
    alert("cant transfer to bank ")
}
else{
    console.log("transfered")
}

   }
}
 /*   useEffect( () => {
        CustomerDataService.getCustomerDataById(id)
        .then(response =>{
            setAccountHolderName(response.data.accountholdername);
        })
    })
    const[CustomerData, setCustomerData]=useState({
        "accountnumber":localStorage.getItem("accountnumber"),
        "accountholdername":"","clearbalance":"","overdraft":""
    })*/



    
    return (
        <div className="MakePayment">

        <div class="form-group">
            <center>
            <h4>Enter Sender Details</h4>        
                 <label>Customer Id </label><br/>
                <input type="text" placeholder="enter customer Id" name="accountNumber" required value={accountNumber} onChange={handle}
                /><br/>
                <label>Account Holder Name </label><br/>
                <input type="text" placeholder="enter Account Holder Name" name="accountHolderName" value={accountHolderName} 
                /><br/>
                <label>Clear Balance </label><br/>
                <input type="text" placeholder="enter clear balance" name="clearBalance" value={clearBalance} 
                /><br/>
                <label>Over Draft </label><br/>
                <input type="text" placeholder= "  " name="overDraft" value={overDraft}
                /><br/>
                <h4>Enter Receiver Details</h4> 
                <label> BIC </label><br/>
                <input type="text" placeholder="enter bic" name="bicCode" required value={bicCode} onChange={handleChange}
                /><br/>
                 
                <label>Institution Name</label><br/>
                <input type="text" placeholder="enter institution name" name="institutionName" required value={institutionName} 
                /><br/>
             
                <label>Account Holder Number</label><br/>
                <input type="text" placeholder="enter Account Holder Number" name="account Holder Number"required
                /><br/>
                <label>Account Holder Name</label><br/>
                <input type="text" placeholder="enter Account Holder Name" name="receiverName" onChange={checkname}               /><br/>
<h4>Enter Transaction Details</h4> 
<label>TransactionType</label><br/>
<div className="txn">
    <center>
            <select class="form-select"aria-label="Default select example"onChange={checktransfer}>
                <option selected disabled hidden> select Transaction Type</option> 

                
                <option>customerTransfer</option>
                <option> bankTransfer</option>
            </select>
            </center></div><br /><br/>


            <label>Message Code</label><br/>
            <div className="txn">
            <select class="form-select"aria-label="Default select example" >
            <option selected> select Meassage Code</option>
                <option value ="CHQB">CHQB</option>
                <option value ="CORT">CORT</option>
                <option value ="HOLD">HOLD</option>
                <option value ="INTC">INTC</option>
                <option value ="PHOB">PHOB</option>
                <option value ="PHOI">PHOI</option>
                <option value ="PHON">PHON</option>
                <option value ="REPA">REPA</option>
                <option value ="SDVA">SDVA</option>
                
            </select></div><br/><br/>
            
            
            <label>Amount</label><br/>
                <input type="text" placeholder="enter amount" name="amount" value={amount} onChange={handle1} /><br/>
                <input type="text" placeholder="0.25%" name="transferFee" value={parseFloat(amount)*0.0025} disabled/><br/>
                <input type="text" placeholder="clearbalance" name="clearBalance" value={clearBalance}   
                 />
                
           <br/>
    
           <button 
                                className="btn btn-success" name="submit"
                                onClick={(e) => updataDatabase(e)}>Submit</button>


                </center>
                
                
                </div> 
                </div>

                




                
        
        );
    }

    
    export default Makepayment;
