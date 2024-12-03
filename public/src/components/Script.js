function showLoginPage() {
    // Sembunyikan halaman Opening
    document.getElementById("opening").classList.add("hidden");

    // Tampilkan halaman Masuk
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("login").classList.add("visible");
}

function createAccount() {
    alert("Navigasi ke halaman pembuatan akun.");
    // Di sini tambahkan logika untuk membuka halaman pembuatan akun.
}

function login() {
    alert("Navigasi ke halaman masuk.");
    // Di sini tambahkan logika untuk membuka halaman login atau proses autentikasi.
}