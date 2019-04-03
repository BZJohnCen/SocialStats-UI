import axios from 'axios'

const axios_proxy = axios.create({
    proxy: {
      host: '127.0.0.1',
      port: 3000
    }
  });

  export default axios_proxy