var ip= "temp"
var fs = require("fs")
var verif = require ("./ipverif")
var f= fs.openSync(`./ip.txt`,"a");
logger = function(chunk){
    
    fs.writeSync(f,chunk +`\n`)}

    for (let index = 0; index < 256; index++) {
        for (let i = 0; i < 256; i++) {
            for (let inde = 0; inde < 256; inde++) {
                for (let ind = 0; ind < 256; ind++) {
                    if (verif(`${index}.${i}.${inde}.${ind}`) == 'error') return ;
                    else  logger(verif(`${index}.${i}.${inde}.${ind}`));console.log(verif(`${index}.${i}.${inde}.${ind}`))
                    
    
                }
    
            }
    
        }
    
    }