/**
 * returns a random permutation of k numbers (from 0 to k-1)
 */

function randomPerm(k){

  var res = new Array(k);
  for(var i = 0; i < k; i++){
    res[i] = i;
  }

  for (var i = (k - 1); i >= 0; --i){
    var pos = Math.floor(i * Math.random());
    var tmp = res[i];
    res[i] = res[pos];
    res[pos] = tmp;
  }

  return res;
}

/**
 *  Creates a random latin hypercube design
 *  Adapted to JavaScript from randomLHS.R (by Doug Mooney, Rob Carnell)
 *  N is the number of partitions (simulations or design points)
 *  K is the number of replication (variables)
 */

exports.random = function(n, k){

  var tres = new Array(k);

  for(var j=0; j<k; j++){
    var col = randomPerm(n)
    for(var i=0; i<n; i++){
      col[i] += Math.random();
      col[i] /= n;
    }
    tres[j] = col;
  }

  var res = new Array(n);

  for(var i=0; i<n; i++){
    res[i] = new Array(k);
    for(var j=0; j<k; j++){
      res[i][j] = tres[j][i];
    }
  }

  return res;

}


/**
 * y ranging from 0 to 1 will be rescaled in between
 * xMin and xMax.
 * Note yMin and yMax can be supplied. In this case y will range from yMin to yMax
 */
exports.rescale = function(y, xMin, xMax, yMin, yMax){
  yMin = yMin || 0;
  yMax = yMax || 1;

  if(y<yMin || y>yMax){
    throw new Error('invalid input (y)');
  }

  return (((y-yMin)/(yMax-yMin)) * (xMax-xMin) + xMin)
}
