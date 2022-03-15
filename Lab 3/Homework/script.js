const str =
  "`Những suy đOán xung quanh TƯƠNG lai của cầu THỦ 37 tuổi và những lời chỉ trích Anh phải nhận đã liên tục NỔ ra trong vài tuần gần đây. Nhưng Neville tin rằng vấn đề lớn nhất của Man United là hàng phòng ngự kém và thiếu nhất quán của họ: “Hàng thủ Manchester United không tốt lắm, tôi phải nói thẳng; Họ quá mâu thuẫn và không đáng tin cậy! Bạn không thể thực sự tin tưởng họ ? BạN không biết điều gì sẽ xảy ra khi hỌ chơi quá lỏng lẻo`;";
// Chuyển từ tiếng Việt sang không dấu
function nonAccentVietnamese(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  return str;
}

// Chuyển các kí tự đặc biệt kết thúc câu thành dấu .
function nonSpecialCharacters(str) {
  str = str.replace(/;|:|\.|\?|!/g, ".");
  str = str.replace(/\“/g, "");
  return str;
}

// Tìm câu đầu tiên chứa từ khoá
function getFirstSentenceContains(str, word) {
  let nonString = nonAccentVietnamese(str);
  nonString = nonSpecialCharacters(nonString);
  word = nonAccentVietnamese(word);
  word = " " + word + " ";
  str = nonSpecialCharacters(str);
  str = str.replace(/\`/g, " ");
  const sentences = str.split(".");
  const nonSentences = nonString.split(".");
  let check = true,
    searchSentence = null;
  for (let key in nonSentences) {
    if (nonSentences[key].includes(word)) {
      searchSentence = sentences[key] + ".";
      correctSentence(searchSentence);
      check = false;
      break;
    }
  }
  if (check) console.log("Không có câu nào!!");
}

// Sửa câu cho đẹp
function correctSentence(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/man/g, "Man");
  sentence = sentence.replace(/united/g, "United");
  sentence = sentence.replace(/neville/, "Neville");
  sentence = sentence.charAt(1).toUpperCase() + sentence.slice(2);
  console.log(sentence);
}

let word = prompt("Từ khoá là: ");
getFirstSentenceContains(str, word);
