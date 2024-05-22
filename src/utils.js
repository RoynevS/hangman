function setElementAttributes(element, attributes) {
  for (const [attribute, value] of Object.entries(attributes)) {
    element.setAttribute(attribute, value);
  }
}

function appendChildrenToElement(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

function removeAllChildren(element) {
  const parent = document.querySelector(element);
  parent.replaceChildren();
}

export { setElementAttributes, appendChildrenToElement, removeAllChildren };
