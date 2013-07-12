/*
 * main functions
 */
me.debug.renderHitBox = true;
// game resources
var g_resources = [


	{ name: "stupidimage", type: "image", src: "img/stupidimage.png" },

	// parallax background
	{name: "bkg0", type:"image", src: "img/bkg0.png"},
	{name: "bkg1", type:"image", src: "img/bkg1.png"},

	// interface
	{name: "title", type:"image", src: "img/title.png"},
	
	{name: "play", type:"image", src: "img/play.png"},
	{name: "play_hover", type:"image", src: "img/play_hover.png"},
	{name: "restart", type:"image", src: "img/restart.png"},
	{name: "restart_hover", type:"image", src: "img/restart_hover.png"},
	{name: "menu", type:"image", src: "img/menu.png"},
	{name: "menu_hover", type:"image", src: "img/menu_hover.png"},

	// life
	{name: "life0", type:"image", src: "img/life0.png"},
	{name: "life1", type:"image", src: "img/life1.png"},
	{name: "life2", type:"image", src: "img/life2.png"},
	{name: "life3", type:"image", src: "img/life3.png"},
	
	// game
	{name: "ship", type:"image", src: "img/ship.png"},
	{name: "enemy", type:"image", src: "img/enemy.png"},
	{name: "missile", type:"image", src: "img/missile.png"},
	{name: "implosion", type:"image", src: "img/implosion.png"},

	// audio
	{name: "clash", type:"audio", src: "sound/", channel: 1},
	{name: "missile", type:"audio", src: "sound/", channel: 1},
	{name: "implosion", type:"audio", src: "sound/", channel: 1},
	
	// animation

    {name: "p00",  type:"image",	src: "img/animation/jg0000.jpg"},

    {name: "p01",  type:"image",	src: "img/animation/jg0001.jpg"},

    {name: "p02",  type:"image",	src: "img/animation/jg0002.jpg"},

    {name: "p03",  type:"image",	src: "img/animation/jg0003.jpg"},

    {name: "p04",  type:"image",	src: "img/animation/jg0004.jpg"},

    {name: "p05",  type:"image",	src: "img/animation/jg0005.jpg"},

    {name: "p06",  type:"image",	src: "img/animation/jg0006.jpg"},

    {name: "p07",  type:"image",	src: "img/animation/jg0007.jpg"},

    {name: "p08",  type:"image",	src: "img/animation/jg0008.jpg"},

    {name: "p09",  type:"image",	src: "img/animation/jg0009.jpg"},

    {name: "p010",  type:"image",	src: "img/animation/jg0010.jpg"},

    {name: "p011",  type:"image",	src: "img/animation/jg0011.jpg"},

    {name: "p012",  type:"image",	src: "img/animation/jg0012.jpg"},

    {name: "p013",  type:"image",	src: "img/animation/jg0013.jpg"},

    {name: "p014",  type:"image",	src: "img/animation/jg0014.jpg"},

    {name: "p015",  type:"image",	src: "img/animation/jg0015.jpg"},

    {name: "p016",  type:"image",	src: "img/animation/jg0016.jpg"},

    {name: "p017",  type:"image",	src: "img/animation/jg0017.jpg"},

    {name: "p018",  type:"image",	src: "img/animation/jg0018.jpg"},

    {name: "p019",  type:"image",	src: "img/animation/jg0019.jpg"},

    {name: "p020",  type:"image",	src: "img/animation/jg0020.jpg"},

    {name: "p021",  type:"image",	src: "img/animation/jg0021.jpg"},

    {name: "p022",  type:"image",	src: "img/animation/jg0022.jpg"},

    {name: "p023",  type:"image",	src: "img/animation/jg0023.jpg"},

    {name: "p024",  type:"image",	src: "img/animation/jg0024.jpg"},

    {name: "p025",  type:"image",	src: "img/animation/jg0025.jpg"},

    {name: "p026",  type:"image",	src: "img/animation/jg0026.jpg"},

    {name: "p027",  type:"image",	src: "img/animation/jg0027.jpg"},

    {name: "p028",  type:"image",	src: "img/animation/jg0028.jpg"},

    {name: "p029",  type:"image",	src: "img/animation/jg0029.jpg"},

    {name: "p030",  type:"image",	src: "img/animation/jg0030.jpg"},

    {name: "p031",  type:"image",	src: "img/animation/jg0031.jpg"},

    {name: "p032",  type:"image",	src: "img/animation/jg0032.jpg"},

    {name: "p033",  type:"image",	src: "img/animation/jg0033.jpg"},

    {name: "p034",  type:"image",	src: "img/animation/jg0034.jpg"},

    {name: "p035",  type:"image",	src: "img/animation/jg0035.jpg"},

    {name: "p036",  type:"image",	src: "img/animation/jg0036.jpg"},

    {name: "p037",  type:"image",	src: "img/animation/jg0037.jpg"},

    {name: "p038",  type:"image",	src: "img/animation/jg0038.jpg"},

    {name: "p039",  type:"image",	src: "img/animation/jg0039.jpg"},

    {name: "p040",  type:"image",	src: "img/animation/jg0040.jpg"},

    {name: "p041",  type:"image",	src: "img/animation/jg0041.jpg"},

    {name: "p042",  type:"image",	src: "img/animation/jg0042.jpg"},

    {name: "p043",  type:"image",	src: "img/animation/jg0043.jpg"},

    {name: "p044",  type:"image",	src: "img/animation/jg0044.jpg"},

    {name: "p045",  type:"image",	src: "img/animation/jg0045.jpg"},

    {name: "p046",  type:"image",	src: "img/animation/jg0046.jpg"},

    {name: "p047",  type:"image",	src: "img/animation/jg0047.jpg"},

    {name: "p048",  type:"image",	src: "img/animation/jg0048.jpg"},

    {name: "p049",  type:"image",	src: "img/animation/jg0049.jpg"},

    {name: "p050",  type:"image",	src: "img/animation/jg0050.jpg"}

];


