function solution(array) {
  const length = array.length;
  let mode;
  let Subcount = 0;
  let count = 1;

  if (length === 1) {
    mode = array[0];
  } else {
    for (i = 1; i < length; i++) {
      if (array[i - 1] === array[i]) {
        count = count + 1;
      } else {
        if (Subcount < count) {
          Subcount = count;
          mode = array[i];
        } else if (Subcount === count) {
          mode = -1;
        } else {
          count = 0;
        }
      }
    }
  }
  let answer = mode;
  return answer;
}
