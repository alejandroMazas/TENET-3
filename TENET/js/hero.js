class Hero{
    constructor(ctx,gameSizeWidth, gameSizeHeight,heroPosX,heroPosY,heroWidth,heroHeight,heroSpeedX,heroSpeedY){
        this.ctx=ctx
        this.gameSize={w:gameSizeWidth,h:gameSizeHeight}
        this.heroPos={x:heroPosX, y:heroPosY}
        this.heroSize={w:heroWidth,h:heroHeight}
        this.heroSpeed={x:heroSpeedX, y:heroSpeedY}
        this.bullets=[]
        this.timerIndex=0
        this.heroGravity=0.4
    }

    drawHero(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.heroPos.x,this.heroPos.y,this.heroSize.w,this.heroSize.h)
        //this.moveRight()
        //this.moveLeft()
        this.bullets.forEach(eachBullet=> eachBullet.drawBullet())
        //this.moveDown()
        
        console.log(this.platforms)
    }

    //moveRight(){
    //        this.heroPos.x+=this.heroSpeed.x
    //}
    //moveLeft(){
    //        this.heroPos.x-=this.heroSpeed.x
    //}
    
    moveUp(){
        this.heroSpeed.y=200
        this.heroSpeed.y*=this.heroGravity
        this.heroPos.y-= this.heroSpeed.y

}
    moveDown(){
        this.heroSpeed.y=10
        this.heroSpeed.y*=this.heroGravity
        this.heroPos.y+=this.heroSpeed.y
    }
   shoot(){
       this.bullets.push(new Bullet(this.ctx, this.heroPos.x,this.heroPos.y, 30, 40, 20))
   }
}


        //(this.heroPos.x >= this.platforms.forEach(eachPlatform=> eachPlatform.obstaclePosX) && 
        //this.heroPos.y+this.heroSize.h === this.platforms.forEach(eachPlatform=> eachPlatform.obs<taclePosY))