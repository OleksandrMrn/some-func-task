// task 1
function task_1(arr) {
  return arr.reduceRight((reversedArr, elem) => {
    reversedArr.push(elem);
    return reversedArr;
  }, []);
}
// task 2
function task_2(arrOne, arrTwo) {
  if (arrOne === arrTwo) {
    return true;
  }
  if (
    typeof arrOne !== typeof arrTwo ||
    typeof arrOne === "symbol" ||
    typeof arrTwo === "symbol"
  ) {
    return false;
  }
  if (Array.isArray(arrOne) && Array.isArray(arrTwo)) {
    if (arrOne.length !== arrTwo.length) {
      return false;
    }
    const sortArrOne = [...arrOne].sort();
    const sortArrTwo = [...arrTwo].sort();
    for (let i = 0; i < sortArrOne.length; i++) {
      if (!task_2(sortArrOne[i], sortArrTwo[i])) {
        return false;
      }
    }
    return true;
  }
  if (
    typeof arrOne === "object" &&
    arrOne !== null &&
    typeof arrTwo === "object" &&
    arrTwo !== null
  ) {
    const keysArrOne = Object.keys(arrOne).sort();
    const keysArrTwo = Object.keys(arrTwo).sort();

    if (keysArrOne.length !== keysArrTwo.length) {
      return false;
    }
    for (let i = 0; i < keysArrOne.length; i++) {
      const key = keysArrOne[i];
      if (!task_2(arrOne[key], arrTwo[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
// task 3
function task_3(arr) {
  const currObj = {};
  for (const elem of arr) {
    const { id, value } = elem;
    if (!currObj[id]) {
      currObj[id] = {
        id,
        values: {},
      };
    }
    const elemType = typeof value;
    if (!currObj[id].values[elemType]) {
      currObj[id].values[elemType] = {
        value,
        count: 1,
      };
    } else if (currObj[id].values[elemType].value !== value) {
      currObj[id].values[elemType].count++;
    }
  }
  const result = [];
  for (const resObj of Object.values(currObj)) {
    const { id, values } = resObj;
    const countByType = {};
    for (const [typeResObj, { count }] of Object.entries(values)) {
      countByType[typeResObj] = count;
    }
    result.push({ id, ...countByType });
  }
  return result;
}
// task 4
function task_4(arr) {
  return arr.reduce(
    (result, value, index) => (index % 2 ? result - value : result + value),
    0
  );
}
// task 5
function task_5(str, elem) {
  const regEx = new RegExp(elem, "g");
  const resIndex = [];
  let findElem;
  while ((findElem = regEx.exec(str))) {
    resIndex.push(findElem.index);
  }
  return resIndex;
}
// task 6
function task_6(str, elem) {
  const regEx = new RegExp(elem, "gi");
  return (str.match(regEx) || []).length;
}
//task 7
function task_7([...arr]) {
  return Object.entries(
    arr.reduce((resultArr, { currency, value }) => {
      if (typeof value === "number" && !isNaN(value)) {
        resultArr[currency] = (resultArr[currency] || 0) + value;
      }
      return resultArr;
    }, {})
  ).map(([currency, value]) => `${currency}:${value.toFixed(2)}`);
}
// task 8
function task_8(arr) {
  return arr.reduce((acc, elem) => {
    if (typeof elem === "string" || typeof elem === "number") {
      acc += String(elem).replace(/[\W_]/g, "");
    }
    return acc;
  }, "");
}
// task 9
function task_9([...arr]) {
  return arr.every((elem) => elem.done);
}
// task 10
function task_10(str, key) {
  const resStr = [];
  for (let i = 0; i < str.length; i++) {
    const keyCode = str.charCodeAt(i);
    let changeCode = keyCode;
    if (keyCode >= 65 && keyCode <= 90) {
      changeCode = ((keyCode - 65 - key + 26) % 26) + 65;
    } else if (keyCode >= 97 && keyCode <= 122) {
      changeCode = ((keyCode - 97 - key + 26) % 26) + 97;
    }
    resStr.push(String.fromCharCode(changeCode));
  }
  return resStr.join("");
}

export default {
  task_1,
  task_2,
  task_3,
  task_4,
  task_5,
  task_6,
  task_7,
  task_8,
  task_9,
  task_10,
};
