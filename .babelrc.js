module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        pure: true,
        displayName: process.env.NODE_ENV === 'development',
        fileName: false,
      },
    ],
  ],
}
