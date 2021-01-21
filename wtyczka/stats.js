// window.addEventListener('beforeunload', function (e) {
    //   strDane = JSON.parse(window.location.hostname);
    //   chrome.storage.local.set({dane: strDane}, () => {/*console.log(allData)*/});
    // });
    // if(true){
    //   chrome.storage.local.get(['dane'], result => {
    //     download("leavingStats.json",JSON.stringify(result));
    //   });
    // }

var userdata;

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
        console.log(localStorage.clickcount);
    } else {
      console.log("Sorry, your browser does not support web storage.");
    }
}
  
window.onload = function () {
  fetch("https://api.astroip.co/?api_key=b500ad2b-d013-4c56-ab63-05262680f030") // pobieranie za pomocą zewnętrznego API danych o użytkowniku wywołującym akcję
  .then((response) => response.json()) 
  .then((userdataTMP) => userdata = userdataTMP)
};

document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="/"]').forEach(item => {
    item.addEventListener('click', event => {   // nasłuchiwanie elementów otwierających pliki i pobierających je
        var pagelink = window.location.href;
        clickCounter();

        var clickedHrefItem = item;
        var clickedHrefItem = item.outerHTML;

        var filesDataJSON = {
            userdata : userdata,
            location: window.location,
            hrefItem: clickedHrefItem,  // zapisywanie akcji z hrefami w postaci jsonowego obiektu
            event: event,
            exitsNumber: localStorage.clickcount
        };

        download("hrefDatas.json", JSON.stringify(filesDataJSON));
        
        var dataa = null;
        chrome.storage.local.get(['dane'], result => {
            dataa = JSON.parse(result.dane);
            download("exits.json", JSON.stringify(dataa));  // pobieranie pliku json z zawartymi danymi o uruchamianych odnośnikach i okolicznościach towarzyszącymi w zdarzeniu
        });

    })
})

function download(filename, text) { // funkcja odpowiadająca za pobieranie plików json 
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

var allData = [];

document.querySelector("body").addEventListener("click", (event) => {
    var btn_name = event.target.nodeName;
    var btn_class = event.target.className;
    var btn_id = event.target.id;
    var btn_parent = event.target.parentNode.nodeName;
    var btn_parent_id = event.target.parentNode.id;
    var btn_parent_class = event.target.parentNode.className;
    var date = new Date();
    var time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    var page_link = window.location.href;

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
        PageLink: page_link
    });
    
    strDane = JSON.stringify(allData);

    chrome.storage.local.set({dane: strDane}, () => {/*console.log(allData)*/});
    chrome.storage.local.get(['dane'], result => { console.log(result); });
    
    console.log("The name of clicked object is:" + btn_name);
    console.log("The class of clicked object is:" + btn_class);
    console.log("The id of clicked object is:" + btn_id);
    console.log("The name of clicked object parent is:" + btn_parent);
    console.log("The class of clicked parent object is:" + btn_parent_class);
    console.log("The id of clicked parent object is:" + btn_parent_id);
    console.log("The time of clicked object is: " + time);
    console.log("Page link is: " + page_link);
})
