//with DOM javascript gets the information it needs to create a dynamic html
//it is a neutral interface used to dynamically access the web and uodate content.
//there are 3 types that is XML, HTML and  CORE DOM.
//html dom is a standard on how to get add change and delete html elemnts.
//aproperty is a value that you can get or set and a method is an action you can do.
<html>
    <body>
        <p id = "demo"></p>
       
       < script>
            document.getElementById('demo').innerHTML = "HELLO WORLD!" //getElementById is a methos and innerHTML is a property.
       </script>
    </body>
</html>
//the most common way to get acces an element is by using its id.
//methods we could use
    //  <p>document.getElementById(id)</p>
    //  <p>document.getElementByClassName(name)</p>
    //  <p>document.getElementByTagName(name)</p>
// changing html elements
    // element.innerHTML = new html content
    //element.attribute = new value
    //element .style.property = new style
