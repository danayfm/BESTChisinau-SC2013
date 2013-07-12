
var playerPos;
var playerPosX;
/*
 * missile entity
 */
var MissileEntity = me.ObjectEntity.extend(
{
    speed: 9,
	/*
	 * constructor
	 */
	init: function(x, y)
	{
	    var settings = {};
	    settings.image = "missile";
	    settings.type = me.game.ENEMY_OBJECT; 

		// call the parent constructor
		this.parent(x, y, settings);

	    // enable collision
		this.collidable = true;

		// set the default horizontal speed (accel vector)
		this.setVelocity(this.speed, 0);
	},

	/*
	 * update function
	 */
    /*

 * update function

 */

	update: function()

	{

	    // calculate missile velocity

	    this.vel.x -= this.accel.x * me.timer.tick;



	    // if the missile object goes out from the screen,

	    // remove it from the game manager

	    if (!this.visible)

	        me.game.remove(this);



	    // check & update missile movement

	    this.computeVelocity(this.vel);

	    this.pos.add(this.vel);



	    // collision detection

	    var res = me.game.collide(this);

	    console.log("checking collision from missile");

	    if (res && res.obj.type == me.game.ENEMY_OBJECT)

	    {

	        console.log("score +s");

	        // remove enemy

	        res.obj.remove();

	        // remove missile

	        me.game.remove(this);




	    }
	}

});







function gotoGO() {

    me.state.change(me.state.HAPPYENDING);

    
}

var PlayerEntity = me.ObjectEntity.extend(
{

    speed: 7, gameOverTimer: 0,

    /*
    * constructor
    */
    init: function (x, y) {
        // call the parent constructor
        this.parent(x, y, { image: "ship" });

        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(this.speed, this.speed);

        // init variables
        this.gravity = 0;

        // 5 Minute timeout start
        endOfGameInterval = setTimeout(gotoGO, 60000);

        // enable collision
        this.collidable = true;
        this.updateColRect(8, 40, 10, 40);
        me.game.HUD.updateItemValue("score", 5);
    },


    /*
    * update the player pos
    */
    update: function () {
        // move left
        if (me.input.isKeyPressed("left")) {
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
            if (this.pos.x < 0)
                this.pos.x = 0;
        }
            // move right
        else if (me.input.isKeyPressed("right")) {
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
            if (this.pos.x > me.video.getWidth() - this.image.width)
                this.pos.x = me.video.getWidth() - this.image.width;
        }
        else
            this.vel.x = 0;

        // move up
        if (me.input.isKeyPressed("up")) {
            // update the entity velocity
            this.vel.y -= this.accel.y * me.timer.tick;
            if (this.pos.y < 0)
                this.pos.y = 0;
        }
            // move down
        else if (me.input.isKeyPressed("down")) {
            // update the entity velocity
            this.vel.y += this.accel.y * me.timer.tick;
            if (this.pos.y > me.video.getHeight() - this.image.height)
                this.pos.y = me.video.getHeight() - this.image.height;
        }
        else
            this.vel.y = 0;

        // fire
        if (me.input.isKeyPressed("fire")) {

            me.state.pause();

            var resume_loop = setInterval(function check_resume() {
                if (me.input.isKeyPressed("fire")) {
                    clearInterval(resume_loop);
                    me.state.resume();
                }
            }, 100);


        }

        // check & update player movement
        this.computeVelocity(this.vel);
        this.pos.add(this.vel);
        this.checkCollision();

        // update animation if necessary
        var updated = (this.vel.x != 0 || this.vel.y != 0);

        playerPos = this.pos.y;
        playerPosX = this.pos.x;
        return updated;
    },

    /*
    * check collision
    */


    checkCollision: function () {

        var res = me.game.collide(this);



        // if collided object is an enemy

        if (res && res.obj.type == me.game.ENEMY_OBJECT) {

            // play sound

            me.audio.play("clash");

            console.log("updating life indicator");

            // update life indicator

            me.game.HUD.updateItemValue("life", -1);



            // if no more lives

            if (me.game.HUD.getItemValue("life") <= 0) {

                console.log("no more lifes");

                // game over

                me.state.change(me.state.GAMEOVER);

                me.game.HUD.getItemValue("score");

                return;

            }



            // remove enemy

            me.game.remove(res.obj);

        }

    }


});

