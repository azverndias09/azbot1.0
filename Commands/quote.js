const fetch = require("node-fetch")

module.exports = function (msg, args){
quoter(msg);

//msg.reply("maderchod is bigger then brotherchod -Tsu Zang");
//quoter().then(quote =>msg.channel.send(quote))

};


async function quoter(msg){

let response  = await fetch("https://zenquotes.io/api/random");
let result = await response.json();
let bro = result[0]["q"] + " - " + result[0]["a"]
msg.channel.send(bro);




}