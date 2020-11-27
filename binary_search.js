//배열 이진검색의 대한 간단한 알고리즘 연습
const array = [1,2,3,4,5,6,7,8,9];

const test = (array, value) => {
  let lower_bound = 0;
  let upper_bound = array.length - 1;

  while (lower_bound <= upper_bound){
    let midpoint = (lower_bound + upper_bound) / 2; //5
    let value_at_midpoint = array[midpoint]; //array midpoint is 5

    if (value < value_at_midpoint){
      upper_bound = midpoint - 1; // 4
    } else if (value > value_at_midpoint){
      lower_bound = midpoint + 1; // 6
    } else if (value == value_at_midpoint){
      return midpoint;
    } else {
      break;
    }
  }
}

console.log(test(array,5));