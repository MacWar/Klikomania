
window.onload = function() {

    // var hrefElements = document.querySelectorAll('a:not([href=""])');

    // console.log(hrefElements);



    document.querySelectorAll('a:not([href=""])').forEach(item => {
        item.addEventListener('click', event => {
        
            console.log(item);
        })
    })
};


hl.addEventListener('click',function(e){
/*hl.addEventListener('click',function(e){
    nodeName = e.target.nodeName;
    e.target.id ? id = e.target.id : id = null;
    classes = e.target.className.split(' ');
    console.log(window.location.hostname+nodeName + id + classes);
    

});


    // var href=e.target.getAttribute("href");

    // console.log(href);
    // if(href!= null){
    //     href = href.split(".");
    //     console.log(href);
    // }
});*/


var cookie = navigator.cookieEnabled;
var platform = navigator.platform;
var language = navigator.language;
var width = screen.width;
var height = screen.height;
    
console.log("Cookie is enabled: " + cookie);
console.log("User platform is: " + platform);
console.log("User language is: " + language);
console.log("User screen is " + width + " width");
console.log("User screen is " + height + " height");

document.querySelector("body").addEventListener("click", (event) => {
    /*const isButton = event.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    }*/

    var btn_name = event.target.nodeName;
    var btn_class = event.target.className;
    var btn_id = event.target.id;
    var btn_parent = event.target.parentNode.nodeName;
    var date = new Date();
    var time = date.toLocaleTimeString();

    if (btn_class == "") {
        btn_class = null;
    } 
    else if (btn_id == "") {
        btn_id = null;
    }

    

    console.log("The name of clicked object is:" + btn_name);
    console.log("The class of clicked object is:" + btn_class);
    console.log("The id of clicked object is:" + btn_id);
    console.log("The name of clicked object parent is:" + btn_parent);
    console.log("The time of clicked object is: " + time);

})
