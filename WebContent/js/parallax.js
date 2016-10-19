function parallax() {
    var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
    var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
    var details = document.getElementById('one');
    var details_edge = document.getElementById('details_edge');
    var details_background = document.getElementById('details_background');

    prlx_lyr_1.style.top = -(window.pageYOffset / 3) + 'px';
    prlx_lyr_2.style.top = -(window.pageYOffset / 1.5) + 'px';

    if (window.pageYOffset < ($(window).height() / 100 * 6)) {
        $(details).css({
            position: 'fixed',
            top: ($(window).height() / 100 * 94)
        });
        $(details_background).css({
            position: 'absolute',
            top: ($(window).height()) + ($(window).height() / 100 * 6)
        });
    } else if (window.pageYOffset < $(window).height()) {
        $(details).css({
            position: 'absolute',
            top: details_edge.offsetTop
        });
        $(details_background).css({
            position: 'absolute',
            top: details_edge.offsetTop
        });
    } else {
        $(details).css({
            position: 'fixed',
            top: 0
        });
        $(details_background).css({
            position: 'fixed',
            top: 0
        });
    }
}

window.addEventListener("scroll", parallax, false);
window.addEventListener("gesturechange", parallax, false);
//window.addEventListener("touchmove", parallax, false);