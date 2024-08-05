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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_07_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk55VHpZRGpyMjFJdThENUxUckppRS9CaWRkcGM0bU4zSVg5elZuVTFVcnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInQtMzVwczdFU0ZLMTI5d1JPM2NfcXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTI1MzgxNzEtM2Y5ZC00OTZhLWE3YTctZmE0OGNhOThjYjVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDYsXG4gICAgICAxNTAsXG4gICAgICA4NSxcbiAgICAgIDY1LFxuICAgICAgMTYyLFxuICAgICAgOTgsXG4gICAgICAxMjksXG4gICAgICAyNCxcbiAgICAgIDIzMyxcbiAgICAgIDE5NyxcbiAgICAgIDI4LFxuICAgICAgMTI2LFxuICAgICAgMTc0LFxuICAgICAgMTc5LFxuICAgICAgMjksXG4gICAgICAyMTAsXG4gICAgICAxNDYsXG4gICAgICAxMzgsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDIxNyxcbiAgICAgIDEwOSxcbiAgICAgIDE2MyxcbiAgICAgIDEyNCxcbiAgICAgIDEwNyxcbiAgICAgIDE5NyxcbiAgICAgIDE4NSxcbiAgICAgIDEyNixcbiAgICAgIDEyMixcbiAgICAgIDE3MyxcbiAgICAgIDI0NyxcbiAgICAgIDE2OCxcbiAgICAgIDE3LFxuICAgICAgMjE5LFxuICAgICAgOTcsXG4gICAgICA0LFxuICAgICAgMTEyLFxuICAgICAgMTMwLFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFTUTRKNjRNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY2NDAxNTM3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyNzgyMzM3MDY5MjA4OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSm5yIEdlbnR1dVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QOCs5VUNFTnlBdzdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibC9vR2VZcVlobC9URFZGdGtORm9XSlN4MGtDd3E2VVhhN2ZsT3lYSkV5az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1VFRERHpIT3NJak1YcFZaSitGeU1tdzR2MHB4eldFOEsvbzMxelB2TkhwNVd1bFVJdGNtcTR6di9JMzVObEptclNUWURtN2UzcVNtd25UM3dVLzVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWM25paWF3NGUvS0F5OFM4ckh1cEZMcG5ieDBwOTErOFFGSy9Fcm5aUEV5eEVXYjRzaXdOdCtOa045MHg2YnNKVW5JeWlHZ2tvLzNzaUdlcU1ZdlZpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY2NDAxNTM3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg1OTYxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY0TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjRNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUENuUndJREJ3bnZYK2x1VzlhVlNmMW5SWmJhaDNuWkZZTFhZdXV4VGdPYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxNjAwMDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg1OTYxNzgzMFwifSIKfQ=="
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
