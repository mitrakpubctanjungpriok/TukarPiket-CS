# 📋 Form Tukar Piket

Sistem pengajuan tukar jadwal piket berbasis web yang terintegrasi dengan Google Sheets sebagai backend.

![Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🔗 Link & Konfigurasi

| Item | Link |
|------|------|
| **Google Apps Script URL** | `https://script.google.com/macros/s/AKfycbxSqaANveC567cMCuXUdjffLm_p1Q1ilmsXNTXayJZfHg85sS2EkY-YS3R8OHyC52tu/exec` |
| **Spreadsheet ID** | `1KcZQJuzNZWbiNPIDTSfSoTEAZhWtgmVixyqDMhFrjoU` |
| **Spreadsheet Link** | [Buka Google Sheets](https://docs.google.com/spreadsheets/d/1KcZQJuzNZWbiNPIDTSfSoTEAZhWtgmVixyqDMhFrjoU/edit) |
| **Email Notifikasi** | mitrakpubctanjungpriok@gmail.com |

## ✨ Fitur

### Sistem Tukar Piket
- ✅ Form pengajuan tukar piket yang intuitif
- ✅ Integrasi dengan Google Sheets sebagai database
- ✅ Notifikasi email otomatis setiap ada pengajuan
- ✅ Riwayat pengajuan dengan auto-refresh setiap 10 detik
- ✅ Jam Jakarta (WIB) real-time
- ✅ Tampilan responsif untuk mobile dan desktop
- ✅ Pop-up status koneksi database

### Sistem Laporan Pelanggaran
- ✅ Form laporan pelanggaran dengan upload foto
- ✅ Notifikasi email dengan format HTML menarik
- ✅ Penyimpanan foto dalam format Base64

## 📁 Struktur File

```
├── index.html    # Website Form Tukar Piket
├── code.gs       # Google Apps Script (backend gabungan)
└── README.md     # Dokumentasi
```

## 📊 Struktur Google Sheets

### Sheet "Daftar_Petugas"
| Kolom A |
|---------|
| Nama Petugas (header) |
| Ahmad Rizki |
| Budi Santoso |
| ... |

### Sheet "Data_Pengajuan" (Tukar Piket)
| Timestamp | Petugas 1 | Tanggal 1 | Shift 1 | Area 1 | Petugas 2 | Tanggal 2 | Shift 2 | Area 2 |
|-----------|-----------|-----------|---------|--------|-----------|-----------|---------|--------|
| 01/01/2024 08:00:00 | Ahmad | 2024-01-05 | Pagi (07:00 - 17:00) | Halaman | Budi | 2024-01-06 | Malam (19:00 - 07:00) | PTSP |

### Sheet "Laporan_Pelanggaran"
| Timestamp | Nama Pengadu | Nama Pelanggar | Area/Lantai | Laporan/Keluhan | Foto |
|-----------|--------------|----------------|-------------|-----------------|------|
| 01/01/2024 08:00:00 | Ahmad | Budi | Lantai 2 | Tidak hadir saat piket | (base64) |

---

## 🚀 Panduan Setup

### Langkah 1: Setup Google Sheets

1. Buka [Google Sheets](https://sheets.google.com) dan buat spreadsheet baru
2. Beri nama spreadsheet (contoh: **"Database Sistem Piket"**)

### Langkah 2: Setup Google Apps Script

1. Di spreadsheet, klik menu **Extensions** → **Apps Script**
2. Hapus semua kode default
3. Copy seluruh isi file `code.gs` dan paste ke editor
4. Klik **Save** (💾) dan beri nama project (contoh: "Sistem Piket API")

### Langkah 3: Jalankan Setup Awal

1. Di Apps Script, pilih fungsi **`setupAllSheets`** dari dropdown
2. Klik tombol **Run** (▶️)
3. Jika diminta izin, klik **Review Permissions** → Pilih akun Google → **Allow**
4. Semua sheet akan otomatis dibuat:
   - `Daftar_Petugas`
   - `Data_Pengajuan`
   - `Laporan_Pelanggaran`

### Langkah 4: Isi Data Petugas

1. Buka sheet **"Daftar_Petugas"**
2. Isi nama-nama petugas di kolom A mulai dari baris 2
3. Contoh:
   ```
   A1: Nama Petugas (header)
   A2: Ahmad Rizki
   A3: Budi Santoso
   A4: Citra Dewi
   ...
   ```

### Langkah 5: Deploy Web App

1. Di Apps Script, klik **Deploy** → **New deployment**
2. Klik ikon ⚙️ (gear) → Pilih **Web app**
3. Isi konfigurasi:
   - **Description**: Sistem Piket API v1
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Klik **Deploy**
5. **PENTING**: Copy URL Web App yang muncul (format: `https://script.google.com/macros/s/xxxxx/exec`)

### Langkah 6: Konfigurasi Website

1. Buka website (index.html)
2. Klik **"⚙️ Setup Google Sheets"** di bagian footer
3. Paste URL Web App yang sudah dicopy
4. Klik **Simpan**
5. Pop-up akan menunjukkan **"Terhubung database"** jika berhasil

---

## ☁️ Deploy ke GitHub + Cloudflare Pages

### Setup GitHub

1. Buka [github.com](https://github.com) dan login (atau daftar jika belum punya akun)

2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**

3. Isi detail repository:
   - **Repository name**: `form-tukar-piket`
   - **Description**: Sistem pengajuan tukar piket
   - **Visibility**: Public
   - ✅ Centang **"Add a README file"**

4. Klik **"Create repository"**

5. Upload file:
   - Klik **"Add file"** → **"Upload files"**
   - Drag & drop file `index.html`
   - Klik **"Commit changes"**

### Deploy ke Cloudflare Pages

1. Buka [dash.cloudflare.com](https://dash.cloudflare.com) dan login

2. Di sidebar kiri, klik **"Workers & Pages"**

3. Klik **"Create application"** → Tab **"Pages"** → **"Connect to Git"**

4. Klik **"Connect GitHub"** dan authorize Cloudflare

5. Pilih repository **"form-tukar-piket"**

6. Klik **"Begin setup"**

7. Konfigurasi build:
   - **Project name**: `tukar-piket` (atau nama lain)
   - **Production branch**: `main`
   - **Build settings**: Kosongkan semua (tidak perlu build)

8. Klik **"Save and Deploy"**

9. Tunggu proses deploy selesai (1-2 menit)

10. Website Anda tersedia di: `https://tukar-piket.pages.dev`

### Update Website

Setiap kali Anda mengubah file di GitHub, Cloudflare akan otomatis deploy ulang.

---

## 📧 Konfigurasi Email

Notifikasi email otomatis dikirim ke: **mitrakpubctanjungpriok@gmail.com**

Untuk mengubah email penerima:
1. Buka Google Apps Script
2. Ubah nilai `EMAIL_PENERIMA` di baris awal:
   ```javascript
   const EMAIL_PENERIMA = 'email-baru@example.com';
   ```
3. Klik **Save**
4. Deploy ulang: **Deploy** → **Manage deployments** → **Edit** → **Deploy**

---

## 🔌 API Endpoints

### GET Requests

| Action | Deskripsi |
|--------|-----------|
| `?action=getNames` | Mengambil daftar nama petugas |
| `?action=getTukarPiket` | Mengambil riwayat tukar piket |
| `?action=getLaporan` | Mengambil laporan pelanggaran |

### POST Requests

**Tukar Piket:**
```json
{
  "petugas1": "Ahmad",
  "tanggal1": "2024-01-05",
  "shift1": "Pagi (07:00 - 17:00)",
  "area1": "Halaman",
  "petugas2": "Budi",
  "tanggal2": "2024-01-06",
  "shift2": "Malam (19:00 - 07:00)",
  "area2": "PTSP"
}
```

**Laporan Pelanggaran:**
```json
{
  "type": "laporan_pelanggaran",
  "timestamp": "2024-01-05T08:00:00.000Z",
  "namaPengadu": "Ahmad",
  "namaPelanggar": "Budi",
  "area": "Lantai 2",
  "laporan": "Detail pelanggaran...",
  "foto": "data:image/jpeg;base64,..."
}
```

---

## ❓ FAQ

### Apakah data tukar piket akan terhapus setiap tanggal 1?
Ya. Pada versi ini Anda **bisa mengaktifkan auto reset** sehingga data di sheet **"Data_Pengajuan"** akan **terhapus otomatis setiap tanggal 1**.

Catatan penting:
- Yang dihapus hanya **isi data (baris 2 dst)**, **header tetap ada**.
- Sheet lain seperti **"Daftar_Petugas"** dan **"Laporan_Pelanggaran"** tidak terpengaruh.

Cara mengaktifkan:
1. Buka **Apps Script** → menu **Project Settings**
2. Set **Time zone** ke **(GMT+7) Asia/Jakarta**
3. Jalankan fungsi: `setupMonthlyResetTrigger()` (cukup 1x)
4. Berikan izin jika diminta

Cara menonaktifkan:
- Jalankan fungsi: `deleteMonthlyResetTrigger()`

Jika Anda ingin datanya bukan dihapus tapi **diarsipkan dulu** ke sheet lain sebelum dihapus, saya bisa tambahkan fitur arsip otomatis.
---

## 🔧 Troubleshooting

### Pop-up "Tidak terhubung database"
- Pastikan URL Web App sudah benar
- Pastikan Apps Script sudah di-deploy dengan access "Anyone"
- Coba deploy ulang dengan versi baru

### Email tidak terkirim
- Pastikan akun Google yang menjalankan script memiliki akses ke Gmail
- Cek folder Spam di email penerima
- Cek quota harian pengiriman email (100 email/hari untuk akun gratis)

### Data petugas tidak muncul
- Pastikan sheet bernama persis **"Daftar_Petugas"** (dengan underscore)
- Pastikan nama petugas dimulai dari baris 2 (baris 1 untuk header)

### Riwayat tidak muncul
- Pastikan sheet bernama persis **"Data_Pengajuan"** (dengan underscore)
- Pastikan header di baris 1 sesuai format

---

## 📝 Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

---

## 👨‍💻 Kontribusi

Kontribusi sangat diterima! Silakan buat Pull Request atau Issue jika menemukan bug atau ingin menambahkan fitur.

---

**Dibuat dengan ❤️ untuk kemudahan koordinasi piket**
