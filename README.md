# js_recursion_key_parsing

const `data` = {
  first: {
    second: {
      third: {
        fourth: 'apple',
      }
    }
  }
};

const `keyString` = 'first.second.third.fourth';

function `find(keyString, data)` returns value of keyString of data object.
if it not exist returns 'note exist'
