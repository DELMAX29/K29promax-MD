toconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "0yl3yCZI#0O6kjaWCpDN7UBv9uHch1JVJ2Sh4DmFU6EsiCvjaPio",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tCkmbMx/IMG-20240913-WA0041.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi QUEEN-KYLIE-MD Is Online Now 💻\n*💻 Owner* - QUEEN-KYLIE-MD\n\n*💻 Owner Number* -263716401060",
SUDO_NB: process.env.SUDO_NB || "94718913389",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

