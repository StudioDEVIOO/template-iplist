var ip= "temp"
var fs = require("fs")
var verif = require ("./dns")
var f= fs.openSync(`./ip.txt`,"a");
max=2
logger = function(chunk){
    console.log(chunk)
    fs.writeSync(f,chunk +`\n`)}

    for (let index = 0; index < max; index++) {
        for (let i = 0; i < max; i++) {
            for (let inde = 0; inde < max; inde++) {
                for (let ind = 0; ind < max; ind++) {
                    verif(`${index}.${i}.${inde}.${ind}`);
                    
    
                }
    
            }
    
        }
    
    }