var bullet, wall
var thickness, speed, weight

function setup(){
	createCanvas(1600, 400)
	speed = random (223, 321)
	weight = random (30, 52)
	thickness = random (22, 83)
	bullet = createSprite(50, 200, 50, 5)
	bullet.velocityX = speed
	bullet.shapecolor = "blue"
	wall = createSprite(1200,200,thickness,height/2)
	wall.shapecolor = "green"

}

function draw(){
	background ("pink")
	if(hasCollided(bullet, wall))
{
	bullet.velocityX=0;
	var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

	if(damage>10)
		{
			wall.shapeColor = "blue" (255, 0, 0);
		}
   
	if(damage<10)
	{
		wall.shapeColor = "red"(0, 255, 0);
	}


}
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x + lbullet.width;
	wallLeftEdge = lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true 
	}
	return false;
}