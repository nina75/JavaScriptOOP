/*Create an IIFE module for working with the DOM tree. The module should support the following operations:
 •	appendChild(element, child) – adds à DOM element to a parent element
 •	removeChild(element, child) – removes a child element from a parent element
 •	addHandler(element, eventType, eventHandler) – attaches an event to a given selector by given event type (string) and event hander
 •	retrieveElements(selector) – retrieves elements by a given CSS selector
 element and child can be selectors (strings) or DOM elements. If any selector is passed to the module, it should find (and manipulate) all elements the selector corresponds to.
 The module should reveal only its public methods (i.e. everything else should be encapsulated).
 */

var domModule = (function() {
    function appendChild1(element, child) {
        var elementName = typeof element == 'string' ? element : element.tagName,
            childName = typeof child == 'string' ? document.querySelector(child).tagName : child.tagName,
            allElements = document.querySelectorAll(elementName);
        for (var i = 0; i < allElements .length; i += 1) {
            allElements[i].appendChild(document.createElement(childName));
        }
    }

    function removeChild(element, child) {
        var parentElement = document.querySelector(element),
            childElement = document.querySelector(child);
        parentElement.removeChild(childElement);
    }

    function addHandler(element, eventType, eventHandler) {
        var elements = document.querySelectorAll(element);
        console.log(elements);
        for (var i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener(eventType, eventHandler);
        }
    }

    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    return {
        appendChild1: appendChild1,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
})();

var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
domModule.appendChild1('.birds-list', liElement);

// Removes the first li child from the bird list
domModule.removeChild("ul.birds-list","li:first-child");

// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });

// Retrieves all elements of class "bird"
var elements = domModule.retrieveElements(".bird");
console.log(elements);
