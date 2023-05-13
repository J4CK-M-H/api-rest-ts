import express from 'express';
import cors from 'cors';
import 'dotenv';
import dbConnection from './config/mongo';
import { router } from './routes';

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${process.cwd()}/storage`));

const PORT_URL = process.env.PORT_URL || 3001 ;

dbConnection()
  .then( () => console.log('Connected to MongoDB') )
  .catch( err => console.log(err) );

// Ruta general
app.use( router );

app.listen(PORT_URL, () => {
  console.log(`Server is running on port ${PORT_URL}`);
});


