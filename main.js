on = OmegaNum
number = 1
let gameinterval
function increaseNumber() {
  number = OmegaNum.add(1,number)
  console.log(OmegaNum.toHyperE(number))
}
gameinterval = setInterval(increaseNumber,33)
