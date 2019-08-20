$('.slides').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true
});

var labelInput = document.getElementById('label-input');
var labelOutput = document.getElementById('label-output');

labelInput.addEventListener('keyup', function() {
    labelOutput.innerHTML = labelInput.value;
});
