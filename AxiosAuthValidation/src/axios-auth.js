import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
    
})

//instance.defaults.headers.common['SOMETHINGELSE'] = 'something'

export default instance

// Custom axios instance allows you to overwrite the default and import multiple custom instances.

//https://www.googleapis.com//identitytoolkit/v3/relyingparty