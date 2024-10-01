import { response, Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello Dev!'});
});

//Se não , não consigo importar em outros lugares
export default routes;