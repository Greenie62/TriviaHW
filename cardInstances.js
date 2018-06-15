var inquirer=require('inquirer');
var ClozeCard=require("./cloze.js");
var BasicCard=require("./basicCard.js");
var fs=require('fs');

// BasicCard Instances

var basicOne=new BasicCard("The primary language we are learning to program in", "Javascript");
var basicTwo=new BasicCard("An orderly system has low...", "entropy");
var basicThree=new BasicCard("When a function is inside a object its called?", "method");
var basicFour=new BasicCard("when a object has more then one method it is said to have?","behavior");
var basicFive=new BasicCard("Climbers use this to dry their hands/calm their nerves", "chalk");
var basicSix=new BasicCard("A strategy climbers use to optimize their hip-alignment with the wall","drop-knee");
var basicSeven=new BasicCard("Every climbers worst enemy", "sun");


// ClozeCard Instances

var clozeOne=new ClozeCard("alex honnold became famous after soloing Moonlight Buttress","alex honnold");
var clozeTwo=new ClozeCard("adam ondra was first climber to climb 15C","adam ondra");
var clozeThree=new ClozeCard("The server is the physical hardware that holds the information that client makes requests too","server");
var clozeFour=new ClozeCard("lynn hill was first person to free-climb the Nose of El Cap","lynn hill");
var clozeFive=new ClozeCard("Ambrosia is a 45 foot highball up in the sleepy town of bishop CA", "bishop");

// Players Score Variables
var right=0;
var wrong=0;


function playGame(){
    
    inquirer.prompt([
        {
            type:"input",
            message:basicOne.front,
            name:"answerOne",
        },
        {
            type:"input",
            message:basicTwo.front,
            name:"answerTwo"
        },
        {
            type:"list",
            message:clozeFour.partial,
            choices:["chris sharma", "tom cruise", clozeFour.cloze, "Warren Harding"],
            name:"answerThree"
        },
        {
            type:"input",
            message:basicThree.front,
            name:"answerFour",
        },
        {
            type:"input",
            message:basicSix.front,
            name:"answerFive"
        },
        {
            type:"list",
            message:clozeFive.partial,
            choices:["Idaho", "Disneyland", "Palm Springs",clozeFive.cloze],
            name:"answerSix"
        },
        {
            type:"input",
            message:basicFive.front,
            name:"answerSeven",
        },
        {
            type:"input",
            message:basicFour.front,
            name:"answerEight"
        },
        {
            type:"list",
            message:clozeTwo.partial,
            choices:["luke skywalker", "spiderman", clozeTwo.cloze, "a 15 what??"],
            name:"answerNine"
        },

    ]).then(function(user){
        if(user.answerOne !== basicOne.back){
            wrong++;
        }
        else{right++}
        if(user.answerTwo !== basicTwo.back){
            wrong++;
        }
        else{right++}
        if(user.answerThree !== clozeFour.cloze){
            wrong++;
        }
        else{right++}
        if(user.answerFour !== basicThree.back){
            wrong++;
        }
        else{right++}
        if(user.answerFive !== basicSix.back){
            wrong++;
        }
        else{right++}
        if(user.answerSix !== clozeFive.cloze){
            wrong++;
        }
        else{right++}
        if(user.answerSeven !== basicFive.back){
            wrong++;
        }
        else{right++}
        if(user.answerEight !== basicFour.back){
            wrong++;
        }
        else{right++}
        if(user.answerNine !== clozeTwo.cloze){
            wrong++;
        }
        else{right++}
        if(right > 7){
            inquirer.prompt([
                {
                    type:"input",
                    message:"Wow!! " + right + " right!! Now thats a score worth remembering. Alright hot shot,your going on the hall of fame, whats your name stud?",
                    name:"playerName"
                }
            ]).then(function(res){
                fs.appendFile("HigScores.txt","Name: " + res.playerName + " Score: " + right,function(err){
                    if(!err){
                        console.log("Congrats " + res.playerName + " your officially in the books!")
                        console.log("Right: " + right);
                        console.log("Wrong: " + wrong)
                    }
                })
            })
        }
  

    })

}
playGame()