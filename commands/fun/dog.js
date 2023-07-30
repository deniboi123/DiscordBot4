const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dog')
    .setDescription('Random Picture Of Dog'),
  async execute(interaction) {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await response.json();
    await interaction.reply(dog.message);

  },
};
