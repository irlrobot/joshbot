var Alexa = require('alexa-sdk');
  APP_ID = "amzn1.ask.skill.0384c6ee-ec9e-4773-9062-d0a3c31c0e6e";
  SKILL_NAME = 'Joshbot';
  enUsPhrases = require('./modules/en-us.phrases');
  enUsHandlers = require('./handlers/en-us.handlers');
  enGbPhrases = require('./modules/en-gb.phrases');
  enGbHandlers = require('./handlers/en-gb.handlers');
  deDePhrases = require('./modules/de-de.phrases');
  deDeHandlers = require('./handlers/de-de.handlers');

exports.handler = function(event, context, callback) {
  console.log("Starting Joshbot...");
  var alexa = Alexa.handler(event, context);
  var locale = event.request.locale;
  console.log("Locale is:  " + locale);
  alexa.appId = APP_ID;
  if (locale == 'en-GB') {
    console.log("registering en-gb.handler...");
    alexa.registerHandlers(enGbHandlers);
  } else if (locale == 'de-DE') {
    console.log("registering de-de.handler...");
    alexa.registerHandlers(deDeHandlers);
  } else {
    console.log("registering en-us.handler...");
    alexa.registerHandlers(enUsHandlers);
  }
  alexa.execute();
};
