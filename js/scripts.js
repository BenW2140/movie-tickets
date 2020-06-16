function Ticket() {
  this.title = title,
  this.time = time,
  this.age = age
}

Ticket.prototype.calculatePrice = function (ticket) {
  let price = 10;
  if (ticket.title === "Avatar 2") {
    price += 2;
  }
  if (ticket.age >= 55 || ticket.age < 13) {
    price--;
  }
  if (ticket.time === "Morning") {
    price--;
  }
}

$(document).ready(function() {

});