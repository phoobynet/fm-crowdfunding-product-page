import { Ref } from 'vue'

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
