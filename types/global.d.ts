declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.svg'

declare module '*.css' {
  const payload: string
  export default payload
}

export type tBreakpoint = 'sm' | 'md' | 'lg' | 'xl'
