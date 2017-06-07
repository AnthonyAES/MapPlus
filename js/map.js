var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map_image a');
var links = map.querySelectorAll('.map_list li');

//Polyfill du foreach
if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback);
    }
}

var activeArea = function(id) {
    map.querySelectorAll('.is-active').forEach(function (item){
            item.classList.remove('is-active');
        });
    if (id !== undefined) {
        document.querySelector('#list-' + id).classList.add('is-active');
        document.querySelector('#region-' + id).classList.add('is-active');
    }
}

paths.forEach(function (path) {
    path.addEventListener('mouseenter', function() {
        var id = this.id.replace('region-','');
        activeArea(id);
    });
});

links.forEach(function (link) {
    link.addEventListener('mouseenter', function() {
        var id = this.id.replace('list-','');
        activeArea(id);
    });
});

paths.forEach(function (path) {
    path.addEventListener('mouseleave', function() {
        activeArea();
    });
});

links.forEach(function (link) {
    link.addEventListener('mouseleave', function() {
        activeArea();
    });
});

paths.forEach(function (path) {
    path.addEventListener('click', function() {
        var id = this.id.replace('region-','');
        var nav = document.querySelectorAll('li');
        if(document.querySelector('#list-' +id).classList.contains('active')){
            document.querySelector('#list-' +id).classList.remove('active');
            document.querySelector('.map_image').classList.remove('dontshow');
            document.querySelector('#town-' + id).classList.add('dontshow');
            for(i=0; i<nav.length; i++){
                nav[i].classList.remove('ignore');
            }
        }else {
            document.querySelector('#list-' +id).classList.add('active');
            document.querySelector('.map_image').classList.add('dontshow');
            document.querySelector('#town-' + id).classList.remove('dontshow');
            
            for(i=0; i<nav.length; i++){
                nav[i].classList.add('ignore');
            }
        }
    });
});

links.forEach(function (link) {
    link.addEventListener('click', function() {
        var id = this.id.replace('list-','');
        var nav = document.querySelectorAll('li');
        if(document.querySelector('#list-' +id).classList.contains('active')){
            document.querySelector('#list-' +id).classList.remove('active');
            document.querySelector('.map_image').classList.remove('dontshow');
            document.querySelector('#town-' + id).classList.add('dontshow');
            for(i=0; i<nav.length; i++){
                nav[i].classList.remove('ignore');
            }
        }else {
            document.querySelector('#list-' +id).classList.add('active');
            document.querySelector('.map_image').classList.add('dontshow');
            document.querySelector('#town-' + id).classList.remove('dontshow');
            
            for(i=0; i<nav.length; i++){
                nav[i].classList.add('ignore');
            }
        }
    });
});