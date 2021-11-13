
const Discord = require("discord.js")
let imgurl;
let mention = `<@${694161188761895002}>`;
module.exports = async function(msg,args){

 imgurl =`https://static.wikia.nocookie.net/heroes-and-villians/images/d/da/Terry_crews_as_earl.jpg/revision/latest/top-crop/width/360/height/450?cb=20171015223510`

embeder(msg);

}


function embeder(msg){

let embed = new Discord.MessageEmbed()
.setTitle(`Macho Herschelle🏋️‍♂️ `)
.setImage(imgurl)
.setColor(`#ffc933`)
msg.reply(embed);


}