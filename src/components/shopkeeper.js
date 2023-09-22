import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import { PureComponent } from 'react';
import { NavLink, Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Ssprofile from './shopkeeper/ssprofile';
import Ssstockdetails from './shopkeeper/ss-stock-details';
import Ssuserdetails from './shopkeeper/ss-user-details';
import Ssdashboard from './shopkeeper/ss-dashboard';
import {useHistory} from "react-router-dom";
import EditUser from './shopkeeper/editUser';
import Navbar2 from './navbar2';

class shopkeeper extends PureComponent {

    componentDidMount(){

        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
         });
         
    }
    logoutSession(){
      localStorage.removeItem("Token");
      localStorage.removeItem("CurrentUser");
      
    }
    
        render(){
        return ( 
        <>
        
        <Navbar2 />
        <div className="shopkeeper d-flex" id="wrapper">

        <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><h3><strong>SHOPKEEPER</strong></h3> </div>
              <div class="list-group list-group-flush" id="sb">
                <NavLink to="/shopkeeper/ssprofile" id="sb1" className="list-group-item list-group-item-action bg-light">Profile</NavLink>
                {/* <NavLink to="/shopkeeper/ssdashboard" className="list-group-item list-group-item-action bg-light">Dashboard</NavLink> */}
                <NavLink to="/shopkeeper/ssstockdetails" id="sb2" className="list-group-item list-group-item-action bg-light">Stock Details</NavLink>
                <NavLink to="/shopkeeper/ssuserdetails" id="sb3" className="list-group-item list-group-item-action bg-light">User Details</NavLink>
                <NavLink to="/login" onClick={this.logoutSession} className="list-group-item list-group-item-action bg-light">Sign Out</NavLink>
              </div>
            </div>

            <div id="page-content-wrapper">

              <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
                
              </nav>

              <div class="container-fluid">
               <Switch>
                    <Route exact path="/shopkeeper"><Redirect to="/shopkeeper/ssprofile" /></Route>
                    <Route path="/shopkeeper/ssprofile" component={EditUser}></Route>
                    <Route path="/shopkeeper/ssstockdetails" component={Ssstockdetails}></Route>
                    <Route path="/shopkeeper/ssuserdetails" component={Ssuserdetails}></Route>
                    <Route exact path="/shopkeeper/ssdashboard" component={Ssdashboard}></Route>
                    
               </Switch>
            
                
              </div>
            </div>


        </div>

            
        
        </>
     );
    }
}
 
export default withRouter(shopkeeper);