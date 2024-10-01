//Criando dois atributos como leitura apenas, mensagem e numero , sera o status code da mensagem
class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    //colocar statusCode logo como 400 se nao for passado nem um numero de status
    //400 a mensagem masi genérica de erro
    constructor(message: string, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;

    }
}

export default AppError;