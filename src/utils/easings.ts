export function mapToRange(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export function linearInterpolation(value: number, min: number, max: number) {
  return min + (max - min) * value
}

export function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b
}
