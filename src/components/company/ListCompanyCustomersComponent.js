import React, { Component } from "react";
import CompanyService from "../../services/company/CompanyService";

class ListCompanyCustomersComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        CompanyService.getCompaniesCustomers().then((res) => {
            this.setState({ companies: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">List of customers by company</h2>+
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
                                Object.entries(this.state.companies).map(([key,value])=>{
                                    return (
                                        <><tr>
                                             <td>{key}</td>
                                             <td>{value.customer}</td>
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

export default ListCompanyCustomersComponent;
