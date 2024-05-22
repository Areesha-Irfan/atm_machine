#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
const pinAns = await inquirer.prompt([
    {
        name: "code",
        type: "number",
        message: "Enter your pin code ",
    },
]);
if (pinAns.code === myPin) {
    console.log("Correct pin code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select one option to perform action",
            type: "list",
            choices: ["Withdraw", "Check balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount to withdraw",
            },
        ]);
        if (myBalance <= amountAns.amount) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is now: ${myBalance}`);
        }
    }
    else {
        console.log(`Your balance is : ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code !");
}
