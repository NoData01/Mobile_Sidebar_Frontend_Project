const close = document.getElementById('closeSidebarBtn');

const open = document.getElementById('openSidebarBtn');
/*
close.addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '-250px';
});


open.addEventListener('click',function() {
    document.getElementById('sidebar').style.right = '0px';
});
*/
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

open.addEventListener('click', function() {
    sidebar.style.right = '0';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
});

close.addEventListener('click', function() {
    sidebar.style.right = '-250px';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
});

overlay.addEventListener('click', function() {
    sidebar.style.right = '-250px';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
});