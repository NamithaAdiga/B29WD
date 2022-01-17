const os=require("os");
console.log("Os version",os.version());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());

const freeMEMINPercent=((os.freemem()/os.totalmem()*100).toFixed(2));
console.log("free memory in %",freeMEMINPercent);
console.log("CPU",os.cpus());