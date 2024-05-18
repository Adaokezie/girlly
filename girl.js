document.getElementById('no-btn').addEventListener('mouseover', function() {
    var x = Math.random() * (window.innerWidth - this.clientWidth);
    var y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

