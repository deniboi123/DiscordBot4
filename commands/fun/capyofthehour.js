const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('capyothr')
    .setDescription('Capybara of the hour'),
  async execute(interaction) {
    await interaction.reply('https://api.capy.lol/v1/capyhour');
  },
};
