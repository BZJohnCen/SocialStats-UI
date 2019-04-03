
import axios from './helpers/axios_proxy'
const env = process.env.NODE_ENV || "development";
const url = env === 'production' ? process.env.PROD_EXPRESS : process.env.DEV_EXPRESS;
const dotEnv = require('dotenv').config();

const AuthHelper = {

    signup: (params) => {
        return new Promise((resolve,reject) => {
            var keys = ['name']
            Object.keys(params).forEach(k => {
                if(!params[k]) reject('Please fill out all fields')
            } )
            if(params['confirmPassword'] != params['password']) reject ("passwords don't match")

            axios.post('/user', {
                name: params.name,
                username: params.username,
                password: params.password,
                companyName: params.companyName,
                companyWebsite: params.companyWebsite,
                companyIndustry: params.companyIndustry
              })
              .then(res =>  {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });

        })

        
    },
    login: (params) => {
        return new Promise((resolve,reject) => {
            Object.keys(params).forEach(k => {
                if(!params[k]) reject('Please fill out all fields')
            } )
            
            axios.post('/user/login', {
                username: params.username,
                password: params.password,
              })
              .then(res =>  {
                localStorage.setItem("userId", res.data.uid)
                localStorage.setItem("token", res.data.token)
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });

        })
    }
}
export default AuthHelper;