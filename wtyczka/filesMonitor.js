var userdata;
window.onload = function () {
    window.addEventListener('beforeunload', function (e) {
      strDane = JSON.parse(window.location.hostname);
      chrome.storage.local.set({dane: strDane}, () => {/*console.log(allData)*/});
    });

    //if(window.location.pathname==localStorage.leavingPageDataTMP.leavingPageData.pathname) localStorage.leavingPageDataTMP=null;

    if(true){
      chrome.storage.local.get(['dane'], result => {
        download("leavingStats.json",JSON.stringify(result));
      });
    }

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
        download("hrefStats.json",JSON.stringify(filesDataJSON));

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
