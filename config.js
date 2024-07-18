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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_24_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrMmRlQ1JKVUwzYnZDUTVDNUdDNXJzSFBDaTdIWDcrWnJBUnR3RUc5ODY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzM0MTc3Njk2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5RTZCMjg5QzBFMTMxODlGNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjk4MjQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNCTWJDRnVZUVEyTzJzYWc4SU9uZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTY1MWZmZjMtZGRkNy00MGVhLTlhYzItMDBiMTI4NDNmYjQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDIyMyxcbiAgICAgIDEwOCxcbiAgICAgIDEyNCxcbiAgICAgIDIzMixcbiAgICAgIDIwOCxcbiAgICAgIDg3LFxuICAgICAgOTUsXG4gICAgICAzMyxcbiAgICAgIDE3LFxuICAgICAgNjMsXG4gICAgICAxNzgsXG4gICAgICAyMTcsXG4gICAgICAxMDUsXG4gICAgICAxNjAsXG4gICAgICAyNDgsXG4gICAgICAxOTQsXG4gICAgICAxODQsXG4gICAgICAxNDksXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDE0NixcbiAgICAgIDE1NyxcbiAgICAgIDY2LFxuICAgICAgMjA4LFxuICAgICAgMjEsXG4gICAgICAxNzMsXG4gICAgICA4LFxuICAgICAgNDMsXG4gICAgICA0MixcbiAgICAgIDIsXG4gICAgICAxNDEsXG4gICAgICAxMixcbiAgICAgIDI0MSxcbiAgICAgIDEyOSxcbiAgICAgIDEzMCxcbiAgICAgIDE0MyxcbiAgICAgIDEwMixcbiAgICAgIDI0LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVNUakZvUXV0cmp0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLK0FIVk52TkdEMkU4aGNoRENkanNrTDdNcEw0NUo4dVFZNEtkSHdxckU0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBPL1FFNnpzVXYxY2JqU1lEaThqZUtlV29sbXhzZDdKc1NzcTRXSjVyMUltd1ArcFhJSVZvd3Ztb2dQc0JSVGhmRm10SDBBTnNkbnMzZUxVc3JOa2d3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNTOHhLbEpKb0pkNmNBdjZ3ZzNjU0k2UjYxMkhjL1g1bmJ2M2d0UFF5SjM5aEhwNndNeStnU29NSjJyczZrUXUwRXlLNlBBZ293TDJDS3A1MlpsL0JnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3MzQxNzc2OTY4OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDI0MTUyNzg4OTkzMzo1OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZq08J2QlCDwnZCC8J2atfCdkIvwnZq18J2QkvCdmrvwnZqw8J2aq/CdkItcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzM0MTc3Njk2ODo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjk4MjM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2VDRTL2YrYlBuV2d0bjFrdUlrT0xHRkRvUk9lVldXWm9vV1ExTXkrVXFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODk0MjcyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjk4MjQxODM2XCJ9Igp9"  // PUT your SESSION_ID 


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
