'use strict';

angular.module('myApp')

  .component('beeGame', {
    templateUrl: './pages/beeGame/beeGameView.html',
    controllerAs: 'vm',
    controller: BeeGameController
  })


  function BeeGameController() {
    let beeInfo = {
      queen: {
         hp: 100,
         name: 'Queen Bee',
         damage: 8,
         qt: 1
       },
      worker: {
         hp: 75,
         name: 'Worker Bee',
         damage: 10,
         qt: 5
      },
      drone: {
         hp: 50,
         name: 'Drone Bee',
         damage: 12,
         qt: 8
      }
    };
    this.bees = [];
    let beesObj = {};

    this.startGame = function() {
      for (let i in beeInfo) {
        let bee = beeInfo[i];
        for (let i = 0; i < bee.qt; i++) {
          beesObj = {
            name: bee.name,
            hp: bee.hp,
            damage: bee.damage,
            order: Math.floor(Math.random() * 5200) + 1
          }
          this.bees.push(beesObj);
        }
      }

      this.bees = this.bees.sort(function(a,b) {
        return (a.order < b.order ? -1 : 1)
      });
    };

    this.hitBee = function() {
      if (this.bees.length > 1) {
        let randomBee = Math.floor(Math.random() * this.bees.length);
        let bee = this.bees[randomBee];
        if (bee.hp - bee.damage > 0) {
          bee.hp = bee.hp - bee.damage;
        }
        else {
          this.removeBee(this.bees, bee);
        }
      }
      else {
        alert('Sorry your Majesty you are out of Bees');
        this.bees = [];

        this.startGame();
      }

    };

    this.removeBee = function(bees, bee) {
      let index = bees.indexOf(bee);

      if (index > -1) {
        if (bee.name === 'Queen Bee') {
          alert('The Queen is dead Long live the Queen');
          this.bees = [];
          this.startGame();
        }
        else {
          bees.splice(index, 1);
        }
      }
    }
    this.startGame();

  };
