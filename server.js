// server.js
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
res.send('✅ Backend is running!')
})

app.listen(PORT, () => {
console.log(`🚀 Server is listening on http://localhost:${PORT}`)
});