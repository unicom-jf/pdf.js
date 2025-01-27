// async function test() {
//   const promise = Promise.withResolvers();//Promise.withResolvers()

// }
//let { promise, resolve, reject } = Promise.withResolvers();
const promise = Promise.withResolvers();//Promise.withResolvers()
promise.promise.then(
  () => {
    console.log("success")
  },
  (err) => {
    console.log(err)
  }
)
console.log(promise.promise)