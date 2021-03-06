const config        = require('../../data/config.json');
const GuildSettings = require('../../guildSettings.js');
const settings      = GuildSettings.lastSettings();

module.exports = {
    name: 'setprefix',
    description: 'Set Prefix for the Guild',
    args: true,
    guildOnly: true,
    permissions: 'manage_guild',
    execute(message, args) {

        if (args.length > 1) {
            return message.reply(`you can only setup one prefix, gomenesai Senpai~`)
        }

        if (args[0] === settings.get(message, 'prefix', args[0])) {
            return message.reply(`you cant change the prefix to the current prefix, gomenesai Senpai~`)
        }

        if (settings.set(message, 'prefix', args[0])) {
            return message.reply(`the prefix for **${message.guild.name}** was successfuly changed to \`${args[0]}\``)
        } else {
            return message.reply(`something went wrong with changing the prefix, gomenesai Senpai~`)
        }
    },
};