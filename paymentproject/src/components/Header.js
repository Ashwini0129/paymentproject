import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <header className="header">
                <div>
                    
                    <Link to="/" className="navbar-brand">Payment Transfer System </Link>
                    
                    <div className="makepaymentbtn">
                    <Link to="/Calendar" className="btn btn-primary mb-2"> Makepayment </Link>
                    </div>
                    
                    
                  </div>    
                  
            </header>
        </div>
    )
}

export default Header;
