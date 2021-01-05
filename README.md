## Shuffle for Obsidian

This plugin allows you to create your custom, randomized writing-prompts from lists of variables you define.

Based on Eleanor Konik's post at https://forum.obsidian.md/t/rfc-oblique-strategies-writing-prompts-reflection-creators-block/9997/2

## Example 
### Input template
```markdown
## Prompt
1. Include one of these words: $WORD, $WORD or $WORD
2. Begin with a word that starts with `$LETTER`
3. Take place in $LOCATION or $LOCATION
```
### Randomized output:
```markdown
## Prompt
1. Include one of these words: Wall, Wind or Book
2. Begin with a word that starts with `g`
3. Take place in London or Los Angeles
```
## How to to install manually
- Download the latest main.js and mainfest.json from https://github.com/akaalias/obsidian-shuffle/releases/
- Create a new folder named 'obsidian-shuffle'
- Place the two files in the folder
- Place the folder in your .obsidian/plugins directory
- Reload plugins
- Activate the "Shuffle" plugin

## How to use the plugin
- Hit the 'Dice' button in the sidebar to generate a new prompt note
- Customize your variable names, values and template to your liking in the settings

## Loading custom prompt packs

I've included a loadable prompt pack for Oblique Strategies. To activate it...

- Simply click on the "⚫️ Load `Oblique Strategies` by Brian Eno and Peter Schmidt" button in the settings.

## Share YOUR custom prompts!

If you have created your own custom set of prompts, PLEASE SHARE them! Contact me via the Obsidian Forum or per issue in this repo. 
