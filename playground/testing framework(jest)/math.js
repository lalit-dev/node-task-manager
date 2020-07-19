const greater = function(a=0,b=0){
  return a-b > 0 ? 1 : a-b < 0 ? -1 : 0; 
}

const add = (a, b) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (a < 0 || b < 0) {
              return reject('Numbers must be non-negative')
          }

          resolve(a + b)
      }, 2000)
  })
}

module.exports = {
  greater,
  add
}