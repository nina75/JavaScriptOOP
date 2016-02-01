/* You are given an HTML file index.html. Write a function that traverses all child elements of an element by a given CSS selector and prints all found elements in the format:
   <Element name>: id="<id>", class="<class>"
   Print each element on a new line. Indent child elements. */

function traverse(selector) {
    var element = document.querySelector(selector);
    function printChildren(el, symbol) {
        var ids, classes, index, child;
        symbol = symbol || ' ';
        var children = el.childNodes;
        for(index in children) {
            classes = '';
            ids = '';
            child = children[index];
            if(child.nodeType == 1) {
                if(child.id) {
                    ids += ' id="' + child.id + '"';
                }
                if(child.classList.length) {
                    classes += ' class="' + child.className + '" ';
                }
                console.log(symbol + child.nodeName.toLowerCase() + ':' + ids + classes);
            }
            printChildren(child, symbol + '    ');
        }
    }
    printChildren(element);
}

var selector = ".birds";
traverse(selector);

