const fs=require('fs');//fs means file system
fs.readFile("./awesome.txt", "utf-8",(err,data)=>{
    console.log(data);
});

const niceQuote="make everyday a little less ordinary";
fs.writeFile("./cool.txt",niceQuote,(err)=>{
    console.log("completed writing");
})


const addQuote="\ndream without fear,love without limits";
fs.appendFile("./fun.html",addQuote,(err)=>{
    console.log("completed writing");
});

fs.readdir("./backup",(err,data)=>{
    console.log(data);
});

// const bulkQuote="live more,worry less";
// const [, , nooffiles]=process.argv;
// for(let i=1;i<=nooffiles;i++){
//     fs.writeFile(`./backup/text-${i}.html`,bulkQuote,(err)=>{
//         console.log("completed writing");
//     });
// }

fs.unlink('./backup/text-30.html',(err)=>{
    console.log("Delete successfully");
});

fs.readdir("./backup",(err,data)=>{
    data.forEach((filename)=>{
        fs.unlink(`./backup/${filename}`,(err)=>{
            console.log("Deleted successfully",filename);
        });
        })
});

    