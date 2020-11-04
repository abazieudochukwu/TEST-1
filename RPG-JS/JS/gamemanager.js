let GameManager={

    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    

    },

    resetPlayer: function(classType){
        //FUNCTION TO RESET THE  INTERFACE AND ALLOW ONLY THE PLAYER SECTION 

        switch(classType){
            case 'Warrior':
                player = new Player(classType,200,0,200,100,50);
                break;
            case 'Rogue':
                player = new Player(classType,100,0,100,150,200);
                break;
            case 'Mage':
                player = new Player(classType,80,0,50,200,50);
                break;
            case 'Hunter':
                player = new Player(classType,200,0,50,200,100);
                break;
            default:
                    alert('PLEASE CHOOSE A CHARACTER');
        }

        let getInterface = document.querySelector(".interface")
        getInterface.innerHTML =`<img src="IMG/AVATAR-player/${classType.toUpperCase()}.jpeg" alt="${classType.toUpperCase()} PLAYER" class="img-avatar"><div><h3>${classType}</h3><p><p class="health-player">health: ${player.health}</p><p>Mana:${player.mana}</p><p>Strength: ${player.strength}</p><p>agility:${player.agility}</p><p>speed:${player.speed}</p></p></div> `
    },
    setPreFight: function(){
        //FUNCTION TO CLEAR  ALL THE OTHER SECTIONS  AND SET THE STAGE BEFORE 

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
       

        getHeader.innerHTML =`<div class="header"><h2>TASK: FIND YOUR ENEMY</h2></div>`

        getActions.innerHTML ='<div class="actions"><a href="#" class="btn-PreFight" onclick="GameManager.setFight()">SEARCH FOR AN ENEMY</a></div>';

        getArena.style.vissibility ="visible";
    },
    setFight: function(){
        // SETTING THE FIGHTING STAGE READY 
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

    //CREATING ENEMY SECTION 

    let enemy00 =new Enemy("GOBLIN",100,0,50,100,100);
    let enemy01 = new Enemy("TROLL",200,0,150,80,150);

    let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));
    

    switch(chooseRandomEnemy){
        case 0:
            enemy = enemy00;
            break;
        case 1:
            enemy = enemy01;
            break;
    }
    console.log(enemy);
    getHeader.innerHTML =`<div class="header">TASK: CHOOSE YOUR MOVE </div>`;
    getActions.innerHTML =`<a href="#" class="btn-PreFight" onclick="PlayerMoves.calcAttack()">ATTACK</a>`

    getEnemy.innerHTML =`<img src="IMG/AVATAR-enemies/${enemy.enemyType}.jpeg" alt="${enemy.enemyType.toUpperCase()}" class="img-avatar"><div><h3>${enemy.enemyType}</h3><p><p class="health-player">health: ${enemy.health}</p><p>Mana:${enemy.mana}</p><p>Strength: ${enemy.strength}</p><p>agility:${enemy.agility}</p><p>speed:${enemy.speed}</p></p></div>`;
}
}