var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    {
      name: 'beeGame',
      url: '/',
      // Using component: instead of template:
      component: 'beeGame'
    }
  ]

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});


