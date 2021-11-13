
const fetch = require("node-fetch");
const Discord = require("discord.js")
let imgurl;
let  wallbang;

let firerate;

let weaponType;
let cost;
let category;
let name
module.exports = async function(msg,args){


    // let  url=``;
    // let response = await fetch(url);
    // let json = await response.json();
   
//embeder(msg);

if(args.length>0)
{ 
  keyword=args.join(" ")
  console.log(keyword);
}

console.log(database.get(`${keyword}`));

let uuid =database.get(`${keyword}`);
 let url = `https://valorant-api.com/v1/weapons/${uuid}`
   let response = await fetch(url);
    let json = await response.json();
    cost = json.data.shopData.cost;
    imgurl =json.data.displayIcon;
    firerate= json.data.weaponStats.fireRate;
    weaponType =json.data.category;
    let name= json.data.displayName;
  console.log(name);

embeder(msg);

}










function embeder(msg){

let embed = new Discord.MessageEmbed()
.setTitle(`${name}`)
.setImage(imgurl)

.setColor(`#dc3d4b`)
.addFields(

    {
        name: `Fire Rate`,
        value: `${firerate}`,
        
    },

      {
        name: `Cost`,
        value: `${cost}`,
        
    },

      {
        name: `Weapon Category`,
        value: `${weaponType}`,
        
    }
)
msg.reply(embed);


}

let database = new Map();


database.set('classic','29a0cfab-485b-f5d5-779a-b59f85e204a8')
database.set('shorty','42da8ccc-40d5-affc-beec-15aa47b42eda')
database.set('frenzy','44d4e95c-4157-0037-81b2-17841bf2e8e3')
database.set('ghost','1baa85b4-4c70-1284-64bb-6481dfc3bb4e')
database.set('sherrif','1baa85b4-4c70-1284-64bb-6481dfc3bb4e')
database.set('stinger','f7e1b454-4ad4-1063-ec0a-159e56b58941')
database.set('spectre','462080d1-4035-2937-7c09-27aa2a5c27a7')
database.set('bucky','910be174-449b-c412-ab22-d0873436b21b')
database.set('judge','ec845bf4-4f79-ddda-a3da-0db3774b2794')
database.set('bulldog','ae3de142-4d85-2547-dd26-4e90bed35cf7')
database.set('guardian','4ade7faa-4cf1-8376-95ef-39884480959b')
database.set('phantom','ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a')
database.set('vandal','9c82e19d-4575-0200-1a81-3eacf00cf872')
database.set('marshal','c4883e50-4494-202c-3ec3-6b8a9284f00b')
database.set('operator','a03b24d3-4319-996d-0f8c-94bbfba1dfc7')
database.set('ares','55d8a0f4-4274-ca67-fe2c-06ab45efdf58')
database.set('odin','63e6c2b6-4a8e-869c-3d4c-e38355226584')
database.set('knife','2f59173c-4bed-b6c3-2191-dea9b58be9c7')



