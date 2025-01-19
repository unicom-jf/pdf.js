const fs = require("node:fs")
//import fs from "node:fs" 
//const __filename = "step1.js"
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("setTimeout")
  }, 0)

  setImmediate(() => {
    console.log("setImmediate")
  })
})