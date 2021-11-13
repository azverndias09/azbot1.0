
const fetch = require("node-fetch");
const Discord = require("discord.js")
let imgurl;
module.exports = async function(msg,args){


    let  url=`https://api.thecatapi.com/v1/images/search`;
    let response = await fetch(url);
    let json = await response.json();
    //console.log(json);
    imgurl=json[0]["url"];

    //console.log(imgurl);
  // msg.reply(imgurl);
embeder(msg);

}

function embeder(msg){

let embed = new Discord.MessageEmbed()
.setTitle(`Here's a catto for you!🐱`)
.setImage(imgurl)
.setColor(`#ffc933`)
msg.reply(embed);


}