const { Events, Interaction } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	/**
	 * 
	 * @param {Interaction} interaction
	 */
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}
			let x;
        	if(interaction.member) x = interaction.member
        	if(interaction.user) x = interaction.user
			interaction.genUserID = x.id
				try {
					interaction.botUserData = res
					await command.execute(interaction);
				} catch (error) {
					console.error(`Error executing ${interaction.commandName}`);
					console.error(error);
			}	
		}else if (interaction.isButton() || interaction.isStringSelectMenu()) {
			if(interaction.member) x = interaction.member
        	if(interaction.user) x = interaction.user
			interaction.genUserID = x.id
			const command = interaction.client.buttons.get(interaction.customId);
			if(!command){
				return interaction.reply("There was an error")
			}
			try{
				await command.execute(interaction)
			}catch(e){
				return console.log(e)
			}
		}else if(interaction.isAutocomplete()){
			const command = interaction.client.commands.get(interaction.commandName)
			if (!command) {
				return;
			}
			try {
				command.autocomplete(interaction);
			} catch (error) {
				console.error(error);
			}
		}else if(interaction.isMessageContextMenuCommand()){
			const command = interaction.client.commands.get(interaction.commandName)
			if(interaction.member) x = interaction.member
        	if(interaction.user) x = interaction.user
			interaction.genUserID = x.id
			if (!command) {
				return;
			}
			try {
				command.execute(interaction);
			} catch (error) {
				console.error(error);
			}
		}else if(interaction.isUserContextMenuCommand()){
			const command = interaction.client.commands.get(interaction.commandName)
			if(interaction.member) x = interaction.member
        	if(interaction.user) x = interaction.user
			interaction.genUserID = x.id
			if (!command) {
				return;
			}
			try {
				command.execute(interaction);
			} catch (error) {
				console.error(error);
			}
		}
	},
};
