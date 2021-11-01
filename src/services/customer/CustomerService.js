import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8081/api/customers";

class CustomerService {
    getCustomers() {
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    getCustomersSortByLastName() {
        return axios.get(CUSTOMER_API_BASE_URL + '/sortByLastName');
    }

    getCustomersAmountByCompany(companyId) {
        return axios.get(CUSTOMER_API_BASE_URL + '/company/' + companyId);
    }

    getCustomersByRentExpenses() {
        return axios.get(CUSTOMER_API_BASE_URL + '/rentExpenses');
    }
}

export default new CustomerService();