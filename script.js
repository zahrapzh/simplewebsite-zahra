// Dijalankan setelah seluruh elemen HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Ambil elemen tombol berdasarkan ID
    const tombol = document.getElementById('tombolUbah');
    
    // 2. Ambil elemen output pesan
    const outputDiv = document.getElementById('pesanOutput');
    
    // 3. Tambahkan "event listener" (pendengar kejadian) ke tombol
    tombol.addEventListener('click', function() {
        
        // Logika yang dijalankan saat tombol diklik
        
        // A. Ubah teks di elemen output
        outputDiv.textContent = 'HEI! Anda baru saja mengklik tombolnya pada ' + new Date().toLocaleTimeString();
        
        // B. Ubah warna latar belakang tombol sebentar
        tombol.style.backgroundColor = '#ffc107'; // Kuning
        
        // Kembalikan warna setelah 500 milidetik
        setTimeout(function() {
            tombol.style.backgroundColor = '#28a745'; // Kembali ke hijau
        }, 500);
        
        // C. Tampilkan pesan di konsol browser (untuk debugging)
        console.log('Tombol telah diklik!');
    });
    
    // Pesan awal di konsol saat JavaScript dimuat
    console.log('Script JavaScript berhasil dimuat dan siap beraksi.');
});