import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://google.com" className="navbar-brand">Rental car App</a></div>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                 1.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/customers/sortBylastName"} className="nav-link">
                                 2.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/customers/rentExpenses"} className="nav-link">
                                 3.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/companies/customers"} className="nav-link">
                                 4. pendiente
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/customers/company/1"} className="nav-link">
                                 5.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/companies/profits"} className="nav-link">
                                 6.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/companies/rents"} className="nav-link">
                                 7.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/companies/rents"} className="nav-link">
                                 8. pendiente
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/rentals"} className="nav-link">
                                 9.
                            </Link>
                        </li>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;