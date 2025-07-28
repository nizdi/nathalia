# Site da Psicóloga Nathalia Simão

Este repositório contém o código‑fonte de uma **single page application** para a psicóloga **Nathalia Simão**.  O foco do projeto é proporcionar uma presença digital acolhedora e profissional, enfatizando os valores de cuidado e confidencialidade.

## Como rodar localmente

1. **Clone** este repositório e navegue para a pasta do projeto:

   ```bash
   git clone https://github.com/<seu-usuario>/psychologist-site.git
   cd psychologist-site
   ```

2. **Instale** as dependências com o npm (é necessário ter o Node.js instalado):

   ```bash
   npm install
   ```

3. **Inicie** o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   A aplicação será aberta automaticamente no navegador padrão em `http://localhost:3000`.

4. **Gerar um build de produção** (opcional):

   ```bash
   npm run build
   ```

   O comando acima cria a pasta `build` contendo os arquivos prontos para deploy.

## Deploy no GitHub Pages

Este projeto já está configurado para publicação no GitHub Pages.  Para publicar o site no seu perfil do GitHub:

1. Edite o campo `homepage` do arquivo `package.json` para refletir o endereço correto do seu repositório GitHub.  Substitua `<seu-usuario>` pelo seu nome de usuário e, se alterar o nome do repositório, atualize o caminho também:

   ```json
   "homepage": "https://<seu-usuario>.github.io/psychologist-site"
   ```

2. Faça **commit** das alterações e **push** para o GitHub:

   ```bash
   git add .
   git commit -m "Configure homepage"
   git push origin main
   ```

3. Rode o comando de deploy (garanta que o pacote `gh-pages` foi instalado via `npm install`):

   ```bash
   npm run deploy
   ```

   O comando acima cria o build e publica automaticamente o conteúdo da pasta `build` na branch `gh-pages`.  Após alguns minutos o site estará disponível no endereço definido em `homepage`.

## Estrutura de pastas

```text
psychologist-site/
├── package.json           # configuração do npm, scripts e dependências
├── .gitignore             # arquivos e pastas que não são versionados
├── README.md              # instruções de uso e deploy
├── public/
│   └── index.html         # documento HTML base
└── src/
    ├── index.js           # ponto de entrada da aplicação React
    ├── App.jsx            # componente principal com todas as seções
    ├── styles.css         # estilos globais e responsivos
    └── assets/
        ├── hero-bg.png    # imagem do herói (parallax)
        └── about-photo.png# ilustração da psicóloga
```

## Conteúdo

O site é dividido em seções navegáveis através da barra de menu fixo:

* **Hero** – imagem de fundo com parallax, título, subtítulo e botão “Agende uma sessão”.
* **Sobre** – foto ilustrativa e breve descrição da formação, abordagens (TCC, psicanálise etc.) e valores da psicóloga.
* **Serviços** – cards com ícones e textos curtos explicando os tipos de atendimento (online, presencial e grupos).
* **Depoimentos** – slider automático com depoimentos fictícios de clientes.
* **Conteúdo** – prévia de artigos do blog com data, título e snippet.
* **Contato** – formulário para envio de mensagem e links de redes sociais.
* **Rodapé** – informações de contato e disclaimer de confidencialidade.

O visual utiliza uma paleta de tons de roxo, tipografia legível (Poppins) e animações sutis com a biblioteca **AOS**.  A navegação possui `scroll-behavior: smooth` para uma transição suave entre as seções.