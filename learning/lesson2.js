//catch setTiemout

function sayHello() {
  throw("exception")
  console.log("hello")
}

const wait = (ms) => new Promise((resolve) => {
  return setTimeout(resolve, ms)})
wait(300).then(sayHello)
          .catch((e) => {
            console.log("caught", e)
          }) 

             