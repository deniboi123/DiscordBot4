// https://api.capy.lol/v1/capybara

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('capybara')
    .setDescription('Random Picture Of Capybaras'),
  async execute(interaction) {
 
    await interaction.reply('https://api.capy.lol/v1/capybara');

  },
};
