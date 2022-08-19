import { useState, createContext, useContext, useEffect, PropsWithChildren } from 'react'

export interface iContext {
  windowWidth: number
  windowHeight: number
  isClient: boolean
  isMobile: boolean
  isTablet: boolean
  isTouchDevice: boolean
}

const isTouchDevice: () => boolean = () => {
  if (typeof window === 'undefined') {
    return false
  }
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0
}

const Context = createContext<iContext>({
  windowWidth: 0,
  windowHeight: 0,
  isClient: false,
  isMobile: false,
  isTablet: false,
  isTouchDevice: isTouchDevice(),
})

export const useGlobalContext = () => {
  return useContext(Context)
}

// function iOS() {
//   if (typeof navigator === 'undefined') {
//     return false
//   }
//   return (
//     ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
//     // iPad on iOS 13 detection
//     (navigator?.userAgent.includes('Mac') && 'ontouchend' in document)
//   )
// }

export const GlobalContext: React.FC<{ initialValue: {} } & PropsWithChildren> = ({ children, initialValue = {} }) => {
  const [{ windowWidth, windowHeight }, setWindowSize] = useState<{
    windowWidth: iContext['windowWidth']
    windowHeight: iContext['windowHeight']
  }>({
    windowWidth: 0,
    windowHeight: 0,
  })

  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' && window.innerWidth <= 768)
  const [isTablet, setIsTablet] = useState<boolean>(typeof window !== 'undefined' && window.innerWidth < 1024)

  // triggered on Mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        })
        setIsMobile(window.innerWidth <= 768)
        setIsTablet(window.innerWidth < 1024)
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <Context.Provider
      value={{
        ...initialValue,
        // generic value
        windowWidth,
        windowHeight,
        isClient: typeof window !== 'undefined',
        isMobile,
        isTablet,
        isTouchDevice: isTouchDevice(),
        // custom
      }}
    >
      {children}
    </Context.Provider>
  )
}
