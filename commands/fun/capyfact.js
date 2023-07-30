const { SlashCommandBuilder } = require('discord.js');
// https://api.capy.lol/v1/fact
const api_url ="https://api.capy.lol/v1/fact";

module.exports = {
  data: new SlashCommandBuilder()
    .setName('capyfact')
    .setDescription('Capybara Fact'),
  async execute(interaction) {
    const response = await fetch(api_url);
    const dog = await response.json();

    await interaction.reply(`${dog["data"]["fact"]}`);

  },
};
