const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
	        .setContexts([0,1,2])
		.setIntegrationTypes([0]),
	async execute(interaction) {
			interaction.reply({content:'Pong!'});	
	},
};
