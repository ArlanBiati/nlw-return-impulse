<p align="center">
    <img alt="Git Explorer" src="https://user-images.githubusercontent.com/43690080/168031040-43247f9f-d072-4105-9f92-d33220d3c921.png"/>
</p>

<h1 align="center">
	Feedget
</h1>

</br>

<p align="center">Projeto desenvolvido durante o evento NLW, trilha Impulse. Rocketseat</p>

<p align="center">
  <a href="https://github.com/ArlanBiati">
    <img alt="Made by Arlan Biati" src="https://img.shields.io/badge/Made%20by-Arlan%20Biati-2ecc71">
  </a>
  <a href="https://www.linkedin.com/in/arlanbiati/" target="_blank">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-arlanbiati-2ecc71?style=social&logo=linkedin">
  </a>
</p>

</br>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-iniciando-o-projeto">Iniciando o projeto</a>
</p>

</br>

## 🚀 Projeto

Um Component Widget para feedback que pode ser utilizado em qualquer site.


---

</br>

## 🔧 Tecnologias

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Vitejs](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)


---

</br>

## 💻 Iniciando o projeto

### Requerimentos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [Npm](https://www.npmjs.com/package/npm)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli)

**Clone o projeto e acesse a pasta**

```bash
git clone https://github.com/ArlanBiati/nlw-return-impulse && cd nlw-return-impulse
```

**Siga os passos abaixo**

### Server

```zsh
# Na pasta raiz do projeto, acesse a pasta 'server'
❯ cd server

# Instale as dependencias
❯ npm install

# Faça uma cópia de '.env.example' para '.env'
# e defina com SUAS variáveis ​​de ambiente.
❯ cp .env.example .env

#Com o SQLite rodando, execute as migrations
❯ npx prisma migrate dev

# Inicie o server
❯ npm run dev
```
</br>

### Web

**Verifique se o servidor está rodando**

```zsh
# Na pasta raiz do projeto, acesse a pasta 'web'
❯ cd web

# Instale as dependencias
❯ npm install

# Inicie a aplicação
❯ npm run dev
```
</br>

### Mobile

**Verifique se o servidor está rodando**

```zsh
# Na pasta raiz do projeto, acesse a pasta 'mobile'
❯ cd mobile

# Instale as dependencias
❯ npm install

# Se você vai emular no Android, execute o comando
❯ npm run android

# Se você vai emular no IOS, execute o comando
❯ npm run ios

# Ou execute o comando para ambos os ambientes
❯ npm run start
```

---
</br>

Feito com ♥ by [Arlan Biati](https://www.linkedin.com/in/arlanbiati/)