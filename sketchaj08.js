function preload(){
   Sp = loadImage("space2.jpg");
   foguete = loadImage("foguete-espacial.png");
   discos = loadImage("disco_voador.png");
}

function setup() {
    createCanvas(400,500);
    fundo = createSprite(200,250);
    fundo.addImage(Sp);
    fundo.velocityY = -0.04;
    principal = createSprite(200,420)
    principal.addImage(foguete)
    principal.scale = 0.18
    Edges = createEdgeSprites()
    
}

function draw() {
    drawSprites()

    if (fundo.y<170){
        fundo.y = 200
    }

    if (keyDown("right_arrow")){
        principal.x = principal.x + 5
    }

    if(keyDown("left_arrow")){
        principal.x = principal.x -5
    }

    if(keyDown("up_arrow")){
        principal.y = principal.y - 5
    }
    enemies()

    if(keyDown("down_arrow")){
        principal.y = principal.y + 5
    }
    enemies()

    principal.collide(Edges)
}

function enemies(){
    if(frameCount%240 === 0){
        enemy = createSprite(200,0)
        enemy.addImage(discos)
        enemy.velocityY = 8
        enemy.scale = 0.10
        enemy.lifetime = 500/5
        enemy.x = Math.round(random(10,500))
    }
}