import React, { useState, useEffect } from "react";

function EffectSample1() {
  const [sayac, setSayac] = useState(0);
  const [sayac2, setSayac2] = useState(0);

  //   console.log("Effect sample-1 component rendered!!!!");    //Bu kodu arkaplanda sürekli rendered işlemi uygulandıpı için yaptık. Bir component yüklendiğiinde sadece bir kere çalışmasını istediğimiz bir işlem var ise bunun için effect kullanırız.

  useEffect(() => {
    // console.log("Bu kod satırı sadece component yüklediğinde çalışır"); //Yaşam döngüsü(çok fazla tekrar eden işlemi yani çok fazla render olan kodu use effect ile sadece component yüklelndiğinde çalıştırdık.)
  }, []);

  useEffect(() => {
    console.log("Sayac 2 çalıştı!!");
  }, [sayac2]); //köşeli parantez içinde yazdığımız değişken değiştiği zaman çalışır.
  return (
    <>
      <h1>{sayac}</h1>
      <button onClick={() => setSayac(sayac + 1)}>Arttır</button>

      <h1>{sayac2}</h1>
      <button onClick={() => setSayac2(sayac2 + 1)}>Arttır</button>
    </>
  );
}

export default EffectSample1;
