function zipList(list1, list2) {
  const returnList = [];
  for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
    if (list1[i] !== null) {
      returnList.push(list1[i]);
    }
    if (list2[i] !== null) {
      returnList.push(list2[i]);
    }
  }
  return returnList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2), 1);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(zipList(list1, list2));

console.log(zipListTheSimpleWay(list1, list2));