var farenheright;
var celcious;
var temppretureincelcious;

farenheright=32;
temppretureincelcious=(farenheright-32)*5/9;
console.log(temppretureincelcious);


var celcious=prompt('enter value farenheright');
temperatureinfarenheight=(celcious*9/5)+32;
console.log(temperatureinfarenheight);

var temperature=temperatureinfarenheight;
console.log(temperatureinfarenheight);

if(temperature >90){
	console.log('wear nothing!'+ farenheright);
} else if (temperature>=80){
	console.log('wear lightweight linen and cotton');
}
else if(temperature>=55){
	console.log('wear a light jacket');
}
else if (temperature>=40){
	console.log('wear a fleece');
}
else{
	console.log('wear a down jacket');
}

// document.getElementById('temp-info').value=exactly the same as console.log
