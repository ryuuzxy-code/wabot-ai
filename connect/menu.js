const fs = require("fs");
const chalk = require("chalk");

exports.daftarTeks = {
    menuBot() {
        let teks = `Hai, Ada yang bisa Saya Bantu?

Prefik: ( . )
        
LIST MENU : 
                      
➸ .menu
➸ .ping



*Thanks to*

 My God
 My Family
 Kaze(base)
 My Subscriber


© Copyright Lord Kaze | Wabot-Ai
`
        return teks
    }

 } 
 
 
 



let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});