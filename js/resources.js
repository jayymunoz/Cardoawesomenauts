/* global game */

game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        {name: "player", type: "image", src: "data/img/orcSpear.png"},
        {name: "Pols-Voice", type: "image", src: "data/img/Pols-Voice.png"},
        {name: "tower", type: "image", src: "data/img/tower_round.svg.png"},
        {name: "creep1", type: "image", src: "data/img/brainmonster.png"},
        {name: "item-spritesheet", type: "image", src: "data/img/item-spritesheet.png"},
        {name: "purple-tree", type: "image", src: "data/img/purple-tree.png"},
        {name: "coin", type: "image", src: "data/img/coin.png"},
        {name: "title-screen", type: "image", src: "data/img/title.png"},
        {name: "exp-screen", type: "image", src:"data/img/loadpic.png "},
        {name: "gold-screen", type: "image", src:"data/img/spend.png"},
        {name: "You-Died", type: "image", src:"data/img/You-Died.jpg"},
        {name: "load-screen", type: "image", src:"data/img/loadpic.png"},
        {name: "new-screen", type: "image", src:"data/img/newpic.png"},
        {name: "spear", type: "image", src:"data/img/spear.png"},
        {name: "map", type: "image", src:"data/img/map.png"},
        {name: "fireball", type: "image", src:"data/img/fireball.png"},


	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        {name: "Death", type: "tmx", src:"data/map/Death.tmx"},
        {name: "Level 1", type: "tmx", src: "data/map/test.tmx"},
        {name: "Level 2", type: "tmx", src: "data/map/test2.tmx"},

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	
        {name: "Sonic", type: "audio", src: "data/bgm/"},

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
        {name: "21", type: "audio", src: "data/sfx/"},
        {name: "walk", type: "audio", src: "data/sfx/"},
        {name: "pause", type: "audio", src: "data/sfx/"},
        {name: "slash", type: "audio", src: "data/sfx/"}
];
