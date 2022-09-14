import express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser';
import todoRoutes from './routes/todos';


const app = express();

app.use(json());

app.use('/todos', todoRoutes);

//middleware fct
app.use((err: Error, req: Request, res: Response, next: NextFunction ) => {
 res.status(500).json({message: err.message});
});

app.listen(3000);

//to test download postman POST request localhost:3000/todos/
/// Body, raw,to send some json, {"text": "Finish the Course!"}
//response should include the text