
const fetch = require("node-fetch");
const Discord = require("discord.js")
let imgurl;
module.exports = async function(msg,args,bul){


    let  url=`https://api.thedogapi.com/v1/images/search`;
    let response = await fetch(url);
    let json = await response.json();
    //console.log(json);
    imgurl=json[0]["url"];

    //console.log(imgurl);
  // msg.reply(imgurl);
let embeded =embeder();

msg.reply(embeded);

}

function embeder(){

let embed = new Discord.MessageEmbed()
.setTitle(`Here's a doggo for you!🐕`)
.setImage(imgurl)
.setColor(`#ffda6b`)
//msg.reply(embed);
return embed;

}


