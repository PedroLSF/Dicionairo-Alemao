const router = require("express").Router();
const usuario = require("../usuario.controle/usuario.controle");
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/cadastro", (req, res) => {
    res.render("usuario.view/Create.html")
})

router.post("/create", urlencodedParser,usuario.createUsuario);
router.get("/read/:Nome", urlencodedParser,usuario.readUsuario);
router.get("/readAll", urlencodedParser,usuario.readAllUsuario);
router.get("/update/:Nome", urlencodedParser,usuario.updateUsuario);
router.post("/edit", urlencodedParser,usuario.editUsuario);
router.post("/delete", urlencodedParser,usuario.deleteUsuario);

module.exports = router;