var jsApp =
{	
	/*
	 * Initialize the jsApp
	 */
	onload: function()
	{
		// init the video
		if (!me.video.init("jsapp", 800, 450))
		{
			alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
			return;
		}

		// initialize the audio
		me.audio.init("mp3,ogg");

		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);
		me.loader.preload(g_resources);

		// set the "Loading" Screen Object
		me.state.set(me.state.LOADING, new LoadingScreen());

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},

	/*
	 * callback when everything is loaded
	 */
	loaded: function ()
	{
	    // set the "Menu" Screen Object
	    me.state.set(me.state.MENU, new MenuScreen());


	    // set the "Play" Screen Object
		me.state.set(me.state.PLAY, new PlayScreen());
	    // set the "Story" Screen Object
		me.state.set(me.state.STORY, new StoryScreen());

		// set the "Game over" Screen Object
		me.state.set(me.state.GAMEOVER, new GameOverScreen());

	    // set the "HappyEnding" Screen Object
		me.state.set(me.state.HAPPYENDING, new HappyEndingScreen());

		// set a global fading transition for the screen
		me.state.transition("fade", "#FFFFFF", 250);

		// disable transition for MENU and GAMEOVER screen
		me.state.setTransition(me.state.MENU, false);
		me.state.setTransition(me.state.GAMEOVER, false);

		// enable the keyboard
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.UP, "up");
		me.input.bindKey(me.input.KEY.DOWN, "down");
		me.input.bindKey(me.input.KEY.SPACE, "fire", true);

		// draw menu
	    //me.state.change(me.state.MENU);

		me.state.change(me.state.PLAY);
	}
}; // jsApp

// bootstrap :)
window.onReady(function() 
{
	jsApp.onload();
});
