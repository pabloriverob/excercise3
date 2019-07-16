import express = require('express')
import { MetricsHandler } from './metrics'

const app = express()
const port: string = process.env.PORT || '8080'
app.set('views', __dirname + "/view")
app.set('view engine', 'ejs');


app.get('/metrics', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.get('/', (req: any, res: any) => {
  res.status(200).render('use.ejs')
})

app.get('/hello/Team9', (req: any, res: any) =>{
  res.status(200).render('intro.ejs')
})

app.get('/hello/:name',(req: any, res: any) => {
  res.render('hello.ejs', {name : req.params.name})
})

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})
