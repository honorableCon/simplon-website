// === header

let burger = _('.burger');
let icoSearh = _('.ico-search')
let inputSearch = _('#input-search')
let header = _('header');

$(burger, 'click', function (e) {
    let nav = _('nav');
    nav.toggleClass('d-none');
})

$(icoSearh, 'click', function (e) {
    inputSearch.toggleClass('d-none');
})
$(document, 'scroll', function(){
    header.style.position = "fixed";
    if (window.scrollY <= 100){
        header.style.position = "relative";
    }
})
