let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //WHO ATTACKS FIRST
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        //Player ATTACK 
        let playerAttack = function () {
            let calcBaseDamage;
            //CONDITIONAL STATEMENT TO CHOOSE  WHO HAS MANA
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            //GENERATE A RANDOM NUMBER TO BE ADDED TO VARY THE BASEDAMAGE OF THE player

            let offSetDamage = Math.floor(Math.random() * Math.floor(10));

            let calcOutputDamage = calcBaseDamage + calcBaseDamage;

            //calculating the number of hits 

            let NumberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2 + 1);

            let attackValues = [calcOutputDamage, NumberOfHits];

            return attackValues;

        }
        let enemyAttack = function () {
            let calcBaseDamage;
            //CONDITIONAL STATEMENT TO CHOOSE  WHO HAS MANA
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            //GENERATE A RANDOM NUMBER TO BE ADDED TO VARY THE BASEDAMAGE OF THE player

            let offSetDamage = Math.floor(Math.random() * Math.floor(10));

            let calcOutputDamage = calcBaseDamage + calcBaseDamage;

            //calculating the number of hits 

            let NumberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2 + 1);

            let attackValues = [calcOutputDamage, NumberOfHits];

            return attackValues;

        }

        //variable to get the health of the player/enemy and change it to something visible  

        let getPlayerHealth = document.querySelector("health-player");
        let getEnemyHealth = document.querySelector("enemy-player");

        //initiating attacks 

        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;

            alert(`ENEMY WAS HIT ${playerAttackValues[0]} damages ${playerAttackValues[1]} hits `)

            if (enemy.health <= 0) {
                alert("YOU WON THE GAME! REFRESH THE BROWSER TO START AGAIN");
                getPlayerHealth.innerHTML = 'health:' + player.health;
                getEnemyHealth.innerHTML = 'health: 0';
            } else {
                getEnemyHealth.innerHTML = 'health:' + enemy.health;

                //initializing ENEMY ATTACK 

                let enemyAttackValues = enemyAttack();

                let playerAttackValues = playerAttack();

                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

                player.health = player.health - totalDamage;

                alert(`YOU  WERE HIT ${enemyAttackValues[0]} damages ${enemeyAttackValues[1]} hits `)
              }
            if (player.health <= 0 ) {
                alert("YOU LOST THE GAME ! REFRESH THE BROWSER TO START AGAIN ");
                getEnemyHealth.innerHTML = 'health:' + enemy.health;
                getPlayerHealth.innerHTML = 'health: 0';
            }
        }

        // if the PLAYER SPEED IS LESS TTHAN SPEED OF THE ENEMY 
        //ENEMY ATTACKS FIRST 

        if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;

            alert(`YOU  WERE HIT ${enemyAttackValues[0]} damages ${enemyAttackValues[1]} hits `)

            if (player.health <= 0) {
                alert("YOU LOST THE  GAME! REFRESH THE BROWSER TO START AGAIN");
                getEnemyHealth.innerHTML = 'health:' + enemy.health;
                getPlayerHealth.innerHTML = 'health: 0';
            } else {
                getPlayerHealth.innerHTML = 'health' + player.health;

                //initializing PLAYER ATTACK 


                let playerAttackValues = playerAttack();

                let totalDamage = playerAttackValues[0] * playerAttackValues[1];

                enemy.health = enemy.health - totalDamage;

                alert(`ENEMY WAS  HIT ${playerAttackValues[0]} damages ${playerAttackValues[1]} hits `)
              }
            if (enemy.health <= 0) {
                alert("YOU WON  THE GAME ! REFRESH THE BROWSER TO START AGAIN ");
                getPlayerHealth.innerHTML = 'health:' + player.health;
                getEnemyHealth.innerHTML = 'health: 0';
            }
        }

    }
}