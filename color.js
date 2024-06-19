document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ffcccb', '#ccffcb', '#ccccff', '#ffd700', '#add8e6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorBox').style.backgroundColor = randomColor;
});
