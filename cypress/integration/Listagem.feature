#language: pt
Funcionalidade: Listagem

    Como um usuário eu desejo acessar a listagem
    Para que eu possa visualizar meus dados cadastrados

Cenario: Listagem sem registro
    Dado que o site não possua registros
    Quando acessar a listagem
    Entao devo visualizar a listagem vazio

Cenario: Listagem com apenas um registro
    Dado que o site possua apenas um registro
    Quando acessar a listagem
    Entao devo visualizar apenas um registro



