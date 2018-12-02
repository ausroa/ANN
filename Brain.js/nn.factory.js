(function () {
    'use strict';

angular.module('myBrainApp')

.factory('brainFactory', function() {

   var brainFactory = {};

   brainFactory.net = new brain.NeuralNetwork({
       activation: 'sigmoid',
       hiddenLayers: [4],
       iterations: 200000,
       learningRate: 1
   });

   brainFactory.net.train([
       {
           // Raptors
           input: {pct: .833},
           output: {win: 1}
       },
       {
           // CAVALIERS
           input: {pct: .182},
           output: {win: 0}
       },
       {
           // CLIPPERS
           input: {pct: .714},
           output: {win: 1}
       },
       {
           // SUNS
           input: {pct: .182},
           output: {win: 0}
       }
   ]);

   brainFactory.outputAmount = brainFactory.net.run({pct: .500});

   brainFactory.outputTotal = brainFactory.outputAmount.win * 100;
   brainFactory.output = brainFactory.outputTotal.toFixed(0);

   return brainFactory;
})
})();