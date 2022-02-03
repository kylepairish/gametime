var count = 0;

function add() {
  var x = parseInt(document.getElementById("numberone").value);
  var y = parseInt(document.getElementById("numbertwo").value);
  if (isNaN(x) || isNaN(y)) {
    return 0;
  } else {
    var sum = x + y;
    return sum;
  }
};

function checkAns() {
  sum = add();
  var z = parseInt(document.getElementById("guess").value);
  var showans = document.getElementById("correctans").innerHTML = "The correct answer is: " + sum;
  if (count <= 2) {
    if (sum == z) {
      showans;
    } else {
      count += 1;
      document.getElementById("correctans").innerHTML = "Try Again!"
      if (count == 3) {
        console.log(sum)
        showans;
      }
    }
  }
};

function resetGame() {
  return document.location.reload();
};









