/* =============================================================================
   config.js — SATU-SATUNYA FAIL LAMAN WEB YANG KENA DIEDIT UNTUK SETIAP KLIEN
   -----------------------------------------------------------------------------
   Dibaca oleh portal rakyat (index.html) dan dashboard admin (admin/index.html).
   Kalau guna new-client.sh, nilai placeholder (diapit dua garis-bawah) diisi automatik; selebihnya
   (URL Apps Script & Firebase) anda tampal selepas deploy.

   Kandungan yang kerap berubah (slide, pengumuman, waktu operasi, suis tutup
   borang) BUKAN di sini — ia diurus melalui Sveltia CMS: content/site.json.

   Fail ini boleh dilihat orang awam. Itu OK: URL Web App dan kunci Firebase web
   memang tidak rahsia. JANGAN letak kata laluan, token GitHub atau apa-apa
   rahsia di sini.
   ============================================================================= */
window.KARADI_CONFIG = {

  // 1) URL Web App Apps Script — dapat selepas Deploy. Berakhir dengan /exec
  //    Biarkan "URL_APPSCRIPT_ANDA_DI_SINI" kalau belum deploy.
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbw9YaetPBxy1h7jwydp4tOH8ylJKh5J9sKp5mEARUtPDxNr2Z-lSrie6Pxc1fS__io69w/exec",

  // 2) Firebase (akaun rakyat). Firebase console > Project settings > General >
  //    Your apps > Web app > "firebaseConfig". Lihat docs/02-FIREBASE.md
  FIREBASE: {
  apiKey: "AIzaSyAbpnsEVDpFUux817kjLHpDEEv44Z-Xds4",
  authDomain: "ebintong.firebaseapp.com",
  projectId: "ebintong",
  storageBucket: "ebintong.firebasestorage.app",
  messagingSenderId: "66230638840",
  appId: "1:66230638840:web:e1a4f06bcfe700adf3830d"
  },

  // 3) Jenama & maklumat hubungan (keluar di header, footer, dasar privasi, PDF admin)
  BRAND: {
    name:         "E-Bintong",        // Cth: KARA-Di
    tagline:      "",         // Cth: Karambunai Digital Interaction
    orgName:      "Pusat Khidmat Penyelaras DUN Bintong",        // Cth: Pusat Khidmat Rakyat Karambunai
    orgShort:     "E-Bintong",       // Cth: Karambunai  (dalam mesej "team ... telah menerima")
    officeLabel:  "Pusat Khidmat Penyelaras DUN Bintong",    // Cth: Pejabat ADUN Karambunai  (kad lokasi di halaman utama)
    logo:         "assets/logo.svg",     // Letak logo klien di assets/ dan tukar nama fail di sini
    email:        "pkmb.bintong@gmail.com",   // Emel awam untuk orang ramai (BOLEH berbeza dari emel admin)
    whatsapp:     "60123456789",        // Digit sahaja + kod negara. Cth: 60123456789
    phoneDisplay: "60123456789",   // Cara nombor dipaparkan. Cth: 012-345 6789
    year:         new Date().getFullYear()
  }
};
