class GameObject{
	constructor(type, container,x,y,width,height,velX,velY,bg,src){
		this.type=type;
		this.container=container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.bg=bg;
		this.src=src;

		this.div=document.createElement("div");		
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.bg;		

		//이미지를 사용할 경우 
		if(this.src!=""){
			this.img=document.createElement("img");
			this.img.src=this.src;
			this.img.style.width=this.width+"px";
			this.img.style.height=this.height+"px";
			this.div.appendChild(this.img);
		}
		this.container.appendChild(this.div);
	}
	tick(){
		this.x+=this.velX;
		this.y+=this.velY;
	}
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}