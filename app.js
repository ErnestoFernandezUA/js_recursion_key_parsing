"use strict";

const data = {
  first: {
    second: {
      third: {
        fourth: 'apple',
      }
    }
  }
};

const keyString = 'first.second.third.fourth';

function find (keyString, data) {
  console.log('keyString', keyString);
  console.log('data', data);

  const valueArr = keyString.split('.');
  console.log(valueArr);

  if (data[valueArr[0]]) {
    if (valueArr.length > 1) {
      return find(valueArr.slice(1).join('.'), data[valueArr[0]])
    } else {
      return data[valueArr[0]];
    };
  };

  return 'note exist';
}

console.log('find(keyString, data) = ', find(keyString, data));
