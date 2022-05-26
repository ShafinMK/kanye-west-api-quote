console.log('hel');




callApi();
document.getElementById('getQoute').addEventListener('click', function(){
    callApi();
})

function callApi(){
    fetch('https://api.kanye.rest/')
    .then(res=> res.json())
    .then(data => getQuote(data))
}

const getQuote = (quote)=>{
    
    document.getElementById('quote').value = quote.quote;
}