export const disableBodyScroll = () => {
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.position = 'fixed'
  document.body.style.left = '0'
  document.body.style.right = '0'
  document.body.style.overflow = 'hidden'
  document.body.style.maxHeight = '100vh'
  document.documentElement.style.setProperty('--overflow-state', 'hidden')
}

export const enableBodyScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.overflow = 'visible'
  document.body.style.maxHeight = 'auto'
  scrollY && window.scrollTo(0, parseInt(scrollY) * -1)
  document.documentElement.style.setProperty('--overflow-state', 'visible')
}

// export const scrollToHash = (h?: string) => {
//   const hasToScroll = h ? h.substring(1) : window.location.hash.substring(1)
//   if (!hasToScroll) return

//   setTimeout(() => {
//     const el = document.getElementById(hasToScroll)
//     if (!el) return
//     const position = el.getBoundingClientRect().top + window.pageYOffset - 75
//     window.scrollTo({ top: position, behavior: 'smooth' })
//   }, 0)
// }
