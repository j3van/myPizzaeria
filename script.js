document.getElementById("btn").addEventListener("click", showOrder);
function showOrder() {
  let Pizza = document.getElementById("size").value;
  let topping = document.getElementsByd("first").value;
  let othertopping = document.getElementById("Second").value;
  document.getElementById("Order out").innerHTML = greeting;
  document.getElementById(
    pizza - png
  ).innerHTML = `<img src="images/pizza.png">`;
  let Order = `Your ${Pizza} with ${topping} and ${othertopping} will be ready in 20 minutes.`;
}
