function moveZeros(arr) {
  let i = 0
  const indexOfZeros = []
  while (i < arr.length) {
    if (arr[i] == 0) {
      indexOfZeros.push(i)
    }
    ++i
  }
  indexOfZeros.reverse()

  indexOfZeros.forEach(function (value) {
    arr.splice([value], 1)
    arr.push(0)
  })

  return arr
}

let randomArray = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 10)
)

console.log(randomArray)
console.log(moveZeros(randomArray))
