# 🎮 Jogo da Velha Neon

Um jogo da velha desenvolvido utilizando **React.js**, com uma interface moderna, vibrante e inspirada em jogos com estética neon.

O projeto foi desenvolvido com foco em praticar os conceitos básicos do React, principalmente **componentes, estados, eventos e renderização dinâmica**, além de trabalhar estilização utilizando CSS.

---

## ✨ Demonstração

O jogo possui uma interface com:

- 🎮 Tabuleiro 3x3
- ❌ Jogador X
- ⭕ Jogador O
- 🏆 Detecção automática do vencedor
- 🤝 Detecção de empate
- 🔄 Botão para iniciar uma nova partida
- 🌈 Cores vibrantes em estilo neon
- ✨ Efeitos de brilho e animações
- 🖼️ Imagem de fundo
- 📱 Interface responsiva para diferentes tamanhos de tela

---

## 🛠️ Tecnologias utilizadas

### React.js

O projeto foi desenvolvido utilizando **React.js**.

O React foi utilizado para criar a interface do jogo e controlar a interação entre o usuário e o tabuleiro.

### JavaScript

O JavaScript é responsável pela lógica do jogo, incluindo:

- Controle das jogadas
- Alternância entre X e O
- Verificação das combinações vencedoras
- Identificação de empate
- Reinicialização da partida

### JSX

O JSX foi utilizado para estruturar a interface dentro do componente React.

Exemplo:


<div className="board">
  {board.map((value, index) => (
    <button
      key={index}
      className={"cell " + value}
      onClick={() => play(index)}
    >
      {value}
    </button>
  ))}
</div>
🧠 Conceitos de React utilizados
useState

O projeto utiliza o useState para controlar o estado do jogo.

São utilizados estados para armazenar:

Tabuleiro
Jogador atual
Resultado da partida

Exemplo:

const [board, setBoard] = useState([
  "", "", "",
  "", "", "",
  "", "", ""
]);

const [turn, setTurn] = useState("X");

const [winner, setWinner] = useState("");
🎯 Funcionamento do jogo

O jogo começa com o jogador X.

A cada clique em uma casa vazia:

A jogada é registrada.
O tabuleiro é atualizado.
O sistema verifica se existe um vencedor.
Caso não exista vencedor, o turno passa para o próximo jogador.
Se todas as casas forem preenchidas sem vencedor, o resultado é empate.
Combinações vencedoras

O sistema verifica as 8 possibilidades de vitória:

[0, 1, 2]
[3, 4, 5]
[6, 7, 8]

[0, 3, 6]
[1, 4, 7]
[2, 5, 8]

[0, 4, 8]
[2, 4, 6]

Essas combinações representam as linhas, colunas e diagonais do tabuleiro.

🎨 Interface

A interface foi criada utilizando CSS puro, sem a necessidade de instalar bibliotecas adicionais.

Identidade visual

O projeto utiliza uma estética:

🌌 Fundo escuro
💙 Azul neon para o jogador X
💗 Rosa neon para o jogador O
💜 Roxo como cor de destaque
✨ Efeitos de brilho
🎨 Gradientes
🔲 Efeito de vidro/transparência
📱 Design responsivo
🖼️ Imagem de fundo

O projeto utiliza uma imagem externa como plano de fundo através do CSS.

A imagem é carregada diretamente pela propriedade:

background-image: url("https://images.unsplash.com/...");

Não foi necessário instalar nenhuma biblioteca para utilizar a imagem.

📂 Estrutura do projeto

A estrutura principal utilizada é:

PRIMEIRO/
│
├── node_modules/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
🚀 Como executar o projeto
1. Instalar o Node.js

É necessário ter o Node.js instalado no computador.

2. Abrir o projeto

Abra a pasta do projeto no VS Code ou outro editor de código.

3. Instalar as dependências

No terminal:

npm install
4. Iniciar o projeto

Execute:

npm start

Depois disso, o projeto será executado no navegador.

Normalmente estará disponível em:

http://localhost:3000
📦 Dependências

O projeto utiliza a estrutura padrão criada pelo Create React App.

Não foram adicionadas bibliotecas externas para a criação do jogo.

A lógica foi desenvolvida utilizando os recursos nativos do React e JavaScript.

🎮 Como jogar
O jogador X começa.
Clique em uma das casas do tabuleiro.
O jogador O fará a próxima jogada.
Continue alternando entre os jogadores.
O primeiro jogador a completar uma linha, coluna ou diagonal vence.
Caso todas as casas sejam preenchidas sem vencedor, ocorre um empate.
Clique em "NOVA PARTIDA" para começar novamente.
📚 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar:

React.js
JavaScript
JSX
useState
Eventos no React
Renderização de listas com map()
Manipulação de arrays
Estruturas condicionais
Funções
CSS
Responsividade
Organização de um projeto frontend
👨‍💻 Autor

Vitor Fazano

Projeto desenvolvido para estudos e prática de desenvolvimento web com React.

📄 Licença

Este projeto foi desenvolvido para fins educacionais e de aprendizado.
