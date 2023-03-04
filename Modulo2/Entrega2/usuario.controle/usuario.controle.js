const usuarios = [
    {
        Nome: 'Pedro',
        Idade: 21,
        Genero: 'M',
        Senha: 'Abacate',
        Email: 'siqueirafernandes02@gmail.com'
    },
    {
        Nome: 'Adriano',
        Idade: 21,
        Genero: 'M',
        Senha: 'Pera',
        Email: 'adrianocesar321@gmail.com'
    },
]


const createUsuario = (req,res) =>{
    const usuario = req.body;

    if(Object.keys(usuario).length == 0){
        return res.redirect('https://http.cat/400')
    }

    if(Object.keys(usuario.Nome).length == 0){
        return res.redirect('https://http.cat/400')
    }

    if(Object.keys(usuario.Idade).length == 0){
        return res.redirect('https://http.cat/400')
    }

    if(Object.keys(usuario.Genero).length == 0){
        return res.redirect('https://http.cat/400')
    }

    if(Object.keys(usuario.Senha).length == 0){
        return res.redirect('https://http.cat/400')
    }

    if(Object.keys(usuario.Email).length == 0){
        return res.redirect('https://http.cat/400')
    }

    usuarios.push(usuario);

    res.redirect(`/read/${usuario.Nome}`);
}

const readUsuario = (req,res) =>{
    const nome = req.params.Nome;
    let index = -1;
    for(let i = 0; i <= usuarios.length; i++){
        if(usuarios[i] != null){
            if(usuarios[i].Nome == nome){
                index = i;
                break;
            }
        }
    }

    if(index == -1){
        res.redirect('https://http.cat/404');
    }
  
  
    // Renderiza a página que vai ser inserida no view padrão com o objeto usuario
    res.render("./usuario.view/Read.html", { usuario : usuarios[index] });
}

const updateUsuario = (req,res) =>{
    const nome = req.params.Nome;
    let index = -1;
    for(let i = 0; i <= usuarios.length; i++){
        if(usuarios[i] != null){
            if(usuarios[i].Nome == nome){
                index = i;
                break;
            }
        }
    }

    if(index == -1){
        res.redirect('https://http.cat/404');
    }
  
    // Renderiza a página que vai ser inserida no view padrão com o objeto usuario
    res.render("./usuario.view/Update.html", { usuario : usuarios[index] });
}

const editUsuario = (req,res) => {
    const usuario = req.body;
    let index = -1;
    for(let i = 0; i <= usuarios.length; i++){
        if(usuarios[i] != null){
            if(usuarios[i].Nome == usuario.Nome){
                index = i;
                break;
            }
        }
    }

    if(index == -1){
        res.redirect('https://http.cat/404');
    }

    usuarios[index] = usuario;
    res.redirect('https://http.cat/202');
}

const deleteUsuario = (req,res) => {
    const usuario = req.body;
    let index = -1;
    for(let i = 0; i <= usuarios.length; i++){
        if(usuarios[i] != null){
            if(usuarios[i].Nome == usuario.Nome){
                index = i;
                break;
            }
        }
    }

    if(index == -1){
        res.redirect('https://http.cat/404');
    }

    usuarios.splice(index,1);
    res.redirect('https://http.cat/204');
}

const readAllUsuario = (req,res) => {
    res.send(usuarios);
}

module.exports = {
    createUsuario,
    readUsuario,
    updateUsuario,
    editUsuario,
    deleteUsuario,
    readAllUsuario
}