const input1 = [10,20,20,10,10,30,50,10,20]
const input2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
const input3 = [1,1,3,1,2,1,3,3,3,3]

const duplicate = (input) => {
  let sort = input.slice().sort()
  let duplicated = []
  let result = []
  for (let i = 0; i < input.length; i++) {
    if(sort[i+1] == sort[i]) duplicated.push(sort[i])
  }
  for (let i = 0; i < duplicated.length; i++) {
    if(duplicated[i+1] == duplicated[i] && i+1 != duplicated.length) result.push(duplicated[i])
  }
  return result.length
}
console.log(duplicate(input1))
console.log(duplicate(input2))
console.log(duplicate(input3))