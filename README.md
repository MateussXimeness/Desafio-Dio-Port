 🏴‍☠️ Portfólio - Navegando pelo Grand Line do Desenvolvimento

Portfólio pessoal inspirado em One Piece, desenvolvido como parte do Bootcamp Santander Front-End da DIO.

![One Piece](https://img.shields.io/badge/One%20Piece-Inspired-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Site portfólio com temática de One Piece, apresentando informações sobre formação, habilidades e projetos. O design utiliza elementos visuais inspirados no anime/mangá, com animações suaves e navegação intuitiva.

## ✨ Funcionalidades

- 🚢 **Animações CSS**: Ícones do Going Merry navegando suavemente
- 🌊 **Scroll Suave**: Navegação fluida entre as seções
- 🎭 **Fontes Customizadas**: Tipografia temática personalizada
- 🖼️ **Backgrounds Temáticos**: Imagens de fundo em cada seção

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e animações
- **JavaScript**: Interatividade e scroll suave
- **Git/GitHub**: Controle de versão

## 📂 Estrutura do Projeto

```
Desafio Portifólio/
│
├── index.html
├── script.js
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── fonts/
│   └── images/
└── README.md
```

## 🚀 Como Visualizar

1. Clone o repositório:
```bash
git clone https://github.com/MateussXimeness/Desafio--Front--Port.git
```

2. Abra o arquivo `index.html` no navegador

Ou acesse diretamente: [Link do GitHub Pages] (se publicado)

## 🎯 Seções do Portfólio

- **Header**: Logo e navegação temática
- **Sobre Mim**: Apresentação pessoal com estilo One Piece
- **Formação**: Timeline educacional
- **Habilidades**: Skills técnicas
- **Contato**: Links para redes sociais e email (teste)

## 💻 Destaques do Código

### Animação CSS (Going Merry)
```css
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

### Scroll Suave (JavaScript)
```javascript
for (let link of linksDoMenu) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const secao = document.querySelector(this.getAttribute('href'));
        secao.scrollIntoView({ behavior: 'smooth' });
    });
}
```

## 👨‍💻 Autor

**Mateeus Menezes**

- GitHub: [@MateussXimeness](https://github.com/MateussXimeness)

## 📝 Licença

Este projeto foi desenvolvido como parte do Bootcamp Santander Front-End - DIO (2025).

---

⚓ *"Navegando pelo Grand Line do Desenvolvimento"*
