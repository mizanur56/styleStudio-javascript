const products = [
  //   shirt items
  {
    id: 1,
    type: "shirt",
    name: "Casual Shirt",
    image: "images/shirt/one.jpg",
    price: 1020,
  },
  {
    id: 2,
    type: "shirt",
    name: "Formal Shirt",
    image: "images/shirt/two.jpg",
    price: 1225,
  },
  {
    id: 3,
    type: "shirt",
    name: "Denim Shirt",
    image: "images/shirt/three.jpg",
    price: 1030,
  },
  {
    id: 4,
    type: "shirt",
    name: "Printed Shirt",
    image: "images/shirt/four.jpg",
    price: 2000,
  },
  {
    id: 5,
    type: "shirt",
    name: "Printed Shirt",
    image: "images/shirt/five.jpg",
    price: 2100,
  },
  {
    id: 6,
    type: "shirt",
    name: "Printed Shirt",
    image: "images/shirt/six.jpg",
    price: 1000,
  },
  {
    id: 7,
    type: "shirt",
    name: "Printed Shirt",
    image: "images/shirt/seven.jpg",
    price: 1800,
  },
  {
    id: 8,
    type: "shirt",
    name: "Printed Shirt",
    image: "images/shirt/nine.jpg",
    price: 1500,
  },
  //   panjabi items
  {
    id: 9,
    type: "panjabi",
    name: "White Panjabi",
    image: "images/panjabi/eight.jpg",
    price: 1950,
  },
  {
    id: 10,
    type: "panjabi",
    name: "Black Panjabi",
    image: "images/panjabi/five.jpg",
    price: 3200,
  },
  {
    id: 11,
    type: "panjabi",
    name: "Embroidered Panjabi",
    image: "images/panjabi/four.jpg",
    price: 2350,
  },
  {
    id: 12,
    type: "panjabi",
    name: "Cotton Panjabi",
    image: "images/panjabi/seven.jpg",
    price: 2250,
  },
  {
    id: 13,
    type: "panjabi",
    name: "Linen Panjabi",
    image: "images/panjabi/six.jpg",
    price: 2650,
  },
  {
    id: 13,
    type: "panjabi",
    name: "Linen Panjabi",
    image: "images/panjabi/three.jpg",
    price: 2750,
  },
  {
    id: 13,
    type: "panjabi",
    name: "Linen Panjabi",
    image: "images/panjabi/two.jpg",
    price: 2050,
  },
  {
    id: 13,
    type: "panjabi",
    name: "Linen Panjabi",
    image: "images/panjabi/one.jpg",
    price: 2050,
  },
  //   Abeya items
  {
    id: 14,
    type: "abeya",
    name: "China Pure Coton",
    image: "images/abeya/abeya-1.webp",
    price: 2680,
  },
  {
    id: 15,
    type: "abeya",
    name: "China Linen Coton",
    image: "images/abeya/abeya-2.webp",
    price: 2080,
  },
  {
    id: 16,
    type: "abeya",
    name: "China Pure Coton",
    image: "images/abeya/abeya-3.webp",
    price: 2280,
  },
  {
    id: 17,
    type: "abeya",
    name: "China Pure Coton",
    image: "images/abeya/abeya-4.webp",
    price: 2600,
  },
  {
    id: 18,
    type: "abeya",
    name: "China Pure Coton",
    image: "images/abeya/abeya-5.webp",
    price: 2380,
  },
  {
    id: 19,
    type: "abeya",
    name: "China Pure Coton",
    image: "images/abeya/abeya-6.webp",
    price: 2680,
  },
  {
    id: 20,
    type: "abeya",
    name: "China Pure Coton",
    image: "images/abeya/abeya-7.webp",
    price: 2680,
  },
  {
    id: 21,
    type: "abeya",
    name: " Pure Coton",
    image: "images/abeya/abeya-8.webp",
    price: 2480,
  },
  //   niqab items
  {
    id: 22,
    type: "niqab",
    name: " Arabian Navy blue Niqab",
    image: "images/niqab/niqab--3.webp",
    price: 350,
  },
  {
    id: 23,
    type: "niqab",
    name: " Arabian Light Gray Niqab",
    image: "images/niqab/niqab--4.webp",
    price: 300,
  },
  {
    id: 24,
    type: "niqab",
    name: " Arabian Dark Gray Niqab",
    image: "images/niqab/niqab--5.webp",
    price: 280,
  },
  {
    id: 25,
    type: "niqab",
    name: " Arabian Black Niqab",
    image: "images/niqab/niqab-1.webp",
    price: 360,
  },
  {
    id: 26,
    type: "niqab",
    name: " Arabian Premium Niqab",
    image: "images/niqab/niqab-2.webp",
    price: 350,
  },
  {
    id: 27,
    type: "niqab",
    name: " Arabian White Niqab",
    image: "images/niqab/niqab-6.webp",
    price: 250,
  },
  //   hijab items
  {
    id: 28,
    type: "hijab",
    name: "Lagoon Teal Hijab",
    image: "images/hijab/hijab-1.webp",
    price: 320,
  },
  {
    id: 29,
    type: "hijab",
    name: "Lagoon Teal Hijab",
    image: "images/hijab/hijab-2.webp",
    price: 300,
  },
  {
    id: 30,
    type: "hijab",
    name: "Lagoon Teal Hijab",
    image: "images/hijab/hijab-3.webp",
    price: 320,
  },
  {
    id: 31,
    type: "hijab",
    name: "Lagoon Teal Hijab",
    image: "images/hijab/hijab-4.webp",
    price: 300,
  },
  {
    id: 32,
    type: "hijab",
    name: "Lagoon Teal Hijab",
    image: "images/hijab/hijab-5.webp",
    price: 280,
  },
];

