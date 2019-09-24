// $(document).on("ready", function(){

// });
const apiKey = '1D6TfNiI9D9OHCqa7SCm2BttZwg6kdBY'

function apiCall (input){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}s&api_key=${apiKey}`, {
            method: "GET"
        })
        .then(function(response){
            return response.json()
        })
        .then((response)=>{
            let gifsArray = response.data

            gifsArray.forEach( gif =>{
                let eachGif = document.createElement('img')
                eachGif.src =  gif.images.fixed_height.url
                console.log(eachGif.src)
                document.querySelector('.gif-gallery').appendChild(eachGif)
                
           })});
    
         }

document.addEventListener('DOMContentLoaded', function(){
    const initialLoad = "knicks"
    apiCall(initialLoad)

    let form =  document.getElementsByClassName('form-inline')[0]

    form.addEventListener('submit', function(e){
        e.preventDefault()
        document.querySelector(".gif-gallery").innerHTML = ''
        let searchResult  = document.getElementsByClassName('form-control gif-input')[0].value
        console.log(searchResult)

        apiCall(searchResult)

    })
    
})