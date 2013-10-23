var util = require('util')
  , assert = require('assert')
  , lhs = require('..');

describe('design', function(){

  it('should generate a random LHS', function(){    
    var n = 1000;
    var rlhs = lhs.random(1000, 3);
    var sumRow = new Array(rlhs[0].length);

    for(var i=0; i<sumRow.length; i++){
      sumRow[i] = 0;
    }
    
    rlhs.forEach(function(x, i){
      for(var j=0; j<x.length; j++){
        sumRow[j] += x[j];
      }
    });
    
    for(var i=0; i<sumRow.length; i++){
      assert(Math.abs(sumRow[i]/n-0.5)< 1e-2);
    }

  });

  it('should rescale y taken from 0,1', function(){    
    assert.deepEqual(lhs.rescale(0.5, 0, 10), 5);    
  });

  it('should rescale y taken from 2,4', function(){    
    assert.deepEqual(lhs.rescale(3, 0, 10, 2, 4), 5);    
  });

});
