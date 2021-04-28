

const romanToInt = arr => {

  //input => array containing Roamn numbers
  //output => print the integer
  //example => [I]- [1], [V] - [5]

  //edgeCases => [40]- XL, [9] - [IX]

  const obj = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }

  let ans=[];

  for(let i=0; i < arr.length; i++) {
    if(obj[arr[i]] < obj[arr[i+1]]) {
      ans.push(obj[arr[i+1]] - obj[arr[i]]);
      i++;
      continue;
    } else {
      ans.push(obj[arr[i]]);
    }

  }

  return ans.reduce((total, current) => total + current);

// console.log(ans);
}

console.log(romanToInt("IV"));
