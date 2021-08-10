//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function even_or_odd(number) {
    if (number % 2 == 0){
      return 'Even'
    }else{
      return'Odd'
    }
  }

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function(l , w) {
    if(l == w){
      return l ** 2
    }else{
      return (l+w)*2
    }
    // Return your answer
  };