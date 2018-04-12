/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Slang Picker';
const GET_FACT_MESSAGE = "Here's your slang word for the day : ";
const HELP_MESSAGE = 'You can say tell me a slang word, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'How can I help you , my friend? ';
const STOP_MESSAGE = ' Bubyee ..Have an awesome blossom day ';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'AMA: Ask Me Anything ... It is now used more widely on the Internet, with any sort of public Q&A being termed an AMA. ',
    'E L I 5 ... Explain Like I am 5.When someone gives a complex explanation for an event and you need them to dumb it down for you, ask them to explain it like I am 5 years old',
    'F T F Y ... Fixed That For You',
    'Facepalm ... Short for Ugh, idiot.When someone does something stupid, instinctively, your palm hits your own face or forehead. ',
    'Pig out ... A metaphor for binge eating.',
    'Jack up ... An abrupt increase, typically in the price of something.',
    'Pass the buck ... To deflect responsibility onto someone else.',
    'Piece of cake ... A metaphor to describe something that is easy or effortless.',
    'Hyped (adj.) ... A very excited state.',
    'Zonked ... Completely exhausted.',
    'Jonesing ... To want, crave, or desire something intensely',
    'Shoot the breeze ... An idiomatic phrase for killing time with idle chit-chat',
    'Shotgun  ...First person to call "shotgun!" gets the front passenger seat.Usually shotgun is called when some smelly or really annoying people are going to be in the back seat',
    'sus  ... This word is often used if someone or something is being shady.',
    'Snatched ... It is used to describe anything that looks really good or on point.',
    'OTP ...OTP stands for One True Pairing. Your OTP is a couple you are emotionally invested in.',
    'GOAT  ... It is an acronym for "greatest of all time," and pops up a lot when people start arguing about sports.',
    'High Key  ... Anything that you are saying out loud is high key.',
    'JOMO  ... This acronym stands for joy of missing out.',
    'Lit  ...Lit can mean cool — especially when it comes to parties — but some people also use it as a synonym for drunk or high.',
    'Stan ....The name is actually kind of a portmanteau of stalker and fan, and it now describes worshippers of any celeb.',
    'Turnt ...Turnt can mean drunk, but donot ground anyone just yet. It can also describe a state of general excitement or craziness.',
    'Woke  ...It means you are knowledgeable, sympathetic and aware, especially when it comes to contentious debates around race and gender.',
    'TFW, the phrase used to describe your emotional landscape at any given moment.',
    'Salty ...To be exceptionally bitter or agitated.',
    'Narrative ...This phrase is best used in response to a request that you would really rather not perform or take part in.',
    'Aesthetic ... Another word for vibe.',
    'Trash ... When someone acts, looks, or comes off as classless or tasteless.',
    'Savage  ... when someone or something does something outrageously cool or hilarious that requires zero to negative chill.',
    'Fam  ... The new way to greet your group of close friends, or even an individual friend.',
    'Extra  ... Anyone who isn’t necessary to the situation. Or someone who you or your friends don’t know or like.',
    'RT ... RT is short for retweet. It is now also used to show agreement.',
    'Bump  ...When you want to push a topic back to the top of the list, you “bump” the topic by just writing “bump” as a new comment.',
    'Lurker ... This is someone who visits a forum, blog or website often, but doesn’t leave any comments. ',
    'I cannot even ... This phrase is used when something is so incredible or unbelievable that you have no words to respond with.',
    'Well Played  ... When someone has a very clever response, you can say “well played.” In everyday conversation the equivalent of this is saying touche.',
    'Totes and adorbs ... Totes and adorbs are shortened versions of totally and adorable. It’s a cute way of saying those words.',
    'Lag  ... The term is often used when videos or online games are too slow/choppy to show what’s happening in real time.',
    'Noob  ... Noob can be a mean way of saying someone ignorant about a topic or is not good at something, or it can be a way to explain that you’re new and don’t know much yet.',
    'Photobomb  ... When someone or something appears in a photo unexpectedly, without the photographer meaning to include it.',
    'Handle/Alias  ... Also called a “username,” your handle or alias is the nickname you choose for a website. This is the name that’s visible to others, instead of your real name.',
    'NSFW  ... NSFW is used as a warning before a link that contains anything that would not be okay to look at if you’re at work.',
    'TLDR ... It simply means, too long ,didnot read.',
    'GMTA ... means Great Minds Think Alike.',
    'OOTD ... Outfit of the day',
    'H two H means Heart To Heart.',
    'Basic ... A way to describe someone who dresses, talks and enjoys the most mainstream and predictable things. Lacking originality.',
    'JSYK ... Acronym for Just so you know.',
    'OOS  ... Acronym for Out of Style.',
    'DTRT ... Do The Right Thing.',
    'SMHID ... Acronym for Shaking My Head In Despair.',
    'Creeper ... Someone who views your profile but doesnot make contact.',
    'WY ... It is an acronym for Whatever You Like.',
    'SNH ... It is an acronym for Sarcasm Noted Here.'
    ];



//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'SlangItRightIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
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
