import autor from "../models/autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`})
        }
    }
};

export default AutorController;