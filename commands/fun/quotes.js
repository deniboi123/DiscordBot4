const { SlashCommandBuilder } = require('discord.js');
// https://api.capy.lol/v1/fact
const api_url ="https://zenquotes.io/api/quotes/";

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quotes')
    .setDescription('Random quotes'),
  async execute(interaction) {
    const response = await fetch(api_url);
    const dog = await response.json();

    await interaction.reply(`${dog["0"]["q"]} - ${dog["0"]["a"]}`);

  },
};
