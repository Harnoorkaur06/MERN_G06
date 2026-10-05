// const app=require("./college/app")
// suppose you are submitting this to github
// and someone with mac or linus os
// system uses this path
// ./college => .\college

const app=require("path")
const filePath=path.join("Program files","common files","system","students.txt")
console.log(filePath) //Program files\common files\system\students.txt

const fileName=path.basename(filePath)
console.log(fileName) //students.txt

const directoryName= path.dirname(filePath)
console.log(directoryName) //Program files\common files\system\