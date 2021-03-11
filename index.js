var ip= "temp"
var fs = require("fs")
var verif = require ("./ipverif")
var f= fs.openSync(`./ip.txt`,"a");
logger = function(chunk){
    
    fs.writeSync(f,chunk +`\n`)}

    for (let index = 0; index < 2; index++) {
        for (let i = 0; i < 2; i++) {
            for (let inde = 0; inde < 2; inde++) {
                for (let ind = 0; ind < 2; ind++) {
                    if (verif(`${index}.${i}.${inde}.${ind}`) == 'error') return ;
                    if (verif(`${index}.${i}.${inde}.${ind}`) == 'Promise { <pending> }') return ;
                    else  logger(verif(`${index}.${i}.${inde}.${ind}`));console.log(verif(`${index}.${i}.${inde}.${ind}`))
                    
    
                }
    
            }
    
        }
    
    }