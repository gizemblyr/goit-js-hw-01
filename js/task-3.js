function getElementWidth(content, padding, border) {
  const contentValue = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);
  const totalWidth = contentValue + 2 * paddingValue + 2 * borderValue;
  console.log(totalWidth);
}
getElementWidth("50px", "8px", "4px");       // 74
getElementWidth("60px", "12px", "8.5px");    // 101
getElementWidth("200px", "0px", "0px");      // 200