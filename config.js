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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2349166401537";
global.owner= process.𝐉𝐧𝐫𝐆𝐞𝐧𝐭𝐮𝐮 ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349166401537";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_15_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImx2MDdHNUNtWkt4eTRhS3RsWmllRmU5blRZOTNCV2hYMklodWZZakowWG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2NjQwMTUzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5RjJCODg5RkI3M0EwMzUxQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODY3MzA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2NjQwMTUzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FCMzMxM0Y1RTU3RTk3Mzg0MTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODY3MzA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2NjQwMTUzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2N0NCNDYxQTA2MkJBRDQ1QkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODY3MzEwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1FckhOTlRqUnhLYk1tN2pURG5fRXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDk5NDA3YTUtZTJjZC00N2M3LTlhMGMtNmQ5Y2JhMzY4OTNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDQsXG4gICAgICAzMCxcbiAgICAgIDIzMCxcbiAgICAgIDEwMSxcbiAgICAgIDI5LFxuICAgICAgMTA5LFxuICAgICAgMTM4LFxuICAgICAgNDAsXG4gICAgICAxODIsXG4gICAgICAxOTAsXG4gICAgICAyMDgsXG4gICAgICAxNzEsXG4gICAgICA3MSxcbiAgICAgIDIxMyxcbiAgICAgIDI0MSxcbiAgICAgIDExMyxcbiAgICAgIDE4NSxcbiAgICAgIDIzMyxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNzUsXG4gICAgICA5OCxcbiAgICAgIDIzMCxcbiAgICAgIDIzNixcbiAgICAgIDI1MixcbiAgICAgIDExOSxcbiAgICAgIDIwNixcbiAgICAgIDIzMixcbiAgICAgIDIyLFxuICAgICAgNCxcbiAgICAgIDg4LFxuICAgICAgNzMsXG4gICAgICAyMDIsXG4gICAgICAxMzYsXG4gICAgICAxMDgsXG4gICAgICAxNjUsXG4gICAgICA2NixcbiAgICAgIDE1MixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkozNzRDRzFBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY2NDAxNTM3OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0Mjc4MjMzNzA2OTIwODoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKbnIgR2VudHV1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW53dHM4RUVPUzh3N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4WFJRZHVNUHNlMDdKQ0I4bHUvK1J1eWtWT2dWK0IrZVVqaHlxNEZTcjNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtGRitmdzJpUUdHT0R6QjhjLzJqYTF6VlJXaFN5dDVRNm9xYjJGQjRPNFdHVmYrMnJkVWZuK2pERmJPZkNDMnJ4UW5YamMzY1Jrdm5zSDJqZVpXZmhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9VMFpoZWNUenpaYnpBQXJRbjdLbStJaTFJNWZiY01KWXhUYm11anBPV0tFN1BQUUt5cXpjaFFaKy9CeW8ydytyR1drRVcydVprcTlIMmdIaGFOUmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjY0MDE1Mzc6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg2NzMwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0N3aVRGMkdUOGdkTjJ6dHV6UUUwdlVvYzhxYXVJcU40eURoZVBHR0tzdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjQwMzE1OTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4NjczMDQyODZcIn0iCn0="
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
