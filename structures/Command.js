const { Command } = require('discord.js-commando');

module.exports = class VegCommand extends Command {
	constructor(client, info) {
		super(client, info);

		this.argsSingleQuotes = info.argsSingleQuotes || false;
		this.throttling = info.throttling || { usages: 1, duration: 2 };
		this.credit = info.credit || [];
		this.credit.push({
			name: 'Vegui Izumi',
			url: 'https://github.com/VeguiIzumi',
			reason: 'Code'
		});
	}
};