// const myFamily = {
//   Joel: 32,
//   Fred: 44,
//   Reginald: 65,
//   Susan: 33,
//   Julian: 13,
// };
// function afterNYears(family, n) {
//   let newFamily = {};
//   for (let name in family) {
//     newFamily[name] = family[name] + n;
// //   }
// //   return newFamily;
// // }
// // console.log(afterNYears(myFamily, 20));
// // Tạo một hàm xác định xem đơn đặt hàng có đủ điều kiện để được miễn phí giao hàng hay không. Đơn đặt hàng đủ điều kiện để được giao hàng miễn phí nếu tổng chi phí của các mặt hàng đã mua vượt quá $50,00.

// const order = { Shampoo: 5.99, "Rubber Ducks": 15.99 };

// function freeShipping(order) {
//   let sum=0;
//   for (let item in order) {
//     sum += order[item];
//   }
//   if (sum > 50) return true;
//   else return false;
// }

// console.log(freeShipping(order));

// Tạo một hàm, nhận vào một chuỗi là tên của một người, kiểm tra xem tên của người đó có giá trị bao nhiêu theo theo từ điển được cung cấp bên dưới

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};
function checkPoint(name) {
  name = name.toUpperCase();
  let score = 0;
  for (let i = 0; i < name.length; i++) {
    let letter = name.charAt(i);
    score = score + scores[letter];
  }
  console.log(score);
  if (score >= 600) console.log("THE BEST");
  else if (score >= 301) console.log("VERY GOOD");
  else if (score >= 61) console.log("PRETTY GOOD");
  else console.log("NOT TOO GOOD");
}

checkPoint("nam");

// 4.Viết một hàm đảo ngược các khóa và giá trị của một đối tượng, kết quả trả về là một đối tượng mới
const obj = { a: 1, b: 2, c: 3 };
function invert(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(invert(obj));

// 5.Bạn đi chơi về phát hiện nhà bạn có dấu hiệu đột nhập! Đưa ra một đối tượng trong số các đồ bị đánh cắp, viết hàm tính tổng số tiền (số) đồ bị trộm. Nếu không có gì bị mất, trả lại chuỗi "Lucky you!".
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
};

function totalAmountLost(stolenitems) {
  let totalLost = 0;
  for (let item in stolenitems) {
    totalLost += stolenitems[item];
  }
  if (totalLost == 0) console.log("Lucky You!!");
  else console.log(totalLost);
}
totalAmountLost(stolenItems);
// 6.Cho một danh sách sinh viên và quốc gia của họ, được lưu trữ dưới dạng các cặp key: value trong một object. Viết một hàm nhận vào một tên, nếu tên có trong object , trả về chuỗi dạng: "Hi! I'm [name], and I'm from [country]." Nếu tên không có trong object, hãy trả về: "Hi! I'm a guest."
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(name) {
  check = true;
  for (let guest in GUEST_LIST) {
    if ((guest = name)) {
      console.log("Hi! I'm " + guest + ", and I'm from " + GUEST_LIST[name]);
      check = false;
      break;
    }
    if (check) console.log("Hi! I'm a guest.");
  }
}
greeting("Randy");

// //7. Cho một đối tượng chứa tên và tuổi của một nhóm người, hãy trả về tên của người lớn tuổi nhất.

// const people = {
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29,
// };
// function getOldest(people) {}
const str = "tHE fOX iS cOMING fOR tHE cHICKEN";
function reserveCase(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96) {
      str.charAt(i) = str.charAt(i).toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
    temp += str[i];
  }
  console.log(str);
}
reserveCase(str);