// Select containers
const shirtsContainer = document.getElementById("shirtsContainer");
const panjabisContainer = document.getElementById("panjabisContainer");
const abeyaContainer = document.getElementById("abeyaContainer");
const niqabContainer = document.getElementById("niqabContainer");
const hijabContainer = document.getElementById("hijabContainer");

function createProductCard(product) {
  return `
      <div class="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
        <img class="h-80 w-80 object-cover rounded-md mb-4" src="${product.image}" alt="${product.name}" />
        <h3 class="text-lg font-medium text-gray-700 mb-2">${product.name}</h3>
        <p class="text-emerald-700 font-semibold mb-4">${product.price} Taka</p>
        <button onclick="addToCart(${product.id})" class="hover:bg-emerald-700 hover:text-white px-4 py-2 bg-emerald-800 text-white rounded transition duration-300">
          Add to Cart
        </button>
      </div>
    `;
}

products.forEach((product) => {
  if (product.type === "shirt") {
    shirtsContainer.innerHTML += createProductCard(product);
  } else if (product.type === "panjabi") {
    panjabisContainer.innerHTML += createProductCard(product);
  } else if (product.type === "abeya") {
    abeyaContainer.innerHTML += createProductCard(product);
  } else if (product.type === "niqab") {
    niqabContainer.innerHTML += createProductCard(product);
  } else if (product.type === "hijab") {
    hijabContainer.innerHTML += createProductCard(product);
  }
});

let cart = [];
let total = 0;

const addToCart = (productId) => {
  const productInCart = cart.find((item) => item.id === productId);

  if (productInCart) {
    alert("Product already in the cart.");
    return;
  }

  const product = products.find((item) => item.id === productId);
  if (product) {
    cart.push(product);
    total += product.price;
    console.log(
      `${product.name} added to the cart. Total: ${total.toFixed(2)} Taka.`
    );
    document.getElementById("cart_count").innerText = cart.length;
    // openCart();
  } else {
    console.error("Product not found.");
  }
};

const openCart = () => {
  const cartContainer = document.getElementById("cart_item");
  cartContainer.innerHTML = "";
  total = 0;
  cart.forEach((item) => {
    const cartBox = document.createElement("li");
    cartBox.style.cssText =
      "display: flex; justify-content: space-between;margin-bottom:10px; align-items:center; padding:0px 5px;";

    cartBox.innerHTML = `
            <img class="w-14 h-14" src="${item.image}" alt="" />
            <h2 class="font-bold">${item.name}</h2>
            <p class="font-medium">Price: ${item.price.toFixed(2)} taka</p>
    
    `;
    cartContainer.appendChild(cartBox);

    total += item.price;
  });
  document.getElementById("total_price").textContent = total.toFixed(2);

  const shoppingCart = document.getElementById("shopping_cart");
  shoppingCart.classList.remove("hidden");
};

const closeCart = () => {
  const shoppingCart = document.getElementById("shopping_cart");
  if (shoppingCart) {
    shoppingCart.classList.add("hidden");
  }
};
