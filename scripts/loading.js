function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value =
        escape(value) +
        (exdays == null ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = c_name + '=' + c_value;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(' ' + c_name + '=');
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + '=');
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf('=', c_start) + 1;
        var c_end = c_value.indexOf(';', c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

checkSession();

function checkSession() {
    var c = getCookie('visited');
    if (c === 'yes') {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('body').classList.remove('hidden');
    } else {
        document.getElementById('loading').classList.add('fade-in');
        setTimeout(() => {
            document.getElementById('loading').classList.add('fade-out');
        }, 1500);
        setTimeout(() => {
            document.getElementById('body').classList.remove('hidden');
            document.getElementById('body').classList.add('fade-in');
            document.getElementById('loading').classList.add('hidden');
        }, 2500);
        setCookie('visited', 'yes', 365);
    }
}
