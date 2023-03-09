const UsuarioService = require("../service/usuario.service");
const mongoose = require("mongoose");



const find = async (req, res) => {
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        let found = false;

        const usuario = await UsuarioService.findByIdUsuario(id);

        if(usuario != null){
            found = true;
        }

        if(!found){
            return res.status(404).send({message: "Usuário não encontrado, tente outro ID"});
        }

        return res.status(200).send(usuario);

    }catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
}

const findAllUsuario = async (req,res) => {
    return res.status(200).send(await UsuarioService.findAllUsuario());
}

const createUsuario = async (req,res) => {
    const usuario = req.body;
    
    if(Object.keys(usuario).length == 0){
        return res.status(400).send({message: "Vazio"});
    }

    if(!usuario.nome){
        return res.status(400).send("Nome Vazio");
    }

    if(!usuario.idade){
        return res.status(400).send("Idade Vazio");
    }

    if(!usuario.genero){
        return res.status(400).send("Genero Vazio");
    }

    if(!usuario.senha){
        return res.status(400).send("Senha Vazio");
    }

    if(!usuario.email){
        return res.status(400).send("Email Vazio");
    }

    return res.status(200).send(await UsuarioService.createUsuario(usuario));
}

const updateUsuario = async (req,res) => {
    const id = req.params.id;
    const usuario = req.body;
    // let found = false;

    if(Object.keys(usuario).length == 0){
        return res.status(400).send({message: "Vazio"});
    }

    if(!usuario.nome){
        return res.status(400).send("Nome Vazio");
    }

    if(!usuario.idade){
        return res.status(400).send("Idade Vazio");
    }

    if(!usuario.genero){
        return res.status(400).send("Genero Vazio");
    }

    if(!usuario.senha){
        return res.status(400).send("Senha Vazio");
    }

    if(!usuario.email){
        return res.status(400).send("Email Vazio");
    }

    return res.status(200).send(await UsuarioService.updateUsuario(id,usuario));

    // if(!found){
    //     res.status(404).send("Não encontrado");
    // }
}

const deleteUsuario = async (req,res) => {
    const id = req.params.id;
    // let found = false;

    return res.status(200).send(await UsuarioService.deleteUsuario(id));

    // if(!found){
    //     res.status(404).send("Não encontrado");
    // }
}

module.exports = {
    find,
    findAllUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}