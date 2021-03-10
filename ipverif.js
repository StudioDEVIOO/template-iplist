const axios = require('axios');

const requests = (ip) => new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        url: `http://ip-api.com/json/${ip}?fields=status,as,continent,country,region,regionName,city,zip,lat,lon,mobile,proxy,query`
    })
        .then(res => {
            if (res.data.status === 'fail')
                return reject( 'error');
            
            return resolve(res.data);
        })
        .catch(reject)
});


const get = async (ip) => {
    const result = await requests(ip)
    console.log(result); 
};

get('0.0.0.1');
module.exports = get 