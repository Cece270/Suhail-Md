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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_43_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCcVo3VWdINXVTd2ZrZlp4WkVEeWZ5c2REMHhLb3VObnBIV2VnaXhZUzZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2YzgxRHFaWlFUQzBhaUJyUENUR0p3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2ZjVjN2E5LTllZWItNDUxMi1hNTNiLWQ5OGYzZTg5NDVjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxNDMsXG4gICAgICAxMjAsXG4gICAgICAxNzcsXG4gICAgICAyNDksXG4gICAgICAxMjksXG4gICAgICAxNjAsXG4gICAgICAxNzYsXG4gICAgICA3NSxcbiAgICAgIDEzNSxcbiAgICAgIDE3OSxcbiAgICAgIDE1MSxcbiAgICAgIDI0MyxcbiAgICAgIDI0MixcbiAgICAgIDE3MyxcbiAgICAgIDE2LFxuICAgICAgOTgsXG4gICAgICAxMDMsXG4gICAgICAxNCxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTYwLFxuICAgICAgMjExLFxuICAgICAgMjAwLFxuICAgICAgMTU5LFxuICAgICAgMTg1LFxuICAgICAgMjIwLFxuICAgICAgMTEwLFxuICAgICAgMTYzLFxuICAgICAgMTYzLFxuICAgICAgMjQ0LFxuICAgICAgMTk4LFxuICAgICAgMzYsXG4gICAgICAyMTEsXG4gICAgICAxMTIsXG4gICAgICAxODcsXG4gICAgICAyMzEsXG4gICAgICA1OCxcbiAgICAgIDIwNixcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEYzhzME9FT3FZNXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSytBSFZOdk5HRDJFOGhjaERDZGpza0w3TXBMNDVKOHVRWTRLZEh3cXJFND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0ZHFLd2E0bWF5Q1BRVnNRNERteTN1MDR1U3hMV0hhckVLLytyOGZ3dGI4RnhXQnVFUCtnb3ljSXM4RUpQQXNVRjdOc05INU5Sc1UxdXRHUHJlbDBpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOVWVJREplTnlUbnBlYjQxSFIrOFVSY2YrcXR2WksrUTJWdk1TQVhHVVdsSU56Ujd3TjZNMkpBQzlpK0JIaUdEL0hFdjVRN1YyNWVzK3ZZR3UvSDJDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzM0MTc3Njk2ODo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTQyNDE1Mjc4ODk5MzM6NjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDczNDE3NzY5Njg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMzODk4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdESlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0RKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ2hXTGlzR3pQOU4xVlNwUDd3OWJPQUdGV3pTV0hEc0gxZUhHVUJ6aDgwST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTIxNDU2Njg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMzg5OTQ4MjlcIn0iCn0="

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
