//const AutoPrintRegExp = /\bprint\s*\(/;
const AutoPrintRegExp = /\bprint\s{0,1}\(/;
console.log(AutoPrintRegExp.test("print("))
console.log(AutoPrintRegExp.test("print ("))
console.log(AutoPrintRegExp.test("print\n"))
console.log(AutoPrintRegExp.test(`print\n\n(`))
console.log(AutoPrintRegExp.test(`print (()`))