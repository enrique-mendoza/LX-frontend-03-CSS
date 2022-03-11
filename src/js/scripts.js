// Credits: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol

const coll = document.querySelectorAll('.collapsible');

for (let i = 0; i < coll.length; i++) {
  let currentElement = coll[i];

  currentElement.addEventListener('click', () => {
    currentElement.classList.toggle('active');
    let content = currentElement.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.marginTop = 0;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.marginTop = 25 + 'px';
    }
  });
}
