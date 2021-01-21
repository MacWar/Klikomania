var userdata;
window.onload = function() {

    //if(window.location.pathname==localStorage.leavingPageDataTMP.leavingPageData.pathname) localStorage.leavingPageDataTMP=null;

    if(localStorage.leavingPageDataTMP!=null){
        download("leavingStats.json",localStorage.leavingPageDataTMP);
        localStorage.leavingPageDataTMP=null;
    }

    var hrefElements = document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="/"]');
    
    console.log(hrefElements);


    window.addEventListener('beforeunload', function (e) {
        leavingPageData = window.location;
        leavingPageDataJSON = {
            leavingPageData : leavingPageData
        }
        localStorage.leavingPageDataTMP = window.location;
        // e.returnValue = 'dgf';
      });
      

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
            .then((response) => response.json()) 
            .then((json) => console.log(json));

    })

})
function lastRemember(){
    var pageLeavingData = window;

    pageLeavingDataJSON = {
        windowData : pageLeavingData
    }

    download("stats.json",JSON.stringify(pageLeavingDataJSON));
}

function download(filename, text) {
    let temp = document.createElement('a');
    temp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    temp.setAttribute('download', filename);
    temp.style.display = 'none';
    document.body.appendChild(temp);
    temp.click();
    document.body.removeChild(temp);
  }


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

/*var allData = [];



document.querySelector("body").addEventListener("click", (event) => {
    /*const isButton = event.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    }

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

    allData.push({
        NodeName: "coś",
        ClassName: "coś",
        Id: "coś",
        Date: "coś",
      });    

    console.log("The name of clicked object is:" + btn_name);
    console.log("The class of clicked object is:" + btn_class);
    console.log("The id of clicked object is:" + btn_id);
    console.log("The name of clicked object parent is:" + btn_parent);
    console.log("The time of clicked object is: " + time);

})*/

var allData = [];
document.querySelector("body").addEventListener("click", (event) => {
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

    allData.push({
        NodeName: btn_name,
        ClassName: btn_class,
        Id: btn_id,
        Parent: btn_parent,
        Date: time,
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
    console.log("The time of clicked object is: " + time);
})
