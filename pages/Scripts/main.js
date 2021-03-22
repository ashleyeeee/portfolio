function largernumber() {
  let num1 = parseInt(prompt("Enter the first number: "));
  let num2 =  parseInt(prompt("Enter the second number: "));
  let output = ""
  if (num1 > num2){
  output = num1;
  } else if (num1 == num2){
  output = "The numbers entered are equal";
  } else if (num2 > num1){
  output = num2;
  } else {
  output = "Invalid Output";
  }
  document.getElementById("largerNum").innerHTML = output;
}

function product() {
    var a = parseInt(prompt("Place a number"));
    var b = parseInt(prompt("Place a number"));
    var c = parseInt(prompt("Place a number"));
    var totalProduct = a * b * c;
    if (totalProduct < 0 ){
      alert("The sign of the product is -")  
    }
    if (totalProduct > 0 ){
        alert("The sign of the product is +")  
      }
    }
function threenumbersort() {
    var a = parseInt(prompt("Place a number"));
    var b = parseInt(prompt("Place a number"));
    var c = parseInt(prompt("Place a number"));
    let array = [a, b, c];
    array.sort(function(a, b, c){return a - b});
    alert ("the order from greatest to least is " + array);
      
  }   
/* this one doesnt work*/
  function forsumthrees() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      
        ! (i % 3) && (sum += i)
          
    }
    console.log(sum); 
  }
/*this one doesnt work*/  
function buttonfive() {
    alert("Project 5 Coming Soon!");
}
function angle() {
  alert ("Put in the two angles of a triangle and the machine will find the missing third angle." );
  var a = parseInt(prompt("Enter an angle of a triangle"));
  var b = parseInt(prompt("Enter another angle of a triangle "));
  var totalSum = 0;

  if ((a + b) < 180){
  totalSum = 180 - (a + b); 
  alert ("The angle that is missing is " + totalSum );
  }

  else if ((a + b) > 180){
  alert ("Invalid. Enter two angles of a triangle.");    
  }

}
function year() {
  let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2021');
  let century = 0;

  century = Math.floor(userYear/100+1);
      if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
         century = toString(century) + 'st'
      }
  return alert ('The year you entered is in the century of ' + century);
  
}
function buttoneight() {
    alert("Project 8 Coming Soon!");
}
function buttonnine() {
    alert("Project 9 Coming Soon!");
}