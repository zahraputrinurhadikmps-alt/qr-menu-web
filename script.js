function showContent(menu) {
    const content = document.getElementById("content");

    if (menu === "profil") {
        content.innerHTML = `
        <h3>Profil Program Studi</h3>
        <p>Program Studi Sains Data berada di Fakultas Sains dan Teknologi
        Universitas PGRI Sumatera Barat.</p>`;
    }

    if (menu === "visi") {
        content.innerHTML = `
        <h3>Visi</h3>
        <p>Menjadi program studi unggul dan kompetitif di bidang Sains Data.</p>`;
    }

    if (menu === "misi") {
        content.innerHTML = `
        <h3>Misi</h3>
        <ul>
            <li>Pendidikan berbasis teknologi</li>
            <li>Pengembangan riset</li>
            <li>Kerja sama industri</li>
        </ul>`;
    }

    if (menu === "karier") {
        content.innerHTML = `
        <h3>Prospek Karier</h3>
        <p>Data Analyst, Data Scientist, Machine Learning Engineer.</p>`;
    }
}

new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 180,
    height: 180
});

