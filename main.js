'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var OBLIQUE_STRATEGIES = ["Abandon normal instruments.", "Accept advice.", "Accretion.", "A line has two sides.", "Balance the consistency principle with the inconsistency principle.", "Be dirty.", "Breathe more deeply.", "Bridges -build -burn.", "Cascades.", "Cluster analysis.", "Consider different fading systems.", "Courage!", "Cut a vital connection.", "Decorate, decorate.", "Define an area as 'safe' and use it as an anchor.", "Destroy the most important thing.", "Discard an axiom.", "Disconnect from desire.", "Discover the recipes you are using and abandon them.", "Distorting time.", "Don't be afraid of things because they're easy to do.", "Don't be frightened of cliches.", "Don't be frightened to display your talents.", "Don't stress one thing more than another.", "Do something boring.", "Do the washing up.", "Do the words need changing?", "Do we need holes?", "Emphasize differences.", "Emphasize repetitions.", "Emphasize the flaws.", "Get your neck massaged.", "Give way to your worst impulse.", "Go slowly all the way round the outside.", "Honor thy error as a hidden intention.", "How would you have done it?", "Humanize something free of error.", "Infinitesimal gradations.", "Into the impossible.", "Is it finished?", "Is there something missing?", "Just carry on.", "Left channel, right channel, centre channel.", "Look at a very small object, look at its centre.", "Look at the order in which you do things.", "Look closely at the most embarrassing details and amplify them.", "Make a blank valuable by putting it in an exquisite frame.", "Make an exhaustive list of everything you might do and do the last thing on the list.", "Make a sudden, destructive unpredictable action; incorporate.", "Only one element of each kind.", "Remember those quiet evenings.", "Remove ambiguities and convert to specifics.", "Remove specifics and convert to ambiguities.", "Repetition is a form of change.", "Reverse.", "Simple subtraction.", "Spectrum analysis.", "Take a break.", "Take away the elements in order of apparent non-importance.", "Tidy up.", "Turn it upside down.", "Twist the spine.", "Use an old idea.", "Use an unacceptable color.", "Water.", "What are you really thinking about just now? Incorporate.", "What is the reality of the situation?", "What mistakes did you make last time?", "What wouldn't you do?", "Work at a different speed."];
var ShufflePluginSettings = /** @class */ (function () {
    function ShufflePluginSettings() {
        this.variable1Name = "WORD";
        this.variable1Values = "Cat\nDog\nKing\nFire\nPaper\nWall\nBook\nWind";
        this.variable2Name = "LETTER";
        this.variable2Values = "a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk\nl";
        this.variable3Name = "LOCATION";
        this.variable3Values = "New York\nLos Angeles\nLondon\nParis\nBerlin";
        this.shuffleNoteTemplate = "## Prompt\n1. Include one of these words: $WORD, $WORD or $WORD\n2. Begin with a word that starts with `$LETTER`\n3. Take place in $LOCATION or $LOCATION\n";
    }
    return ShufflePluginSettings;
}());
var ShufflePlugin = /** @class */ (function (_super) {
    __extends(ShufflePlugin, _super);
    function ShufflePlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShufflePlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loadSettings();
                this.addSettingTab(new ShufflePluginSettingTab(this.app, this));
                this.addRibbonIcon('dice', 'Shuffle Plugin', function () {
                    _this.createShuffleNote();
                });
                return [2 /*return*/];
            });
        });
    };
    ShufflePlugin.prototype.onunload = function () { };
    ShufflePlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShufflePlugin.prototype.loadSettings = function () {
        var _this = this;
        this.settings = new ShufflePluginSettings();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var loadedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSettings = _a.sent();
                        if (!loadedSettings) return [3 /*break*/, 2];
                        this.settings.variable1Name = loadedSettings.variable1Name;
                        this.settings.variable1Values = loadedSettings.variable1Values;
                        this.settings.variable2Name = loadedSettings.variable2Name;
                        this.settings.variable2Values = loadedSettings.variable2Values;
                        this.settings.variable3Name = loadedSettings.variable3Name;
                        this.settings.variable3Values = loadedSettings.variable3Values;
                        this.settings.shuffleNoteTemplate = loadedSettings.shuffleNoteTemplate;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.saveData(this.settings)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    };
    ShufflePlugin.prototype.createShuffleNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, variable1, values1, variable2, values2, variable3, values3, fileName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = this.settings.shuffleNoteTemplate;
                        variable1 = "$" + this.settings.variable1Name;
                        values1 = this.settings.variable1Values.split("\n");
                        variable2 = "$" + this.settings.variable2Name;
                        values2 = this.settings.variable2Values.split("\n");
                        variable3 = "$" + this.settings.variable3Name;
                        values3 = this.settings.variable3Values.split("\n");
                        if (values1.length > 0)
                            result = this.replaceVariablesInTemplate(result, variable1, values1);
                        if (values2.length > 0)
                            result = this.replaceVariablesInTemplate(result, variable2, values2);
                        if (values3.length > 0)
                            result = this.replaceVariablesInTemplate(result, variable3, values3);
                        fileName = "Shuffle Note - " + Date.now() + " .md";
                        return [4 /*yield*/, this.saveShuffleNote(fileName, result)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.app.workspace.openLinkText(fileName, '', true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShufflePlugin.prototype.replaceVariablesInTemplate = function (template, variable, values) {
        while (template.includes(variable)) {
            template = template.replace(variable, this.pickRandomly(values));
        }
        return template;
    };
    ShufflePlugin.prototype.saveShuffleNote = function (filePath, mdString) {
        return __awaiter(this, void 0, void 0, function () {
            var fileExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.exists(filePath)];
                    case 1:
                        fileExists = _a.sent();
                        if (!fileExists) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.app.vault.adapter.read(filePath)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.app.vault.adapter.write(filePath, mdString)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.app.vault.create(filePath, mdString)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // @ts-ignore
    ShufflePlugin.prototype.shuffle = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    // @ts-ignore
    ShufflePlugin.prototype.pickRandomly = function (array) {
        return this.shuffle(array)[0];
    };
    return ShufflePlugin;
}(obsidian.Plugin));
var ShufflePluginSettingTab = /** @class */ (function (_super) {
    __extends(ShufflePluginSettingTab, _super);
    function ShufflePluginSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    ShufflePluginSettingTab.prototype.loadObliqueStrategies = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable1Name = "OBLIQUE_STRATEGY";
                        this.plugin.settings.variable1Values = OBLIQUE_STRATEGIES.join("\n");
                        this.plugin.settings.variable2Name = "";
                        this.plugin.settings.variable2Values = "";
                        this.plugin.settings.variable3Name = "";
                        this.plugin.settings.variable3Values = "";
                        this.plugin.settings.shuffleNoteTemplate = "\"$OBLIQUE_STRATEGY\"";
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        this.display();
                        new obsidian.Notice("Oblique Strategies loaded!");
                        return [2 /*return*/];
                }
            });
        });
    };
    ShufflePluginSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Shuffle Settings' });
        containerEl.createEl("h3", { text: "Featured Prompts" });
        containerEl.createEl("p", { text: "Try out new prompts by loading them into your settings. Will replace your custom prompts." });
        containerEl.createEl("button", { text: "⚫️ Load \"Oblique Strategies\" by Brian Eno and Peter Schmidt" })
            .addEventListener("mousedown", this.loadObliqueStrategies.bind(this));
        containerEl.createEl("h3", { text: "Customize Your Prompts" });
        new obsidian.Setting(containerEl)
            .setName('Variable #1 Name')
            .setDesc('For example, enter WORD here and then, in your template, use $WORD to invoke a randomly selected value.')
            .addText(function (text) { return text
            .setPlaceholder('')
            .setValue(_this.plugin.settings.variable1Name)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable1Name = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Variable #1 Values')
            .setDesc('Create a list of values that variable #1 will be randomly replaced with in your template. One value per line.')
            .addTextArea(function (text) { return text
            .setPlaceholder('Dog\nCat\nBefore dawn\nWith fire')
            .setValue(_this.plugin.settings.variable1Values)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable1Values = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Variable #2 Name')
            .setDesc('For example, enter LOCATION here and then, in your template, use $LOCATION to invoke a randomly selected value.')
            .addText(function (text) { return text
            .setPlaceholder('')
            .setValue(_this.plugin.settings.variable2Name)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable2Name = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Variable #2 Values')
            .setDesc('Create a list of values that variable #1 will be randomly replaced with in your template. One value per line.')
            .addTextArea(function (text) { return text
            .setPlaceholder('New York\nAustin\nParis\nBerlin')
            .setValue(_this.plugin.settings.variable2Values)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable2Values = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Variable #3 Name')
            .setDesc('For example, enter ACTION here and then, in your template, use $ACTION to invoke a randomly selected value.')
            .addText(function (text) { return text
            .setPlaceholder('')
            .setValue(_this.plugin.settings.variable3Name)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable3Name = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Variable #3 Values')
            .setDesc('Create a list of values that variable #1 will be randomly replaced with in your template. One value per line.')
            .addTextArea(function (text) { return text
            .setPlaceholder('Run\nHide\nBuy\nCut')
            .setValue(_this.plugin.settings.variable3Values)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.variable3Values = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Shuffle Note Template')
            .setDesc('Create your own template for your writing prompts using your variables.')
            .addTextArea(function (text) { return text
            .setPlaceholder('Include these 3 words: $WORD $WORD $WORD $WORD $WORD\n')
            .setValue(_this.plugin.settings.shuffleNoteTemplate)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.shuffleNoteTemplate = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
    };
    return ShufflePluginSettingTab;
}(obsidian.PluginSettingTab));

module.exports = ShufflePlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwLCBQbHVnaW4sIE5vdGljZSwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcbmNvbnN0IE9CTElRVUVfU1RSQVRFR0lFUyA9IFtcIkFiYW5kb24gbm9ybWFsIGluc3RydW1lbnRzLlwiLFwiQWNjZXB0IGFkdmljZS5cIixcIkFjY3JldGlvbi5cIixcIkEgbGluZSBoYXMgdHdvIHNpZGVzLlwiLFwiQmFsYW5jZSB0aGUgY29uc2lzdGVuY3kgcHJpbmNpcGxlIHdpdGggdGhlIGluY29uc2lzdGVuY3kgcHJpbmNpcGxlLlwiLFwiQmUgZGlydHkuXCIsXCJCcmVhdGhlIG1vcmUgZGVlcGx5LlwiLFwiQnJpZGdlcyAtYnVpbGQgLWJ1cm4uXCIsXCJDYXNjYWRlcy5cIixcIkNsdXN0ZXIgYW5hbHlzaXMuXCIsXCJDb25zaWRlciBkaWZmZXJlbnQgZmFkaW5nIHN5c3RlbXMuXCIsXCJDb3VyYWdlIVwiLFwiQ3V0IGEgdml0YWwgY29ubmVjdGlvbi5cIixcIkRlY29yYXRlLCBkZWNvcmF0ZS5cIixcIkRlZmluZSBhbiBhcmVhIGFzICdzYWZlJyBhbmQgdXNlIGl0IGFzIGFuIGFuY2hvci5cIixcIkRlc3Ryb3kgdGhlIG1vc3QgaW1wb3J0YW50IHRoaW5nLlwiLFwiRGlzY2FyZCBhbiBheGlvbS5cIixcIkRpc2Nvbm5lY3QgZnJvbSBkZXNpcmUuXCIsXCJEaXNjb3ZlciB0aGUgcmVjaXBlcyB5b3UgYXJlIHVzaW5nIGFuZCBhYmFuZG9uIHRoZW0uXCIsXCJEaXN0b3J0aW5nIHRpbWUuXCIsXCJEb24ndCBiZSBhZnJhaWQgb2YgdGhpbmdzIGJlY2F1c2UgdGhleSdyZSBlYXN5IHRvIGRvLlwiLFwiRG9uJ3QgYmUgZnJpZ2h0ZW5lZCBvZiBjbGljaGVzLlwiLFwiRG9uJ3QgYmUgZnJpZ2h0ZW5lZCB0byBkaXNwbGF5IHlvdXIgdGFsZW50cy5cIixcIkRvbid0IHN0cmVzcyBvbmUgdGhpbmcgbW9yZSB0aGFuIGFub3RoZXIuXCIsXCJEbyBzb21ldGhpbmcgYm9yaW5nLlwiLFwiRG8gdGhlIHdhc2hpbmcgdXAuXCIsXCJEbyB0aGUgd29yZHMgbmVlZCBjaGFuZ2luZz9cIixcIkRvIHdlIG5lZWQgaG9sZXM/XCIsXCJFbXBoYXNpemUgZGlmZmVyZW5jZXMuXCIsXCJFbXBoYXNpemUgcmVwZXRpdGlvbnMuXCIsXCJFbXBoYXNpemUgdGhlIGZsYXdzLlwiLFwiR2V0IHlvdXIgbmVjayBtYXNzYWdlZC5cIixcIkdpdmUgd2F5IHRvIHlvdXIgd29yc3QgaW1wdWxzZS5cIixcIkdvIHNsb3dseSBhbGwgdGhlIHdheSByb3VuZCB0aGUgb3V0c2lkZS5cIixcIkhvbm9yIHRoeSBlcnJvciBhcyBhIGhpZGRlbiBpbnRlbnRpb24uXCIsXCJIb3cgd291bGQgeW91IGhhdmUgZG9uZSBpdD9cIixcIkh1bWFuaXplIHNvbWV0aGluZyBmcmVlIG9mIGVycm9yLlwiLFwiSW5maW5pdGVzaW1hbCBncmFkYXRpb25zLlwiLFwiSW50byB0aGUgaW1wb3NzaWJsZS5cIixcIklzIGl0IGZpbmlzaGVkP1wiLFwiSXMgdGhlcmUgc29tZXRoaW5nIG1pc3Npbmc/XCIsXCJKdXN0IGNhcnJ5IG9uLlwiLFwiTGVmdCBjaGFubmVsLCByaWdodCBjaGFubmVsLCBjZW50cmUgY2hhbm5lbC5cIixcIkxvb2sgYXQgYSB2ZXJ5IHNtYWxsIG9iamVjdCwgbG9vayBhdCBpdHMgY2VudHJlLlwiLFwiTG9vayBhdCB0aGUgb3JkZXIgaW4gd2hpY2ggeW91IGRvIHRoaW5ncy5cIixcIkxvb2sgY2xvc2VseSBhdCB0aGUgbW9zdCBlbWJhcnJhc3NpbmcgZGV0YWlscyBhbmQgYW1wbGlmeSB0aGVtLlwiLFwiTWFrZSBhIGJsYW5rIHZhbHVhYmxlIGJ5IHB1dHRpbmcgaXQgaW4gYW4gZXhxdWlzaXRlIGZyYW1lLlwiLFwiTWFrZSBhbiBleGhhdXN0aXZlIGxpc3Qgb2YgZXZlcnl0aGluZyB5b3UgbWlnaHQgZG8gYW5kIGRvIHRoZSBsYXN0IHRoaW5nIG9uIHRoZSBsaXN0LlwiLFwiTWFrZSBhIHN1ZGRlbiwgZGVzdHJ1Y3RpdmUgdW5wcmVkaWN0YWJsZSBhY3Rpb247IGluY29ycG9yYXRlLlwiLFwiT25seSBvbmUgZWxlbWVudCBvZiBlYWNoIGtpbmQuXCIsXCJSZW1lbWJlciB0aG9zZSBxdWlldCBldmVuaW5ncy5cIixcIlJlbW92ZSBhbWJpZ3VpdGllcyBhbmQgY29udmVydCB0byBzcGVjaWZpY3MuXCIsXCJSZW1vdmUgc3BlY2lmaWNzIGFuZCBjb252ZXJ0IHRvIGFtYmlndWl0aWVzLlwiLFwiUmVwZXRpdGlvbiBpcyBhIGZvcm0gb2YgY2hhbmdlLlwiLFwiUmV2ZXJzZS5cIixcIlNpbXBsZSBzdWJ0cmFjdGlvbi5cIixcIlNwZWN0cnVtIGFuYWx5c2lzLlwiLFwiVGFrZSBhIGJyZWFrLlwiLFwiVGFrZSBhd2F5IHRoZSBlbGVtZW50cyBpbiBvcmRlciBvZiBhcHBhcmVudCBub24taW1wb3J0YW5jZS5cIixcIlRpZHkgdXAuXCIsXCJUdXJuIGl0IHVwc2lkZSBkb3duLlwiLFwiVHdpc3QgdGhlIHNwaW5lLlwiLFwiVXNlIGFuIG9sZCBpZGVhLlwiLFwiVXNlIGFuIHVuYWNjZXB0YWJsZSBjb2xvci5cIixcIldhdGVyLlwiLFwiV2hhdCBhcmUgeW91IHJlYWxseSB0aGlua2luZyBhYm91dCBqdXN0IG5vdz8gSW5jb3Jwb3JhdGUuXCIsXCJXaGF0IGlzIHRoZSByZWFsaXR5IG9mIHRoZSBzaXR1YXRpb24/XCIsXCJXaGF0IG1pc3Rha2VzIGRpZCB5b3UgbWFrZSBsYXN0IHRpbWU/XCIsXCJXaGF0IHdvdWxkbid0IHlvdSBkbz9cIixcIldvcmsgYXQgYSBkaWZmZXJlbnQgc3BlZWQuXCJdXHJcblxyXG5jbGFzcyBTaHVmZmxlUGx1Z2luU2V0dGluZ3Mge1xyXG5cdHZhcmlhYmxlMU5hbWU6IHN0cmluZyA9IFwiV09SRFwiO1xyXG5cdHZhcmlhYmxlMVZhbHVlczogc3RyaW5nID0gXCJDYXRcXG5Eb2dcXG5LaW5nXFxuRmlyZVxcblBhcGVyXFxuV2FsbFxcbkJvb2tcXG5XaW5kXCI7XHJcblx0dmFyaWFibGUyTmFtZTogc3RyaW5nID0gXCJMRVRURVJcIjtcclxuXHR2YXJpYWJsZTJWYWx1ZXM6IHN0cmluZyA9IFwiYVxcbmJcXG5jXFxuZFxcbmVcXG5mXFxuZ1xcbmhcXG5pXFxualxcbmtcXG5sXCI7XHJcblx0dmFyaWFibGUzTmFtZTogc3RyaW5nID0gXCJMT0NBVElPTlwiO1xyXG5cdHZhcmlhYmxlM1ZhbHVlczogc3RyaW5nID0gXCJOZXcgWW9ya1xcbkxvcyBBbmdlbGVzXFxuTG9uZG9uXFxuUGFyaXNcXG5CZXJsaW5cIjtcclxuXHRzaHVmZmxlTm90ZVRlbXBsYXRlOiBzdHJpbmcgPSBcIiMjIFByb21wdFxcbjEuIEluY2x1ZGUgb25lIG9mIHRoZXNlIHdvcmRzOiAkV09SRCwgJFdPUkQgb3IgJFdPUkRcXG4yLiBCZWdpbiB3aXRoIGEgd29yZCB0aGF0IHN0YXJ0cyB3aXRoIGAkTEVUVEVSYFxcbjMuIFRha2UgcGxhY2UgaW4gJExPQ0FUSU9OIG9yICRMT0NBVElPTlxcblwiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaHVmZmxlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRzZXR0aW5nczogU2h1ZmZsZVBsdWdpblNldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHR0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTaHVmZmxlUGx1Z2luU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cdFx0dGhpcy5hZGRSaWJib25JY29uKCdkaWNlJywgJ1NodWZmbGUgUGx1Z2luJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZVNodWZmbGVOb3RlKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9udW5sb2FkKCkge31cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdGxvYWRTZXR0aW5ncygpIHtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBuZXcgU2h1ZmZsZVBsdWdpblNldHRpbmdzKCk7XHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2FkZWRTZXR0aW5ncyA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcclxuXHRcdFx0aWYgKGxvYWRlZFNldHRpbmdzKSB7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy52YXJpYWJsZTFOYW1lID0gbG9hZGVkU2V0dGluZ3MudmFyaWFibGUxTmFtZTtcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnZhcmlhYmxlMVZhbHVlcyA9IGxvYWRlZFNldHRpbmdzLnZhcmlhYmxlMVZhbHVlcztcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnZhcmlhYmxlMk5hbWUgPSBsb2FkZWRTZXR0aW5ncy52YXJpYWJsZTJOYW1lO1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MudmFyaWFibGUyVmFsdWVzID0gbG9hZGVkU2V0dGluZ3MudmFyaWFibGUyVmFsdWVzO1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MudmFyaWFibGUzTmFtZSA9IGxvYWRlZFNldHRpbmdzLnZhcmlhYmxlM05hbWU7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy52YXJpYWJsZTNWYWx1ZXMgPSBsb2FkZWRTZXR0aW5ncy52YXJpYWJsZTNWYWx1ZXM7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zaHVmZmxlTm90ZVRlbXBsYXRlID0gbG9hZGVkU2V0dGluZ3Muc2h1ZmZsZU5vdGVUZW1wbGF0ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9KSgpO1xyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIGNyZWF0ZVNodWZmbGVOb3RlKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMuc2V0dGluZ3Muc2h1ZmZsZU5vdGVUZW1wbGF0ZTtcclxuXHJcblx0XHRsZXQgdmFyaWFibGUxID0gXCIkXCIgKyB0aGlzLnNldHRpbmdzLnZhcmlhYmxlMU5hbWU7XHJcblx0XHRsZXQgdmFsdWVzMSA9IHRoaXMuc2V0dGluZ3MudmFyaWFibGUxVmFsdWVzLnNwbGl0KFwiXFxuXCIpO1xyXG5cclxuXHRcdGxldCB2YXJpYWJsZTIgPSBcIiRcIiArIHRoaXMuc2V0dGluZ3MudmFyaWFibGUyTmFtZTtcclxuXHRcdGxldCB2YWx1ZXMyID0gdGhpcy5zZXR0aW5ncy52YXJpYWJsZTJWYWx1ZXMuc3BsaXQoXCJcXG5cIik7XHJcblxyXG5cdFx0bGV0IHZhcmlhYmxlMyA9IFwiJFwiICsgdGhpcy5zZXR0aW5ncy52YXJpYWJsZTNOYW1lO1xyXG5cdFx0bGV0IHZhbHVlczMgPSB0aGlzLnNldHRpbmdzLnZhcmlhYmxlM1ZhbHVlcy5zcGxpdChcIlxcblwiKTtcclxuXHJcblx0XHRpZih2YWx1ZXMxLmxlbmd0aCA+IDApIHJlc3VsdCA9IHRoaXMucmVwbGFjZVZhcmlhYmxlc0luVGVtcGxhdGUocmVzdWx0LCB2YXJpYWJsZTEsIHZhbHVlczEpO1xyXG5cdFx0aWYodmFsdWVzMi5sZW5ndGggPiAwKSByZXN1bHQgPSB0aGlzLnJlcGxhY2VWYXJpYWJsZXNJblRlbXBsYXRlKHJlc3VsdCwgdmFyaWFibGUyLCB2YWx1ZXMyKTtcclxuXHRcdGlmKHZhbHVlczMubGVuZ3RoID4gMCkgcmVzdWx0ID0gdGhpcy5yZXBsYWNlVmFyaWFibGVzSW5UZW1wbGF0ZShyZXN1bHQsIHZhcmlhYmxlMywgdmFsdWVzMyk7XHJcblxyXG5cdFx0Y29uc3QgZmlsZU5hbWUgPSBgU2h1ZmZsZSBOb3RlIC0gJHtEYXRlLm5vdygpfSAubWRgO1xyXG5cclxuXHRcdGF3YWl0IHRoaXMuc2F2ZVNodWZmbGVOb3RlKGZpbGVOYW1lLCByZXN1bHQpO1xyXG5cdFx0YXdhaXQgdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChmaWxlTmFtZSwgJycsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZXBsYWNlVmFyaWFibGVzSW5UZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nLCB2YXJpYWJsZTogc3RyaW5nLCB2YWx1ZXM6IHN0cmluZ1tdKSB7XHJcblx0XHR3aGlsZSh0ZW1wbGF0ZS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcclxuXHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKHZhcmlhYmxlLCB0aGlzLnBpY2tSYW5kb21seSh2YWx1ZXMpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTaHVmZmxlTm90ZShmaWxlUGF0aDogc3RyaW5nLCBtZFN0cmluZzogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBmaWxlRXhpc3RzID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5leGlzdHMoZmlsZVBhdGgpO1xyXG5cdFx0aWYgKGZpbGVFeGlzdHMpIHtcclxuXHRcdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGZpbGVQYXRoKTtcclxuXHRcdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci53cml0ZShmaWxlUGF0aCwgbWRTdHJpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBtZFN0cmluZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBAdHMtaWdub3JlXHJcblx0c2h1ZmZsZShhcnJheSkge1xyXG5cdFx0Zm9yKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSl7XHJcblx0XHRcdGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKVxyXG5cdFx0XHRjb25zdCB0ZW1wID0gYXJyYXlbaV1cclxuXHRcdFx0YXJyYXlbaV0gPSBhcnJheVtqXVxyXG5cdFx0XHRhcnJheVtqXSA9IHRlbXBcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cclxuXHQvLyBAdHMtaWdub3JlXHJcblx0cGlja1JhbmRvbWx5KGFycmF5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zaHVmZmxlKGFycmF5KVswXTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNodWZmbGVQbHVnaW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBTaHVmZmxlUGx1Z2luO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTaHVmZmxlUGx1Z2luKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWRPYmxpcXVlU3RyYXRlZ2llcygpIHtcclxuXHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlMU5hbWUgPSBcIk9CTElRVUVfU1RSQVRFR1lcIjtcclxuXHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlMVZhbHVlcyA9IE9CTElRVUVfU1RSQVRFR0lFUy5qb2luKFwiXFxuXCIpO1xyXG5cdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmFyaWFibGUyTmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXJpYWJsZTJWYWx1ZXMgPSBcIlwiO1xyXG5cdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmFyaWFibGUzTmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXJpYWJsZTNWYWx1ZXMgPSBcIlwiO1xyXG5cdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3Muc2h1ZmZsZU5vdGVUZW1wbGF0ZSA9IFwiXFxcIiRPQkxJUVVFX1NUUkFURUdZXFxcIlwiO1xyXG5cclxuXHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cclxuXHRcdHRoaXMuZGlzcGxheSgpO1xyXG5cclxuXHRcdG5ldyBOb3RpY2UoXCJPYmxpcXVlIFN0cmF0ZWdpZXMgbG9hZGVkIVwiKVxyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGxldCB7Y29udGFpbmVyRWx9ID0gdGhpcztcclxuXHJcblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHt0ZXh0OiAnU2h1ZmZsZSBTZXR0aW5ncyd9KTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHt0ZXh0OiBcIkZlYXR1cmVkIFByb21wdHNcIn0pO1xyXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoXCJwXCIsIHt0ZXh0OiBcIlRyeSBvdXQgbmV3IHByb21wdHMgYnkgbG9hZGluZyB0aGVtIGludG8geW91ciBzZXR0aW5ncy4gV2lsbCByZXBsYWNlIHlvdXIgY3VzdG9tIHByb21wdHMuXCJ9KTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbChcImJ1dHRvblwiLCB7dGV4dDogXCLimqvvuI8gTG9hZCBcXFwiT2JsaXF1ZSBTdHJhdGVnaWVzXFxcIiBieSBCcmlhbiBFbm8gYW5kIFBldGVyIFNjaG1pZHRcIn0pXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubG9hZE9ibGlxdWVTdHJhdGVnaWVzLmJpbmQodGhpcykpO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwge3RleHQ6IFwiQ3VzdG9taXplIFlvdXIgUHJvbXB0c1wifSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdWYXJpYWJsZSAjMSBOYW1lJylcclxuXHRcdFx0LnNldERlc2MoJ0ZvciBleGFtcGxlLCBlbnRlciBXT1JEIGhlcmUgYW5kIHRoZW4sIGluIHlvdXIgdGVtcGxhdGUsIHVzZSAkV09SRCB0byBpbnZva2UgYSByYW5kb21seSBzZWxlY3RlZCB2YWx1ZS4nKVxyXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJycpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlMU5hbWUpXHJcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmFyaWFibGUxTmFtZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmFyaWFibGUgIzEgVmFsdWVzJylcclxuXHRcdFx0LnNldERlc2MoJ0NyZWF0ZSBhIGxpc3Qgb2YgdmFsdWVzIHRoYXQgdmFyaWFibGUgIzEgd2lsbCBiZSByYW5kb21seSByZXBsYWNlZCB3aXRoIGluIHlvdXIgdGVtcGxhdGUuIE9uZSB2YWx1ZSBwZXIgbGluZS4nKVxyXG5cdFx0XHQuYWRkVGV4dEFyZWEodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdEb2dcXG5DYXRcXG5CZWZvcmUgZGF3blxcbldpdGggZmlyZScpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlMVZhbHVlcylcclxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXJpYWJsZTFWYWx1ZXMgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1ZhcmlhYmxlICMyIE5hbWUnKVxyXG5cdFx0XHQuc2V0RGVzYygnRm9yIGV4YW1wbGUsIGVudGVyIExPQ0FUSU9OIGhlcmUgYW5kIHRoZW4sIGluIHlvdXIgdGVtcGxhdGUsIHVzZSAkTE9DQVRJT04gdG8gaW52b2tlIGEgcmFuZG9tbHkgc2VsZWN0ZWQgdmFsdWUuJylcclxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCcnKVxyXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXJpYWJsZTJOYW1lKVxyXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlMk5hbWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1ZhcmlhYmxlICMyIFZhbHVlcycpXHJcblx0XHRcdC5zZXREZXNjKCdDcmVhdGUgYSBsaXN0IG9mIHZhbHVlcyB0aGF0IHZhcmlhYmxlICMxIHdpbGwgYmUgcmFuZG9tbHkgcmVwbGFjZWQgd2l0aCBpbiB5b3VyIHRlbXBsYXRlLiBPbmUgdmFsdWUgcGVyIGxpbmUuJylcclxuXHRcdFx0LmFkZFRleHRBcmVhKHRleHQgPT4gdGV4dFxyXG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignTmV3IFlvcmtcXG5BdXN0aW5cXG5QYXJpc1xcbkJlcmxpbicpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlMlZhbHVlcylcclxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXJpYWJsZTJWYWx1ZXMgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1ZhcmlhYmxlICMzIE5hbWUnKVxyXG5cdFx0XHQuc2V0RGVzYygnRm9yIGV4YW1wbGUsIGVudGVyIEFDVElPTiBoZXJlIGFuZCB0aGVuLCBpbiB5b3VyIHRlbXBsYXRlLCB1c2UgJEFDVElPTiB0byBpbnZva2UgYSByYW5kb21seSBzZWxlY3RlZCB2YWx1ZS4nKVxyXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJycpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlM05hbWUpXHJcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmFyaWFibGUzTmFtZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmFyaWFibGUgIzMgVmFsdWVzJylcclxuXHRcdFx0LnNldERlc2MoJ0NyZWF0ZSBhIGxpc3Qgb2YgdmFsdWVzIHRoYXQgdmFyaWFibGUgIzEgd2lsbCBiZSByYW5kb21seSByZXBsYWNlZCB3aXRoIGluIHlvdXIgdGVtcGxhdGUuIE9uZSB2YWx1ZSBwZXIgbGluZS4nKVxyXG5cdFx0XHQuYWRkVGV4dEFyZWEodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdSdW5cXG5IaWRlXFxuQnV5XFxuQ3V0JylcclxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudmFyaWFibGUzVmFsdWVzKVxyXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZhcmlhYmxlM1ZhbHVlcyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnU2h1ZmZsZSBOb3RlIFRlbXBsYXRlJylcclxuXHRcdFx0LnNldERlc2MoJ0NyZWF0ZSB5b3VyIG93biB0ZW1wbGF0ZSBmb3IgeW91ciB3cml0aW5nIHByb21wdHMgdXNpbmcgeW91ciB2YXJpYWJsZXMuJylcclxuXHRcdFx0LmFkZFRleHRBcmVhKHRleHQgPT4gdGV4dFxyXG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignSW5jbHVkZSB0aGVzZSAzIHdvcmRzOiAkV09SRCAkV09SRCAkV09SRCAkV09SRCAkV09SRFxcbicpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNodWZmbGVOb3RlVGVtcGxhdGUpXHJcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3Muc2h1ZmZsZU5vdGVUZW1wbGF0ZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJQbHVnaW4iLCJOb3RpY2UiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtB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
