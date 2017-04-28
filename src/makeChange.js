const makeChange = ({price, amountGiven}) => {
  let coinsCountObject = { quarters: 0, dimes: 0, nickels: 0, pennies: 0}
  let change = amountGiven - price
  if (change === 0) {
    return coinsCountObject
  } else {
    coinsCountObject.quarters = Math.floor(change/25)
    let diff = coinsCountObject.quarters * 25
    change -= diff

    coinsCountObject.dimes = Math.floor(change/10)
    diff = coinsCountObject.dimes * 10
    change -= diff

    coinsCountObject.nickels = Math.floor(change/5)
    diff = coinsCountObject.nickels * 5
    change -= diff

    coinsCountObject.pennies = change/1
  }
  return coinsCountObject
}

export default makeChange
