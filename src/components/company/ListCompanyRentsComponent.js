import React, { Component } from "react";
import CompanyService from "../../services/company/CompanyService";

class ListCompanyRentsComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        CompanyService.getCompaniesWithRentsEqualOrOverOneWeek().then((res) => {
            this.setState({ companies: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Companies rents over 1 week</h2>+
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Rents</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                Object.entries(this.state.companies).map(([key,value])=>{
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

export default ListCompanyRentsComponent;
