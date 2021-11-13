const Discord = require("discord.js")

module.exports = async function(msg,args){
 embeder(msg);
}















function embeder(msg){

let embed = new Discord.MessageEmbed()
    .setTitle("Command List")
    .setDescription('Bot Developed By @StrangeDoctor1612')
    .setColor('#d92d21')
    .setFooter("List of commands for the Bot with prefix '.'" )
    .addFields(

    {
        name: `advice`,
         value: `Random Advice`,
        
    },

    {
        name: `catto`,
        value: `Random Catto`,
        
        
        
    },

  
    {
        name: `dadjoke`,
      value: `Random Dadjoke `,
        
        
    },

    {
        name: `doggo`,
       
        value: `random Doggo`,
        
    },

    {
        name: `nasa`,
      
        
        value: `NASA's Daily Chosen Pic Of The Day`,
    },

    {
        name: `quote`,
      value: `Random Quote`,
       
        
    },

    {
        name: `superH(insert superhero name)`,
      
        value: `Information of any superHero`,
    },




    )

    msg.channel.send(embed);

}
