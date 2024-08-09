const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Enugu, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/";
global.website=process.env.GURL || "https://whatsapp.com/channel/" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348168855791";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168855791";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348168855791";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_17_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRoenl6WHJiRVFMcFZIU3J5d2xtWFU2MUE1dlhaMkN0QWR2UHRUWnFCRWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRhMHA3YmhMVF9LTlJsaHN1VmE2YlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Y1NDdjMDAtNDhhOC00ZWY5LTkzYzktZTU1YTliMmM0M2M0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDg0LFxuICAgICAgMjEzLFxuICAgICAgMTY0LFxuICAgICAgMTQsXG4gICAgICAxNzgsXG4gICAgICA1NyxcbiAgICAgIDkwLFxuICAgICAgMTA1LFxuICAgICAgMjI3LFxuICAgICAgMjE2LFxuICAgICAgMTA2LFxuICAgICAgMzMsXG4gICAgICAyMDgsXG4gICAgICAxOTMsXG4gICAgICA1OSxcbiAgICAgIDY5LFxuICAgICAgMjUwLFxuICAgICAgMzcsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxNTEsXG4gICAgICA0NyxcbiAgICAgIDMzLFxuICAgICAgMTE2LFxuICAgICAgMjI1LFxuICAgICAgMTY5LFxuICAgICAgMTczLFxuICAgICAgNzUsXG4gICAgICA5OSxcbiAgICAgIDQxLFxuICAgICAgMTI3LFxuICAgICAgMTIsXG4gICAgICA1NSxcbiAgICAgIDQyLFxuICAgICAgNSxcbiAgICAgIDEzMixcbiAgICAgIDY1LFxuICAgICAgMjQ2LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxBNEtUOTJZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4ODU1NzkxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjY5NTUwNDc3NTU3ODA6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZWbllRRUVNK3cxclVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxT2doYlNVcFBsMlFQSmQ2T3JaMzl4ZGttc2dXNWU1amZrNG1YemJHVmlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVJYzViYWhUZEhYSGt2c0w1UGMvSVltN2VVdDhWSjRmU2c5TmhRbFFTeUpSUFY1cVdEdzFnMWNWbU1GT1pDYlFTNDFjZTFBSUhrRWJYcklaZ1VWY0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZsaFpqZ214SkZWRVNJY2V6M2VDZHZVY1NxbVpCS2R5OEFPenhWWFpKU3RvamlZV1VONzZTZHJtNERVc2hTUVM1djMvUkl3eDJyNUdwdWIwSmc1NkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjg4NTU3OTE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE3NzA0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Silent",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEBprocess.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Silent"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
