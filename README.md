![Cartaz](./src/image/Cartaz.png)
# Nosso Mercadinho


Projeto da disciplina Introdução ao Desenvolvimento Web - SCC0219.

Nosso trabalho tem como tema o desenvolvimento de um website referente a um supermercado virtual


### Autores
| Número USP | Aluno |
| ------ | ------ |
| 11834331 | João Antônio Misson Milhorim |
| 11834432 | Marcus Vinícius Teixeira Huziwara |
| 10747562 | Thales Darini Souza |


### Índice
- [1. Requisitos](#Requisitos)  
- [2. Descrição do Projeto](#Descrição-do-Projeto)
- [3. Comentários sobre o código](#Comentários-sobre-o-código)
- [4. Plano de teste](#Plano-de-teste)
- [5. Resultados dos testes](#Resultados-dos-testes)
- [6. Building](#Building)
- [7. Problemas](#Problemas)
- [8. Comentários](#Comentários)


<a name="Requisitos"/>

## 1. Requisitos
O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O aplicativo já vem com uma conta admin com senha admin.

Clientes são usuários que acessam o sistema para comprar produtos.

O registro do administrador contém nome, CPF, telefone e e-mail.

O registro de cada cliente contém nome, CPF, endereço, telefone e e-mail.

Os registros de produto incluem nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida.

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.

Nosso sistema, como funcionalidade extra, também terá listas de compras, as quais os usuários podem criar a partir de carrinhos de compras ja preenchidos com produtos. Essas listas ficam salvas, permitindo o usuário utiliza-las para realizar futuras compras de forma mais rápida e prática.

O sistema visa uma boa acessibilidade e usabilidade para seus usuários.
<br>
<br>

<a name="Descrição-do-Projeto"/>

## 2. Descrição do Projeto
Nosso Mercadinho consiste eu um supermercado virtual, no qual são vendidos produtos de ampla varieadade com um enfoque em alimentos, cuidados da casa e cuidados pessoais, como produtos de limpeza, produtos de higiene pessoal e comidas congeladas, enlatadas, in natura, dentre outras. Nosso projeto foi implementado com a linguagem de marcação HTML5, a linguagem de estilização CSS3 e foi utilizado Vue.js para o front-end. Por enquanto, o back-end não foi implementado e foram usados dados estáticos temporários para efeito de simulação das funcionalidades do site.

### Diagrama de navegação:
Considere para o diagrama que o usuário somente pode acessar a página 'Finalizar Compra' e a página 'Listas de Compras' caso esteja logado no sistema. Caso contrário, ele será redirecionado para a página de login.
<br>
<br>
<img src="/src/image/nav-diagram.png" alt="Diagrama de Navegação" width="800"/>

Nesse repósitório existe a pasta /mockups onde estãos armazenados as imagens dos mockups do website. As imagens também podem ser acessadas através dos links abaixo:
- [Home Page](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/home.jpg)
- [Cadastro](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/cadastro.jpg)
- [Carrinho](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/carrinho.jpg)
- [Detalhe de Produto](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/detalheProduto.jpg)
- [Finalizar Compra](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/finalizarCompra.jpg)
- [Listagem de Produtos](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/listagemProdutos.jpg)
- [Lista de Compras](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/listasDeCompras.jpg)
- [Login](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/login.jpg)
- [Meu Perfil](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/meuPerfil.jpg)
- [Área do Administrador](https://github.com/MarcusHuzi/Projeto-Web/blob/main/mockups/AreaDoAdmin.jpg)

### Funcionalidades visadas pelo nosso site:

- Login com email e senha na plataforma, com opção de criar uma nova conta.
- Visualização das informações do cliente, com opção de alterar cadastro.
- Visualização da página de administrador, com opção de administrar os produtos e usuários da loja.
- Acesso à homepage, com visualização das categorias de produtos presentes na loja.
- Visualização de produtos pertencentes a uma categoria com opção de adicioná-los ao carrinho.
- Visualização de um modal a partir do clique em um produto contendo seu nome, descrição e valor.
- Acesso ao carrinho de compras, com opção de mudar a quantidade de itens, conferir o preço total, finalizar a compra e salvar a lista para compras futuras.
- Opção de inserir informações do cartão de crédito para efetuar o pagamento.
- Opção de alterar o endereço de entrega.
- Criação de listas de compras que ficam salvas para facilitar futuras compras.

###  Informações armazenadas no servidor:

#### Contas:
- id (identificador do cliente, valor único)
- nome
- email
- senha
- admin (booleano)
- cpf
- endereço
- número de telefone
- sexo

#### Produtos:
- id (identificador do produto, valor único)
- título
- categoria
- preço
- descrição
- identificador da imagem
- quantidade em estoque
- quantidade vendida do produto


<a name="Comentários-sobre-o-código"/>

## 3. Comentários sobre o código
O código ainda está numa fase inicial em que não foram implementadas funcionalidades de banco de dados. As páginas foram feitas utilizando-se HTML5, CSS3 e Vue.js.
<br>
<br>

<a name="Plano-de-teste"/>

## 4. Plano de teste
Os testes estão sendo feitos no próprio navegador a medida que o projeto é desenvolvido. Por não haver muita responsividade implementada, o foco está em manter a integridade de cada página ao longo de diferentes tamanhos de tela e situações.
<br>
<br>

<a name="Resultados-dos-testes"/>

## 5. Resultados dos testes
Neste estado inicial, os testes mostraram-se satisfatórios.
<br>
<br>

<a name="Building"/>

## 6. Building
É necessário ter o npm e node.js instalados. Todos os comandos abaixo devem ser digitados no escopo da pasta `shop`:

#### Instalação de Dependências:

```
npm install
```

#### Compilação no Modo de Desenvolvimento:

```
npm run serve
```

#### Compilação e Minificação para Produção:

```
npm run build
```
<br>
<br>

<a name="Problemas"/>

## 7. Problemas
O maior desafio por enquanto está em aprender Vue.js e implementar as funcionalidades do servidor simultaneamente com a confecção de cada página, tarefas que demandam muito tempo.
<br>
<br>

<a name="Comentários"/>

## 8. Comentários
