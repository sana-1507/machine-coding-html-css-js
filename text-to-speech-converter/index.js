const textToConvert = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
    const error = document.querySelector('.error-para');

convertBtn.addEventListener("click", () => {
    const speech = window.speechSynthesis;
    console.log(textToConvert.value)
    if(!speech.speaking && !textToConvert.value.trim().length) {
          error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }

     if(!speech.speaking && textToConvert.value.trim().length) {
         error.textContent = "";
        const newUtter =
            new SpeechSynthesisUtterance(textToConvert.value);
        speech.speak(newUtter);
        convertBtn.textContent = "Sound is playing"
     }

     setTimeout(() => {
        convertBtn.textContent = "Play converted sound";
     },5000)

})