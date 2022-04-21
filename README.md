[ Colocar aqui a logomarca do nosso supermercado ]
# [ Escolher um nome ]


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

### 1. Requisitos
O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O aplicativo já vem com uma conta admin com senha admin.

Clientes são usuários que acessam o sistema para comprar produtos.

O registro do administrador contém nome, CPF, telefone e e-mail.

O registro de cada cliente contém nome, CPF, endereço, telefone e e-mail.

Os registros de produto incluem nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida.

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.

Nosso sistema, como funcionalidade extra, também terá [ adicionar teste de personalidade aqui ].

O sistema é responsivo e visa uma boa acessibilidade e usabilidade para seus usuários.
<br>
<br>

<a name="Descrição-do-Projeto"/>

### 2. Descrição do Projeto
[ Nome do nosso supermercado ] consiste eu um supermercado virtual, no qual sao vendidos produtos de ampla varieadade com um enfoque em alimentos, cuidados da casa e cuidados pessoais, como produtos de limpeza, produtos de higiene pessoal e comidas congeladas, enlatadas, in natura, dentre outras. Nosso projeto foi implementado com a linguagem de marcação HTML5 e a linguagem de estilização CSS3.

Diagrama de navegação:
[ Colocar o diagrama aqui ]

Nesse repósitório existe a pasta /mockups onde estãos armazenados as imagens dos mockups do website. As imagens também podem ser acessadas através dos links abaixo:
- [Colocar os links para as imagens dos mockups aqui]
- Mockup 1
- Mockup 2
- Mockup 3

#### Funcionalidades
Funcionalidades visadas pelo nosso site:

- Login com email e senha na plataforma, com opção de criar uma nova conta.
- Visualização das informações do cliente, com opção de alterar cadastro.
- Visualização da página de administrador, com opção de administrar os produtos e usuários da loja.
- Acesso à homepage, com visualização de alguns produtos selecionados pela loja.
- Visualização de um produto, com seu nome, descrição, preço e botão para adicionar ao carrinho.
- Acesso ao carrinho de compras, com opção de mudar a quantidade de itens, conferir o preço total e -finalizar compra.
- Opção de inserir informações do cartão de crédito para efetuar o pagamento.
- Opção de alterar o endereço de entrega.
- [ Funcionalide extra ]

#### Servidor
Informações armazenadas no servidor:

##### Contas:
- id (identificador do cliente, valor único)
- nome
- email
- senha
- admin (booleano)
- cpf
- endereço
- número de telefone

##### Produtos:
- id (identificador do produto, valor único)
- título
- categoria (número de 0 a 4)
- preço
- descrição
- identificador da imagem
- quantidade vendida do produto


<a name="Comentários-sobre-o-código"/>

### 3. Comentários sobre o código
<br>
<br>

<a name="Plano-de-teste"/>

### 4. Plano de teste
<br>
<br>

<a name="Resultados-dos-testes"/>

### 5. Resultados dos testes
<br>
<br>

<a name="Building"/>

### 6. Building
<br>
<br>

<a name="Problemas"/>

### 7. Problemas
<br>
<br>

<a name="Comentários"/>

### 8. Comentários
