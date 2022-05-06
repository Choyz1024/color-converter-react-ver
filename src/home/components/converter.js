export const RgbToHex = (r, g, b) => {
  const rgb = [r, g, b]
  let result = '#'
  rgb.forEach((i) => {
    result += Number(i).toString(16).padStart(2, 0).toUpperCase()
  })
  return result
}