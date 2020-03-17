// Makes code blocks accessible via keyboard,
// so they can be scrolled without a mouse.
//
// More info:
// https://dequeuniversity.com/rules/axe/3.5/scrollable-region-focusable
// https://webaim.org/techniques/keyboard/tabindex

var codeblocks = document.querySelectorAll('code');
for (var i=0; i < codeblocks.length; i++) {
    codeblocks[i].setAttribute("tabindex", "0");
}
