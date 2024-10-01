import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();
//Alem de importar temq ue colocar de forma explicita que vai usar, vai entender
app.use(cors());
app.use(express.json());
app.use(routes);

//criando o middleware para tratamento de erros 
app.use(
    (
        error: Error, 
        request: Request, 
        response: Response, 
        next: NextFunction
    ) => {
//verificar se esse erro é uma instancia da classe Erro que criamos 
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
        //quando nao for uma instancia da classe AppError
        //500 erro desconhecido
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
}); 
app.listen(3333, () => {
    console.log("Server started on port 3333");
})

