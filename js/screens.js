/*
 * loading screen
 */
var LoadingScreen = me.ScreenObject.extend(
{
	/*
	 * constructor
	 */
	init: function()
	{
		this.parent(true);
		this.bg = new Image();
		this.bg.src = "img/bkg0.png";
		this.loading = new me.Font("Verdana", 20, "white");
	},

	/*
	 * drawing function
	 */
	draw: function(context)
	{
		// clear the screen
		me.video.clearSurface(context, "black");
		context.drawImage(this.bg, 0, 0);

		var loadingText = "Loading...";
		var loadingSize = this.loading.measureText(context, loadingText);
		this.loading.draw(context, loadingText,
			(me.video.getWidth() / 2) - (loadingSize.width / 2),
			(me.video.getHeight() / 2) - (loadingSize.height / 2));
	}
});

/*
 * menu screen
 */
var MenuScreen = me.ScreenObject.extend(
{
	/*
	 * constructor
	 */
	init: function()
	{
		// call parent constructor
		this.parent(true, true);

		// init stuff
		this.title = null;
		this.play = null;
		this.version = null;
	},

	/*
	 * reset function
	 */
	onResetEvent: function()
	{
		// add parallax background
		me.game.add(new BackgroundObject(), 1);

		// load title image
		this.title = me.loader.getImage("title");

		// play button
		this.play = new Button("play", me.state.STORY, 280);

		// version
		this.version = new me.Font("Verdana", 20, "white");
	},

	/*
	 * drawing function
	 */
	draw: function(context)
	{
		// draw title
		context.drawImage(this.title, (me.video.getWidth() / 2 - this.title.width / 2), 100);

		// draw play button
		this.play.draw(context);

		// game version
		var versionText = "0.1";
		var versionSize = this.version.measureText(context, versionText);

		this.version.draw(context, versionText,
			me.video.getWidth() - versionSize.width - 3, me.video.getHeight() - 5);
	},

	/*
	 * destroy event function
	 */
	onDestroyEvent: function()
	{
		// release mouse event
		me.input.releaseMouseEvent("mousedown", this.play);
	}
});

/*
 * play screen
 */
var PlayScreen = me.ScreenObject.extend(
{
	/*
	 * action to perform when game starts
	 */
	onResetEvent: function()
	{
		// add a default HUD
		me.game.addHUD(0, 0, me.video.getWidth(), 45);

		// add a new HUD item
		me.game.HUD.addItem("life", new LifeObject(3));

		// add a new HUD item
		me.game.HUD.addItem("score", new ScoreObject());

		// add parallax background
		me.game.add(new BackgroundObject(), 1);

		// add main player
		var ship = new PlayerEntity(100, 265);
		me.game.add(ship, 10);


		// add enemy fleet
		me.game.add(new EnemyFleet(), 10);

		// make sure everything is in the right order
		me.game.sort();
	},

    /*
     * action to perform when game is finished (state change)
     */
	onDestroyEvent: function() {
		// remove the HUD
		me.game.disableHUD();
	}
});

/* 
 * game over screen
 */
var GameOverScreen = me.ScreenObject.extend(
{
    /*
	 * constructor
	 */
    init: function () {
        // call parent constructor
        this.parent(true, true);

        // init stuff
        this.end = null;
        //this.score = null;
        this.restart = null;
        this.menu = null;
        this.finalScore = null;
    },

    /*
	 * reset function
	 */
    onResetEvent: function (score) {
        //this.finalScore = score;

        // add parallax background
        me.game.add(new BackgroundObject(), 1);

        // labels
        this.end = new me.Font("Verdana", 25, "white");
        //this.score = new me.Font("Verdana", 22, "white");

        // buttons
        this.restart = new Button("restart", me.state.PLAY, 280);
        this.menu = new Button("menu", me.state.MENU, 330);
    },

    /*
	 * drawing function
	 */
    draw: function (context) {
        // draw buttons
        this.restart.draw(context);
        this.menu.draw(context);

        // draw end label
        var endText = "Game Over";
        var endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 120);

        // draw score label
        //var scoreText = "Score : " + this.finalScore;
        //var scoreSize = this.score.measureText(context, scoreText);

        //this.score.draw(context, scoreText,me.video.getWidth() / 2 - scoreSize.width / 2, 150);
    },

    /*
	 * destroy event function
	 */
    onDestroyEvent: function () {
        // release mouse event
        me.input.releaseMouseEvent("mousedown", this.restart);
        me.input.releaseMouseEvent("mousedown", this.menu);
    }
});

/* 
 * happy ending;) screen
 */
var HappyEndingScreen = me.ScreenObject.extend(
{
    /*
	 * constructor
	 */
    init: function () {
        // call parent constructor
        this.parent(true, true);

        // init stuff
        this.end = null;
        //this.score = null;
        this.restart = null;
        this.menu = null;
        this.finalScore = null;
    },

    /*
	 * reset function
	 */
    onResetEvent: function (score) {
        //this.finalScore = score;

        // add parallax background
        me.game.add(new BackgroundObject(), 1);

        // labels
        this.end = new me.Font("Verdana", 25, "white");
        //this.score = new me.Font("Verdana", 22, "white");

        // buttons
        this.restart = new Button("restart", me.state.PLAY, 280);
        this.menu = new Button("menu", me.state.MENU, 330);
    },

    /*
	 * drawing function
	 */
    draw: function (context) {
        // draw buttons
        this.restart.draw(context);
        this.menu.draw(context);

        // draw end label
        var endText = "Congratulations, you destroyed enough ";

        var endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 75);

        endText = "ships to ensure your planet's safety!";
        endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 105);

        endText = "You're a hero at the end of the night";
        endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 165);

        endText = "And you're strong and you're fast";
        endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 195);


        endText = "And you're fresh from the fight";
        endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 225);

        endText = "Duu-duu-duu-duu... ;)";
        endSize = this.end.measureText(context, endText);

        this.end.draw(context, endText,
			me.video.getWidth() / 2 - endSize.width / 2, 255);

        // draw score label
        //var scoreText = "Score : " + this.finalScore;
        //var scoreSize = this.score.measureText(context, scoreText);

        //this.score.draw(context, scoreText,me.video.getWidth() / 2 - scoreSize.width / 2, 150);
    },

    /*
	 * destroy event function
	 */
    onDestroyEvent: function () {
        // release mouse event
        me.input.releaseMouseEvent("mousedown", this.restart);
        me.input.releaseMouseEvent("mousedown", this.menu);
    }
});

var StoryScreen = me.ScreenObject.extend(
{
    init: function () {
        this.parent(true); // next state


        this.picture = null;
        this.picturenumber = 0;

    },


    /* ---
		reset function
	   ----*/

    onResetEvent: function (levelId) {
        this.picture = me.loader.getImage("p00");
        this.picturenumber = 0.0;
        me.input.bindKey(me.input.KEY.ENTER, "enter");
        me.input.bindKey(me.input.KEY.ESC, "esc");

        // game over sound
        // me.audio.play("gameover");
    },

    /*---
    
    update function
     ---*/

    update: function () {

        if (this.picturenumber < 50) {
            this.picturenumber += 0.2;
        }
        else {
            //this.picturenumber = 0;
            me.state.change(me.state.PLAY);
        }
        return true;
    },


    /*---
	
		the manu drawing function
	---*/

    draw: function (context) {
        context.drawImage(this.picture, 0, 0, 640, 480);
        this.picture = me.loader.getImage("p0" + Math.round(this.picturenumber));
    },

    onDestroyEvent: function () {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindKey(me.input.KEY.ESC);
    }

});

