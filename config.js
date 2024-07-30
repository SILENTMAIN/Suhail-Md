const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_54_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDU0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieml5bUJGTk0zMXNmNmJsaDZJM3dlTThna0dQRldqaGN1SUhVY2R4OGxPaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWkJkdEg5X0pUc0tVVno1dHk3ck1Vd1wiLFxuICBcInBob25lSWRcIjogXCI3OTY2ZjVlYi1kOTM2LTQ5NjUtOTA0NS04YzhiOGU4MjE3MWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyMDIsXG4gICAgICA3OSxcbiAgICAgIDAsXG4gICAgICA0MSxcbiAgICAgIDIxMCxcbiAgICAgIDE3MCxcbiAgICAgIDExMCxcbiAgICAgIDE2MCxcbiAgICAgIDQwLFxuICAgICAgOTIsXG4gICAgICAxNTQsXG4gICAgICAxODcsXG4gICAgICA2NyxcbiAgICAgIDkxLFxuICAgICAgMTE1LFxuICAgICAgNDEsXG4gICAgICAxMjUsXG4gICAgICA1OCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMjI0LFxuICAgICAgMjE1LFxuICAgICAgMTk4LFxuICAgICAgOTksXG4gICAgICAxNTEsXG4gICAgICA0LFxuICAgICAgMjcsXG4gICAgICAzOSxcbiAgICAgIDE2MCxcbiAgICAgIDE0OSxcbiAgICAgIDgsXG4gICAgICAxMzMsXG4gICAgICA3OSxcbiAgICAgIDI0NCxcbiAgICAgIDIyNCxcbiAgICAgIDE3NyxcbiAgICAgIDg5LFxuICAgICAgMTQwLFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktMMzZEOUU1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4ODU1NzkxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjk1NTA0Nzc1NTc4MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liVm5ZUUVFT3lNbzdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMU9naGJTVXBQbDJRUEpkNk9yWjM5eGRrbXNnVzVlNWpmazRtWHpiR1Zpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4SVJBUWJIS0t3UlZYUVA3YkVsZzF6SDZFeEZGcEMrK3Rzc2RPeEtaTWw3cXhDUUZ6VkNUUHNYNTZJbFBSekU3Y3ZyYVRpU201RDQzUC9UYW4rd2REdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiWDZscmxqcFFmRFVlVWlFSzFGTDlEYlc1WnF6ZWFJKytBMHJaOGxESitWeWlmRWIvLytOYWUvR2hPbGtSN3k1bkUwUi9sK2RlM1BuYVpVOHVxd3JBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4ODU1NzkxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMzNjg3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
