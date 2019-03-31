
import axios from 'axios'
const env = process.env.NODE_ENV || "development";
const url = env === 'production' ? process.env.PROD_EXPRESS : process.env.DEV_EXPRESS;
const dotEnv = require('dotenv').config();
const BackendHelper = {

    signup: (params) => {
        return new Promise((resolve,reject) => {
            console.log(params)
            var keys = ['name']
            Object.keys(params).forEach(k => {
                if(!params[k]) reject('Please fill out all fields')
            } )
            if(params['confirmPassword'] != params['password']) reject ("passwords don't match")

            axios.post('http://localhost:3000/user', {
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
            
            axios.post('http://localhost:3000/user/login', {
                username: params.username,
                password: params.password,
              })
              .then(res =>  {
                resolve(res);
              })
              .catch(err => {
                reject(err);
              });

        })
    }
}
export default BackendHelper;