const { SlashCommandBuilder } = require("discord.js");
const { commandshandler } = require("..");

module.exports = new commandshandler.command({
    type: 1,
    structure: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Set animated avatar for your bot')
        .addAttachmentOption(option => option.setName('avatar').setDescription('The animated GIF avatar').setRequired(true)),
    run: async (client, interaction) => {
        const { options } = interaction;
        const avatar = options.getAttachment('avatar');
        
        try {
            // Menunda respon sementara saat bot sedang memproses permintaan
            await interaction.deferReply({ ephemeral: true });
            
            if (!avatar || avatar.contentType !== 'image/gif') {
                await interaction.reply({
                    content: 'Please provide a valid animated GIF avatar.',
                    ephemeral: true
                });
                return;
            }
            
            // Mengubah avatar bot menggunakan URL GIF yang diberikan
            await client.user.setAvatar(avatar.url);
            
            // Merespons dengan pesan yang menunjukkan keberhasilan pengaturan avatar
            await interaction.editReply({
                content: 'Animated avatar successfully set!',
                ephemeral: true
            });
        } catch (error) {
            console.error('Error setting animated avatar:', error);
            await interaction.reply({
                content: 'An error occurred while setting the animated avatar.',
                ephemeral: true
            });
        }
    }
});
