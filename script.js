function showContent(menu) {
  const content = document.getElementById("content");

  if (menu === "profil") {
    content.innerHTML = `
      <h3>Profil Program Studi</h3>
      <p>
        Program Studi Sains Data berada di Fakultas Sains dan Teknologi
        Universitas PGRI Sumatera Barat.
      </p>`;
  }

  else if (menu === "visi") {
    content.innerHTML = `
      <h3>Visi</h3>
      <p>
        Menjadi program studi unggul dan kompetitif di bidang Sains Data.
      </p>`;
  }

  else if (menu === "misi") {
    content.innerHTML = `
      <h3>Misi</h3>
      <ul>
        <li>Pendidikan berbasis teknologi</li>
        <li>Pengembangan riset</li>
        <li>Kerja sama industri</li>
      </ul>`;
  }

  else if (menu === "matkul") {
    content.innerHTML = `
      <h3>Mata Kuliah</h3>

      <button class="sub-btn" onclick="showMatkul('diskrit')">
        📘 Matematika Diskrit
      </button>

      <button class="sub-btn" onclick="showMatkul('algo')">
        💻 Algoritma dan Pemrograman
      </button>

      <div id="matkul-content" style="margin-top:10px;"></div>
    `;
  }

  else if (menu === "brosur") {
    content.innerHTML = `
      <h3>Promosi Program Studi</h3>
      <a href="assets/brosur-sains-data.pdf" target="_blank">
        📄 Lihat Brosur Sains Data
      </a>`;
  }

  else if (menu === "peluang") {
    content.innerHTML = `
      <h3>Peluang Kerja</h3>
      <p>
        Lulusan Sains Data memiliki peluang kerja luas
        di sektor industri, pemerintahan, startup,
        dan perusahaan teknologi.
      </p>`;
  }

  else if (menu === "kerja") {
    content.innerHTML = `
      <h3>Lingkup Dunia Kerja</h3>
      <ul>
        <li>Data Analyst</li>
        <li>Data Scientist</li>
        <li>Business Intelligence</li>
        <li>Machine Learning Engineer</li>
      </ul>`;
  }

  else {
    content.innerHTML = `<p>Menu belum tersedia.</p>`;
  }
}

function showMatkul(type) {
  const area = document.getElementById("matkul-content");

  if (type === "diskrit") {
    area.innerHTML = `
      <h4>Matematika Diskrit</h4>
      <p>
        Matematika Diskrit membahas struktur diskrit
        seperti logika, himpunan, relasi, graf,
        dan digunakan sebagai dasar pemrograman,
        algoritma, dan kecerdasan buatan.
      </p>`;
  }

  else if (type === "algo") {
    area.innerHTML = `
      <h4>Algoritma dan Pemrograman</h4>
      <p>
        Mata kuliah ini membahas konsep algoritma,
        logika pemrograman, dan implementasi dasar
        menggunakan bahasa pemrograman.
      </p>`;
  }
}
