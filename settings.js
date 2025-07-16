//base by HANSTZ
//YouTube: @HANSTZ-TECH
//Whatsapp https://wa.me27767494368
//GitHub: @Mrhanstz
//WhatsApp: https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
//want more free bot scripts? follow my channel : https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
const fs = require('fs')
const chalk = require('chalk')
require('dotenv').config()

//contact details - sensitive info moved to .
global.SESSION_ID = process.env.SESSION_ID || "HansTz&Pw5VUYCQ#BOidch12Fi3ilFfky44Rv1vIOPk4Xh-GykDh9KbET34" //fallback to default if not in .env
global.ownernomer = process.env.OWNER_NUMBER || "27767494368"

global.ownername = process.env.OWNER_NAME || "𝕬𝖛𝖊.𝕭"

global.ytname = "HANSTZ-TECH"

global.socialm = "GitHub: Mrhanstz"

global.location = "AFRICA, JOHANNESBURG"

global.ownernumber = process.env.OWNER_NUMBER || '27818232269'  //Owner number

global.ownername = process.env.OWNER_NAME || '☚⍢⃝☚' //owner name
global.botname = '👍(•_•)👍' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '① Photo'

//console view/theme
global.themeemoji = '⚠️'
global.wm = "HANS BOT"

//theme link
global.link = 'https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31'

//custom prefix
global.prefa = '.'


//bot settings
global.autolikestatus = true //For auto react Status Random
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = true //auto view status/story
global.autoreact = false // This is For Auto React 
global.welcome = false // For Welcome massage groups


global.wagc = "https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31";

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./HansTzMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
