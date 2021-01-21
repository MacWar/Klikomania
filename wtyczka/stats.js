var userdata;
var licznik;

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
<<<<<<< HEAD
    /*if(window.location.pathname==localStorage.leavingPageDataTMP.leavingPageData.pathname) localStorage.leavingPageDataTMP=null;

    if(localStorage.leavingPageDataTMP!=null){
        download("leavingStats.json",localStorage.leavingPageDataTMP);
        localStorage.leavingPageDataTMP=null;
    }*/

    var hrefElements = document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="/"]');
    
    console.log(hrefElements);

    window.addEventListener('beforeunload', function (e) {
        // Cancel the event
        //e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        //lastRemember();
        
        leavingPageData = window.location;
        leavingPageDataJSON = {
            leavingPageData : leavingPageData
        }
        localStorage.leavingPageDataTMP = window.location;
        e.returnValue = 'dgf';
      });
      
=======
    checkCookie();


    // window.addEventListener('beforeunload', function (e) {
    //   strDane = JSON.parse(window.location.hostname);
    //   chrome.storage.local.set({dane: strDane}, () => {/*console.log(allData)*/});
    // });
    // if(true){
    //   chrome.storage.local.get(['dane'], result => {
    //     download("leavingStats.json",JSON.stringify(result));
    //   });
    // }
>>>>>>> f3b18b3b356addb44d840493c365cbe44af98acc

  fetch("https://api.astroip.co/?api_key=b500ad2b-d013-4c56-ab63-05262680f030")
  .then((response) => response.json()) 
  .then((userdataTMP) => userdata = userdataTMP)
  .then((userdata) => console.log(userdata))   
};

document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="/"]').forEach(item => {
    item.addEventListener('click', event => {
        var pagelink = window.location.href;

        clickCounter();

        var clickedHrefItem = item;

        console.log(clickedHrefItem);
        
        var clickedHrefItem = item.outerHTML;

        var filesDataJSON = {
            userdata : userdata,
            location: window.location,
            hrefItem: clickedHrefItem,
<<<<<<< HEAD
            event: event,
            exitsNumber: localStorage.clickcount
        };

        download(time + " " + pagelink + " exits.json", JSON.stringify(filesDataJSON));
        
        var dataa = null;
        chrome.storage.local.get(['dane'], result => {
            dataa = JSON.parse(result.dane);
            download(time + " " + pagelink + " stats.json", JSON.stringify(dataa));
        });
=======
            event: event
        };
        download("hrefStats.json",JSON.stringify(filesDataJSON));
>>>>>>> f3b18b3b356addb44d840493c365cbe44af98acc

        var url = chrome.runtime.getURL('stats.json');
        fetch(url)
            .then((response) => response.json()) 
            .then((json) => console.log(json));          
    })
})
<<<<<<< HEAD

function lastRemember(){
    var pageLeavingData = window;

    pageLeavingDataJSON = {
        windowData : pageLeavingData
    }

    download("stats.json",JSON.stringify(pageLeavingDataJSON));
}

=======
>>>>>>> f3b18b3b356addb44d840493c365cbe44af98acc
function download(filename, text) {
    let temp = document.createElement('a');
    temp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    temp.setAttribute('download', filename);
    temp.style.display = 'none';
    document.body.appendChild(temp);
    temp.click();
    document.body.removeChild(temp);
<<<<<<< HEAD
  }

=======
}


//                ######################    Clicks data & leaving pages data

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
>>>>>>> f3b18b3b356addb44d840493c365cbe44af98acc

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

/*hl.addEventListener('click',function(e){
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