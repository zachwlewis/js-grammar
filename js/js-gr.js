function GRRectangle(x, y, w, h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

function GRDrawable(rectangle, style)
{
	this.rect = rectangle;
	this.style = style;

	this.draw = function draw(context)
	{
		context.fillStyle = style;
		context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
	}
}

function JSGrammar(elementId, framerate)
{
	var canvas, ctx, tickId, drawStack;
	var r1 = new GRDrawable(new GRRectangle(10, 10, 55, 50),"rgb(200,0,0)");
	var r2 = new GRDrawable(new GRRectangle(30, 30, 55, 50),"rgba(0,0,200,0.5)");

	this.fps = framerate || 60;

	canvas = document.getElementById(elementId);
	if (canvas.getContext)
	{
		ctx = canvas.getContext('2d');
		fps = framerate;
		drawStack = [r1, r2];
		tickId = window.setInterval(draw, 1000 / this.fps);
	}
	else
	{
		console.log("Canvas unsupported.");
	}

	function draw()
	{
		ctx.clearRect(0, 0, 400, 300);
		if (r1.rect.x < 100) { r1.rect.x ++; }
		drawStack.forEach(function(drawable) {
			drawable.draw(ctx);
		});
	}
}

