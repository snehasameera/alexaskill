'use strict';

const Alexa = require('alexa-sdk');     // Load the SDK

const APP_ID = undefined;      // Define the app ID

const SKILL_NAME = 'Coffee Facts';
const HELP_MESSAGE = 'What would you like to know? You can say something like how much coffee does teh average person drink? ';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Thank you have a nice day';

const WELCOME_MESSAGE = 'Hello! Welcome to the CoffeE Facts Skill. ' + HELP_MESSAGE;

/* Set responses */

const COFFEE_CONSUMPTION = 'Men drink as much coffee as women, each consuming an average of 1.6 cups per day ';
const COFFEE_COUNTRY = ' The people in Finland the most coffee .. 12 kilograms per capita per year';
const COFFEE_SAFE = 'Up to 400 milligrams of caffine a day appears to be safe for most healthy adults. Thats roughly the amount of caffine in four cups of brewed coffee. ';

/* Set up handlers */

const handlers = {
    'LaunchRequest': function() {
        this.emit('WelcomeIntent');
        this.emit('coffeeavgperson');       // Replace with name of Intent
        this.emit('coffeeCountry');      // Replace with name of Intent
        this.emit('safetodrink');       // Replace with name of Intent
    },
    'WelcomeIntent': function() {
        this.response.speak(WELCOME_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'CoffeeCaffine': function() {
        this.response.speak( COFFEE_CONSUMPTION).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'CoffeeCountry': function() {
        this.response.speak(COFFEE_COUNTRY).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'CoffeeAvgCups': function() {
        this.response.speak( COFFEE_SAFE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
        'AMAZON.HelpIntent': function () {
        this.response.speak(HELP_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
