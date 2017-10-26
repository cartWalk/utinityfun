// 根据概率抽奖
// https://www.xuanfengge.com/analysis-on-the-js-function-math-random.html#more-5860
function randomInProbability( weights ){
  if( arguments.length > 1 ){
    weights = [].slice.call( arguments );
  }

  var total, current = 0, parts = [],
      i = 0, l = weights.length;

  // reduce 方法的简单兼容
  total = weights.reduce ? weights.reduce( function( a, b ){
    return a + b;
  } ) : eval( weights.join( '+' ) );

  for( ; i < l; i ++ ){
    current += weights[ i ];
    parts.push( 'if( p < ', current / total, ' ) return ', i / l, ' + n;' );
  }

  return Function( 'var p = Math.random(), n = Math.random() / ' + l + ';' + parts.join( '' ) );
}

function getRandomResult(awards, rates){
  var getRomdonFun = randomInProbability(rates)
  var randomIndex = Math.floor(  awards.length * getRomdonFun() )
  return awards[randomIndex]
}
// var award = getRandomResult(['书','pad','mac','car'], [0.01, 0.03, 0.06, .09])


