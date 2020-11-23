/** 防抖函数 */
export type Fn = (...args: unknown[]) => void
export default function debounce(fn: Fn, delay = 1000): Fn {
  let timer: null | number
  return (...args: unknown[]) => {
    timer !== null && clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
