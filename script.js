var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var colorList = [
	document.querySelector(".color0"),
	document.querySelector(".color1"),
];
var colors = document.getElementById("colors");
var colorNum = 1;
var angle = document.createElement("input");
angle.setAttribute("id", "angle");
angle.setAttribute("type", "number");
angle.setAttribute("min", "0");
angle.setAttribute("max", "359");
angle.setAttribute("placeholder", "0 - 359 degrees");

var setDirection = "";

function createRandomColor(randomColor) {
  var letters = "0123456789ABCDEF";
  var randomColor = "#";
  for (var i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

function addColor()
{
	if (colorNum < 19 ){
	colorNum++;
	var color = document.createElement("div");
	color.setAttribute("id", "color" + colorNum);
	randomColor= createRandomColor();
	var text ='<input class="color' + colorNum + '" type="color" value="'+randomColor+'">';
	color.innerHTML = text;
    colors.insertBefore(color, colors.children[colorNum+1]);
	colorList.push(document.querySelector(".color" + colorNum));
	colorList[colorNum].addEventListener("input", setGradient);
	setGradient();
	} else alert('Althought theoreticaly you can use as many colors as you like, I found it pointless to be able to use more than 20 colors in this specific aplication');
}

function removeColor(){
	if (colorNum > 1){
	colors.removeChild(colors.lastChild);
	colorNum --;
	colorList.pop();
	setGradient();
	}
}

function setGradient()
{
	if (direction.value === "angle")
	{
		document.getElementById("options").appendChild(angle);
		setDirection = angle.value + "deg";
	} else
	{  if (document.getElementById("options").children.length > 2){
		document.getElementById("options").removeChild(angle);
		}
		setDirection = direction.value;
	}
	var setColors ="linear-gradient(" + setDirection;
	for (i = 0; i <= colorNum; i++)
	{
		setColors += ", " + colorList[i].value;
	}
	setColors += ")";
	body.style.background = setColors;
	css.textContent = String(setColors);
}

colorList[0].addEventListener("input", setGradient);
colorList[1].addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);
angle.addEventListener("change", function ()
{
	if (0 <= angle.value && angle.value <= 359)
	{
		setGradient();
		return;
	}
	alert("please insert between 0 - 359 degrees");
});
