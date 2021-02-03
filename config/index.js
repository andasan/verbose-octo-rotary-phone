const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT

export const server = dev ? 'http://localhost:3000' : `http://localhost:${PORT}`
