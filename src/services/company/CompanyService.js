import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8081/api/companies";

class CompanyService {
    getCompaniesProfits() {
        return axios.get(COMPANY_API_BASE_URL + '/profits');
    }

    getCompaniesWithRentsEqualOrOverOneWeek() {
        return axios.get(COMPANY_API_BASE_URL + '/rents');
    }

    getCompaniesCustomers() {
        return axios.get(COMPANY_API_BASE_URL + '/customers');
    }
}

export default new CompanyService();