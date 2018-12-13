class Hero extends GameObject{
	constructor(type, container,x,y,width,height,velX,velY,bg,src){
		super(type, container,x,y,width,height,velX,velY,bg,src);
		//주인공이 4개의 센서를 가지고 있다.. 
		//(hero has 4 sensors)	
		//보이기엔 부모에 들어간 것처럼 보이지만, 사실은 부모랑 같이 다니는거다!!
		//그래야 stage 를 기준으로한 충돌 검사가 가능, 가능한 이유는? 
		//모든 게임 오브젝트는 좌표기준이 stage 니깐!!!
		this.sensorArray=[];
		this.leftSensor=new Sensor("SENSOR", container, getSensorSize("LEFT",x,y,width,height) ,0,0,"blue","");
		this.rightSensor=new Sensor("SENSOR", container,getSensorSize("RIGHT",x,y,width,height),0,0,"blue","");
		this.upSensor=new Sensor("SENSOR", container,getSensorSize("UP",x,y,width,height),0,0,"blue","");
		this.downSensor=new Sensor("SENSOR", container,getSensorSize("DOWN",x,y,width,height),0,0,"blue","");
		
		this.sensorArray.push(this.leftSensor);
		this.sensorArray.push(this.rightSensor);
		this.sensorArray.push(this.upSensor);
		this.sensorArray.push(this.downSensor);
	}	

	tick(){
		for(var i=0;i<this.sensorArray.length;i++){
			var s=this.sensorArray[i];
			s.tick(s.x + this.velX , s.y+this.velY);
			s.render();
		}
		
		this.x+=this.velX;
		this.y+=this.velY;
	}
}