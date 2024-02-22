import { Bot, Context } from 'grammy';
import { run } from '@grammyjs/runner';
import { simulateAndHandleTransaction } from './sample_export';

require('dotenv').config()

export const botToken = process.env.BOT_TOKEN
if (!botToken) {
    console.error('Bot cannot be started without a token.')
    process.exit(1)
}
// 1. Create a bot instance with the provided token
const bot = new Bot<Context>(botToken)

// 2. Handle text messages with the simulateAndHandleTransaction function
bot.on('message:text', async (ctx) => {
    const response = await simulateAndHandleTransaction();
    await ctx.reply(response);
});

// Start the bot
run(bot);
