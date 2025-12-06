# 🔄 Form Tukar Piket

Sistem online untuk mengajukan pertukaran jadwal piket yang terintegrasi dengan Google Sheets.

## 🌟 Fitur

- ✅ Form pengajuan tukar piket yang user-friendly
- ✅ Data petugas otomatis dimuat dari Google Sheets
- ✅ Validasi form yang lengkap
- ✅ Penyimpanan data otomatis ke Google Sheets
- ✅ Responsive design (mobile-friendly)
- ✅ Real-time feedback untuk user

## 🚀 Demo

Live demo: [https://form-tukar-piket.pages.dev](https://form-tukar-piket.pages.dev)

## 📋 Prasyarat

- Akun Google (untuk Google Sheets dan Apps Script)
- Akun GitHub (untuk hosting kode)
- Akun Cloudflare (untuk deployment - gratis)

## 🛠️ Cara Setup

### 1. Setup Google Sheets

1. Buat Google Sheets baru dengan nama "Form Tukar Piket"
2. Buat 2 sheet:
   - **Daftar_Petugas**: Berisi daftar nama petugas (kolom A)
   - **Data_Pengajuan**: Untuk menyimpan data submission

**Sheet "Daftar_Petugas":**
```
A1: Nama Petugas
A2: Ahmad Hidayat
A3: Budi Santoso
A4: Citra Dewi
... (tambahkan nama lainnya)
```

**Sheet "Data_Pengajuan":**
```
A1: Timestamp
B1: Petugas 1
C1: Tanggal 1
D1: Shift 1
E1: Area 1
F1: Petugas 2
G1: Tanggal 2
H1: Shift 2
I1: Area 2
...

### 2. Setup Google Apps Script

1. Di Google Sheets, klik **Extensions** → **Apps Script**
2. Copy paste kode dari file `apps-script.js`
3. Klik **Deploy** → **New deployment**
4. Pilih type: **Web app**
5. Konfigurasi:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Klik **Deploy** dan copy URL yang diberikan
7. URL format: `https://script.google.com/macros/s/AKfycby.../exec`

### 3. Setup GitHub Repository

1. Fork atau clone repository ini
2. Edit file `config.js`
3. Ganti `API_URL` dengan URL Apps Script Anda:
```javascript
API_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
```

### 4. Deploy ke Cloudflare Pages

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pilih **Workers & Pages** → **Create application** → **Pages**
3. Connect ke repository GitHub Anda
4. Klik **Begin setup** → **Save and Deploy**
5. Website Anda akan live dalam 1-2 menit!

## 📁 Struktur Project

```
form-tukar-piket/
├── index.html          # Halaman utama
├── style.css           # Styling
├── script.js           # Logic aplikasi
├── config.js           # Konfigurasi (EDIT URL DISINI!)
├── apps-script.js      # Kode untuk Google Apps Script
├── README.md           # Dokumentasi ini
└── .gitignore          # Files yang diabaikan Git
```

## 🎨 Kustomisasi

### Mengubah Nama Petugas
Edit Google Sheets tab "Daftar_Petugas", nama akan otomatis ter-update di website.

### Mengubah Shift/Area
Edit file `index.html` bagian `<option>` untuk shift dan area piket.

### Mengubah Warna Tema
Edit file `style.css` bagian `:root` untuk mengubah color scheme:
```css
:root {
    --primary-color: #667eea;  /* Warna utama */
    --primary-dark: #764ba2;   /* Warna gelap */
}
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Data petugas tidak muncul
- Pastikan Google Sheets sudah benar nama sheet-nya
- Cek URL Apps Script sudah benar di `config.js`
- Buka Console browser (F12) untuk lihat error

### Data tidak masuk ke Sheets
- Pastikan Apps Script deployment "Who has access" = Anyone
- Cek execution logs di Apps Script untuk debug
- Pastikan nama sheet "Data_Pengajuan" sudah benar

### Website tidak update setelah edit
- Clear browser cache (Ctrl+Shift+R atau Cmd+Shift+R)
- Tunggu 2-3 menit untuk Cloudflare deployment

## 🔐 Keamanan

- Data disimpan di Google Sheets Anda sendiri
- Tidak ada database eksternal
- Apps Script hanya bisa diakses via HTTPS

## 📈 Roadmap

- [ ] Fitur approval/reject pengajuan
- [ ] Dashboard admin
- [ ] Notifikasi email otomatis
- [ ] Export data ke PDF
- [ ] Integrasi dengan Google Calendar

## 📄 License

MIT License - Silakan digunakan dan dimodifikasi sesuai kebutuhan

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk memudahkan proses tukar piket

## 📞 Support

Jika ada pertanyaan atau issue, silakan buat issue di GitHub repository ini.

---

**Happy Coding! 🚀**
