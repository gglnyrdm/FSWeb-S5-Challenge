
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const Header = (baslik, tarih, yazi) => {
    const div = document.createElement("div");
    div.className = "header";

    const dSpan = document.createElement("span");
    dSpan.className = "date";
    dSpan.textContent = tarih;
    div.append(dSpan);

    const h1 = document.createElement("h1");
    h1.textContent = baslik;
    div.append(h1);

    const tSpan = document.createElement("span");
    tSpan.className = "temp";
    tSpan.textContent = yazi;
    div.append(tSpan);

    return div;
  }

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
const baslik = "Workintech Challenge";
const tarih = "22.04.2023";
const yazi = "Deneme metni.";

const ornekHead = Header(baslik,tarih,yazi);

const sonuc = document.querySelector(secici);
sonuc.append(ornekHead);

}

export { Header, headerEkleyici }
