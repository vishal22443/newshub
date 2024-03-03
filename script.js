const API_KEY = "499d03534f224e8890dcd1f95376001c"
const url = "https://newsapi.org/v2/everything?q="



async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json()
    return data
}
fetchData("all").then(data => renderMain(data.articles))

//menu btn
let mobilemenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})


//render news 
function renderMain(arr){
    let mainHTML = ''
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i].urlToImage){
        mainHTML += ` <div class="card">
                        <a href=${arr[i].url}>
                        <img src=${arr[i].urlToImage} lazy="loading" />
                        <h4>${arr[i].title}</h4>
                        <div class="publishbyDate">
                            <p>${arr[i].source.name}</p>
                            <span>•</span>
                            <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${arr[i].description}
                        </div>
                        </a>
                     </div>
        `
        }
    }

    document.querySelector("main").innerHTML = mainHTML
}


const searchBtn = document.getElementById("searchForm")
const searchBtnMobile = document.getElementById("searchFormMobile")
const searchInputMobile = document.getElementById("searchInputMobile") 
const searchInput = document.getElementById("searchInput")

searchBtn.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(searchInput.value)

    const data = await fetchData(searchInput.value)
    renderMain(data.articles)

})
searchBtnMobile.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const data = await fetchData(searchInputMobile.value)
    renderMain(data.articles)
})


async function Search(query){
    const data = await fetchData(query)
    renderMain(data.articles)
}




  // ... (existing script)

  function toggleDropdown() {
    document.getElementById('language-options').classList.toggle('show');
  }

  function changeLanguage(languageCode) {
    // Add logic to change the language of the website
    console.log(`Language changed to ${languageCode}`);
    
    // You can update the content of the website based on the selected language
    // For now, let's just log the selected language to the console
  }

  // Fetch news on page load



  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
  }
  
  function checkStoredTheme() {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    }
  }
  
  // Check the stored theme on page load
  checkStoredTheme();





  let lang = navigator.language.slice(0, 2); // Get the first two letters of user's language preference

// Hide elements that don't correspond to the user's preferred language
if (lang === 'en') {
  document.querySelectorAll('.second-language').forEach(elem => elem.style.display = 'none');
} else {
  document.querySelectorAll('.english').forEach(elem => elem.style.display = 'none');
}



function changeLanguage(language) {
    // Implement logic to fetch and display content in the selected language
    // For simplicity, you can use static content here, but in a real-world scenario, you'd likely fetch content from a server.

    if (language === 'en') {
        document.getElementById('main-heading').innerText = 'Welcome to Your Website!';
        document.getElementById('content').innerText = 'This is the main content of your website.';
    } else if (language === 'es') {
        document.getElementById('main-heading').innerText = '¡Bienvenido a tu sitio web!';
        document.getElementById('content').innerText = 'Este es el contenido principal de tu sitio web.';
    }

    // Update the HTML lang attribute
    document.documentElement.lang = language;
}



        function navigateToTextToSpeech() {
            // Redirect to the Text-to-Speech HTML file
            window.location.href = 'text-to-speech-page.html';
        }

        function Search(category) {
            // Your existing search function based on the category
            console.log('Searching for', category);
        }
    

