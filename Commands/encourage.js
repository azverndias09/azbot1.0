

const happyWords = [
  
"You are amazing!",
"cheer up bro",
"I love you! ",
"Dont be sad",
"Things will get better bro",
"I know I don’t understand what you’re going through  because I'm a bot, but I love you :) "

]

module.exports = function(msg, args){


  const encour = happyWords[Math.floor(Math.random()*happyWords.length)]
  msg.reply(encour)


}