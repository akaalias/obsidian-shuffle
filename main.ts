import { App, Plugin, Notice, PluginSettingTab, Setting } from 'obsidian';

const OBLIQUE_STRATEGIES = ["Abandon normal instruments.","Accept advice.","Accretion.","A line has two sides.","Balance the consistency principle with the inconsistency principle.","Be dirty.","Breathe more deeply.","Bridges -build -burn.","Cascades.","Cluster analysis.","Consider different fading systems.","Courage!","Cut a vital connection.","Decorate, decorate.","Define an area as 'safe' and use it as an anchor.","Destroy the most important thing.","Discard an axiom.","Disconnect from desire.","Discover the recipes you are using and abandon them.","Distorting time.","Don't be afraid of things because they're easy to do.","Don't be frightened of cliches.","Don't be frightened to display your talents.","Don't stress one thing more than another.","Do something boring.","Do the washing up.","Do the words need changing?","Do we need holes?","Emphasize differences.","Emphasize repetitions.","Emphasize the flaws.","Get your neck massaged.","Give way to your worst impulse.","Go slowly all the way round the outside.","Honor thy error as a hidden intention.","How would you have done it?","Humanize something free of error.","Infinitesimal gradations.","Into the impossible.","Is it finished?","Is there something missing?","Just carry on.","Left channel, right channel, centre channel.","Look at a very small object, look at its centre.","Look at the order in which you do things.","Look closely at the most embarrassing details and amplify them.","Make a blank valuable by putting it in an exquisite frame.","Make an exhaustive list of everything you might do and do the last thing on the list.","Make a sudden, destructive unpredictable action; incorporate.","Only one element of each kind.","Remember those quiet evenings.","Remove ambiguities and convert to specifics.","Remove specifics and convert to ambiguities.","Repetition is a form of change.","Reverse.","Simple subtraction.","Spectrum analysis.","Take a break.","Take away the elements in order of apparent non-importance.","Tidy up.","Turn it upside down.","Twist the spine.","Use an old idea.","Use an unacceptable color.","Water.","What are you really thinking about just now? Incorporate.","What is the reality of the situation?","What mistakes did you make last time?","What wouldn't you do?","Work at a different speed."]

class ShufflePluginSettings {
	variable1Name: string = "WORD";
	variable1Values: string = "Cat\nDog\nKing\nFire\nPaper\nWall\nBook\nWind";
	variable2Name: string = "LETTER";
	variable2Values: string = "a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk\nl";
	variable3Name: string = "LOCATION";
	variable3Values: string = "New York\nLos Angeles\nLondon\nParis\nBerlin";
	shuffleNoteTemplate: string = "## Prompt\n1. Include one of these words: $WORD, $WORD or $WORD\n2. Begin with a word that starts with `$LETTER`\n3. Take place in $LOCATION or $LOCATION\n";
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

		const fileName = `Shuffle Note - ${Date.now()} .md`;

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
			await this.app.vault.adapter.read(filePath);
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

	async loadObliqueStrategies() {
		this.plugin.settings.variable1Name = "OBLIQUE_STRATEGY";
		this.plugin.settings.variable1Values = OBLIQUE_STRATEGIES.join("\n");
		this.plugin.settings.variable2Name = "";
		this.plugin.settings.variable2Values = "";
		this.plugin.settings.variable3Name = "";
		this.plugin.settings.variable3Values = "";
		this.plugin.settings.shuffleNoteTemplate = "\"$OBLIQUE_STRATEGY\"";

		await this.plugin.saveSettings();

		this.display();

		new Notice("Oblique Strategies loaded!");
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Shuffle Settings'});

		containerEl.createEl("h3", {text: "Featured Prompts"});
		containerEl.createEl("p", {text: "Try out new prompts by loading them into your settings. Will replace your custom prompts."});

		containerEl.createEl("button", {text: "⚫️ Load \"Oblique Strategies\" by Brian Eno and Peter Schmidt"})
			.addEventListener("mousedown", this.loadObliqueStrategies.bind(this));

		containerEl.createEl("h3", {text: "Customize Your Prompts"});

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

