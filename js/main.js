let movement = document.getElementById('movement');
let game = document.getElementById('game');
let context = game.getContext('2d'); //sets context for html canvas
let player
let ogre


//object constructor
function Crawler(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.height, this.width)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    player = new Crawler(10, 10, 'blue', 16, 16)
    ogre = new Crawler(200, 50, 'lightgreen', 32, 48)
    document.addEventListener('keydown', movementHandler    )
    setInterval(gameLoop, 60)
    

    //drawBox(e.offsetX, e.offsetY, 50, 'green')
}) //offsetX & Y passes coordinates where the click event is happening/where your mouse is into fillrect w/in drawBox() 

function gameLoop() {
    //while ogre is alive, detect a hit (collision detection
     if (ogre.alive) {
        detectHit()
     }

     context.clearRect(0, 0, game.width, game.height)//clears everything in game board
     
     //track movement
     movement.textContent = player.x + ' ' + player.y

     //render player and ogre
    player.render()
     if (ogre.alive) { //need this again since game board is being cleared above
         ogre.render()
     }
    //
}

function detectHit() {
    //check if x & y coordinates match
    if (player.x < ogre.x + ogre.width
        && player.x + player.width > ogre.x
        && player.y + player.height > ogre.y
        && player.y < ogre.y + ogre.height
        ) {
            ogre.alive = false;
            document.getElementById('status').textContent = 'You Win!'

    }
}

function movementHandler(e) {
    switch(e.keyCode) {
        case 87:
            player.y -= 10
            break
        case 65:
            player.x -= 10
            break
        case 83: 
            player.y += 10
            break
        case 68:
            player.x += 10
            break
    }
}

// set fill color, line color, width
context.fillStyle = 'white';
context.strokeStyle = 'red';
context.lineWidth = 5;

game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);

// function drawBox(x, y, size, color) {
//     context.fillStyle = color;
//     context.fillRect(x, y, size, size);
//     console.log(x,y)
// }



// let hero = new Crawler(200, 200, 'pink', 40, 40)