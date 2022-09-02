var inputBox = document.querySelector("#txt-box1");
var clickBtn = document.querySelector("#click-btn1");
var outputBox = document.querySelector("#txt-box2");

function createURL(text)
{
    var url = "https://api.funtranslations.com/translate/morse.json" + "?" + "text=" + text;    
    return url;
}

function clickHandler()
{

    var outputValue = inputBox.value;
    fetch(createURL(outputValue))
    .then(respone => respone.json())
    .then(json => {
        outputBox.innerText = json.contents.translated;   
    })
}
document.addEventListener('click',clickHandler);