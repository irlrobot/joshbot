module.exports = {
  'LaunchRequest': function () {
    console.log("LaunchRequest fired...");
    this.attributes.speechOutput = "Hello, I'm Josh bot.  What do you need?";
    this.attributes.repromptSpeech = "You can also say, help me.";
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'PhraseIntent': function () {
    console.log("PhraseIntent fired...");
    var phraseIndex = Math.floor(Math.random() * enGbPhrases.length);
        randomPhrase = enGbPhrases[phraseIndex];
        speechOutput = randomPhrase;
    console.log("phraseIndex is:  " + phraseIndex);

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomPhrase);
  },
  'AMAZON.HelpIntent': function () {
    console.log("HelpIntent fired...");
    var speechOutput = "You can say give me a phrase, or, you can say exit... What can I help you with?";
        reprompt = "What can I help you with?";
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    console.log("CancelIntent fired...");
    this.emit(':tell', 'Cheers!');
  },
  'AMAZON.StopIntent': function () {
    console.log("StopIntent fired...");
    this.emit(':tell', 'Cheers!');
  }
};
