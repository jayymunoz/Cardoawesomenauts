game.PlayerEntity = me.Entity.extend({
	init: function(x, y, settings){
		this._super(me.Entity, 'init', [x, y, {
			image: "player",
			width: 64,
			height: 64,
			spritewidth: "64",
			spriteheight: "64",
			getShape: function(){
				return(new me.Rect(0, 0, 64, 64)).toPolygon();
			}
		}]);
		//this all connects with meauring the width and height

		this.body.setVelocity(5, 20);
		//this setes the velocity

		this.renderable.addAnimation("idle", [78]);
		this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
		//this sets thepositon of the character

		this.renderable.setCurrentAnimation("idle");
		//this sets the current position

	},

	update: function(delta){
		if(me.input.isKeyPressed("right")){
			//adds to the position of my x by the velocity defined above in
			//setVelocity() and multiplying it by me.timer.tick.
			//me.timer.tick makes the movement look smoooth
			this.body.vel.x += this.body.accel.x * me.timer.tick;
			this.renderable.setCurrentAnimation("walk");
		}else{
			this.body.vel.x = 0;
		}

		

		this.body.update(delta);
		return true;
		//this makes it so it tells the game to update

	}
});
//the letter are capital because its a class