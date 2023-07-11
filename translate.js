function loadJsCode(code) {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    //for Chrome Firefox Opera Safari
                    script.appendChild(document.createTextNode(code));
                    //for IE
                    //script.text = code;
                    document.body。appendChild(script);
}
