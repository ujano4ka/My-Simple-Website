const express = require('express');
const app = express();
const PORT = 3000;

// Подключаем папку с изображениями как статическую
app.use(express.static('public'));

// Маршрут для главной страницы с надписью и изображением
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8'); // Устанавливаем кодировку UTF-8
    res.send(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <title>Мой простой сайт</title>
        </head>
        <body>
            <h1>Добро пожаловать на мой сайт!</h1>
            <p>Это мой простой сайт, и вот моя картинка:</p>
            <img src="/myimage.jpg" alt="Моя картинка" style="width:300px; height:auto;">
        </body>
        </html>
    `);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
