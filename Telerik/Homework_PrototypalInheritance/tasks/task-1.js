/* Task Description */
/*
 * Create an object domElement, that has the following properties and methods:
 * use prototypal inheritance, without function constructors
 * method init() that gets the domElement type
 * i.e. `Object.create(domElement).init('div')`
 * property type that is the type of the domElement
 * a valid type is any non-empty string that contains only Latin letters and digits
 * property innerHTML of type string
 * gets the domElement, parsed as valid HTML
 * <type attr1="value1" attr2="value2" ...> .. content / children's.innerHTML .. </type>
 * property content of type string
 * sets the content of the element
 * works only if there are no children
 * property attributes
 * each attribute has name and value
 * a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes (-)
 * property children
 * each child is a domElement or a string
 * property parent
 * parent is a domElement
 * method appendChild(domElement / string)
 * appends to the end of children list
 * method addAttribute(name, value)
 * throw Error if type is not valid
 * method removeAttribute(attribute)
 * throw Error if attribute does not exist in the domElement
 */


/* Example
 var meta = Object.create(domElement)
 .init('meta')
 .addAttribute('charset', 'utf-8');
 var head = Object.create(domElement)
 .init('head')
 .appendChild(meta)
 var div = Object.create(domElement)
 .init('div')
 .addAttribute('style', 'font-size: 42px');
 div.content = 'Hello, world!';
 var body = Object.create(domElement)
 .init('body')
 .appendChild(div)
 .addAttribute('id', 'cuki')
 .addAttribute('bgcolor', '#012345');
 var root = Object.create(domElement)
 .init('html')
 .appendChild(head)
 .appendChild(body);
 console.log(root.innerHTML);
 Outputs:
 <html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="cuki"><div style="font-size: 42px">Hello, world!</div></body></html>
 */


function solve() {
    var domElement = (function () {
        var domElement = {
            init: function(type) {
                this._attributes = {};
                this._children = [];
                this.type = type;
                return this;
            },
            appendChild: function(child) {
                this._children.push(child);
                child.parent = this;
                return this;
            },
            addAttribute: function(name, value) {
                if(!/^[A-z0-9-]+$/.test(name)) {
                    throw new Error('Invalid attribute name');
                }
                this._attributes[name] = value;
                return this;
            },
            removeAttribute: function(attribute) {
                if(!this._attributes[attribute]) {
                    throw new Error('No such attribute');
                }
                while(this._attributes[attribute]) {
                    delete this._attributes[attribute];
                }
                return this;
            },
            get children() {
                return this._children.slice();
            },
            get innerHTML(){
                var output = '';
                output += '<' + this._type;
                var keys = Object.keys(this._attributes),
                    attributes = this._attributes;
                if(keys.length > 0) {
                    keys.sort().forEach(function(key) {
                        //console.log(this === global);
                        output += ' ' + key + '="' + attributes[key] + '"';
                    });
                }
                output += '>';
                this._children.forEach(function(child) {
                    output += child.innerHTML || child;
                });
                output += '</' + this._type + '>';
                return output;
            },
            set type(value) {
                if(!(/^[A-z0-9]+$/.test(value)) || !isNaN(value)) {
                    throw new Error('Invalid type');
                }
                this._type = value;
            },
            set content(value) {
                if(this._children.length == 0) {
                    this._children.push(value);
                }
            }
        };
        return domElement;
    } ());

    //var meta = Object.create(domElement)
    //    .init('meta')
    //    .addAttribute('charset', 'utf-8');
    //
    //var head = Object.create(domElement)
    //    .init('head')
    //    .appendChild(meta);
    //
    //var div = Object.create(domElement)
    //    .init('div')
    //    .addAttribute('style', 'font-size: 42px');
    //
    //div.content = 'Hello, world!';
    //
    //var body = Object.create(domElement)
    //    .init('body')
    //    .appendChild(div)
    //    .addAttribute('id', 'myid')
    //    .addAttribute('bgcolor', '#012345');
    //
    //var root = Object.create(domElement)
    //    .init('html')
    //    .appendChild(head)
    //    .appendChild(body);
    //
    //console.log(root.innerHTML);
    return domElement;
}
solve();
module.exports = solve;