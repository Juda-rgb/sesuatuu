const message = `Makasih udh mau luangin waktu buat buka ini yaa.
Aku cuma pengen cya tau, Aku pasti bakal tetap masih mikirin cya kedepannya.

Kita kemaren udh nyoba sebisa mungkin, Tapi universe ga setuju kalau aku dan cya bakal jadi "kita"

Kalo kita jumpa di titik yg beda di dunia ini, kira kira endingnya sama gak ya?

Yahh ga ada yg tau ya, tapi aku harap cya baik baik aja meski tanpaku lagii.
Anyways, semangatt nanti buka pengumumannya yaa`;

function showLetter() {

  // play music
  const music = document.getElementById("bgMusic");

  if (music) {
    music.play();
  }

  // hide intro & button
  document.getElementById("introText").style.opacity = "0";
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {

    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");

    letterBox.style.display = "block";

    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();

  }, 600);
}