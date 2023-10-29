#! /usr/bin/env node 
import inquirer from "inquirer";
const input = await inquirer.prompt([
    {
        name: "userid",
        message: "Please put userid",
        type: "number"
    },
    {
        name: "userPin",
        message: "Please put userPin",
        type: "number"
    },
    {
        type: "list",
        name: "accounttype",
        choices: ["current", "saving"],
        message: "Select your account type"
    },
    {
        type: "list",
        name: "transcationtype",
        choices: ["fastcash", "Withdraw"],
        message: "Select your transaction",
        when(input) {
            return input.accounttype;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 4000, 5000, 10000],
        message: "Select your amount",
        when(input) {
            return input.transcationtype == "fastcash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(input) {
            return input.transcationtype == "Withdraw";
        },
    },
]);
if (input.userid && input.userpin) {
    const Balance = Math.floor(Math.random() * 10000000);
    console.log(Balance);
    const Enteramount = input.amount;
    if (Balance >= Enteramount) {
        const remaining = Balance - Enteramount;
        console.log("your remaining balance is", remaining);
    }
    else {
        console.log("Not enough balance");
    }
}