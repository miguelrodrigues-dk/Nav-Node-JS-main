//Let this groove light up your fuse It's alright, alright, alright, ooh-oh-oh

const express = require("express");

const router = express.Router();

let produtos = [
  { id: 1, nome: "Mouse mecânico", descricao: "Mouse com fio simples", preco : "R$30,00", estoque : "disponível: 10 unidades", tipo : "Informática" },
  { id: 2, nome: "Mangá Fullmetal Alchemist", descricao: "História em quadrinhos", preco : "R$44,90", estoque : "disponível: 30 unidades ", tipo : "Literatura" },
  { id: 3, nome: "Bolinho Ana Maria ", descricao: "Bolo de recheio de baunilha", preco : "R$2,49", estoque : "disponível: 100 unidades", tipo : "Comida" }
];

router.get("/", (req, res) => {
    res.render("produtos/index", {
        produtos : produtos
    });
});

router.get("/cadastro", (req,res) => {
   res.render("produtos/form-cadastro");
});

router.post("/", (req, res) =>{
   const {nome, descricao, preco, estoque, tipo} = req.body;
   const novoProduto = {
    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    tipo: tipo,
   };
   produtos.push(novoProduto);
   res.redirect("/produtos");
});

//Excluir
router.get("/excluir/:id", (req, res) => {

    let id = parseInt(req.params.id);
    produtos = produtos.filter(f => f.id !== id);
    res.redirect("/produtos");

});

//editar - form - GET
router.get("/editar/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const produtoEncontrado = produtos.find(f => f.id === id);

    if (!produtoEncontrado) {
        return res.redirect("/produtos");
    }

    res.render("produtos/editar", { produtos: produtoEncontrado });
});

//editar - efetiva - POST

module.exports = router;