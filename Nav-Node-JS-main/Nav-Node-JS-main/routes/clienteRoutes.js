const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
    {
        id: 1,
        nome: "Jobson Ferreira",
        email: "cabreuva@gmail.com",
        telefone: "11-9839929",
        cidade: "Cabreúva",
    },
    {   id: 2,
        nome: "Cleiton da Silva",
        email: "dasilva@gmail.com",
        telefone: "11-99299222",
        cidade: "Sorocaba   ",
    },
    {
        id: 3,
        nome: "Ravina Salles",
        email: "ravenswitch@gmail.com",
        telefone: "11-28288828",
        cidade: "Itanhaém",
    }
];

router.get("/", (req, res) => {
    res.render("clientes/index", {

        clientes: clientes

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("clientes/form-cadastro");

});

router.post("/", (req, res) => {

    const { nome, email, telefone, cidade} = req.body;

    const novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade
    };

    clientes.push(novoCliente);

    res.redirect("/clientes");
});

//Excluir
router.get("/excluir/:id", (req, res) => {

    let id = parseInt(req.params.id);
    clientes = clientes.filter(c => c.id !== id);
    res.redirect("/clientes");

});

//editar - form - GET
router.get("/editar/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const clienteEncontrado = clientes.find(c => c.id === id);

    if (!clienteEncontrado) {
        return res.redirect("/clientes");
    }

    res.render("clientes/editar", { cliente: clienteEncontrado });
});

//editar - efetiva - POST

module.exports = router;