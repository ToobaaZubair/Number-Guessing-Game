import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const Answers = await inquirer.prompt([
    {
        type: `number`,
        name: `GuessNUmber`,
        message: `Write Your Guessed Number Between 1 to 10:`
    }
]);
let Answer;
if (Answers.GuessNUmber === systemGeneratedNumber) {
    console.log(`Yeahhhhhh You Guessed Right One / You Win The Game !`);
}
else if (Answers.GuessNUmber > systemGeneratedNumber) {
    console.log(`Too High ! Try a lower Number`);
}
else if (Answers.GuessNUmber < systemGeneratedNumber) {
    console.log(`Too Low ! Try a higher Number`);
}
else if (Answers.GuessNUmber !== systemGeneratedNumber) {
    console.log(`Try Again Better Luck Next Time`);
}
console.log(Answers.GuessNUmber, `Guessed Number`);
console.log(systemGeneratedNumber, `System Generated Number`);
