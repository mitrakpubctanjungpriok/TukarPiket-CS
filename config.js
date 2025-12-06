// ============================================
// KONFIGURASI APLIKASI
// ============================================

// PENTING: GANTI URL INI dengan URL Google Apps Script Anda
const CONFIG = {
    // URL dari Google Apps Script (setelah deploy)
    // Contoh: 'https://script.google.com/macros/s/AKfycby.../exec'
    API_URL: 'PASTE_URL_GOOGLE_APPS_SCRIPT_DISINI',
    
    // Timeout untuk request (dalam milidetik)
    REQUEST_TIMEOUT: 10000,
    
    // Durasi tampil pesan sukses/error (dalam milidetik)
    MESSAGE_DURATION: 4000,
    
    // Nama aplikasi
    APP_NAME: 'Form Tukar Piket',
    
    // Versi aplikasi
    VERSION: '1.0.0',
    
    // Debug mode (set true untuk development, false untuk production)
    DEBUG: false
};

// Fungsi untuk log debug
function debugLog(message, data) {
    if (CONFIG.DEBUG) {
        console.log(`[${CONFIG.APP_NAME}] ${message}`, data || '');
    }
}

// Export config (untuk compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
