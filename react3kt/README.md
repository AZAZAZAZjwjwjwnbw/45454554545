# React Pokemon App

Приложение для поиска и просмотра информации о покемонах. Позволяет пользователям находить подробную информацию о различных покемонах, включая их вес, рост, типы и визуальное представление.

## Функциональность

- Поиск покемонов по имени
- Просмотр характеристик покемона (вес, рост, типы)
- Отображение изображения покемона
- Адаптивный интерфейс

## Установка и запуск

### Предварительные требования

Проверьте наличие NodeJS:
```bash
node -v


##Если NodeJS не установлен, установите его используя Docker:

```bash
docker pull node:25-alpine
docker run -it --rm --entrypoint sh node:25-alpine

##Установка проекта
Создайте новый проект React с Vite:

```bash
npm create vite@latest <name-project> -- --template react
##Перейдите в директорию проекта:

``bash
cd <name-project>
##Установите зависимости:

``bash
npm install
##Запустите проект:

``bash
npm run dev
##Структура проекта
text
src/
├── components/
│   ├── pokemon-search/
│   │   ├── PokemonSearch.jsx
│   │   └── PokemonSearch.css
│   ├── pokemon-card/
│   │   ├── PokemonCard.jsx
│   │   └── PokemonCard.css
│   └── pokemon-list/
│       ├── PokemonList.jsx
│       └── PokemonList.css
├── pages/
│   ├── home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   └── about/
│       ├── About.jsx
│       └── About.css
├── services/
│   └── pokemon-api.js
├── utils/
│   └── helpers.js
├── assets/
│   └── images/
├── App.jsx
├── App.css
├── main.jsx
└── index.css
##Технологии
React (функциональные компоненты с хуками)

JavaScript

Vite

HTML/CSS

PokeAPI

##Основные компоненты
PokemonSearch
##Компонент для поиска покемонов по имени.

PokemonCard
##Компонент для отображения информации о найденном покемоне.

App
##Главный компонент приложения, управляющий состоянием и логикой.

##Разработчики
React разработчик: alena

##Тестировщик: alena

##UX/UI дизайнер: alena

##Веб-разработчик: alena

##Контакты
Email: alenazivoderova@icloud.com