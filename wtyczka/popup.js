document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('heatmapButton').addEventListener('click',onclick,false)
    function onclick(){
        chrome.tabs.query({currentWindow: true,active:true},
            function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,"hi")
            })
    }
}, false)

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button#download_data').addEventListener('click', onclick, false)
    function onclick() {
        var d = new Date();
        var dataa = null;
        chrome.storage.local.get(['dane'], result => {
            dataa = JSON.parse(result.dane);
            download(d.toLocaleDateString() + " " + d.toLocaleTimeString() + " " + window.location.href + " clickStats.json", JSON.stringify(dataa));
        });
    }
}, false)

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}