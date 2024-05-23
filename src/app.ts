import express from 'express';
import router from './routes';

const app = express();

app.set('views', `${__dirname}/views`)
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', router)

export default app;