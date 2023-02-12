import type { Ref } from 'vue'

/**
 * Scroll an element into view
 * @param {Ref<HTMLDivElement | undefined>} elementRef - The element to scroll into view
 * @param {ScrollIntoViewOptions} [options] - Options for the scrollIntoView method
 */
export const useScrollIntoView = (
  elementRef: Ref<HTMLDivElement | undefined>,
  options?: ScrollIntoViewOptions,
) => {
  const scrollIntoView = () => {
    if (elementRef.value) {
      if (options) {
        elementRef.value.scrollIntoView(options)
      } else {
        elementRef.value.scrollIntoView()
      }
    }
  }

  return { scrollIntoView }
}
