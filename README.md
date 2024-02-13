

# MODMAIL LATEST UPDATE

Welcome to DiscordJS-V14-ModMail-Bot, a Discord bot project developed using the powerful npm package discord.js version 14. This bot is designed to efficiently manage modmail on a server, utilizing a single JSON database for seamless communication.

If you find this project useful, please show your support by clicking the star (⭐️) button above this repository. Thank you! 🙏

# Features

- Easy to use and set up.
- Simplifies the management of modmail.
- Robust error handling for a smooth experience.
- Transcript system.
- Webhook logging system.


## Requirements:

- [Node.js](https://nodejs.org/en/): version 16.9.0 or above.
- [discord.js](https://www.npmjs.com/package/discord.js): version 14.14.1
- [horizon-handler](https://www.npmjs.com/package/horizon-handler) (my package): version 1.6.0 or above.
- [mewwme-sqlite](https://www.npmjs.com/package/lrmn7/mewwme-sqlite) (my package): version 2.0.1
- [colors](https://www.npmjs.com/package/ms): any version.

## Setup the project:

To run the project, follow these steps:

1. Download and unzip the source code.
2. Open Visual Studio Code and select the unzipped folder as your workspace.
3. Use `npm init -y` and then `npm i`.
4. Fill in the empty values in the `config.js` file with the required information, you can use `.env` file for more security. Obtain your bot token from the [Discord Developer Portal](https://discord.com/developers).
5. Open the terminal in Visual Studio Code and run `node index.js`, `node .`, or `npm run start`.
6. Enjoy! =)

### Logging Discord webhook:
Create a new integration for a text channel (which is webhook, for sure), and copy it's URL and use it in `config.js` or `.env`. It's just a simple logging system, whichs logs the newly created mail and closed mails.

## Need Assistance?

If you encounter any issues or have questions about this project, please create an issue on this repository. I will respond to your inquiries as quickly as possible. Your feedback is valuable and helps improve the project.