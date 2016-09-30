module.exports = {
  'LaunchRequest': function () {
    this.attributes.speechOutput = "Hello, I'm Josh bot.  What do you need?";
    this.attributes.repromptSpeech = "You can also say, help me.";
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'PhraseIntent': function () {
    var phraseIndex = Math.floor(Math.random() * enUsPhrases.length);
    var randomPhrase = enUsPhrases[phraseIndex];

    var speechOutput = randomPhrase;

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomPhrase);
  },
  'AMAZON.HelpIntent': function () {
      var speechOutput = "You can say give me a phrase, or, you can say exit... What can I help you with?";
      var reprompt = "What can I help you with?";
      this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', 'See ya!');
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', 'See ya!');
  }
};
