
hl.addEventListener('click',function(e){
    nodeName = e.target.nodeName;
    e.target.id ? id = e.target.id : id = null;
    classes = e.target.className.split(' ');
    console.log(window.location.hostname+nodeName + id + classes);
});

// function sayxd(e){
//     e=e || window.event;
//     console.log(e.target);
// }


// document.addEventListener('click', function(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//     text = target.textContent || target.innerText;   
//     console.log(target);
// }, false);

