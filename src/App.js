import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListCustomerComponent from './components/customer/ListCustomerComponent';
import ListCustomerSortByLastNameComponent from './components/customer/ListCustomerSortByLastNameComponent';
import ListCustomerRentExpensesComponent from './components/customer/ListCustomerRentExpensesComponent';
import ListCompanyProfitsComponent from './components/company/ListCompanyProfitsComponent';
import ListCompanyRentsComponent from './components/company/ListCompanyRentsComponent';
import ListCustomerAmountByCompanyComponent from './components/customer/ListCustomerAmountByCompanyComponent';
import ListCompanyCustomersComponent from './components/company/ListCompanyCustomersComponent';
import CreateRentalComponent from './components/rental/CreateRentalComponent';


import HeaderComponent from './components/ui/HeaderComponent';
import FooterComponent from './components/ui/FooterComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListCustomerComponent}></Route>
                          <Route path = "/customers/sortBylastName" exact component = {ListCustomerSortByLastNameComponent}></Route>
                          <Route path = "/customers/rentExpenses" exact component = {ListCustomerRentExpensesComponent}></Route>
                          <Route path = "/customers/company/:id" component = {ListCustomerAmountByCompanyComponent}></Route>
                          <Route path = "/companies/profits" exact component = {ListCompanyProfitsComponent}></Route>
                          <Route path = "/companies/rents" exact component = {ListCompanyRentsComponent}></Route>
                          <Route path = "/companies/customers" exact component = {ListCompanyCustomersComponent}></Route>
                          <Route path = "/rentals" exact component = {CreateRentalComponent}></Route>
                          {/*<Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
  <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>*/}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
