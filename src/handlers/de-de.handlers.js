module.exports = {
  'LaunchRequest': function () {
    console.log("LaunchRequest fired...");
    this.attributes.speechOutput = "Hallo, ich bin Josh bot. Was brauchst du?";
    this.attributes.repromptSpeech = "Man kann auch sagen, mir helfen.";
    this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
  },
  'PhraseIntent': function () {
    console.log("PhraseIntent fired...");
    var phraseIndex = Math.floor(Math.random() * deDePhrases.length);
        randomPhrase = deDePhrases[phraseIndex];
        speechOutput = randomPhrase;
    console.log("phraseIndex is:  " + phraseIndex);

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomPhrase);
  },
  'AMAZON.HelpIntent': function () {
    console.log("HelpIntent fired...");
    var speechOutput = "Sie können mir eine Phrase sagen geben, oder, Ausfahrt sagen kann ... Was kann ich Ihnen helfen?";
        reprompt = "Womit kann ich dir helfen?";
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    console.log("CancelIntent fired...");
    this.emit(':tell', 'Tschüss!');
  },
  'AMAZON.StopIntent': function () {
    console.log("StopIntent fired...");
    this.emit(':tell', 'Tschüss!');
  }
};
