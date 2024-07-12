const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Killadi_Chandu" //ur yt chanel name
global.socialm = "GitHub: GouthamSER" //ur github or insta name
global.location = "India, Kerala, Tvm" //ur location

//new
global.botname = 'Kᴜᴛᴛᴜ Bᴏᴛᵀᴹ' //ur bot name
global.ownernumber = '917034898741' //ur owner number
global.ownername = 'Gᴏᴜᴛʜaᴍ Seʀ' //ur owner name
global.websitex = "https://youtu.be/@im_goutham_josh"
global.wagc = "https://whatsapp.com/"
global.themeemoji = '🪀'
global.wm = "Gᴏᴜᴛʜaᴍ Seʀ / Kᴜᴛᴛᴜ Bᴏᴛᵀᴹ "
global.botscript = 'https://github.com/GouthamSER' //script link
global.packname = "Sticker By"
global.author = "Kᴜᴛᴛᴜ Bᴏᴛᵀᴹ\n\n+918086182621"
global.creator = "917034898741@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["917034898741"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
