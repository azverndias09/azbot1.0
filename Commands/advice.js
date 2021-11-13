

const fetch = require("node-fetch");

module.exports = async function(msg,args){

  url=`https://api.adviceslip.com/advice`;

  let response = await fetch(url);
  let json = await response.json();
  let jsonData = json.slip.advice;
  msg.channel.send(jsonData);



}
