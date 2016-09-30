var Alexa = require('alexa-sdk');
  APP_ID = "amzn1.ask.skill.0384c6ee-ec9e-4773-9062-d0a3c31c0e6e";
  SKILL_NAME = 'Joshbot';
  enUsPhrases = require('./modules/en-us.phrases');
  enGbPhrases = require('./modules/en-gb.phrases');
  deDePhrases = require('./modules/de-de.phrases');

exports.handler = function(event, context, callback) {
  console.log("Starting Joshbot...");
  var alexa = Alexa.handler(event, context);
  var locale = event.request.locale;
  console.log("Locale is:  " + locale);
  alexa.appId = APP_ID;
  if (locale == 'en-GB') {
    alexa.registerHandlers(enGbHandlers);
  } else if (locale == 'de-DE') {
    alexa.registerHandlers(deDeHandlers);
  } else {
    alexa.registerHandlers(enUsHandlers);
  }
  alexa.execute();
};

var enUsHandlers = {
  'LaunchRequest': function () {
    this.emit('PhraseIntent');
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

var enGbHandlers = {
  'LaunchRequest': function () {
    this.emit('PhraseIntent');
  },
  'PhraseIntent': function () {
    var phraseIndex = Math.floor(Math.random() * enGbPhrases.length);
    var randomPhrase = enGbPhrases[phraseIndex];

    var speechOutput = randomPhrase;

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomPhrase);
  },
  'AMAZON.HelpIntent': function () {
      var speechOutput = "You can say give me a phrase, or, you can say exit... What can I help you with?";
      var reprompt = "What can I help you with?";
      this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', 'Cheers!');
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', 'Cheers!');
  }
};

var deDeHandlers = {
  'LaunchRequest': function () {
    this.emit('PhraseIntent');
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
