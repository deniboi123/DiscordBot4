const { SlashCommandBuilder } = require('discord.js');
const { Client }  = require('discord.js');



module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Provides bot uptime'),


  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild

    await interaction.reply(`${process.uptime()}s`);
  },
};