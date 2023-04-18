const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6282217590187"];// Nomor Lu
global.author = "KazeDevID";// Nama Mu
global.packname = "wabot-ai";// NamaBot Mu
global.sessionName = "session";// Folder Session
global.versionbot = "1.0.0";// Versi Bot
Log = '\n『々Lord』KAZE☆☆☆'//console log gerak nya:v
global.Recode = {
   name: " - ",// Isi Nama lu
   bot: " - ",// Ini Nama bot lu
};
global.mess = {
    wait: "Wait a minute",// Wait
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});