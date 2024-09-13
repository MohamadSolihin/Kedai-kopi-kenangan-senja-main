document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "Produck 1.jpg", price: 20000 },
      { id: 2, name: "Arabica Blend", img: "Produck 2.jpg", price: 25000 },
      { id: 3, name: "Primo Passco", img: "Produck 3.jpg", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "Produck 4.jpg", price: 40000 },
      { id: 5, name: "Sumatra Mandheling", img: "Produck 5.jpg", price: 35000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find(item => item.id === newItem.id);
      // jika belum ada / kosong hapus
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map(item => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang udah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau di remove berdasarkan idnya
      const cartItem = this.items.find(item => item.id === id);
      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map(item => {
          // jika bukan barang yang di click
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika brangnya sisa 1
        this.items = this.items.filter(item => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;
const form = document.querySelector("#checkoutForm");
form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// kirim data ketika checkout data di click
checkoutButton.addEventListener("click", function (e) {
  // Kirim data ke server ketika checkout di click
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objectData = Object.fromEntries(data);
  const messege = formatMassege(objectData)
  window.open('http://wa.me/6285794767157text=' + encodeURIComponent(messege));
  console.log(objectData);
});

// format pesan whatsapp
const formatMassege = obj => {
  return `Data Customer 
  Nama: ${obj.name}
  Email: ${obj.email}
  No Hp: ${obj.Phone}
  Data Pesanan
  ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}`).join("\n")};
  TOTAL: ${rupiah(obj.total)} Terima kasih.`; 
};

// konfersi ke rupiah
const rupiah = number => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
