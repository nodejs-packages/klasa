const { UserManager } = require('discord.js');

/**
 * Contains extensions to the base UserManager class
 * @extends external:UserManager
 */
class KlasaUserManager extends UserManager {

	/**
	 * Fetches a user and syncs their settings
	 * @param  {...any} args d.js UserManager#fetch arguments
	 */
	async fetch(...args) {
		const user = await super.fetch(...args);
		await user.settings.sync();
		return user;
	}

}

module.exports = KlasaUserManager;
