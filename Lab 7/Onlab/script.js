const products = [
  {
    name: "Bánh quy",
    category: "Đồ ăn",
    price: 25000,
    quantity: 125,
  },
  {
    name: "Mì tôm",
    category: "Đồ ăn",
    price: 3500,
    amount: 120,
  },
  {
    name: "Iphone",
    category: "Đồ điện tử",
    price: 25000000,
    quantity: 0,
  },
  {
    name: "Ipod",
    category: "Đồ điện tử",
    price: 3500000,
    quantity: 0,
  },
  {
    name: "Kẹo",
    category: "Đồ ăn",
    price: 35000,
    quantity: 125,
  },
  {
    name: "Samsung note22 Ultra",
    category: "Điện thoại",
    price: 30000000,
    quantity: 100,
  },
  {
    name: "MacBook pro 14inch ",
    category: "Laptop",
    price: 60000000,
    quantity: 29,
  },
  {
    name: "Iphone 13mini",
    category: "Điện thoại",
    price: 24000000,
    quantity: 52,
  },
  {
    name: "Ipad pro 12.9inch",
    category: "Máy tính bảng",
    price: 2900000,
    quantity: 54,
  },
  {
    name: "Tủ lạnh Samsung",
    category: "Gia dụng",
    price: 12000000,
    quantity: 40,
  },
  {
    name: "Laptop Dell XPS",
    category: "Máy tính",
    price: 3000000,
    quantity: 29,
  },
];

function createProduct(product) {
  const $template = $(
    document.querySelector(".product-template").content.firstElementChild
  ).clone();

  $template.find(".name").text(product.name);
  $template.find(".category").text(product.category);
  $template.find(".price").text(product.price);
  $template.find(".quantity").text(product.quantity);
  $template.data(product);
  return $template;
}
function createList() {
  const list = products.map(function (product) {
    return createProduct(product);
  });
  return list;
}
function render() {
  const $list = $("tbody");
  const products = createList();

  $list.append(...products);
}
function isAvailable(e) {
  const isCheck = e.target.checked;
  const $products = $(".product-row");

  $.each($products, function (index, product) {
    const data = $(product).data();
    if (data.quantity == 0) {
      if (isCheck) $(product).addClass("hidden");
      else $(product).removeClass("hidden");
    }
  });
}

function sortBy(option) {
  //key isAscending
  const products = $(".product-row").get();
  products.sort(function (productA, productB) {
    const dataOfA = $(productA).data();
    const dataOfB = $(productB).data();
    if (option.isAscending) return dataOfA[option.key] - dataOfB[option.key];
    else return dataOfB[option.key] - dataOfA[option.key];
  });
  $("tbody").append(products);
}

function sortByProduct(e) {
  const option = +e.target.value;
  switch (option) {
    case 1:
      sortBy({ key: "price", isAscending: true });
      break;
    case 2:
      sortBy({ key: "price", isAscending: false });
      break;
    case 3:
      sortBy({ key: "quantity", isAscending: true });
      break;
    case 4:
      sortBy({ key: "quantity", isAscending: false });
      break;
    default:
      break;
  }
}
$(function () {
  $("#status").on("change", isAvailable);
  $("#sort").on("change", sortByProduct);
  render();
});
