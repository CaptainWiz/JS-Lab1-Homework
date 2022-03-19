// function selectBox(obj) {
//   let options = obj.children;
//   let result = 0;
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].selected) {
//       result = options[i].value;
//     }
//   }
//   console.log(result);
// }
// selectBox();
// $(".serviceQuantily").on("change", selectBox);

$(function () {
  const $bill = $(".billAmt");
  const $guest = $(".numGuest");
  const $service = $(".serviceQuantily");
  const $result = $(".result");
  const $calculate = $(".calculate");

  function CalculateTip() {
    const bill = $bill.val();
    const guest = $guest.val();
    const service = parseFloat($service.val());
    console.log(service);

    let total = (bill * service) / guest;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    $result.text(total);
  }
  CalculateTip();
  $calculate.on("click", CalculateTip);
});
