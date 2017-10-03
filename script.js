
/*

locations from assing for reference

["IL", 5000, 12]
["MN", 300, 3]
["NV", 25000, 1]

*/


var locations = []; // this array will hold your objects

// object constructor


function Loc(locationIn){
  this.state = locationIn.state;
  this.revenue = locationIn.revenue;
  this.locationCount = locationIn.locationCount;
  this.averageRevenue = function(){
    return Math.floor(locationIn.revenue/locationIn.locationCount);
  };

}

// object instances
var Il = {
  state: 'IL',
  revenue: 5000,
  locationCount: 12
};

var Mn = {
  state: 'MN',
  revenue: 300,
  locationCount: 3
};

var Nv = {
  state: 'NV',
  revenue: 25000,
  locationCount: 1
};

var pizzaLocations = [Il, Mn, Nv]; //var for pizzalocations array

// push object instances to locations array

for(var i = 0; i < pizzaLocations.length; i++){
  var pizzaPizza = pizzaLocations[i];
  var newPizza = new Loc(pizzaPizza);
  locations.push(newPizza);
} //loop through objects and push into newPizza

console.log(locations);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
