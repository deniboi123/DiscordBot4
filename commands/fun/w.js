const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wtobias')
    .setDescription('W'),
  async execute(interaction) {
    await interaction.reply('W Tobias');
  },
};
