import axios from 'axios'
const CUSTOMERDATA_BASE_REST_API_URL="http://localhost:8093/api/v1/customers";
const SET_CUSTOMERDATA_BASE_REST_API_URL="http://localhost:8093/api/v1/customers/id"
class CustomerDataService{
    getCustomerDataById(){
        return axios.get(CUSTOMERDATA_BASE_REST_API_URL);
    }
        setCustomerDataById(id,customer){
            return axios.put(CUSTOMERDATA_BASE_REST_API_URL+'/'+id,customer);

        }

    }

export default new CustomerDataService();