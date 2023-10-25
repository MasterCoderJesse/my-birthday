var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function new_image()
 {
     fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
         imageObject = Img;
         imageObject.scaleToWidth(700);
         imageObject.scaleToHeight(510);
         imageObject.set({
             top:0,
             left:0
         });
 canvas.add(imageObject);
     });
 }

function playSound(){
	x.play();
}
