const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    dino1 = new Dinosaur("T-rex", "carnivore", 1000)
    dino2 = new Dinosaur("Brachiosaurus", "Herbivore", 100)
    park = new Park('Jurassic Park', 10000, [dino1, dino2]);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10000);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dino_collection;
    assert.strictEqual(actual, [dino1, dino2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    dino3 = new Dinosaur("Triceratops", "Herbivore", 500)
    const actual = park.dino_collection.push(dino3);
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const removed = park.dino_collection.pop();
    const actual = park.dino_collection
    assert.strictEqual(actual, park.dino_collection)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = Math.max(dino1.guestsAttractedPerDay,dino2.guestsAttractedPerDay)
    assert.strictEqual(actual, 1000)
  });

// the below should be an index for loop but my brain is fried
  it('should be able to find all dinosaurs of a particular species', function () {
    const dinos = []
    for(var i = 0; i < park.dino_collection.length; i++){
      if (park.dino_collection[i].diet == "Carnivore"){
        dinos.push(park.dino_collection[i])      
  }

    // else(park.dino_collection[i].diet === "Herbivore");{
    //   dinos.push(park.dino_collection[i])
    // }
    };
    
    const actual = dinos //not returning dino from list. Can't understand.diet
    assert.strictEqual(actual, "Carnivore")
  });

  it('should be able to calculate the total number of visitors per day', function () {
    var actual = 0
   for (dino in park.dino_collection){
     actual += dino.guestsAttractedPerDay
   }
    assert.strictEqual(actual, 1100)

  });

  it('should be able to calculate the total number of visitors per year');
  var guests = 0
  for (dino in park.dino_collection){
    guests += dino.guestsAttractedPerDay
  }
  actual = guests * 365;
  assert.strictEqual(actual, 401500)


  it('should be able to calculate total revenue for one year');
  var guests = 0
  for (dino in park.dino_collection){
    guests += dino.guestsAttractedPerDay
  }
  actual = (guests * 365) * park.ticket_price;
  assert.strictEqual(actual, 401500000)

});
