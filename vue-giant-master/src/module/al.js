export const alUtils = {
  parseArr(arr, labelKey, valueKey) {
    return arr.map(v => {
      v.label = v[labelKey]
      v.value = v[valueKey]
    })
  }
}
