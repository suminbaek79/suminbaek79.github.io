function init(){
  var entryButton = document.getElementById('entrybutton');
  var entryInput = document.getElementById('entryinput');
  var textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', function() {
    var inputValue = entryInput.ariaValueMax;

    alert("Sumin Baek: " + inputValue);

    textOutput.textContent = inputValue;
  });
}

window.addEventListener('load', init);
