var lang="en"
async function getQuote(lang){
    const apilink = 'https://programming-quotes-api.herokuapp.com/quotes/random/lang/' + lang;
    // console.log("Quote button was clicked");
    try{
        const response = await fetch(apilink)
        if(!response.ok){
            throw Error(response.statusText)
        }
        const json= await response.json();
        displayQuote(json.en,json.author);
    }
    catch(err){
        console.log(err)
        alert('Failed to get a quote');
    }
}
function displayQuote(quote,author) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = "\"" +quote + "\"";
    const quoteAuthor = document.querySelector('#js-quote-author');
    quoteAuthor.textContent = "- \"" + author+"\"";
}

function getImage(){
    html2canvas(document.querySelector("#quotes")).then(canvas => {
        document.body.appendChild(canvas);
        canvas.download = "Quote.png";
    });
}

// const newQuoteButton = document.querySelector('#js-new-quote')
// newQuoteButton.addEventListener('click',getQuote);
$('#js-new-quote').click(() => {
    getQuote("en");
});

