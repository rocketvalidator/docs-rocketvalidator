// Makes code blocks accessible via keyboard,
// so they can be scrolled without a mouse.
//
// More info:
// https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable
// https://webaim.org/techniques/keyboard/tabindex
// https://github.com/squidfunk/mkdocs-material/issues/1514

function makeScrollableBlocksFocusable() {
  var codeblocks = document.querySelectorAll('pre code');
  for (var i=0; i < codeblocks.length; i++) {
    if (isOverflown(codeblocks[i])) {
      codeblocks[i].setAttribute("tabindex", "0");
    } else {
      codeblocks[i].removeAttribute("tabindex");
    }
  }
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

makeScrollableBlocksFocusable();
window.addEventListener("resize", makeScrollableBlocksFocusable);
