module.exports = {
    client: {
        token: process.env.BOT_TOKEN, // Your bot token (.env IS RECOMMENDED) https://discord.com/developers/applications/
        id: process.env.BOT_ID // Your bot ID
    },
    modmail: {
        ownerId: process.env.OWNER_ID, // Your bot owner ID
        guildId: process.env.SERVER_ID, // Your server ID
        categoryId: process.env.MODMAIL_CATEGORY_ID, // The modmail category ID
        staffRoles: [process.env.MODMAIL_STAFF_ROLES], // The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true, // Mention staff roles when there is a new mail?
        color: '#7289DA'
    },
    setPresence: {
        activity1: `Love has a cost, and both of us lost`,
        activity2: `Mostly sleepless🌛`, // The modmail category ID
        activity3: `Mewwme's Everywhere`, // The modmail staff roles IDs
        type: 2, // # 0 = PLAYING, 1 = STREAMING, 2 = LISTENING, 3 = WATCHING, 4 = CUSTOM. 5 = COMPETING
        url: `https://www.youtube.com/watch?v=F-wbcMyeq4A`, // URL optional, only required for certain activity types 3
        status: 'dnd', // online, idle, dnd, invisible
    },
    logs: {
        webhookURL: process.env.WEBHOOK_URL, // The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
