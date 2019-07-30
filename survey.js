// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

// set up for stdin and stdout protocol
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  ["What's your name? Nicknames are also acceptable :)", "name"],
  ["What's an activity you like doing?", "activity"], ["What do you listen to while doing that?", "music"],
  ["Which meal is your favourite (eg: dinner, brunch, etc.)?", "meal"],
  ["What's your favourite thing to eat for that meal?", "food"],
  ["Which sport is your absolute favourite?", "sport"],
  ["What is your superpower? In a few words, tell us what you are amazing at!", "superpower"]];

let answers = {};

rl.question(`${questions[0][0]}\n`, (answer) => {
  answers[questions[0][1]] = answer;
  rl.question(`${questions[1][0]}\n`, (answer) => {
    answers[questions[1][1]] = answer;
    rl.question(`${questions[2][0]}\n`, (answer) => {
      answers[questions[2][1]] = answer;
      rl.question(`${questions[3][0]}\n`, (answer) => {
        answers[questions[3][1]] = answer;
        rl.question(`${questions[4][0]}\n`, (answer) => {
          answers[questions[4][1]] = answer;
          rl.question(`${questions[5][0]}\n`, (answer) => {
            answers[questions[5][1]] = answer;
            rl.question(`${questions[6][0]}\n`, (answer) => {
              answers[questions[6][1]] = answer;

              console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

