import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './components/Layout/Landing';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';
import Transaction from './components/Transaction';
import Calendar from './components/Calendar';
import Popup from './components/Popup';
import Days from './components/Days'
import CustomerDataService from './components/Services/CustomerDataService';
import Error from './components/Error';




function App() {
    return (
      <div className="App">
<Router>
          <Header />
        
          <div className="container">
          <Landing />
          <Popup />
          <Switch>
          <Route exact path="/Landing" component={Landing } />
              <Route exact path="/Makepayment" component={Makepayment } />
             
              <Route exact path="/Transaction" component={Transaction} />
              <Route exact path="/Calendar" component={Calendar } />
              <Route exact path="/Days" component={Days } />
              <Route exact path="/CustomerDataService" component={CustomerDataService } />
              <Route exact path="/Error" component={Error } />
             

          
            </Switch>
            
          </div>
    
    <Footer />
    </Router>
    </div>
  );
}

export default App;