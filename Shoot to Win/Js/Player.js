class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.score = 0;
        this.distanceX = 0
        this.distanceY = 0
    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", function(data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    static getPlayerInfo(){
        database.ref('players').on("value", function(data) {
            allPlayers = data.val()
        })
    }

    updatePlayerInfo(){
        var playerIndex = 'players/player'+this.index;
        database.ref(playerIndex).update({
            name:this.name,
            score:this.score,
            distanceX:this.distanceX,
            distanceY:this.distanceY
        })
    }
}