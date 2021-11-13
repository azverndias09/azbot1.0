const sadWords= ["sad","depres","depressed","sucide"];
const worda=["danica","Danica"];
const Discord = require("discord.js");
const dadjoke = require("./Commands/dadjoke.js");

const quote = require("./Commands/quote.js");
const superH = require("./Commands/superH.js");
const advice= require("./Commands/advice.js");
const doggo= require("./Commands/doggo.js");
const catto= require("./Commands/catto.js");
const nasa= require("./Commands/nasa.js");
const encourage  = require("./Commands/encourage.js");
const list  = require("./Commands/list.js");
const valorant  = require("./Commands/valorant.js");
const herschelle  = require("./Commands/herschelle.js");
const commands = {superH,quote,advice,nasa,encourage,doggo,catto,dadjoke,list,valorant,herschelle};


module.exports = async function (msg)
{

  let tokens = msg.content.split(" ");
  let command = tokens.shift();
  
 
if(sadWords.some(word=>msg.content.includes(word)))
  { 
    commands.encourage(msg);
  }

  if(worda.some(word=>msg.content.includes(word))&&msg.guild.id=="766344000218726420")
  { 
    msg.reply("We dont mention the bitch here. Dont say her name again or else...🙃");
  }

  if(command.charAt(0)==="."){
    command = command.substring(1);

    commands[command](msg, tokens);
  }

  














  
}

