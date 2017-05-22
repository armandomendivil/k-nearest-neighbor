
import Node from './node';
import NodeList from './nodeList';
import data from './data';

var run = function() {
  var nodes = new NodeList(3);
  for (var i in data) {
    nodes.add(new Node(data[i]));
  }

  var random_rooms = Math.round( Math.random() * 10 );
  var random_area = Math.round( Math.random() * 2000 );
  nodes.add(new Node({ rooms: random_rooms, area: random_area, type: false }));

  nodes.determineUnknown();
  nodes.draw("canvas");
};

window.onload = function() {
    setInterval(run, 5000);
    run();
};
