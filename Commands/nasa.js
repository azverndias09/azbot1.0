const fetch = require("node-fetch");
const Discord = require("discord.js")
let rovername;
let main_title="NASA's Pic Of The Day"
let nasa_img;
let img_desc;
let img_title;
module.exports = async function(msg, args){

if(args.length>0)
{
  keyword=args.join(" ")
 if(keyword=="curiosity"||keyword=="opportunity"||keyword=="spirit")
 {
   rover(msg,keyword);


 }


 else if(keyword=="rover list")
 {
   
 }
 return;
}

    
let url =`https://api.nasa.gov/planetary/apod?api_key=V3RXHi52EjPSbiXHCMKtdhpDEiiUtoiac9bRVy2n`;

    let response = await fetch(url);
    let json = await response.json();
    nasa_img= json.url;
    img_title = json.title;
    img_desc = json.explanation;

    embeder(msg,main_title,img_title,nasa_img,img_desc);
}


function embeder(msg,title,img_header,img,footer){

let embed = new Discord.MessageEmbed()
.setTitle(title)
//.setAuthor(img_title)
.addField(img_header, 'Nasa',true)
.setImage(img)
.setColor(`#5603fc`)
.setFooter(footer)
msg.reply(embed);


}


async function rover(msg,rovername){
 
 let sol = getRandomInt(1,3000);
  let rover_url=`https://api.nasa.gov/mars-photos/api/v1/rovers/${rovername}/photos?sol=${sol}&api_key=V3RXHi52EjPSbiXHCMKtdhpDEiiUtoiac9bRVy2n`;
  let response = await fetch(rover_url);
    let rover_json = await response.json();
   //let rover_img= json.url;
   let  photo_id = getRandomInt(0,rover_json.photos.length);
   let rover_img = rover_json.photos[photo_id].img_src;
   let rover_name= rover_json.photos[photo_id].rover.name;
  embeder(msg,"Rover",rover_name,rover_img," ");



}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 

}