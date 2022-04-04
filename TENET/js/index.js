const gameLauncher= {
    name: 'Tenet',
    description: 'Intento de Tenet',
    authors: ['Miguel Delgado', 'Alejandro Mazas de Lizana', 'Cristian Calderón'],
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: {w:undefined,h:undefined},
    hero1: undefined,
    platforms: [],
    FPS:60,
    timerIndex:0,
    bullets:[],
    init(canvasID){
        this.canvasNode=document.querySelector(`#${canvasID}`)
        this.ctx=this.canvasNode.getContext('2d')
        this.setDimensions()
        this.createPlatform()
        this.createHero()
        this.setEventListeners()
        this.startGame()
        this.collisions()
    },

    setDimensions(){
        this.gameSize={
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },
    drawRectangle(){
        this.ctx.fillStyle='green'
        this.ctx.fillRect(0,0,this.gameSize.w,this.gameSize.h)
    },

    createPlatform(){
        this.platforms.push(
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, 0, this.gameSize.h - this.gameSize.h/20,this.gameSize.w,this.gameSize.h/20),
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, 0, 0,this.gameSize.w,this.gameSize.h/20),
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, 0, 0, this.gameSize.h/20,this.gameSize.w),
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, this.gameSize.w-this.gameSize.h/20, 0,this.gameSize.h/20,this.gameSize.h),
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, this.gameSize.w/3, 3*this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,this.gameSize.h/20),
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, 0, 2*this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,this.gameSize.h/20),
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, this.gameSize.w/3, this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,this.gameSize.h/20)
            
            )
    },      
    createHero(){
        this.hero1=new Hero(this.ctx,this.gameSize.w,this.gameSize.h,3*this.gameSize.w/4,19*this.gameSize.h/20 -80,30,80, 30,0)
    },
    moveRight(){
        this.hero1.heroPos.x+=15  //this.hero1.heroSpeed.x
    },
    moveLeft(){
        this.hero1.heroPos.x-=15   //this.hero1.heroSpeed.x
    }
    ,
    moveUp(){
        this.hero1.heroSpeed.y=300
        this.hero1.heroSpeed.y*=this.hero1.heroGravity
        this.hero1.heroPos.y-= this.hero1.heroSpeed.y
    },
    //  moveDown(){
    //      if(this.noGravity()==false){
    //      this.hero1.heroSpeed.y=10
    //      this.hero1.heroSpeed.y*=this.hero1.heroGravity
    //      this.hero1.heroPos.y+=this.hero1.heroSpeed.y
    //      } else {

    //      }
    //  },
    // noGravity(){
    //     this.platforms.forEach(eachPlatform => {
    //        if(this.hero1.heroPos.x>=eachPlatform.obstaclePos.x && 
    //         this.hero1.heroPos.y+this.hero1.heroSize.h >= eachPlatform.obstaclePos.y) {
    //             return true
    //         }else{
    //             return false
                
    //             this.hero1.heroSpeed.y=10
    //             this.hero1.heroSpeed.y*=this.hero1.heroGravity
    //             this.hero1.heroPos.y+=this.hero1.heroSpeed.y
    //         }
    //     })
    


    //  },


    //  noGravity(){
    //          this.platforms.forEach(eachPlatform => {
    //          if(this.hero1.heroPos.x < eachPlatform.obstaclePos.x + eachPlatform.obstacleSize.w &&
    //              this.hero1.heroPos.x + this.hero1.heroSize.w > eachPlatform.obstaclePos.x &&
    //              this.hero1.heroPos.y < eachPlatform.obstaclePos.y + eachPlatform.obstacleSize.h &&
    //              this.hero1.heroSize.h + this.hero1.heroPos.y > eachPlatform.obstaclePos.y) {

                    
    //                  console.log(true)
    //                  return true
    //              }else{
    //              return false
                    
    //                  this.hero1.heroSpeed.y=10
    //                  this.hero1.heroSpeed.y*=this.hero1.heroGravity
    //                  this.hero1.heroPos.y+=this.hero1.heroSpeed.y

        
    //              }
    //          })
        


    //    },





     collisions(){
         if(this.hero1.heroPos.y+this.hero1.heroSize.h<=this.platforms[0].obstaclePos.y &&
              this.hero1.heroPos.y+this.hero1.heroSize.h>this.platforms[4].obstaclePos.y){
           if(this.hero1.heroPos.x>=this.platforms[0].obstaclePos.x && 
             this.hero1.heroPos.y+this.hero1.heroSize.h >= this.platforms[0].obstaclePos.y){
              return true
           } else {
              this.hero1.heroSpeed.y=10
              this.hero1.heroSpeed.y*=this.hero1.heroGravity
              this.hero1.heroPos.y+=this.hero1.heroSpeed.y
          }
         }
         if(this.hero1.heroPos.y+this.hero1.heroSize.h<=this.platforms[4].obstaclePos.y &&
            this.hero1.heroPos.y+this.hero1.heroSize.h>this.platforms[5].obstaclePos.y){
         if(this.hero1.heroPos.x>=this.platforms[4].obstaclePos.x && 
           this.hero1.heroPos.y+this.hero1.heroSize.h >= this.platforms[4].obstaclePos.y){
            return true
         } else {
            this.hero1.heroSpeed.y=10
            this.hero1.heroSpeed.y*=this.hero1.heroGravity
            this.hero1.heroPos.y+=this.hero1.heroSpeed.y
        }
       }
      },







//      }  if(this.hero1.heroPos.y+this.hero1.heroSize.h<=this.platforms[4].obstaclePos.y &&
//              this.hero1.heroPos.y+this.hero1.heroSize.h>=this.platforms[5].obstaclePos.y){
//          if(this.hero1.heroPos.x>=this.platforms[4].obstaclePos.x && 
//             this.hero1.heroPos.y+this.hero1.heroSize.h >= this.platforms[4].obstaclePos.y){
//              return true
//          } else {
//              this.hero1.heroSpeed.y=10
//              this.hero1.heroSpeed.y*=this.hero1.heroGravity
//              this.hero1.heroPos.y+=this.hero1.heroSpeed.y
//          }
 // }
    // },
    setEventListeners(){
        document.onkeydown=event=> {
            const { key } = event
            if(this.hero1.heroPos.x>=1.5*this.hero1.heroSize.w){
            if (key == 'ArrowLeft') {
                    this.moveLeft()
                }
                }
            if (key == 'ArrowRight') {
                if(this.hero1.heroPos.x<=this.gameSize.w-2*this.hero1.heroSize.w){
                    this.moveRight()
                }
                }
            if (key == 'ArrowDown') this.hero1.shoot()
        }
        document.onkeyup=event=> {
            const { key } = event
                if (key == 'ArrowUp') {
                    this.moveUp()
                }
        }

    },
    drawAll(){
        this.drawRectangle()
        this.hero1.drawHero()
        this.platforms.forEach(eachPlatform=>eachPlatform.drawPlatform())
        //this.moveDown()
        this.collisions()
        //this.noGravity
        this.bullets.forEach(eachBullet => eachBullet.drawBullet())
        
    },
    clearAll(){
        this.ctx.clearRect(0,0,this.gameSize.w, this.gameSize.h)
    },
    startGame(){
        setInterval(()=>{
            this.clearAll()
            this.drawAll()
            this.timerIndex++
        },1000/this.FPS)
    }
}