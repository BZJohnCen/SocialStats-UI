
import axios from 'axios'
const env = process.env.NODE_ENV || "development";
const url = env === 'production' ? process.env.PROD_EXPRESS : process.env.DEV_EXPRESS;
const dotEnv = require('dotenv').config();

const AuthHelper = {
  
    signup: (params) => {
      // const inst = axios.create({
      //   proxy: {
      //     host: 'localhost',
      //     port: 3000
      //   }
      // });
      
        return new Promise((resolve,reject) => {
            var keys = ['name']
            Object.keys(params).forEach(k => {
                if(!params[k]) reject('Please fill out all fields')
            } )
            if(params['confirmPassword'] != params['password']) 
              reject ("passwords don't match")
            else{
              var body = {
                name: params.name,
                username: params.username,
                password: params.password,
                companyName: params.companyName,
                companyWebsite: params.companyWebsite,
                companyIndustry: params.companyIndustry
            }
            fetch('/api/user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            }).then(res => resolve(res.json()))
              .catch(err => {
                reject(err);
              });
            }
           
        })
    },
    login: (params) => {
        return new Promise((resolve,reject) => {
            Object.keys(params).forEach(k => {
                if(!params[k]) reject('Please fill out all fields')
            } )
            var body = {
              username: params.username,
              password: params.password,
            }
            fetch('/api/user/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            }).then(res =>  {
                res.json().then(json => {
                  console.log(json.uid, json.token)
                  localStorage.setItem("userId", json.uid)
                  localStorage.setItem("token", json.token)
                  resolve(res);
                })
                
                
              })
              .catch(err => {
                reject(err);
              });

        })
    }
}
export default AuthHelper;