const cron = require('node-cron');

const sadWords= ["sad","depres","depres","suicid","unhappy","upset","miserable","heartbreak","gloomy","hurt"];

  const keepAwake = require("./server");
const Database = require("@replit/database");
const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const commandHandler = require("./commands");

//nasa: V3RXHi52EjPSbiXHCMKtdhpDEiiUtoiac9bRVy2n
//719836258351710279
const apiNum="3726914657413539";

client.on("ready", ()=>{

  console.log("bot on");
croner();
 croner1();
})





client.on("message",commandHandler);





keepAwake();





client.login(process.env.TOKEN);









function croner(){


  cron.schedule('30 2 * * *', () => {
 client.users.fetch('744224632445337641', false).then((user) => {
    
  dailydog(user);
   
 user.send('heloo');
 
 console.log("cron is rnnun");
});

});
}

function croner1(){


  cron.schedule('30 2 * * *', () => {
 client.users.fetch('790534510286471170', false).then((user) => {
    
  dailydog(user);
   
 user.send('Greetings from @StrangeDoctor1612');
 
 console.log("cron is rnnun");
});

});
}
async function dailydog(user){


  
    let  url=`https://api.thedogapi.com/v1/images/search`;
    let response = await fetch(url);
    let json = await response.json();
    //console.log(json);
    imgurl=json[0]["url"];

    //console.log(imgurl);
  // msg.reply(imgurl);


 let embed = new Discord.MessageEmbed()
.setTitle(`Here's your daily dose of doggo!🐕`)
.setImage(imgurl)
.setColor(`#ffda6b`)
//msg.reply(embed);


user.send(embed);
}



