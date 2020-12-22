var readlineSync=require("readline-sync");
const chalk = require('chalk');
const log=console.log
var score=0;
log(chalk.blue.bgWhite.bold.underline("                  Welcome To The Basic Maths Quiz                       "));

var userName=readlineSync.question("Enter Your Name:");
log(chalk.yellowBright.bold("Hello : "+userName));
log("Please answer the following questions..!! Press 'Q' to Quit antime")
function play(question,answer){
var userAnswer=readlineSync.question(question);
if (userAnswer=='Q'){
  log(chalk.green("Thank For Playing. Hope to see you again.!"));
  log(chalk.cyanBright("Your Score is : "+score));
  log(chalk.bold.magentaBright("High-Score is : 10"));
  process.exit(22)
  
}
if (userAnswer==answer){
  log(chalk.green("Right Answer..!!"));
  score=score+1;
}
else{
  log(chalk.bold.red("Wrong Answer..!!"));
}
log(chalk.bold.cyanBright("Your Score is : "+score));
log("--------------------")
}

var ques=[{question:"1) 5 + 4 = \n a.9 \n b.4 \n c.5\nanswer:",answer:'a'},
{question:"2) 8 - 12 = \n a.15 \n b.-4 \n c.6\nanswer:",answer:'b'},{question:"3) 20 / 4 = \n a.5 \n b.40 \n c.8\nanswer:",answer:'a'
},{question:"4) 2 ** 5 =\n a.5 \n b.4 \n c.32\nanswer: ",answer:'c'},{question:"5) 11 % 5 =\n a.2 \n b.1 \n c.4\nanswer: ",answer:'b'},{question:"6) 21 * 4 =\n a.54 \n b.14 \n c.84\nanswer: ",answer:'c'},{question:"7) (5+(15-(10/5))) = \n a.9*2 \n b.4*9 \n c.5*2\nanswer:",answer:'a'},{question:"8) 54/0 =\n a.0 \n b.infinite \n c.1\nanswer: ",answer:'b'},{question:"9) 21 + 4 =\n a.25 \n b.14 \n c.32\nanswer: ",answer:'a'},{question:"10) 4+4 =\n a.5 \n b.4 \n c.8\nanswer: ",answer:'c'}]

for(var i=0;i<ques.length;i++){
  var currQues=ques[i];
  play(currQues.question,currQues.answer)
}
log("Thank You..! Hope to see you again..!!");
log(chalk.bold.magentaBright("High-Score is : 10"));