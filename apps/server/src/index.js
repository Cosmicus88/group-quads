import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import { getEntries, postEntries } from '../Controller/entriesController.js'

const app = express()

app.use(morgan)
app.use(cors)
app.use(express.json())

app.get('/entries',getEntries)
app.post('/entries',postEntries)


app.listen(8080,()=>{
    console.log('🦄 Server opened and listening on http://localhost:8080')
})
