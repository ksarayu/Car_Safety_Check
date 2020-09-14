var XofObject;
var YofObject;

function ifTouch(object1, object2){
    if(object1.x - object2.x <= object2.width/2 + object1.width/2 && object2.x - object1.x <= object2.width/2 + object1.width/2 && 
      object1.y - object2.y <= object2.height/2 + object1.height/2 && object2.y - object1.y <= object2.height/2 + object1.height/2){
      return true;
   }
   else{
      return false;
   }
  }

  function bounceOff(object1, object2){
   if (ifTouch(object1, object2) === true){
      if (object1.x < XofObject){
         object1.velocityX = -3;
      }
      else if (object1.x > XofObject){
         object1.velocityX = 3;
      }
      else if (object1.y < YofObject){
         object1.velocityY = -3;
      }
      else if (object1.y > YofObject){
         object1.velocityY = 3;
      }
   }
   else {
      return false;
   }
  }