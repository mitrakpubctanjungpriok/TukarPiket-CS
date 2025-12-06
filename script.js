// ============================================
// MAIN APPLICATION SCRIPT
// ============================================

(function() {
    'use strict';

    // DOM Elements
    const elements = {
        form: document.getElementById('shiftForm'),
        submitBtn: document.getElementById('submitBtn'),
        petugas1Select: document.getElementById('petugas1'),
        petugas2Select: document.getElementById('petugas2'),
        successMessage: document.getElementById('successMessage'),
        errorMessage: document.getElementById('errorMessage'),
        loadingMessage: document.getElementById('loadingMessage')
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    function showMessage(element, duration = CONFIG.MESSAGE_DURATION) {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }

    function hideMessage(element) {
        element.style.display = 'none';
    }

    function hideAllMessages() {
        hideMessage(elements.successMessage);
        hideMessage(elements.errorMessage);
        hideMessage(elements.loadingMessage);
    }

    function setButtonLoading(isLoading) {
        if (isLoading) {
            elements.submitBtn.disabled = true;
            elements.submitBtn.innerHTML = '<span class="spinner"></span> Mengirim...';
        } else {
            elements.submitBtn.disabled = false;
            elements.submitBtn.innerHTML = '📤 Kirim Pengajuan';
        }
    }

    function populateSelect(selectElement, names) {
        selectElement.innerHTML = '<option value="">Pilih</option>';
        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            selectElement.appendChild(option);
        });
        selectElement.disabled = false;
    }

    function getCurrentTimestamp() {
        return new Date().toLocaleString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    // ============================================
    // API FUNCTIONS
    // ============================================

    async function loadPetugasNames() {
        debugLog('Loading petugas names...');
        showMessage(elements.loadingMessage, 0);

        try {
            const response = await fetch(`${CONFIG.API_URL}?action=getNames`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            debugLog('Received names:', data);

            if (data.names && data.names.length > 0) {
                populateSelect(elements.petugas1Select, data.names);
                populateSelect(elements.petugas2Select, data.names);
                hideMessage(elements.loadingMessage);
                debugLog('Names loaded successfully');
            } else {
                throw new Error('Tidak ada data petugas');
            }

        } catch (error) {
            console.error('Error loading names:', error);
            elements.petugas1Select.innerHTML = '<option value="">Error memuat data</option>';
            elements.petugas2Select.innerHTML = '<option value="">Error memuat data</option>';
            
            hideMessage(elements.loadingMessage);
            elements.errorMessage.textContent = '✗ Gagal memuat data petugas. Silakan refresh halaman.';
            showMessage(elements.errorMessage, 5000);
        }
    }

    async function submitFormData(formData) {
        debugLog('Submitting form data:', formData);

        try {
            const response = await fetch(CONFIG.API_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Karena mode no-cors, kita anggap berhasil jika tidak ada error
            debugLog('Form submitted successfully');
            return { success: true };

        } catch (error) {
            console.error('Error submitting form:', error);
            throw error;
        }
    }

    // ============================================
    // FORM VALIDATION
    // ============================================

    function validateForm(formData) {
        // Cek apakah petugas 1 dan petugas 2 berbeda
        if (formData.petugas1 === formData.petugas2) {
            alert('⚠️ Petugas 1 dan Petugas 2 tidak boleh sama!');
            return false;
        }

        // Cek apakah tanggal valid
        const date1 = new Date(formData.tanggal1);
        const date2 = new Date(formData.tanggal2);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date1 < today || date2 < today) {
            alert('⚠️ Tanggal tidak boleh sebelum hari ini!');
            return false;
        }

        return true;
    }

    // ============================================
    // FORM SUBMIT HANDLER
    // ============================================

    async function handleFormSubmit(e) {
        e.preventDefault();
        hideAllMessages();

        const formDataObj = new FormData(elements.form);
        const data = {
            timestamp: getCurrentTimestamp(),
            petugas1: formDataObj.get('petugas1'),
            tanggal1: formDataObj.get('tanggal1'),
            shift1: formDataObj.get('shift1'),
            area1: formDataObj.get('area1'),
            petugas2: formDataObj.get('petugas2'),
            tanggal2: formDataObj.get('tanggal2'),
            shift2: formDataObj.get('shift2'),
            area2: formDataObj.get('area2'),
        };

        // Validate form
        if (!validateForm(data)) {
            return;
        }

        setButtonLoading(true);

        try {
            await submitFormData(data);
            
            showMessage(elements.successMessage);
            elements.form.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            elements.errorMessage.textContent = '✗ Terjadi kesalahan. Silakan coba lagi.';
            showMessage(elements.errorMessage);
        } finally {
            setButtonLoading(false);
        }
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================

    function initializeEventListeners() {
        elements.form.addEventListener('submit', handleFormSubmit);

        // Set min date untuk input tanggal
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('tanggal1').setAttribute('min', today);
        document.getElementById('tanggal2').setAttribute('min', today);
    }

    // ============================================
    // INITIALIZATION
    // ============================================

    function init() {
        debugLog('Initializing application...');
        initializeEventListeners();
        loadPetugasNames();
    }

    // Start application when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
