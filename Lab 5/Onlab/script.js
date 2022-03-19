// $("h1").text("Helloooo");
$(function () {
  //Cho vàoddayakhi thêm thẻ script ở đầu

  const directions = [
    "to right",
    "to left",
    "to bottom",
    "to top",
    "to right bottom",
    "to right top",
    "to left bottom",
    "to left top",
  ];
  function getRandomDirection() {
    // trả về một hướng màu ngẫu nhiên
    return directions[Math.floor(Math.random() * directions.length)];
  }

  function getRandomHexColor() {
    // trả về một mã màu hex ngẫu nhiên
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return randomColor.padStart(6, "0");
  }

  const $body = $("body");
  const $direction = $(".direction");
  const $from = $(".from");
  const $to = $(".to");
  const $btn = $(".btn-change");

  function changeColor() {
    const randomDirection = getRandomDirection();
    const from = getRandomHexColor();
    const to = getRandomHexColor();

    console.log(randomDirection, from, to);

    $body.css({
      backgroundImage: `linear-gradient(${randomDirection}, #${from}, #${to})`,
    });
    $direction.text(randomDirection);
    $from.text(from).css({ color: `#${from}` });
    $to.text(to).css({ color: `#${to}` });
  }

  changeColor();

  $btn.on("click", changeColor);

  //   const $box = $("box");
  //   console.log($box.html()); //document.querySelectoe(".box").innerHTML
  //   $box.html("Lol"); //document.innerHTML="<p>Lol</p>"
  //   console.log($box.text);
  //   $box.text("<p>hihihi</p>");

  //   console.log($box.attr("class"));

  //     console.log($box.width());

  //     const input = $(".text");

  //   $("h1").text("ohohoho");
  //   $(".abc").text("Vâng");
  //   $("tr").css({ border: "1px black solid" });

  //     $(function () {
  //       $("tr").each(function (index, tr) {
  //         let $td = $(tr).children();
  //         $td
  //           .filter(`:nth-child(${index + 1}), :nth-child(${$td.length - index})`)
  //           .css({ backgroundColor: "red" });
  //       });
  //     });
  //   const $tr = $("tr");

  //   for (i = 0; i < $tr.length; i++) {
  //     const tr = $tr[i];
  //     const $td = $(tr)
  //       .children()
  //       .filter(`:nth-child(${i + 1}),:nth-child(${$tr.length - i})`);
  //     // const $td =
  //     //   $(tr).children().eq(i) +
  //     //   $(tr)
  //     //     .children()
  //     //     .eq($tr.length - 1 - i);
  //     $td.css({ backgroundColor: "red" });
  //     const $td2 = $(tr)
  //       .children()
  // //       .eq($tr.length - 1 - i);
  //     $td2.css({ backgroundColor: "red" });
});

//$("Selector")==document.querySelectorAll("selector");
//$(dom)
//$("<tangname />")==document.createElement("tagname")
