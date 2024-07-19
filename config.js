const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="warri, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "447341776968" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,447341776968";
global.owner= process.𝚴𝐔𝐂𝚵𝐋𝚵𝐒𝚻𝚰𝚫𝐋 ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447341776968";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,447xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,447xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "447341776968,447xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieSt2OVZycHNNa1BJNGVkZHJjRklrYjlkOHJRYUhickhGSWpXRmJQYnZJZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDczNDE3NzY5NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMkY2Q0ZGQkQwNDNFMjJFNkE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQwNzMzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxQlI3S0pTSFJKLUxQT1NBWUg2LTNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3NzZhNTMzLWY4MWUtNGNjMS05ZmVmLWMyNTAyZjgwOTEzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxNzUsXG4gICAgICAxMDcsXG4gICAgICAyNDUsXG4gICAgICA3LFxuICAgICAgMzUsXG4gICAgICAyNDQsXG4gICAgICA5MyxcbiAgICAgIDk0LFxuICAgICAgMTM3LFxuICAgICAgMTczLFxuICAgICAgMTA5LFxuICAgICAgOTksXG4gICAgICAyMDUsXG4gICAgICA0OSxcbiAgICAgIDI0LFxuICAgICAgMTg2LFxuICAgICAgMTIsXG4gICAgICA0MCxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAxODQsXG4gICAgICAxMjgsXG4gICAgICAxMTIsXG4gICAgICAxNzgsXG4gICAgICAyNDEsXG4gICAgICAxMDksXG4gICAgICA2NixcbiAgICAgIDE4MixcbiAgICAgIDgyLFxuICAgICAgMjAyLFxuICAgICAgMjI2LFxuICAgICAgMTY4LFxuICAgICAgMTk4LFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDM5LFxuICAgICAgMTM1LFxuICAgICAgMjMxLFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGZRclBNT0VOK3U2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4QWEvcDcwWjVhWTNyS0NqZG5KcThNRmROQityeXFxTDZsNitkUHdNUWdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5HQ0YrYXg1eGxldkhydy9HcVU1QkowT0hPZVhrcmMzVmJkcVBrT0VTYS95M0JHd2FLdURlSVlpcHd0MC92Nm4xa1ZUS2ViU0ZaOVJUTE9TWkp3Q0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktpL0hYUjIxU2hzc0VTVGtIMWFKSnEwZ1lpaWErK3hFSDdjMGFZZ3czOXRJZWpRWTFSTWhTMnFGZ2RvcjMveUN3R3A0WEkvYzZjcWhZV1p5aXZIQWlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3MzQxNzc2OTY4OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDI0MTUyNzg4OTkzMzo2NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzM0MTc3Njk2ODo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDA3MzMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDZ0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFENnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3akVoVDZzMXFlcFNMbTI0ZUxSc05mR3g5VEViSy9PZ2hTOFM4Sk5kR1pVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwMDAwMDAwNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQwNzMzNTQ1OFwifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝚴𝐔 𝐂𝚵𝐋𝚵𝐒𝚻𝚰𝚫𝐋",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "smallbutmighty",
  ownername:process.env.OWNER_NAME|| "𝚴𝐔 𝐂𝚵𝐋𝚵𝐒𝚻𝚰𝚫𝐋",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
