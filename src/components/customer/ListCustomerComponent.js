import React, { Component } from "react";
import CustomerService from "../../services/customer/CustomerService";

class ListCustomerComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Customers List</h2>+
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Rut</th>
                                    <th>Name</th>
                                    <th>Last name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.id}>
                                             <td>{customer.id}</td>
                                             <td>{customer.rut} </td>   
                                             <td>{customer.name}</td>
                                             <td>{customer.lastName}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerComponent;
