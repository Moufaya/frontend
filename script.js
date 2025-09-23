async function loadBrands() {
  const response = await fetch("brands_rows.csv");
  const data = await response.text();

  // Découpe par lignes
  const rows = data.split("\n").slice(1); // ignore header
  const container = document.getElementById("brand-filters");

  rows.forEach(row => {
    if (!row.trim()) return; // ignore lignes vides
    const [id, name, logo_url] = row.split(",");

    const btn = document.createElement("button");
    btn.innerHTML = logo_url ? `<img src="${logo_url}" alt="${name}" height="16"> ${name}` : name;
    container.appendChild(btn);
  });
}

loadBrands();
