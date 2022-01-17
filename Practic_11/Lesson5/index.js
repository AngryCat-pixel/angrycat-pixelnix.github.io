for (let li of document.querySelectorAll("li")) {
  let body = "";
  for (let text of li.childNodes) {
    if (text.nodeName === "#text") {
      body += text.nodeValue.trim();
    }
  }
  let childCount = li.querySelectorAll("li").length;
  console.log("Ли:", li);
  console.log("Текст в ли:", body);
  console.log("Число потомков ли:", childCount);
}
