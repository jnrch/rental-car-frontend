import axios from 'axios';

const RENTAL_API_BASE_URL = "http://localhost:8081/api/rentals";

class RentalService {
    createRental(customerId, companyId, rental) {
        return axios.post(RENTAL_API_BASE_URL + '/customer/' +  customerId + '/company/' + companyId, rental);
    }
}

export default new RentalService();