const TelegramBot = require('node-telegram-bot-api')
const express = require('express');
const cors = require('cors');

const token = '5528905258:AAHBFk01yrzmkyAyOv1OBMPIM5-Mt0fvYE8'
const webAppUrl = 'https://oleg-telegram-bot-webapp.github.io'

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Webapp', {
            reply_markup: {
                keyboard: [
                    [{text: 'Start webapp', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT))
