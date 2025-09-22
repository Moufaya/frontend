// Données fictives (mock JSON simulant ta base)
const categories = ["Running", "Lifestyle", "Basketball", "Hiking"];
const brands = [
  { name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
  { name: "Adidas", logo: "https://logo.clearbit.com/adidas.com" },
  { name: "Puma", logo: "https://logo.clearbit.com/puma.com" }
];

const products = [
  {
    id: 1,
    name: "Nike Air Zoom",
    brand: "Nike",
    category: "Running",
    price: 120,
    image: "https://via.placeholder.com/250x180?text=Nike+Air+Zoom"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    brand: "Adidas",
    category: "Running",
    price: 150,
    image: "https://via.placeholder.com/250x180?text=Ultraboost"
  },
  {
    id: 3,
    name: "Puma Street Flow",
    brand: "Puma",
    category: "Lifestyle",
    price: 90,
    image: "https://via.placeholder.com/250x180?text=Puma+Street+Flow"
  }
];

// Rendu catégories
const catContainer = document.getElementById("categories");
categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.onclick = () => renderProducts(products.filter(p => p.category === cat));
  catContainer.appendChild(btn);
});

// Rendu brands
const brandContainer = document.getElementById("brands");
brands.forEach(b => {
  const btn = document.createElement("button");
  btn.innerHTML = `<img src="${b.logo}" alt="${b.name}" width="20"/> ${b.name}`;
  btn.onclick = () => renderProducts(products.filter(p => p.brand === b.name));
  brandContainer.appendChild(btn);
});

// Rendu produits
function renderProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div class="info">
        <h3>${p.name}</h3>
        <p class="price">${p.price} €</p>
        <p><small>${p.brand} - ${p.category}</small></p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Affichage initial
renderProducts(products);
