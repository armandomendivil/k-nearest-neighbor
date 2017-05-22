
/**
 * KNN
 */

class Node {
  constructor(object) {
    for (var key in object) {
      this[key] = object[key];
    }
  }

  measureDistances(area_range_obj, rooms_range_obj) {
    var rooms_range = rooms_range_obj.max - rooms_range_obj.min;
    var area_range  = area_range_obj.max  - area_range_obj.min;

    for (var i in this.neighbors) {
      var neighbor = this.neighbors[i];

      var delta_rooms = neighbor.rooms - this.rooms;
      delta_rooms = (delta_rooms ) / rooms_range;

      var delta_area  = neighbor.area  - this.area;
      delta_area = (delta_area ) / area_range;

      neighbor.distance = Math.sqrt(delta_rooms * delta_rooms + delta_area * delta_area);
    }
  }

  guessType(k) {
    var types = {};

    for (var i in this.neighbors.slice(0, k)) {
      var neighbor = this.neighbors[i];

      if (!types[neighbor.type]) {
        types[neighbor.type] = 0;
      }

      types[neighbor.type] += 1;
    }

    var guess = { type: false, count: 0 };

    for (var type in types) {
      if (types[type] > guess.count) {
        guess.type = type;
        guess.count = types[type];
      }
    }

    this.guess = guess;

    return types;
  }

  sortByDistance() {
    return this.neighbors.sort((a, b) => a.distance - b.distance);
  }
};

module.exports = Node;
