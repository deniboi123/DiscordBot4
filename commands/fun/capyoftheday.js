const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('capyotd')
    .setDescription('Capybara of the day'),
  async execute(interaction) {
    await interaction.reply('https://api.capy.lol/v1/capyoftheday');
  },
};
