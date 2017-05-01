const makeChange = ({price, amountGiven}) => {
  let coinsCountObject = { quarters: 0, dimes: 0, nickels: 0, pennies: 0}
  let change = amountGiven - price
  if (change === 0) {
    return coinsCountObject
  } else {
    coinsCountObject.quarters = Math.floor(change/25)
    let different = coinsCountObject.quarters * 25
    change -= different

    coinsCountObject.dimes = Math.floor(change/10)
    different = coinsCountObject.dimes * 10
    change -= different

    coinsCountObject.nickels = Math.floor(change/5)
    different = coinsCountObject.nickels * 5
    change -= different

    coinsCountObject.pennies = change/1
  }
  return coinsCountObject
}

export default makeChange
