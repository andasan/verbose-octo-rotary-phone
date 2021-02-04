const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://verbose-octo-rotary-phone.vercel.app'
