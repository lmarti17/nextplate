import { useEffect, useState } from 'react'
import { theme } from 'styles/theme'
import { tBreakpoint } from 'types/global'

/**
 * Returns either `true` or `false` whether the query matches.
 * Returns `null` if we are server-side rendering and have no access to the `window`.
 */
const useMediaQuery = (bp: tBreakpoint) => {
  const query = `(min-width: ${theme.screens[bp]})`

  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return null
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mediaQueryList = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)

    mediaQueryList.addEventListener('change', listener)
    setMatches(mediaQueryList.matches)
    return () => window && mediaQueryList.removeEventListener('change', listener)
  }, [query])

  return matches
}

export default useMediaQuery
