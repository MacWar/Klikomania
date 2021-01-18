
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
    nodeName = e.target.nodeName;
    e.target.id ? id = e.target.id : id = null;
    classes = e.target.className.split(' ');
    console.log(window.location.hostname+nodeName + id + classes);
    



    // var href=e.target.getAttribute("href");

    // console.log(href);
    // if(href!= null){
    //     href = href.split(".");
    //     console.log(href);
    // }
});

