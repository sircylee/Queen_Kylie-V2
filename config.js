//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/4i2tpg.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxLdE9kRldtT0FNVko1WjRobEVXTGhMc1pZYjNFVy9LNEFTVjJ1ZGwxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tqR1Z2UlArY3AzREZJYldkZDNzdm82WWxaY3hCYUIraVo0R2ZWOEZBWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSmN6QlphaEtoK0tqZjNiK09TQVArSG1RUnBJaEpsME81ZmhMaG5VZ21JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsaVovbS9vb0NyemdWbXdRNFNiSm9VM2VqeG8wektKcTFXaWl1cmQ2U2tBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJNExRZldBakpsVXJoMlNwUG4wNVJndXFxVzQ2eXZlWUs5MEttUHpzMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJazlqMlFlZnlWT1JDL0tuZy9ZenVZWlhsTmJ1ZWQ3a3B3ZzVwNmdWeHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUk2SGpZdlFUWkV0a1U4S21jQTFmZEFaRDBZM0xPa0ZCL29DV0hobE8xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHEzcUt4SUFFQ1prSndOeVZGbVJoTVJtYldpeXlkWDQxc3c5ZFVBWGFDbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5DbDVFU3Y2eHBvTHBxRk9TYllaZDRhMkZZQWMzejJzaHlaT2lDUVVEUy9pRlFtYUtoSFE0dzh3SWhpdEZTeWZxbmE5Uk55U0dHaU52YWF2dytObUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImhTL1JRWUp1TEhpaHRrOHh6U3RxZWt6TUc4aTZ6S2NlR3dzKzZUdUMxRTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlR5VXBDZHo2UlhhQ0NXd3ZzcE1fWGciLCJwaG9uZUlkIjoiN2VmMjA0NWEtMTU3Yy00ZjUzLTkwMzMtYjExZjNmYTUzN2Q4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRpeG55ZklIUFY1WklmdVBONVlWbU5TMW9NWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNek5wdlVsMjJWd0VxU3Z1dVJKcDBPMGt5Mk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUtSMVBTTkgiLCJtZSI6eyJpZCI6IjI3ODM1MDM5NzI1OjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Imdob3N0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQclBuS0VFRVBHTDQ3OEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0emJ4NThrdmxnVCtRL3YxUDU5cVA1WEQwTlV3anYwZ01aVm5NTmNMK0JFPSIsImFjY291bnRTaWduYXR1cmUiOiJJeGF0MW5UMThNSk5RZVdPc2VJNG5LZ0xhWWlHS0xCTEgrczFpYTNNL1o4MkhEc0U0R0pGZjRQeHFMdzh1QktBSG5veDhPUW91NzhaSTVTQVJuVDdDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicEZtQUNwMkxueTQwbG5VMDlkNDFjWDFsMUxZdkZWVXUxaWcwVzVtTTNHNlhpT0ZnalBYSzZNVEIxY2poaEdhTHYwZnQrRXdSek9qNzk1T1UrYk03Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzgzNTAzOTcyNToyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTTI4ZWZKTDVZRS9rUDc5VCtmYWorVnc5RFZNSTc5SURHVlp6RFhDL2dSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0MzU2ODY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5RTyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE-V2",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee ❤️🧸👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
