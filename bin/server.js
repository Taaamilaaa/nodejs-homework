import {app} from '../app'

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})