var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function now with parameter for enemy's name
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if the player picks "skip" confirm and then stop the loop
 if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

 // remove enemy's health by subtracting the amount set in the playerAttack variable
 enemyHealth = enemyHealth - playerAttack;
 console.log(
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
 ); 

  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;

    //leave while() loop since enemy is dead
    break;
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
    }
};

// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //other logic remains the same

};
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
    // if player know what round they are in, remember that arrays start at 0 so it needs to have 1 added
    window.alert("Welcome to Robot Gladiators! Round " + (i+1));

    //pick new enemy to fight based on index of enemy name array
    var pickedEnemyName = enemyNames[i];

    //reset enemy health before starting new fight
    enemyHealth = 50;  

    //use debugger to pause script from running and check what's going on in the code
    // debugger;

    //pass the enemy name variable's value into the fight function where it will assume the value of the enemy name parameter
    fight(pickedEnemyName);

    //play again
     startGame();
    }
// if player isn't alive, stop the game 
 else { 
        window.alert("You have lost your robot in battle! Game Over!");
         break;

 }
};