const fetch = require("node-fetch");


module.exports = async function(msg,args){

  let url=`https://icanhazdadjoke.com/`;
  
    let jokedata= await fetch('https://icanhazdadjoke.com/',{
      headers:{
      'Accept': 'application/json'
      }
    });

  let jokeStuff=await jokedata.json();
   // msg.channel.send(jokeStuff.joke);

  let imgurl = `https://icanhazdadjoke.com/j/${jokeStuff.id}.png`;
  console.log(jokeStuff.id);

   let jokeimgdata= await fetch(`https://icanhazdadjoke.com/j/${jokeStuff.id}.png`);
    
   

      
      console.log(jokeimgdata.url)
msg.channel.send(jokeimgdata.url);
      

}