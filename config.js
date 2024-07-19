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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWY05raC9iejg3U0Y5YmIwZkpiY1ZubXZKRWczT1VjZTZMZm13QVorS0l3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzM0MTc3Njk2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E1NUU4RURCRjdBOUZBM0ZDNzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzkzMTE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3MzQxNzc2OTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTk2M0RCNzlEMjgyQ0ZERTQyOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzOTMxMTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWFxSm41VzdURk9RcVpjazVzVmp1UVwiLFxuICBcInBob25lSWRcIjogXCI5ZTllMGQ5Ny0yZTBmLTRhNGEtYTcxNy04OWY1YTgzZmNmZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgNjgsXG4gICAgICAxOTgsXG4gICAgICAxNixcbiAgICAgIDE1MixcbiAgICAgIDE5NyxcbiAgICAgIDIyMyxcbiAgICAgIDEyNSxcbiAgICAgIDg1LFxuICAgICAgMjQxLFxuICAgICAgMTE3LFxuICAgICAgMTUsXG4gICAgICAxODYsXG4gICAgICAxOCxcbiAgICAgIDI0NCxcbiAgICAgIDE5NCxcbiAgICAgIDE0OCxcbiAgICAgIDI0MCxcbiAgICAgIDEwNyxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMzQsXG4gICAgICAxMTYsXG4gICAgICAzMyxcbiAgICAgIDE0OSxcbiAgICAgIDc1LFxuICAgICAgMjI4LFxuICAgICAgNTIsXG4gICAgICAxOTUsXG4gICAgICAxNjcsXG4gICAgICAxMzksXG4gICAgICAyOSxcbiAgICAgIDkxLFxuICAgICAgNDIsXG4gICAgICA3MSxcbiAgICAgIDUwLFxuICAgICAgNTcsXG4gICAgICAyMzIsXG4gICAgICAxNjgsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLV1MzcWNERU5HLzZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhBYS9wNzBaNWFZM3JLQ2pkbkpxOE1GZE5CK3J5cXFMNmw2K2RQd01RZ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1dFOFB0bW1DUmhvalNkczFwMmlnVjdoZmdkMDlsdG5OQThBZmxPZzVDT1R0Wm1yY25uK1l1emVTRVNTNnRMSDU0SFIvcmhFNEdHd3VDdVV2QkYvQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHpKY3BvbDVCQWpWTTk3NVA2K3gwZDZBQnVPbUF1bHVwZVRpdzIwMCtBQVpiVmowNHJBYldGUUlvUjdtejJVZk1EWnpuNWtSRnFDMU81aHdSOWlOQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDczNDE3NzY5Njg6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU0MjQxNTI3ODg5OTMzOjYzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmrTwnZCUIPCdkILwnZq18J2Qi/CdmrXwnZCS8J2au/CdmrDwnZqr8J2Qi1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3MzQxNzc2OTY4OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzOTMxMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGbnJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZuci5qc29uIjogIntcImtleURhdGFcIjpcIjBTeDhxNERoeWRXbHUwZFB6SEN1UFB4dTVxZktoTTdYMnpLVUxGQVJpVWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg4NjM3NzMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzOTMxMTM3NjdcIn0iCn0="
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
