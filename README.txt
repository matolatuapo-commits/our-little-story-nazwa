# Our Little Story — Website untuk Nazwa Ollong

## Isi project
- `index.html` — struktur halaman website
- `css/style.css` — desain, warna, animasi, dan responsif
- `js/script.js` — penghitung hari, tema otomatis, galeri, surat, dan animasi
- `images/` — tempat foto dan video

## Cara memasang di XAMPP
1. Ekstrak folder `Lalong-Website`.
2. Buka `C:\xampp\htdocs\`.
3. Salin folder hasil ekstrak dan ubah namanya menjadi `Lalong` (atau salin isi folder ke `C:\xampp\htdocs\Lalong\`).
4. Masukkan semua file foto dan video milikmu ke `C:\xampp\htdocs\Lalong\images\`.
5. Pastikan nama file sama persis seperti daftar di bawah.
6. Jalankan Apache dari XAMPP Control Panel.
7. Buka browser dan kunjungi `http://localhost/Lalong/`.

## Nama file media yang dibutuhkan
**4 foto utama:**
- `poto1.jpg`
- `poto2.jpg`
- `poto3.jpg`
- `poto4.jpg`

**6 foto album:**
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- `foto4.jpg`
- `foto5.jpg`
- `foto6.jpg`

**4 video:**
- `video1.mp4`
- `video2.mp4`
- `video3.mp4`
- `video4.mp4`

> Catatan: screenshot folder yang dikirim hanya memperlihatkan nama file, bukan file foto/video aslinya. Karena itu, salin file media asli dari folder `Lalong\images` milikmu ke folder `images` pada project ini. Jangan mengubah nama file agar semuanya langsung terbaca.

## Mengubah isi website
- Nama pasangan, tanggal, dan tulisan dapat diedit di `index.html`.
- Tanggal jadian untuk penghitung hari ada di `js/script.js`, pada baris `new Date(2026, 5, 1)`. Angka bulan JavaScript dimulai dari 0, jadi `5` berarti Juni.
- Tema warna berganti otomatis setiap 5 detik.
