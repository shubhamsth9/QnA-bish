const readline = require("readline-sync");

// EX 05
const age = readline.question("What's your Age? (sry girls I need it for an assignment)\n")

if(age > 18 && age <= 60) console.log("You're a grown-ass man/woman!");
else if(age < 10) console.log("Go out and play, kid");
else if(age > 60) console.log("What ya doing here Old Man?");
else console.log("So you're a teenager, an unsolicited advice, please don't such take actions which may make you regret for the rest of your life, enjoy but be careful, you have a long way to go!")
