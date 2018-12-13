class Sensor extends GameObject{
	constructor(type, container,json,velX,velY,bg,src){
		super(type, container,json.x,json.y,json.width,json.height,velX,velY,bg,src);
	}
	//주인님을 따라가야 함..
	tick(x,y){
		this.x=x;
		this.y=y;
	}
}