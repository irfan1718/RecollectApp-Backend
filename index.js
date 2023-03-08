import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

//connect to mongo db
const PORT = process.env.PORT;

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `))
  )
  .catch((error) => console.log(error.message));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