var endOfGameInterval;
/*
 * player entity
 */
var PlayerEntity = me.ObjectEntity.extend(
{

    speed: 7, gameOverTimer: 0,
    
    /*
    * constructor
    */
    init: function (x, y) {
        // call the parent constructor
        this.parent(x, y, { image: "ship" });

        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(this.speed, this.speed);

        // init variables
        this.gravity = 0;

        // 5 Minute timeout start
        endOfGameInterval = setTimeout(gotoGO, 60000);

        // enable collision
        this.collidable = true;
        this.updateColRect(8, 40, 10, 40);
        me.game.HUD.updateItemValue("score", 20);
    },


    /*
    * update the player pos
    */
    update: function () {
        // move left
        if (me.input.isKeyPressed("left")) {
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
            if (this.pos.x < 0)
                this.pos.x = 0;
        }
        // move right
        else if (me.input.isKeyPressed("right")) {
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
            if (this.pos.x > me.video.getWidth() - this.image.width)
                this.pos.x = me.video.getWidth() - this.image.width;
        }
        else
            this.vel.x = 0;

        // move up
        if (me.input.isKeyPressed("up")) {
            // update the entity velocity
            this.vel.y -= this.accel.y * me.timer.tick;
            if (this.pos.y < 0)
                this.pos.y = 0;
        }
        // move down
        else if (me.input.isKeyPressed("down")) {
            // update the entity velocity
            this.vel.y += this.accel.y * me.timer.tick;
            if (this.pos.y > me.video.getHeight() - this.image.height)
                this.pos.y = me.video.getHeight() - this.image.height;
        }
        else
            this.vel.y = 0;

        // fire
        if (me.input.isKeyPressed("fire")) {
           
            me.state.pause();

            var resume_loop = setInterval(function check_resume() {
                if (me.input.isKeyPressed("fire")) {
                    clearInterval(resume_loop);
                    me.state.resume();
                }
            }, 100);
            

        }

        // check & update player movement
        this.computeVelocity(this.vel);
        this.pos.add(this.vel);
        this.checkCollision();

        // update animation if necessary
        var updated = (this.vel.x != 0 || this.vel.y != 0);
        
        playerPos = this.pos.y;
        playerPosX = this.pos.x;
        return updated;
    },

    /*
    * check collision
    */
    

    checkCollision: function () {

        var res = me.game.collide(this);



        // if collided object is an enemy

        if (res && res.obj.type == me.game.ENEMY_OBJECT) {

            // play sound

            me.audio.play("clash");

            console.log("updating life indicator");

            // update life indicator

            me.game.HUD.updateItemValue("life", -1);



            // if no more lives

            if (me.game.HUD.getItemValue("life") <= 0)

            {	

                console.log("no more lifes");

                // game over

                me.state.change(me.state.GAMEOVER);

                me.game.HUD.getItemValue("score");

                return;

            }



            // remove enemy

            me.game.remove(res.obj);

        }

    }

   
});

/*
 * enemy entity
 */
