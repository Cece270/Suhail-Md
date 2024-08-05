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


global.devs = "2349166401537" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,447341776968";
global.owner= process.𝐉𝐧𝐫𝐆𝐞𝐧𝐭𝐮𝐮 ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447341776968";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349166401537,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_18_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNMmE3d0tMeTFGeXduSEVJMkVXQ1NFdWhQVFlSVG5JbWZzRTdrZ25UYUpzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzM0MTc3Njk2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FENTQ4QUVEODgyRTlDNzE4N0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODM0MzI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInltYW5DTzlMVEctRmNjX0JoV2NOZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGUwMjg5YTEtYmYzZS00YWU4LTkwNDQtNTY3YTkwMmQ4MzAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTY0LFxuICAgICAgNzMsXG4gICAgICAwLFxuICAgICAgMTY2LFxuICAgICAgMjA4LFxuICAgICAgMTk4LFxuICAgICAgMjAwLFxuICAgICAgNDksXG4gICAgICAxMzEsXG4gICAgICA4OCxcbiAgICAgIDIzMyxcbiAgICAgIDE5OCxcbiAgICAgIDI1LFxuICAgICAgMTMsXG4gICAgICAyMjQsXG4gICAgICAxMjAsXG4gICAgICAxODEsXG4gICAgICAxNzEsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTksXG4gICAgICAxNDQsXG4gICAgICAyNixcbiAgICAgIDI1NSxcbiAgICAgIDE3OCxcbiAgICAgIDYyLFxuICAgICAgMTgzLFxuICAgICAgMjI0LFxuICAgICAgMTE3LFxuICAgICAgNDQsXG4gICAgICA3MSxcbiAgICAgIDM3LFxuICAgICAgMTQyLFxuICAgICAgMTI1LFxuICAgICAgMTg3LFxuICAgICAgMjIwLFxuICAgICAgOCxcbiAgICAgIDc0LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZXb2JnREVNNjJoTFVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNNGtPTDNyKzBCc3JZYVhVeENvU2RYM1Y0UGRMaDZieGczU2VXcWNqZ3pRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNVMEJDN1FPWU5pQzJpSC9DNWlxVmN1N290dStDYWRGRUcxd25NUElJTE9tdER5WDYwRmVHcmd1WlpLcGkzZjEzbDhSeHM1T3lDZE05RUZUOE8xaEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpNcmxrdlZ1ZFFZRlU5NDdBNkRWRVVEVVl5dmY4Y0tHWjBXZll6ZVN6MmwyQnlMU2RhRHVQVVdhSWE0eHhvTFNMQXZlVjAyTld2R2dMQmJHcXNLQkRnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3MzQxNzc2OTY4Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDI0MTUyNzg4OTkzMzo3OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUdHR0XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDczNDE3NzY5Njg6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgzNDMyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdpa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2lqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZUZCNUpnZ1BjbGFINWhjQ0lBNlZ1RU5CZ0szVUJOajBlRnU0MDVVRVRoYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjMyOTA0NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc2ODU4OTgyNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdpay5qc29uIjogIntcImtleURhdGFcIjpcInZlNEEzam5pVFc4V2tBUmI1L0NmSEoxZURqZVRqSk1jWEI5Y3ptbHdqRm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTIzMjkwNDQ2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MTM4NTMzODBcIn0iCn0="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐉𝐧𝐫 𝐆𝐞𝐧𝐭𝐮𝐮",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐰𝐫𝐞𝐜𝐤𝐞𝐫",
  ownername:process.env.OWNER_NAME|| "𝐉𝐧𝐫 𝐆𝐞𝐧𝐭𝐮𝐮",


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
