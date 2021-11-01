import React, { Component } from "react";
import CompanyService from "../../services/company/CompanyService";

class ListCompanyProfitsComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        CompanyService.getCompaniesProfits().then((res) => {
            this.setState({ companies: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Companies profits</h2>+
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Total amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.companies.map(
                                        company => 
                                        <tr key= {company.name}>
                                             <td>{company.name}</td>
                                             <td>{company.totalAmount}</td>
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

export default ListCompanyProfitsComponent;
