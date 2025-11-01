const bubbleMolang = document.getElementById("bubbleMolang");
const bubbleDucky = document.getElementById("bubbleDucky");

// Munculkan awan Molang
setTimeout(() => {
    bubbleMolang.style.opacity = 1;

    // Hilangkan setelah 4 detik
    setTimeout(() => {
        bubbleMolang.style.opacity = 0;

        // Setelah itu, munculkan awan Ducky
        setTimeout(() => {
            bubbleDucky.style.opacity = 1;

            // Hilangkan setelah 4 detik
            setTimeout(() => {
                bubbleDucky.style.opacity = 0;

                setTimeout(() => {
                    bubbleAll.style.opacity = 1;

                    setTimeout(() => {
                        bubbleAll.style.opacity = 0;

                        setTimeout(() => {
                            bubbleAll2.style.opacity = 1;

                            setTimeout(() => {
                                bubbleAll2.style.opacity = 0;

                                setTimeout(() => {
                                    document.getElementById('nama').disabled = false;
                                    document.getElementById('submit').disabled = false;
                                    formNama.style.opacity = 1;
                                }, 1000)
                            }, 4000)
                        }, 1000)
                    }, 4000)
                }, 1000)
            }, 4000);
        }, 1000);
    }, 4000);
}, 1000);

const form = document.getElementById('formNama');

// Buat variabel untuk menyimpan hasil input
let namaInput = "";

// Saat form dikirim (submit)
form.addEventListener('submit', function(event) {
    event.preventDefault(); // mencegah reload halaman
    const music = document.getElementById('music1');
    music.currentTime = 0;
    music.muted = false;
    music.play();
    // Ambil nilai dari input
    namaInput = document.getElementById('nama').value;
    localStorage.setItem("nama", namaInput);

    document.getElementById("output").textContent = namaInput;

    setTimeout(() => {
        formNama.style.opacity = 0;
        bubbleAll3.style.opacity = 1;
        document.getElementById('nama').disabled = true;
        document.getElementById('submit').disabled = true;

        setTimeout(() => {
            bubbleAll3.style.opacity = 0;
            img1.style.display = "none";
            document.getElementById('btnMau').disabled = false;
            document.getElementById('btnGak').disabled = false;
            img2.style.display = "block";
            bubbleAll4.style.opacity = 1;
            YesNoBtn.style.display = "block";
        }, 4000)
    }, 1000)
});

const btn = document.getElementById("btnMau");
const btn1 = document.getElementById("btnGak");

btn.addEventListener("click", function(event){
    event.preventDefault();

    setTimeout(() => {
        img6.style.display = 'none';
        document.getElementById('bubbleAllDeny2').style.opacity = 0;
        document.getElementById('btnMau').disabled = true;
        document.getElementById('btnGak').disabled = true;
        YesNoBtn.style.display = "none";
        img2.style.display = "none";
        bubbleAll4.style.opacity = 0;
        img3.style.display = "block";
        bubbleAll5.style.opacity = 1;

        setTimeout(() => {
            img3.style.display = "none";
            bubbleAll5.style.opacity = 0;
            img4.style.display = "block";

            setTimeout(() => {
                window.location.href = "birthday-cake.html";
            }, 8000)
        }, 4000)
    }, 1000)
});

btn1.addEventListener("click", function(event){
    event.preventDefault();

    setTimeout(() => {
        document.getElementById('bubbleAll4').style.opacity = 0;
        document.getElementById('bubbleAllDeny1').style.opacity = 1;
        img2.style.display = 'none';
        img5.style.display = 'block';

        btn1.addEventListener('click', function(event){
            event.preventDefault();
            setTimeout(() =>{
                document.getElementById('bubbleAllDeny1').style.opacity = 0;
                document.getElementById('bubbleAllDeny2').style.opacity = 1;
                img5.style.display = 'none';
                img6.style.display = 'block';
            }, 1000)
        });
    }, 1000)
});