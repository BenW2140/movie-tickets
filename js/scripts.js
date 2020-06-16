function Ticket(title, time, age) {
  this.title = title,
  this.time = time,
  this.age = age
}

Ticket.prototype.calculatePrice = function (ticket) {
  let price = 10;
  if (ticket.title === "Avatar 2") {
    price += 2;
  }
  if (ticket.time === "Morning") {
    price--;
  }
  if (ticket.age >= 55 || ticket.age < 14) {
    price--;
  }
  return price;
}

const assignVariables = function() {
  const title = $("#title").val();
  const time = $("#time").val();
  const age = parseInt($("#age").val());
  return title, time, age;
}

const showPrice = function(totalPrice) {
  $(".price").text(totalPrice);
  $("#total-price").show();
} 

$(document).ready(function() {
  $("#new-ticket").submit(function(event) {
    event.preventDefault();
    const ticket = new Ticket(assignVariables());
    const totalPrice = ticket.calculatePrice(ticket);
    showPrice(totalPrice);
  });
});