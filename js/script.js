let skills = [
    {
      "nome": "HTML",
      "descricao": "HTML é uma linguagem de marcação fundamental para a criação de páginas da web. Ela permite que os desenvolvedores estruturem o conteúdo de um site.",
      "cor": "#FFA500",
    },
    {
      "nome": "CSS",
      "descricao": "CSS (Cascading Style Sheets) é uma linguagem de estilo que permite estilizar páginas da web, controlando o layout, cores, fontes e outros aspectos visuais.",
      "cor": "#2E96FF"
    },
    {
      "nome": "Bootstrap",
      "descricao": "Bootstrap é um framework front-end que oferece uma coleção de componentes e estilos prontos para uso, acelerando o desenvolvimento web responsivo.",
      "cor": "purple"
    },
    {
      "nome": "SASS",
      "descricao": " SASS (Syntactically Awesome Stylesheets) é uma linguagem de folha de estilo que estende o CSS, adicionando recursos como variáveis, aninhamento e funções, facilitando a criação de estilos mais eficientes e reutilizáveis.",
      "cor": "pink"
    },
    {
      "nome": "Javascript",
      "descricao": "JavaScript é uma linguagem de programação amplamente usada para desenvolver interatividade em páginas web, tornando-as dinâmicas e responsivas.",
      "cor": "#FFD700",
    },
    {
      "nome": "Typescript",
      "descricao": "TypeScript é uma extensão do JavaScript que adiciona tipagem estática ao código, melhorando a manutenção e a escalabilidade de projetos.",
      "cor": "#1E90FF",
    },
    {
        "nome": "Angular",
        "descricao": "Angular é um framework JavaScript para construir aplicativos web e móveis robustos e escaláveis, com recursos avançados como componentes, injeção de dependência e roteamento.",
        "cor": "#B22222",
      },
    {
        "nome": "Java",
        "descricao": "Java é uma linguagem de programação orientada a objetos  usada para desenvolver aplicativos de desktop, web, mobile e empresariais.",
        "cor": "#FF0000",
      },
    {
        "nome": "Spring Boot",
        "descricao": "Spring Boot é um framework Java que simplifica o desenvolvimento de aplicativos web e serviços RESTful, tornando-os mais eficientes e fáceis de configurar.",
        "cor": "#228B22",
      },
    {
        "nome": "git",
        "descricao": "Git é um sistema de controle de versão amplamente adotado para rastrear e gerenciar mudanças no código-fonte, facilitando o trabalho em equipe e o controle de versões.",
        "cor": "#4F4F4F",
      },
    {
      "nome": "MySQL",
      "descricao": " MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto amplamente usado para armazenar, recuperar e gerenciar dados.",
      "cor": "#4682B4",
    },
    {
      "nome": "PostgreSQL",
      "descricao": "PostgreSQL é outro sistema de gerenciamento de banco de dados relacional de código aberto que oferece recursos avançados de escalabilidade e segurança para aplicativos.",
      "cor": "#4169E1",
    },
  ];

document.addEventListener('DOMContentLoaded', () => { // Espera o DOM estar pronto
    const imagens = document.querySelectorAll('.container-habilidades img');
    const habilidade = document.querySelector('.descri-linguagem h1');
    const legenda = document.querySelector('.legenda');

    imagens.forEach((imagem) => {
        imagem.addEventListener('click', () => {
            // Encontre o índice da imagem clicada no array de habilidades
            const index = Array.from(imagens).indexOf(imagem);
            
            // Verifique se o índice é válido
            if (index >= 0 && index < skills.length) {
                habilidade.textContent = skills[index].nome;
                habilidade.style.color = skills[index].cor
                legenda.textContent = skills[index].descricao;
            }
        });
    });
});