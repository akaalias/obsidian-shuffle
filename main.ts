import { App, Plugin, Notice, PluginSettingTab, Setting } from 'obsidian';

const OBLIQUE_STRATEGIES = ["Abandon normal instruments.","Accept advice.","Accretion.","A line has two sides.","Balance the consistency principle with the inconsistency principle.","Be dirty.","Breathe more deeply.","Bridges -build -burn.","Cascades.","Cluster analysis.","Consider different fading systems.","Courage!","Cut a vital connection.","Decorate, decorate.","Define an area as 'safe' and use it as an anchor.","Destroy the most important thing.","Discard an axiom.","Disconnect from desire.","Discover the recipes you are using and abandon them.","Distorting time.","Don't be afraid of things because they're easy to do.","Don't be frightened of cliches.","Don't be frightened to display your talents.","Don't stress one thing more than another.","Do something boring.","Do the washing up.","Do the words need changing?","Do we need holes?","Emphasize differences.","Emphasize repetitions.","Emphasize the flaws.","Get your neck massaged.","Give way to your worst impulse.","Go slowly all the way round the outside.","Honor thy error as a hidden intention.","How would you have done it?","Humanize something free of error.","Infinitesimal gradations.","Into the impossible.","Is it finished?","Is there something missing?","Just carry on.","Left channel, right channel, centre channel.","Look at a very small object, look at its centre.","Look at the order in which you do things.","Look closely at the most embarrassing details and amplify them.","Make a blank valuable by putting it in an exquisite frame.","Make an exhaustive list of everything you might do and do the last thing on the list.","Make a sudden, destructive unpredictable action; incorporate.","Only one element of each kind.","Remember those quiet evenings.","Remove ambiguities and convert to specifics.","Remove specifics and convert to ambiguities.","Repetition is a form of change.","Reverse.","Simple subtraction.","Spectrum analysis.","Take a break.","Take away the elements in order of apparent non-importance.","Tidy up.","Turn it upside down.","Twist the spine.","Use an old idea.","Use an unacceptable color.","Water.","What are you really thinking about just now? Incorporate.","What is the reality of the situation?","What mistakes did you make last time?","What wouldn't you do?","Work at a different speed."]
const CONVERSATION_STARTERS = ["If You Had Three Wishes, What Would You Wish For?","What Would You Rather Throw Away: Love Or Money?","What's The Most Beautiful Place You've Ever Seen?","What Was Your Fondest Memory Of High School?","What's Your Favorite TV Show?","What's The Strangest Thing In Your Refrigerator?","Would You Rather Hear The Music Of Johann Sebastian Bach Played By A Barbershop Quartet, Or A Heavy Metal Band?","Have You Ever Been To A Five Star Resort?","What Was Your Favorite Toy Growing Up?","What's The Funniest Way You've Ever Broken The Law?","What's Your Favorite Sports Team?","What Talent Would You Want To Possess If You Could?","If You Could Trade Lives With Someone, Who Would It Be?","If You Could Erase One Event From History, Which One Would You Erase?","What Was Your Favorite Toy As A Child?","Who Do You Most Like To Poke Fun At?","If You Were Suddenly Transported To Another Planet, How Would You Assess The Situation?","When Do You Feel The Most In Control?","Would You Rather Have 10 Hobbies Or One Passion?","What's Your Favorite Movie?","If You Could Interview A Famous Person, Who Would You Choose?","If Your Food Is Bad At A Restaurant, Would You Say Something?","If You Could Only Use One Word The Rest Of Your Life, What Word Would You Choose?","What Are Your Dreams And Ambitions?","You've Been Given An Elephant. You Can't Get Rid Of It. What Would You Do With It?","What's The Funniest Thing You've Seen On The News?","If You Had The World's Attention For 30 Seconds, What Would You Say?","If You Could Be Best Friends With A Celebrity, Who Would It Be?","If You Were To Play A Song You Love Right Now, What Would It Be?","Would You Rather Look Like A Potato, Or Feel Like A Potato?","What Would You Do With 10 Million Dollars?","How Can You Tell If Someone Has A Sense Of Humor?","If You Were To Name Your Own Song, What Would You Name It?","If You Were In A Room Filled With You And Your Doppelganger And 2 Million Dollars, What Would You Do?","What Is In Your Fridge Right Now?","What Have You Learned About Life From Kids?","How Would You Want To Be Remembered?","What Do You Hope Your Deceased Relative Would Say About You If They Saw You Now?","If You Could Change Your Name, What Would You Change It To?","What's The Strangest Thing That You've Ever Fallen In Love With?","If You Could Have Any Super Power, Which One Would You Choose?","If You Were Invited To Attend Hogwarts, Which Hogwarts House Would You Choose?","What Were The Highlights Of Your Childhood?","Have You Ever Kept A Secret For More Than A Decade?","What's The Most Important Thing You've Learned From A Celebrity?","Do You Care About Reviews?","What Would Be The Perfect Crime?","What's The Stupidest Thing You've Ever Done?","Spontaneity Or Stability?","What's The Funniest Movie You've Ever Seen?","When Did You Last Meet A Stranger You Thought You'd Never Meet Again?","Do You Save Or Spend?","How Much Does The Amount Of Traffic Affect Your Mood?","If You Had To Choose One Animal To Have As A Pet, Which Animal Would You Choose?","What's Your Worst Habit?","Do they like to take a stand or just let things go?","What's Your Favorite Song?","How Do You Think The World Would Be Different If Bananas Were Illegal?","Would You Rather Be Able To Control Time, Or Be Able To Know What Other People Are Thinking?","Is It Difficult To Do What You Do?","Who Is Your Favorite Celebrity?","If You Found $2,000 On The Ground, What Would You Do With It?","What's Your Favorite Pizza Topping?","What Would You Do If You Could Possess The Abilities Of Your Dog?","What's The Smartest Thing You've Ever Done?"]
const FLASH_FICTION_PACK = {"variable1Name":"WORD","variable1Values":"account\nmiddle\nact\nmilk\nadjustment\nmind\nmine\nagreement\nminute\nair\nmist\namount\namusement\nmonth\nanimal\nmorning\nanswer\nmother\napparatus\nmotion\napproval\nmountain\nargument\nmove\nart\nmusic\nattack\nname\nattempt\nnation\nattention\nneed\nattraction\nnews\nauthority\nnight\nback\nnoise\nbalance\nnote\nAmaranth\nAmber\nAmethyst\nApricot\nAqua\nAquamarine\nAsparagus\nAuburn\nAzure\nBeige\nBistre\nBlack\nBlue\nBrass\nBronze\nBrown\nBuff\nBurgundy\nCamouflage\nCardinal\nCarmine\nCarrot\nCeladon\nCerise\nCerulean\nChampagne\nCharcoal\nChartreuse\nCherry\nChestnut\nChocolate\nCinnabar\nCinnamon\nCobalt\nCopper\nCoral\nCorn\nCornflower\nCream\nCrimson\nCyan\nEmerald\nEggplant\nFlax\nFrench Rose\nGold\nGoldenrod\nGreen\nGrey\nIndigo\nIvory\nJade\nKhaki\nLavender\nLemon\nLilac\nLime\nLinen\nMagenta\nMagnolia\nMalachite\nMaroon\nMauve\nMustard\nMyrtle\nNavy\nOchre\nOlive\nOrange\nOrchid\nPeach\nPear\nPeriwinkle\nPersimmon\nPine Green\nPink\nPlatinum\nPlum\nPumpkin\nPurple\nQuartz\nRaw umber\nRose\nRuby\nRusset\nRust\nSaffron\nSalmon\nSandy brown\nSangria\nSapphire\nScarlet\nSeashell\nSepia\nSlate\nSilver\nTan\nTangerine\nTaupe\nTeal\nTawny\nTerra cotta\nThistle\nTomato\nTurquoise\nUltramarine\nVermilion\nViolet\nViridian\nWheat\nWhite\nWisteria\nXanthic\nYellow\nZucchini\nbase\nnumber\nbehavior\nobservation\nbelief\noffer\nbirth\noil\nbit\noperation\nbite\nopinion\nblood\norder\nblow\norganization\nbody\nornament\nbrass\nowner\nbread\npage\nbreath\npain\nbrother\npaint\nbuilding\npaper\nburn\npart\nburst\npaste\nbusiness\npayment\nbutter\npeace\ncanvas\nperson\ncare\nplace\ncause\nplant\nchalk\nplay\nchance\npleasure\nchange\npoint\ncloth\npoison\ncoal\npolish\ncolor\nporter\ncomfort\nposition\ncommittee\npowder\ncompany\npower\ncomparison\nprice\ncompetition\nprint\ncondition\nprocess\nconnection\nproduce\ncontrol\nprofit\ncook\nproperty\ncopper\nprose\ncopy\nprotest\ncork\npull\ncopy\npunishment\ncough\npurpose\ncountry\npush\ncover\nquality\ncrack\nquestion\ncredit\nrain\ncrime\nrange\ncrush\nrate\ncry\nray\ncurrent\nreaction\ncurve\nreading\ndamage\nreason\ndanger\nrecord\ndaughter\nregret\nday\nrelation\ndeath\nreligion\ndebt\nrepresentative\ndecision\nrequest\ndegree\nrespect\ndesign\nrest\ndesire\nreward\ndestruction\nrhythm\ndetail\nrice\ndevelopment\nriver\ndigestion\nroad\ndirection\nroll\ndiscovery\nroom\ndiscussion\nrub\ndisease\nrule\ndisgust\nrun\ndistance\nsalt\ndistribution\nsand\ndivision\nscale\ndoubt\nscience\ndrink\nsea\ndriving\nseat\ndust\nsecretary\nearth\nselection\nedge\nself\neducation\nsense\neffect\nservant\nend\nerror\nshade\nevent\nshake\nexample\nshame\nexchange\nshock\nexistence\nside\nexpansion\nsign\nexperience\nsilk\nexpert\nsilver\nfact\nsister\nfall\nsize\nfamily\nsky\nfather\nsleep\nfear\nslip\nfeeling\nslope\nfiction\nsmash\nfield\nsmell\nfight\nsmile\nfire\nsmoke\nflame\nsneeze\nflight\nsnow\nflower\nsoap\nfold\nsociety\nfood\nson\nforce\nsong\nform\nsort\nfriend\nsound\nfront\nsoup\nfruit\nspace\nglass\nstage\ngold\nstart\ngovernment\nstatement\ngrain\nsteam\ngrass\nsteel\ngrip\nstep\ngroup\nstitch\ngrowth\nstone\nguide\nstop\nharbor\nstory\nharmony\nstretch\nhate\nstructure\nhearing\nsubstance\nheat\nsugar\nhelp\nsuggestion\nhistory\nsummer\nhole\nsupport\nhope\nsurprise\nhour\nswim\nhumor\nsystem\nice\ntalk\nidea\ntaste\nimpulse\ntax\nincrease\nteaching\nindustry\ntendency\nink\ntest\ninsect\ntheory\ninstrument\nthing\ninsurance\nthought\ninterest\nthunder\ninvention\ntime\niron\ntin\njelly\ntop\njoin\ntouch\njourney\ntrade\njudge\ntransport\njump\ntrick\nkick\ntrouble\nkiss\nturn\nknowledge\ntwist\nland\nunit\nlanguage\nuse\nlaugh\nvalue\nlow\nverse\nlead\nvessel\nlearning\nview\nleather\nvoice\nletter\nwalk\nlevel\nwar\nlift\nwash\nlight\nwaste\nlimit\nwater\nlinen\nwave\nliquid\nwax\nlist\nway\nlook\nweather\nloss\nweek\nlove\nweight\nmachine\nwind\nman\nwine\nmanager\nwinter\nmark\nwoman\nmarket\nwood\nmass\nwool\nmeal\nword\nmeasure\nwork\nmeat\nwound\nmeeting\nwriting\nmemory\nyear\nmetal\nworm\nangle\nknee\nant\nknife\napple\nknot\narch\nleaf\narm\nleg\narmy\nlibrary\nbaby\nline\nbag\nlip\nball\nlock\nband\nmap\nbasin\nmatch\nbasket\nmonkey\nbath\nmoon\nbed\nmouth\nbee\nmuscle\nbell\nnail\nberry\nneck\nbird\nneedle\nblade\nnerve\nboard\nnet\nboat\nnose\nbone\nnut\nbook\noffice\nboot\norange\nbottle\noven\nbox\nparcel\nboy\npen\nbrain\npencil\nbrake\npicture\nbranch\npig\nbrick\npin\nbridge\npipe\nbrush\nplane\nbucket\nplate\nbulb\nplough\nbutton\npocket\ncake\npot\ncamera\npotato\ncard\nprison\ncarriage\npump\ncart\nrail\ncat\nrat\nchain\nreceipt\ncheese\nring\nchess\nrod\nchin\nroof\nchurch\nroot\ncircle\nsail\nclock\nschool\ncloud\nscissors\ncoat\nscrew\ncollar\nseed\ncomb\nsheep\ncord\nshelf\ncow\nship\ncup\nshirt\ncurtain\nshoe\ncushion\nskin\ndog\nskirt\ndoor\nsnake\ndrain\nsock\ndrawer\nspade\ndress\nsponge\ndrop\nspoon\near\nspring\negg\nsquare\nengine\nstamp\neye\nstar\nface\nstation\nfarm\nstem\nfeather\nstick\nfinger\nstocking\nfish\nstomach\nflag\nstore\nfloor\nstreet\nfly\nsun\nfoot\ntable\nfork\ntail\nfowl\nthread\nframe\nthroat\ngarden\nthumb\ngirl\nticket\nglove\ntoe\ngoat\ntongue\ngun\ntooth\nhair\ntown\nhammer\ntrain\nhand\ntray\nhat\ntree\nhead\ntrousers\nheart\numbrella\nhook\nwall\nhorn\nwatch\nhorse\nwheel\nhospital\nwhip\nhouse\nwhistle\nisland\nwindow\njewel\nwing\nkettle\nwire\nkey","variable2Name":"LETTER","variable2Values":"a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk\nl\nm\nn\no\np\nq\nr\ns\nt\nu\nv\nw\nx\ny\nz","variable3Name":"CHARACTER","variable3Values":"Anthropomorphic Personification\nAnti-Hero\nThe Archmage\nAudience Surrogate\nBarefoot Sage\nBlind Seer\nBlue-Collar Warlock\nBruiser with a Soft Center\nThe Chosen One\nThe Chooser of The One\nClassical Hunter\nClassic Villain\nThe Cynic\nThe Dragonslayer\nThe Drunken Sailor\nDumb Muscle\nEccentric Mentor\nEvil Overlord\nThe Fair Folk\nFalse Prophet\nThe Ferryman\nThe Fool\nFool for Love\nGentle Giant\nThe Good King\nHerald\nThe Hero\nHeroic Wannabe\nHigher Self\nHunter of Monsters\nThe Idealist\nIneffectual Loner\nThe Klutz\nKnight in Shining Armor\nLady and Knight\nLovable Rogue\nMadonna Archetype\nThe McCoy\nMentor Archetype\nMessiah Figure\nMock Millionaire\nModern Major General\nMoses Archetype\nMy Girl Back Home\nObstructive Bureaucrat\nOld Soldier\nThe Paladin\nThe Paragon\nThe Patriarch\nPerson of Mass Destruction\nPrince Charming\nRebel Leader\nRebellious Spirit\nReluctant Monster\nSeeker Archetype\nSidekick\nThe Sociopath\nStar-Crossed Lovers\nThe Storyteller\nTurn Coat\nThe Trickster\nWicked Stepmother\nWicked Witch\nWolf Man\nWorld's Best Warrior\nWorld's Most Beautiful Woman\nWorld's Strongest Man\nAbsent-Minded Professor\nThe believer\nThe skeptic\nAngry Chef\nAntagonistic Governor\nAnthropomorphic Animal\nBad Boss\nBadass Normal\nBarbarian Tribe\nThe Barber\nThe Bard\nThe Bartender\nBattle Butler\nBenevolent Precursors\nThe Berserker\nThe Big Bad Wolf\nBig Eater\nBlood Knight\nBounty Hunter\nBridezilla\nBumbling Dad\nBumbling Sidekick\nInsane Ruler\nThe Care Taker\nThe Charmer\nChatty Hairdresser\nChick Magnet\nChildhood Friend\nChivalrous Pervert\nChurch Militant\nCity Mouse\nClass Clown\nControl Freak\nCorrupt Corporate Executive\nCosmic Plaything\nCowboy Cop\nCranky Landlord\nCranky Neighbor\nCrooked Contractor\nCrossdresser\nCrouching Moron, Hidden Badass\nDad the Veteran\nDamsel Errant\nDark Messiah\nDark-Skinned Redhead\nDashing Hispanic\nDeath Seeker\nDeceptive Disciple\nDefector from Decadence\nDefrosting Ice Queen\nDeranged Taxi Driver\nDeterminator\nDetermined Widow\nDirty Coward\nThe Ditz\nBrainless Beauty\nGenius Ditz\nIdiot Savant\nUpper-Class Twit\nDumb Muscle\nDogged Nice Guy\nDoting Parent\nDouble Agent\nDream People\nDrill Sergeant Nasty\nThe Friendly Landlord\nDr. Jerk\nWorking-class hooligan\nThe Eeyore\nElegant Classical Musician\nEnigmatic Empowering Entity\nErudite Stoner\nEthnic Magician\nThe Everyman\nEvil Matriarch\nFace of a Thug\nFalse Prophet\nFarmer's Daughter\nFemme Fatale\nThe Fighting Narcissist\nThe Flapper\nForest Ranger\nGadgeteer Genius\nGirl Next Door\nGlory Hound\nGlory Seeker\nGold Digger\nBeautiful Foreigner\nGrande Dame\nGroupie\nGuile Hero\nHandsome Lech\nHalf-Human Hybrid\nHalf-Identical Twins\nHalf-Witted Hillbilly\nHardboiled Detective\nHead-Turning Beauty\nHeaven Seeker\nHell Seeker\nHeavy Sleeper\nYe Olde Hermit\nHonest John's Dealership\nHouse Husband\nHuman Weapon\nIgnorant of Their Own Ignorance\nMad Scientist's Helper\nThe Informant\nIntrepid Merchant\nKid Hero\nKindly Housekeeper\nThe Klutz\nKnight in Shining Armor\nKnow-Nothing Know-It-All\nLethal Chef\nLiteral-Minded\nLittle Jimmy\nLiving Legend\nLoony Fan\nLower-Class Lout\nMad Scientist\nMaster Swordsman\nBoastful Coward\nThe Most Wanted\nMysterious Waif\nNarcissist\nThe Nicknamer\nNon-Powered Costumed Hero\nNot with Them for the Money\nOne of the Boys\nOne-Note Cook\nOpen-Minded Parent\nOutside Man, Inside Man\nOverly Polite Pals\nPeerless Love Interest\nPerson of Mass Destruction\nPint-Sized Powerhouse\nPlucky Comic Relief\nPlucky Office Girl\nThe Nice Cheerleader\nPrince of Pranksters\nProud Warrior Race Guy\nPsycho Supporter\nThe Quarterback\nThe Reliable One\nRenaissance Man\nReplacement Goldfish\nThe Rival\nThe Roadie\nThe Rock Star\nRomantic Runner-Up\nSchool Nurse\nSelf-Made Man\nSerial Romeo\nThe Scrooge\nThe Shrink\nShrinking Violet\nSickly Neurotic Geek\nSingle-Issue Landlord\nSleazy Politician\nSmart Jerk\nNice Moron\nSmooth-Talking Talent Agent\nThe Snark Knight\nSouthern Belle\nSpirited Competitor\nStage Magician\nStarving Artist\nStarving Student\nStupid Boss\nSupreme Chef\nTall, Dark, and Handsome\nThird-Person Person\nToken Houseguest\nTomboy\nTrue Craftsman\nUnsatisfiable Customer\nUnstoppable Mailman\nWandering Minstrel\nWet Blanket Wife\nWhite Collar Worker\nWilling Channeler\nWinged Humanoid\n","shuffleNoteTemplate":"## The Prompt\n\nWrite a piece of flash fiction between 500 and 999 words that:\n\n* Includes each of the following words: $WORD, $WORD, $WORD.\n* Begins with the letter $LETTER.\n* Involves a character who matches the following archetypal trope: $CHARACTER\n\n<!-- Tips from Mary Robinette Kowal:\n\n1. In the first 2-3 sentences, establish:\n- [ ] who, using an action\n- [ ] where, with a sensory detail\n- [ ] genre, with a specific, unique detail.\n\nIn the next two sentences, set up the goal, the stakes (what are they trying to accomplish and why?) and the obstacle (what stands in their way?\n-->\n\n## The Story"}


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

	async loadPrompts(variable1Name: string, variable1Values: string[], template: string, variable2Name: string, variable2Values: string[], variable3Name: string, variable3Values: string[]) {
		this.plugin.settings.variable1Name = variable1Name;
		this.plugin.settings.variable1Values = variable1Values.join("\n");
		this.plugin.settings.variable2Name = variable2Name;
		this.plugin.settings.variable2Values = variable2Values.join("\n");
		this.plugin.settings.variable3Name = variable3Name;
		this.plugin.settings.variable3Values = variable3Values.join("\n");
		this.plugin.settings.shuffleNoteTemplate = template;

		await this.plugin.saveSettings();

		this.display();
	}

	loadFlashFictionPack() {
		const variable1Name = FLASH_FICTION_PACK.variable1Name;
		const variable1Values = FLASH_FICTION_PACK.variable1Values.split("\n");
		const variable2Name = FLASH_FICTION_PACK.variable2Name;
		const variable2Values = FLASH_FICTION_PACK.variable2Values.split("\n");
		const variable3Name = FLASH_FICTION_PACK.variable3Name;
		const variable3Values = FLASH_FICTION_PACK.variable3Values.split("\n");

		const template = FLASH_FICTION_PACK.shuffleNoteTemplate;

		this.loadPrompts(variable1Name, variable1Values, template, variable2Name, variable2Values, variable3Name, variable3Values);
	}

	async loadConversationStarters() {
		this.loadPrompts("CONVERSATION_STARTER", CONVERSATION_STARTERS, "## $CONVERSATION_STARTER", "", [], "", []);
	}

	async loadObliqueStrategies() {
		this.loadPrompts("OBLIQUE_STRATEGY", OBLIQUE_STRATEGIES, "\"$OBLIQUE_STRATEGY\"", "", [], "", []);
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Shuffle Settings'});

		containerEl.createEl("h3", {text: "Featured Prompts"});
		containerEl.createEl("p", {text: "Try out new prompts by loading them into your settings. Will replace your custom prompts."});

		containerEl.createEl("button", {text: "⚫️ \"Oblique Strategies\" by Brian Eno and Peter Schmidt", cls: 'shuffle-pack-button'})
			.addEventListener("mousedown", this.loadObliqueStrategies.bind(this));
		containerEl.createEl("br");

		containerEl.createEl("button", {text: "⚡️ \"Flash Fiction Pack\" by Eleanor Konik", cls: 'shuffle-pack-button'})
			.addEventListener("mousedown", this.loadFlashFictionPack.bind(this));
		containerEl.createEl("br");

		// containerEl.createEl("button", {text: "❓️ \"Conversation Starter Pack\" from Brightful.com", cls: 'shuffle-pack-button'})
		// .addEventListener("mousedown", this.loadConversationStarters.bind(this));
		// containerEl.createEl("br");

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

