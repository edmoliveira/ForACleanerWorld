addEvent(window, 'load', function () {
    window_Resize();
});
addEvent(window, 'resize', window_Resize);

function window_Resize() {
    var screen = getwindowSize();

    document.getElementById('comingSoonImg').style.width = screen.width + 'px';
    document.getElementById('comingSoonImg').style.height = screen.height + 'px';

    var logo = document.getElementsByClassName('logo')[0];

    var area = screen.width * 2 + screen.height * 2;

    logo.style.height = (area * 0.05) + 'px';
    logo.style.width = (parseInt(logo.style.height) * 0.7) + 'px';

    logo.style.left = (screen.width / 2 - parseInt(logo.style.width) / 2) + 'px';
}
