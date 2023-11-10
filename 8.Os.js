
const os = require('os')
//userinfo
const user = os.userInfo()
console.log(user);


console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    ror: os.loadavg(),
    mac: os.machine(),
    network: os.networkInterfaces(),
    pak: os.platform(),
    tmp: os.tmpdir(),
}

console.log(currentOs);