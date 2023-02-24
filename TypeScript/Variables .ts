let age=6
const age1 =6
// between 500 and 1000
const RANDOM_WAIT_TIME =
  Math.round(Math.random() * 500) + 500
 
let startTime = new Date()
let endTime: number | Date

setTimeout(() => {
  endTime = 0
  endTime = new Date()
}, RANDOM_WAIT_TIME)
function add(a: number, b: number): number {
  return a + b
}
const result=add(3,4)
console.log("🚀 ~ file: Variables .ts:18 ~ result:", result)

function add2(a:number,b:number):number{
  return a+b
}
add2(add2(1,2),3)
console.log('add2',add2);
