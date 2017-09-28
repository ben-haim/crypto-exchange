module.exports = (number) => {
  if(!+number) return number
  return +number > 1 ? (+number).toFixed(3) : (+number).toFixed(8)
}
