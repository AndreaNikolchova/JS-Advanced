function editElement(element, replace, replaceWith) {
    let text = element.textContent;
    let match = new RegExp(replace,'g');
    let edited = text.replace(match,replaceWith);
    element.textContent = edited;

}