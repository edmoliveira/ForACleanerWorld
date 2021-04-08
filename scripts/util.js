function addEvent(el, evt, fn) {
    if (el.addEventListener) {
        el.addEventListener(evt, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + evt, modifyText);
    }
}

function getwindowSize() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        wi = w.innerWidth || e.clientWidth || g.clientWidth,
        h = w.innerHeight || e.clientHeight || g.clientHeight;

    return { width: wi, height: h };
}