function insertionSortReverse(array) {
    for(var i = 1; i < array.length; i++) {
    var val = array[i].reverse;
    var j;
    for(j = i; j > 0 && array[j-1] > val; j--) {
      array[j] = array[j-1];
    }
    array[j] = val;
  }
    return array;
}
