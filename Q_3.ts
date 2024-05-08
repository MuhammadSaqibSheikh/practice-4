
import inquirer from "inquirer";

const Answer = await inquirer.prompt([{message: "Enter your number here", type:"number", name :"first"},{message:"enter your second number here ", type:"number", name :"second"}, {

message:"Select one of the opreator to perform action",
type:"list",
name:"opreator",
choices:["Addition","subtraction","multiplication","divide","modulus"]

}]);

console.log(Answer);

if (Answer.operator === "addition") {

    console.log(Answer.firstAnswer+ Answer.secondAnswer);
    
    
}else if (Answer.operator === "subtraction"){
    console.log(Answer.first - Answer.second);
}
else if (Answer.operator === "multiplication"){
    console.log(Answer.first * Answer.second);
}
else if (Answer.operator === "divide"){
    console.log(Answer.first / Answer.second);
}
else if (Answer.operator === "modulus"){
    console.log(Answer.first % Answer.second);
}else {
    console.log("please choose valid opreator")}

console.log(Answer);

