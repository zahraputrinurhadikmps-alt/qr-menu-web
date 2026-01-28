function showContent(id) {
  // sembunyikan semua konten
  const allContent = document.querySelectorAll(".content-box");
  allContent.forEach(box => box.classList.add("hidden"));

  // sembunyikan MENU
  const menu = document.querySelector(".menu");
  if (menu) menu.style.display = "none";

  // tampilkan konten yang dipilih
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove("hidden");
  }

  // scroll ke atas
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function backToMenu() {
  // sembunyikan semua konten
  const allContent = document.querySelectorAll(".content-box");
  allContent.forEach(box => box.classList.add("hidden"));

  // tampilkan MENU lagi
  const menu = document.querySelector(".menu");
  if (menu) menu.style.display = "grid";

  // scroll ke atas
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function showMatkul(type) {
  const area = document.getElementById("matkul-content");
  if (!area) return;

  if (type === "diskrit") {
    area.innerHTML = `
      <h4>Matematika Diskrit</h4>
      <p>
        Matematika Diskrit membahas struktur diskrit seperti
        logika, himpunan, relasi, graf, dan digunakan sebagai
        dasar algoritma, pemrograman, serta kecerdasan buatan.
      </p>
    `;
  }

  else if (type === "algo") {
    area.innerHTML = `
      <h4>Algoritma dan Pemrograman</h4>
      <p>
        Mata kuliah ini membahas konsep algoritma,
        logika pemrograman, dan implementasi dasar
        menggunakan bahasa pemrograman.
      </p>
    `;
  }
}
