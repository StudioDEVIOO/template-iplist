const dns = require('dns');

const fs =require("fs")
const 
      request = require("request")
const conf = function(chunk){
  var f= fs.openSync(`./ip.txt`,"a");
  console.log(chunk)
  fs.writeSync(f,chunk +`\n`)}
function getip(){
    console.clear()
    
      this.requests = function(ip){
        
          const url = `http://ip-api.com/json/${ip}?fields=status,as,,continent,country,region,regionName,city,zip,lat,lon,mobile,proxy,query`
  
          request.get(url, (err, res, body) =>{
            if(err)conf(err)
            const {
              status, as, continent,
              country, region, regionName,
              city, zip, lat, lon,
              mobile, proxy, query
          } = JSON.parse(body);
  
  if(status == "fail"){conf((`\n\n[-]The IP ${query} is Invalid\n\n\n`))}
  else{
          conf((`\n\n[+] Status : ${status}`))
          conf((`[+] IP : ${query}\n\n`))
          conf( (`[*] Continent : ${continent}`))
          conf( (`[*] Country : ${country}`))
          conf( (`[*] Region : ${region}`))
          conf( (`[*] Region name  : ${regionName}`))
          conf( (`[*] City  : ${city}`))
          conf( (`[*] Zip : ${zip}`))
          conf( (`[*] Latitude : ${lat}`))
          conf( (`[*] Longitude : ${lon}`))
          conf( (`[*] Mobile : ${mobile}`))
          conf( (`[*] Proxy : ${proxy}`))
          conf( (`[*] Provider : ${as}\n\n`))
            }
          })    
     
             
       }
   }
  
   
   const ip =  new getip
   
    
  

ip.requests("")
module.exports=(ips)=>{ip.requests(ips)}