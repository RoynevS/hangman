function setElementAttributes(element, attributes) {
  for (const [attribute, value] of Object.entries(attributes)) {
    element.setAttribute(attribute, value);
  }
}

function appendChildrenToElement(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

export { setElementAttributes, appendChildrenToElement };
