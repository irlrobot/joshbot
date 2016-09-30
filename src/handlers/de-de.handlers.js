module.exports = {
  'LaunchRequest': function () {
    this.attributes.speechOutput = "Hallo, ich bin Josh bot. Was brauchst du?";
    this.attributes.repromptSpeech = "Man kann auch sagen, mir helfen.";
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'PhraseIntent': function () {
    var phraseIndex = Math.floor(Math.random() * deDePhrases.length);
    var randomPhrase = deDePhrases[phraseIndex];

    var speechOutput = randomPhrase;

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomPhrase);
  },
  'AMAZON.HelpIntent': function () {
      var speechOutput = "Sie können mir eine Phrase sagen geben, oder, Ausfahrt sagen kann ... Was kann ich Ihnen helfen?";
      var reprompt = "Womit kann ich dir helfen?";
      this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', 'Tschüss!');
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', 'Tschüss!');
  }
};
