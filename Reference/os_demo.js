const os = require('os');

//Platform
console.log(os.platform)

//CPU Arch
console.log(os.arch());

//CPU Core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());