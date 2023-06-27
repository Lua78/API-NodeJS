import express from 'express'
import config from './config'
import router from './routes/products.routes'
import morgan from 'morgan'
const app = express()

//config
app.set('port',config.port)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)


export default app