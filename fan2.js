const input1 = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'
const input2 = 'Berapa u(mur minimal[ untuk !mengurus ktp?'
const input3 = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'

const kata = (input) => {
  const symbol = '!@#$%^&*()_+[]='
  const arrSymbol = symbol.split('')
  const splitKata = input.split(' ')
  const kataWithSymbol = []
  const symbolKata = []
  const s = []
  const result = []
  splitKata.forEach(el => {
    arrSymbol.forEach(elS => {
      let a = el.split(elS)
      kataWithSymbol.push(a)
    })
  })
  kataWithSymbol.forEach((el, i) => {
    if(el.length == 2) {
      symbolKata.push([el, kataWithSymbol[i-1]])
    }
  })
  splitKata.forEach(el => {
    symbolKata.forEach(elS => {
      if(el === elS[1][0]) {
        s.push(el)
      }
    })
  })

  splitKata.forEach((el, i) => {
    if(el !== s[1] && el !== s[0] && el !== s[2]) result.push(el)
  })
  console.log(result)
  return result.length
}

console.log(kata(input1))
console.log(kata(input2))
console.log(kata(input3))