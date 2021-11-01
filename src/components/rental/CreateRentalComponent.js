import React, { Component } from 'react'
import RentalService from '../../services/rental/RentalService';

class CreateRentalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: 0,
            company: 0,
            dailyCost: 0,
            days: 0
        }
        this.changeCustomerHandler = this.changeCustomerHandler.bind(this);
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.changeDailyCostHandler = this.changeDailyCostHandler.bind(this);
        this.changeDaysHandler = this.changeDaysHandler.bind(this);
        this.saveRental = this.saveRental.bind(this);
    }

    saveRental = (e) => {
        e.preventDefault();
        let rental = {dailyCost: this.state.dailyCost, days: this.state.days};
        let customer = this.state.customer;
        let company = this.state.company;
        console.log('rental => ' + JSON.stringify(rental));

            RentalService.createRental(customer, company, rental).then(res =>{
                this.props.history.push('/rentals');
            });
        
    }
    
    changeCustomerHandler= (event) => {
        this.setState({customer: event.target.value});
    }

    changeCompanyHandler= (event) => {
        this.setState({company: event.target.value});
    }

    changeDailyCostHandler= (event) => {
        this.setState({dailyCost: event.target.value});
    }

    changeDaysHandler= (event) => {
        this.setState({days: event.target.value});
    }

    getTitle(){
            return <h3 className="text-center">Add rental</h3>
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer: </label>
                                            <input placeholder="Customer" name="customer" className="form-control" 
                                                value={this.state.customer} onChange={this.changeCustomerHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input placeholder="Company" name="company" className="form-control" 
                                                value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Daily cost: </label>
                                            <input placeholder="Daily cost" name="dailyCost" className="form-control" 
                                                value={this.state.dailyCost} onChange={this.changeDailyCostHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Days: </label>
                                            <input placeholder="Days" name="days" className="form-control" 
                                                value={this.state.days} onChange={this.changeDaysHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveRental}>Save</button>
                                        </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateRentalComponent;