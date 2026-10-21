//Let this groove light up your fuse It's alright, alright, alright, ooh-oh-oh

const express = require("express");

const router = express.Router();

let fornecedores = [
    {
        id: 1,
        nome: "Nike",
        razao_social: "Fisia Comércio de Produtos Esportivos S.A.",
        telefone: "11-299399200",
        cnpj: "232456768",
        cidade: "Bauneário Camboriú",
    },
    {
        id: 2,
        nome: "Louis Vuitton",
        razao_social: "LVMH Fashion Group Brasil Ltda.",
        telefone: "11-2929299",
        cnpj: "2323232323",
        cidade: "Piauí",
    }, 
    {
        id: 3,
        nome: "Tupperware",
        razao_social: "Dart do Brasil Indústria e Comércio LTDA.",
        telefone: "11-32939292",
        cnpj: "24665759875",
        cidade: "Pelotas",
    },
];

router.get("/", (req, res) => {
    res.render("fornecedores/index", {
        fornecedores : fornecedores
    });
});

router.get("/cadastro", (req,res) => {
   res.render("fornecedores/form-cadastro");
});

router.post("/", (req, res) =>{
   const {nome, razao_social, telefone, cnpj, cidade} = req.body;
   const novoFornecedor = {
    id: fornecedores.length + 1,
    nome: nome,
    razao_social: razao_social,
    telefone: telefone,
    cnpj: cnpj,
    cidade: cidade,
   };
   fornecedores.push(novoFornecedor);
   res.redirect("/fornecedores");
});

//Excluir
router.get("/excluir/:id", (req, res) => {

    let id = parseInt(req.params.id);
    fornecedores = fornecedores.filter(f => f.id !== id);
    res.redirect("/fornecedores");

});

//editar - form - GET
router.get("/editar/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const fornecedorEncontrado = fornecedores.find(f => f.id === id);

    if (!fornecedorEncontrado) {
        return res.redirect("/fornecedores");
    }

    res.render("fornecedores/editar", { fornecedor: fornecedorEncontrado });
});

//editar - efetiva - POST

module.exports = router;