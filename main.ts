import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

class ShufflePluginSettings {
	variable1Name: string;
	variable1Values: string;
	variable2Name: string;
	variable2Values: string;
	variable3Name: string;
	variable3Values: string;
	shuffleNoteTemplate: string;
}

export default class ShufflePlugin extends Plugin {
	settings: ShufflePluginSettings;

	async onload() {
		this.loadSettings();
		this.addSettingTab(new ShufflePluginSettingTab(this.app, this));
		this.addRibbonIcon('dice', 'Shuffle Plugin', () => {
			this.createShuffleNote();
		});
	}

	onunload() {}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	loadSettings() {
		this.settings = new ShufflePluginSettings();
		(async () => {
			const loadedSettings = await this.loadData();
			if (loadedSettings) {
				this.settings.variable1Name = loadedSettings.variable1Name;
				this.settings.variable1Values = loadedSettings.variable1Values;
				this.settings.variable2Name = loadedSettings.variable2Name;
				this.settings.variable2Values = loadedSettings.variable2Values;
				this.settings.variable3Name = loadedSettings.variable3Name;
				this.settings.variable3Values = loadedSettings.variable3Values;
				this.settings.shuffleNoteTemplate = loadedSettings.shuffleNoteTemplate;
			} else {
				await this.saveData(this.settings);
			}
		})();
	}


	async createShuffleNote() {
		let result = this.settings.shuffleNoteTemplate;

		let variable1 = "$" + this.settings.variable1Name;
		let values1 = this.settings.variable1Values.split("\n");

		let variable2 = "$" + this.settings.variable2Name;
		let values2 = this.settings.variable2Values.split("\n");

		let variable3 = "$" + this.settings.variable3Name;
		let values3 = this.settings.variable3Values.split("\n");

		if(values1.length > 0) result = this.replaceVariablesInTemplate(result, variable1, values1);
		if(values2.length > 0) result = this.replaceVariablesInTemplate(result, variable2, values2);
		if(values3.length > 0) result = this.replaceVariablesInTemplate(result, variable3, values3);

		const fileName = "Shuffle Note.md"

		await this.saveShuffleNote(fileName, result);
		await this.app.workspace.openLinkText(fileName, '', true);
	}

	private replaceVariablesInTemplate(template: string, variable: string, values: string[]) {
		while(template.includes(variable)) {
			template = template.replace(variable, this.pickRandomly(values));
		}
		return template;
	}

	async saveShuffleNote(filePath: string, mdString: string) {
		const fileExists = await this.app.vault.adapter.exists(filePath);
		if (fileExists) {
			await this.app.vault.adapter.write(filePath, mdString);
		} else {
			await this.app.vault.create(filePath, mdString);
		}
	}

	// @ts-ignore
	shuffle(array) {
		for(let i = array.length - 1; i > 0; i--){
			const j = Math.floor(Math.random() * i)
			const temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}

		return array;
	}

	// @ts-ignore
	pickRandomly(array) {
		return this.shuffle(array)[0];
	}
}

class ShufflePluginSettingTab extends PluginSettingTab {
	plugin: ShufflePlugin;

	constructor(app: App, plugin: ShufflePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Shuffle Settings'});

		new Setting(containerEl)
			.setName('Variable #1 Name')
			.setDesc('For example, enter WORD here and then, in your template, use $WORD to invoke a randomly selected value.')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.variable1Name)
				.onChange(async (value) => {
					this.plugin.settings.variable1Name = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Variable #1 Values')
			.setDesc('Create a list of values that variable #1 will be randomly replaced with in your template. One value per line.')
			.addTextArea(text => text
				.setPlaceholder('Dog\nCat\nBefore dawn\nWith fire')
				.setValue(this.plugin.settings.variable1Values)
				.onChange(async (value) => {
					this.plugin.settings.variable1Values = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Variable #2 Name')
			.setDesc('For example, enter LOCATION here and then, in your template, use $LOCATION to invoke a randomly selected value.')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.variable2Name)
				.onChange(async (value) => {
					this.plugin.settings.variable2Name = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Variable #2 Values')
			.setDesc('Create a list of values that variable #1 will be randomly replaced with in your template. One value per line.')
			.addTextArea(text => text
				.setPlaceholder('New York\nAustin\nParis\nBerlin')
				.setValue(this.plugin.settings.variable2Values)
				.onChange(async (value) => {
					this.plugin.settings.variable2Values = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Variable #3 Name')
			.setDesc('For example, enter ACTION here and then, in your template, use $ACTION to invoke a randomly selected value.')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.variable3Name)
				.onChange(async (value) => {
					this.plugin.settings.variable3Name = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Variable #3 Values')
			.setDesc('Create a list of values that variable #1 will be randomly replaced with in your template. One value per line.')
			.addTextArea(text => text
				.setPlaceholder('Run\nHide\nBuy\nCut')
				.setValue(this.plugin.settings.variable3Values)
				.onChange(async (value) => {
					this.plugin.settings.variable3Values = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Shuffle Note Template')
			.setDesc('Create your own template for your writing prompts using your variables.')
			.addTextArea(text => text
				.setPlaceholder('Include these 3 words: $WORD $WORD $WORD $WORD $WORD\n')
				.setValue(this.plugin.settings.shuffleNoteTemplate)
				.onChange(async (value) => {
					this.plugin.settings.shuffleNoteTemplate = value;
					await this.plugin.saveSettings();
				}));

	}
}
