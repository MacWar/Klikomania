var userdata;
window.onload = function() {

    var hrefElements = document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="/"]');
    
    console.log(hrefElements);

    fetch("https://api.astroip.co/?api_key=b500ad2b-d013-4c56-ab63-05262680f030")
            .then((response) => response.json()) //assuming file contains json
            .then((userdataTMP) => userdata = userdataTMP)
            .then((userdata) => console.log(userdata))   
};

document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="/"]').forEach(item => {
    item.addEventListener('click', event => {

        var url = chrome.runtime.getURL('stats.json');
        var clickedHrefItem = item;
        console.log(clickedHrefItem);
        var clickedHrefItem = item.outerHTML;

        var filesDataJSON = {
            userdata : userdata,
            location: window.location,
            hrefItem: clickedHrefItem,
            event: event

        };
        download("stats.json",JSON.stringify(filesDataJSON));

        fetch(url)
            .then((response) => response.json()) //assuming file contains json
            .then((json) => console.log(json));          
    })
})

function download(filename, text) {
    let temp = document.createElement('a');
    temp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    temp.setAttribute('download', filename);
    temp.style.display = 'none';
    document.body.appendChild(temp);
    temp.click();
    document.body.removeChild(temp);
  }
/*
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

var allData = [];
document.querySelector("body").addEventListener("click", (event) => {
    var btn_name = event.target.nodeName;
    var btn_class = event.target.className;
    var btn_id = event.target.id;
    var btn_parent = event.target.parentNode.nodeName;
    var btn_parent_id = event.target.parentNode.id;
    var btn_parent_class = event.target.parentNode.className;
    var date = new Date();
    var time = date.toLocaleTimeString();
    var page_link = window.location.href;
    var page_pathname = window.location.pathname;

    if (btn_class == "") {
        btn_class = null;
    } 
    if (btn_id == "") {
        btn_id = null;
    }
    if (btn_parent_id == "") {
        btn_parent_id = null;
    }
    if (btn_parent_class == "") {
        btn_parent_class = null;
    }

    allData.push({
        NodeName: btn_name,
        ClassName: btn_class,
        Id: btn_id,
        Parent: btn_parent,
        ParentId: btn_parent_id,
        ParentClass: btn_parent_class,
        Date: time,
        PageLink: page_link,
        PagePathname: page_pathname
    });
    
    strDane = JSON.stringify(allData);
    chrome.storage.local.set({dane: strDane}, () => {/*console.log(allData)*/});

    chrome.storage.local.get(['dane'], result => {
        console.log(result);
    });
    
    console.log("The name of clicked object is:" + btn_name);
    console.log("The class of clicked object is:" + btn_class);
    console.log("The id of clicked object is:" + btn_id);
    console.log("The name of clicked object parent is:" + btn_parent);
    console.log("The class of clicked parent object is:" + btn_parent_class);
    console.log("The id of clicked parent object is:" + btn_parent_id);
    console.log("The time of clicked object is: " + time);
    console.log("Page link is: " + page_link);
    console.log("Page pathname is: " + page_pathname);
})
