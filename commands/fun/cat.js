const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Random Picture Of Cats'),
  async execute(interaction) {
 
    await interaction.reply('https://cataas.com/cat');

  },
};
