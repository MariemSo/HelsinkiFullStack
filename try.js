// const x = 1
// let y = 5
// console.log(x, y)   // 1, 5 are printed

// y += 10
// console.log(x, y)   // 1, 15 are printed

// y = 'someText'
// console.log(x, y)   // 1, sometext are printed

//x = 4               // causes an error
//! ------------------------------------------
// const t = [1, -1, 3]

// t.push(5)
// const t2 = t.concat(5)  // creates new array

// console.log(t.length) // 4 is printed
// console.log(t[1])     // -1 is printed

// console.log(t)  // [1, -1, 3] is printed
// console.log(t2) // [1, -1, 3, 5] is printed

// t.forEach(value => {
//   console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
// })                    
//! ------------------------------------------
// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//   }
  
//   const object2 = {
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5,
//   }
  
//   const object3 = {
//     name: {
//       first: 'Dan',
//       last: 'Abramov',
//     },
//     grades: [2, 3, 5, 3],
//     department: 'Stanford University',
//   }

// console.log(object1.name)         // Arto Hellas is printed
// const fieldName = 'age'
// console.log(object1[fieldName])    // 35 is printed

// object1.address = 'Helsinki'
// object1['secret number'] = 12341