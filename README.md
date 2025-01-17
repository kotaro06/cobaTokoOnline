# belajarTokoOnline
ganti terminal ke gitbash
cek ke firebase login
--> jika already logged langsung ke nmr 6
--> login firebase dulu
setting untuk upload web:
firebase init 
? Are you ready to proceed? (Y/n) y

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert 
selection, and <enter> to proceed)
 ( ) Genkit: Setup a new Genkit project with Firebase
 ( ) Functions: Configure a Cloud Functions directory and its files
 ( ) App Hosting: Configure an apphosting.yaml file for App Hosting
>( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ( ) Storage: Configure a security rules file for Cloud Storage
 ( ) Emulators: Set up local emulators for Firebase products
 ( ) Remote Config: Configure a template file for Remote Config
(Move up and down to reveal more choices)

-->space 
-->enter

? Please select an option: (Use arrow keys)
> Use an existing project 

setup terakhir : 
firebase deploy

ini struktur ideal chatgpt
project/
│-- index.html             <- Halaman utama
│-- app.js                 <- File utama JavaScript
│-- koneksi.js             <- File konfigurasi Firebase biasnya bernama firebase-config.js
└-- firebase/              <- (Opsional) Direktori untuk modul database lain
    └-- database.js        <- Koneksi fungsi khusus untuk database

struktur gue :
project/
│-- koneksi.js             <- File konfigurasi Firebase biasnya bernama firebase-config.js
│-- index.html             <- Halaman utama
│                          <- File utama JavaScript
│                          <- Database Utama 
│



Jika saya adalah penjual di toko retail yang ingin memperluas bisnis ke toko online, berikut adalah data yang saya butuhkan:

1. Data Produk
Nama Produk: Nama unik untuk setiap item.
Deskripsi Produk: Penjelasan tentang produk, termasuk spesifikasi.
Harga Produk: Harga jual untuk pelanggan.
Kategori Produk: Misalnya, pakaian, elektronik, makanan, dll.
Stok Barang: Jumlah barang yang tersedia.
Gambar Produk: Foto berkualitas tinggi dari produk.
SKU (Stock Keeping Unit): Kode unik untuk identifikasi produk.
Berat dan Dimensi: Dibutuhkan untuk pengiriman.
2. Data Pelanggan
Nama Pelanggan: Untuk personalisasi dan layanan pelanggan.
Email dan Nomor Telepon: Untuk komunikasi dan notifikasi.
Alamat Pengiriman: Untuk pengiriman barang.
Riwayat Pembelian: Data produk yang pernah dibeli.
3. Data Pesanan
Nomor Pesanan: Identifikasi pesanan.
Daftar Item yang Dipesan: Termasuk jumlah dan harga per item.
Metode Pembayaran: Transfer bank, kartu kredit, dompet digital, dll.
Status Pesanan: Menunggu pembayaran, diproses, dikirim, selesai.
Tanggal Pesanan dan Pengiriman.
4. Data Pembayaran
Total Pembayaran: Jumlah yang harus dibayar.
Metode Pembayaran: Jenis pembayaran yang digunakan.
Status Pembayaran: Berhasil, pending, gagal.
Tanggal Pembayaran: Untuk dokumentasi dan rekonsiliasi.
5. Data Promosi dan Diskon
Kode Promo: Untuk mendorong pembelian.
Diskon Aktif: Data promosi saat ini.
Pengguna Diskon: Berapa kali diskon digunakan.
6. Data Pengiriman
Layanan Pengiriman: Ekspedisi yang digunakan.
Nomor Resi: Untuk pelacakan paket.
Biaya Pengiriman: Berdasarkan jarak atau berat.
7. Data Analitik
Kunjungan Toko: Berapa banyak pengunjung online.
Produk Populer: Produk yang sering dilihat atau dibeli.
Waktu Kunjungan: Kapan pelanggan sering berbelanja.
Feedback dan Review: Komentar dari pelanggan.
8. Data Admin
Akses Login Admin: Untuk mengelola toko online.
Riwayat Aktivitas: Apa saja yang diubah atau ditambahkan admin


silahkan cek setiap file html ke npm terbaru. Terdeteksi file AjenisBarang.html gagal di sdk npm 11.1.0.
