const fetch = require("node-fetch");
const Discord = require("discord.js")
const super_api =`3726914657413539`;
let keyword =`batman`;
let hero_id=" ";
let hero_name=" ";
let strength=" ";
let inteligence=" ";
let speed=" ";
let human_name=" ";
let power;
let hero_img;




module.exports = async function(msg, args){
// console.log(args);
if(args.length>0)
{
  keyword=args.join(" ")
  console.log(keyword);
}


let api_url = `https://superheroapi.com/api/${super_api}/search/${keyword}`;

let superResponse = await fetch(api_url);
let superJson = await superResponse.json();
//console.log(superJson);
//msg.reply(superJson.results[0].id);

let isValid = superJson.response;

if(isValid==`error`){
  msg.reply("Sorry! Either your character isn't a superhero or The superHero database has issues :( Try again!")
  msg.channel.send("try using '_' to separate words to help find your character. Eg:spider_man")
  return;
}



if(superJson.results instanceof Array)
{
 hero_id = superJson[`results`][0][`id`]; 
 hero_name = superJson[`results`][0][`name`];
 strength = superJson.results[0].powerstats.strength;
 inteligence = superJson[`results`][0][`powerstats`][`intelligence`];
 speed = superJson[`results`][0][`powerstats`][`speed`];
 human_name = superJson[`results`][0][`biography`][`full-name`]
power =superJson[`results`][0][`powerstats`][`power`];
let image_url = `https://superheroapi.com/api/${super_api}/${hero_id}/image`;

let imgResponse = await fetch(image_url);
let imgJson = await imgResponse.json();
hero_img = imgJson.url;
 
}

else 
{ console.log(superJson);
  hero_id = superJson[`result`][`id`];
 hero_name = superJson[`result`][`name`];
 strength = superJson.result.powerstats.strength;
 inteligence = superJson[`result`][`powerstats`][`intelligence`];
 speed = superJson[`result`][`powerstats`][`speed`];
 human_name = superJson[`result`][`biography`][`full-name`];
power =superJson[`result`][`powerstats`][`power`];

let image_url = `https://superheroapi.com/api/${super_api}/${hero_id}/image`;

let imgResponse = await fetch(image_url);
let imgJson = await imgResponse.json();
hero_img = imgJson.url;
}
//let hero_name= superJson.re
//let hero_id = superJson.results[0].id;


//console.log(imgJson);
//msg.reply(imgJson.url);

embeder(msg);

}


function embeder(msg){

let embed = new Discord.MessageEmbed()
    .setTitle(hero_name)
    .setImage(hero_img)
    .setColor('#d92d21')
    
    .addFields(

    {
        name: `Alter Ego`,
        value: `${human_name}`,
        
    },

    {
        name: `Strength`,
        value: `${strength}`,
        inline:true
        
        
    },

    {
        name: `Intelligence`,
        value: ` ${inteligence}`,
        inline:true,
        
    },

    {
        name: `Speed`,
        value: `${speed}`,
        inline:true,
        
    },

    {
        name: `Power`,
        value: `${inteligence}`,
        inline:true,
        
    }




    )

    msg.channel.send(embed);

}

