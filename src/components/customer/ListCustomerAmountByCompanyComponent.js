import React, { Component } from "react";
import CustomerService from "../../services/customer/CustomerService";

class ListCustomerAmountByCompanyComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            id: this.props.match.params.id,
            customers: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomersAmountByCompany(this.state.id).then((res) => {
            this.setState({ customers: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Total spent by customer on rentals for company</h2>+
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Rut</th>
                                    <th>Total amount</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                Object.entries(this.state.customers).map(([key,value])=>{
                                    return (
                                        <><tr>
                                            <td>{key}</td>
                                             <td>{value}</td>
                                        </tr></>
                                    );
                                })
                            }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerAmountByCompanyComponent;
