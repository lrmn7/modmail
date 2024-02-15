module.exports = {
    client: {
        token: process.env.BOT_TOKEN,
        id: process.env.BOT_ID
    },
    modmail: {
        ownerId: process.env.OWNER_ID,
        guildId: process.env.SERVER_ID,
        categoryId: process.env.MODMAIL_CATEGORY_ID,
        staffRoles: [process.env.MODMAIL_STAFF_ROLES],
        mentionStaffRolesOnNewMail: true,
        color: '#7289DA'
    },
    setPresence: {
        activity1: `Love has a cost, and both of us lost`,
        activity2: `Mostly sleepless🌛`,
        activity3: `Mewwme's Everywhere`,
        customStatus: "Need help support? DM!",
        type: 4, // 0 = PLAYING, 1 = STREAMING, 2 = LISTENING, 3 = WATCHING, 4 = CUSTOM. 5 = COMPETING
        url: `https://www.youtube.com/watch?v=F-wbcMyeq4A`,
        status: 'online',
    },    
    logs: {
        webhookURL: process.env.WEBHOOK_URL,
    }
};
