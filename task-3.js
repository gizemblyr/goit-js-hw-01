//önce verilen stringin sadece rakam olanlarını diziye atadım.
//bunu yaparken de charCodeAt kullandım cunku cunku 0 9 arası rakamların stringde karısıgılı var
// px i ayırt edebilmek için bu karısıklıklarına denk geliyorsa al denk gelmiyorsa diziye hiç atama yaptım.
function turnArray(sayi) {
  let digit = [];
  for (let i = 0; i < sayi.length; i++) {
    const code = sayi[i].charCodeAt(0);
    if (code >= 48 && code <= 57) {
      digit.push(code - "0".charCodeAt(0));
    }
  }
  return digit;
}

//dizi olarak tuttuğum sayıları da birleştirmek için asagıdaki fonksiyonu (döngü içerip sayıyı olusturacak) yazdım
function turnNumber(digitArray) {
  let total = 0;
  for (let i = 0; i < digitArray.length; i++) {
    total = total * 10 + digitArray[i];
  }
  return total;
}

//en son da getElementWitdh fonksiyonunda yukarıda yazmıs olduğum fonk. cagırarak hesaplama yaptırdım.
function getElementWidth(content, padding, border) {
  const contentValue1 = turnNumber(turnArray(content));
  const contentValue2 = turnNumber(turnArray(padding));
  const contentValue3 = turnNumber(turnArray(border));
  const totalWidth = contentValue1 + contentValue2 * 2 + contentValue3 * 2;
  return console.log(totalWidth);
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
