$(function () {
  const $weight = $(".weight");
  const $height = $(".height");
  const $comment = $(".comment");
  const $result = $(".result");
  const $calculate = $(".calculate");
  function caculateBMI() {
    const weight = $weight.val();
    const height = $height.val();
    let BMI = weight / height ** 2;
    console.log(BMI.toFixed(2));
    $result.text(BMI.toFixed(2));
    if (BMI > 40) $comment.text("Béo phì độ III");
    else if (BMI > 30) $comment.text("Béo phì độ II");
    else if (BMI > 25) $comment.text("Béo phì độ I");
    else if (BMI > 23) $comment.text("Hơi béo");
    else if (BMI > 18.5) $comment.text("Bình thường");
    else if (BMI > 17.5) $comment.text("Gầy độ I");
    else if (BMI > 16) $comment.text("Gầy độ II");
    else $comment.text("Gầy độ II");
  }
  caculateBMI();
  $calculate.on("click", caculateBMI);
});