var EnemyEntity = me.ObjectEntity.extend(
{

    firingCooldown: 1000, timeOfLastShot: 0, neighbors: null,
    speed: 2,
    /*
    * constructor
    */
    init: function (x, y) {
        // enemy entity settings
        var settings = {};
        settings.image = "enemy";
        settings.spritewidth = 43;
        settings.spriteheight = 64;
        settings.type = me.game.ENEMY_OBJECT;

        // call parent constructor
        this.parent(x, y, settings);

        // add animation with all sprites
        this.addAnimation("flying", null, 0.2);
        this.setCurrentAnimation("flying");

        // init variables
        this.gravity = 0;

        // set the default horizontal speed (accel vector)
        this.setVelocity(this.speed, 0);

        // enable collision
        this.collidable = true;

        this.neighbors = new Array();
        this.updateColRect(6, 27, 7, 50);
    },

    /*
    * update function
    */
    update: function () {
        // call parent constructor
        this.parent(this);

        // calculate velocity
        this.vel.x -= this.accel.x * me.timer.tick;

        // if the enemy object goes out from the screen,
        // remove it from the game manager
        if (this.pos.x < -this.width) {

            // update score

            me.game.HUD.updateItemValue("score", -1);

            // if no more ships are allowed to pass

            if (me.game.HUD.getItemValue("score") < 0) {

                console.log("no more ships");

                // game over

                me.state.change(me.state.GAMEOVER);

                me.game.HUD.getItemValue("score");

                return;

            }
            me.game.remove(this);
        }

        // check & update missile movement
        this.computeVelocity(this.vel);
        this.pos.add(this.vel);
        
        // Line of Sight?
        if (this.pos.x < playerPosX)
            return;

        if (this.pos.y <= playerPos + 32 && this.pos.y >= playerPos ) {

            console.log("LOS");
            // Cooldown?
            if (new Date().getTime() - this.timeOfLastShot > this.firingCooldown) {


                // Create the missile
                var missile = new MissileEntity(this.pos.x - 34, this.pos.y + 21.5);
                me.game.add(missile, this.z);
                me.game.sort();

                // Reset the timer
                this.timeOfLastShot = new Date().getTime();

            }
            /*var x = me.video.getWidth() + 10;
            var y = Number.prototype.random(0, this.maxY) * 10;

            // add an enemy
            me.game.add(new EnemyEntity(x, y), 10);
            me.game.sort();*/
        }





        return true;
    },

    /*
    * remove function
    */
    remove: function () {
        // remove this entity
        me.game.remove(this, true);

        // play sound
        me.audio.play("implosion");

        // init implosion
        var implosion = new Implosion(this.pos.x, this.pos.y);
        me.game.add(implosion, 15);
        me.game.sort();
    }
});

/*
 * enemy fleet
 */
var EnemyFleet = Object.extend(
{
	/*
	 * constructor
	 */
    // 1/12 of a second
    timeOfLastSpawn: 0, spawnCooldown: 2, maxEnemiesPerBlock: 4,
    spriteWidth: 50, framesSinceLastSpawn: 0,
	init: function()
	{
		// init variables
		this.fps = 0;
		this.maxY = (me.video.getHeight() / 10) - 5;
	},

	/*
	 * update function
	 */
	update: function()
	{

	    // every 1/12 second
	    if (this.framesSinceLastSpawn++ > me.sys.fps * this.spawnCooldown )
		{
		    var x = me.video.getWidth() + 10;
                        
		    // Select a position
		    var n = Math.round (Number.prototype.random(0, me.video.getHeight() / this.spriteWidth) ) ;
		    var y = n * this.spriteWidth;

			// Select how many enemies should spawn at that block
			var numEnemies = Number.prototype.random(2, this.maxEnemiesPerBlock);
			var enemiesAdded = new Array();
            
			for (var i = 0; i < numEnemies; i++) {

			    // Select a new position
			    var newPosY = y + i * (this.spriteWidth + 5);
			    enemiesAdded[i] = new EnemyEntity(x, newPosY );
                // If we are out of bounds
			    //if (newPosY > this.maxY)
			    //    continue;

                // Else, spawn the enemy
			    me.game.add(enemiesAdded[i], 10);
			    me.game.sort();

			}

		    // Update their neighbors
			for (var i = 0; i < numEnemies; i++) {
			    enemiesAdded[i].neighbors = enemiesAdded;
			}

			

		    // Reset the cooldown
			this.framesSinceLastSpawn = 0;
		}

		return true;
	}
});

/*
 * implosion animation
 */
var Implosion = me.AnimationSheet.extend(
{
	/*
	 * constructor
	 */
	init: function(x, y)
	{
		// call parent constructor
		var image = me.loader.getImage("implosion");
		this.parent(x, y, image, 45, 42);

		// add animation with all sprites
		this.addAnimation("implosion", null, 0.4);

		// set animation
		this.setCurrentAnimation("implosion", function() {
			me.game.remove(this);
			me.game.sort();
		});
	}
});
