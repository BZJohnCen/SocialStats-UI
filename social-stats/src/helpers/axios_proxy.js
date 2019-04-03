import axios from 'axios'

const axios_proxy = axios.create({
    proxy: {
      host: 'localhost',
      port: 3000
    }
  });

  export default axios_proxy