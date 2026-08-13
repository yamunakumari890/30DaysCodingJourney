const urlInput = document.getElementById("urlInput");
const message = document.getElementById("message");
const result = document.getElementById("result");
const shortURL = document.getElementById("shortURL");

function shortenURL(){
  let url = urlInput.value.trim();

  if(url === ""){
    message.innerText = "please enter a URL ❌";
    result.style.display = "none";
    return;
  }

  if(!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  try{
    let validURL = new URL(url);
    if(
      validURL.protocol !== "https:" &&
      validURL.protocol !== "https:"
    ) {
      throw new Error("Invalid protocol");
    }

  } catch (error){
    message.innerText = "Please Enter a Valid URL ❌";
    result.style.display = "none";
    result;
  }

  let randomCode = 
  Math.random().toString(36).substring(2,8);

  let generateURL =
  "https://short.ly/" + randomCode;

  shortURL.value = generateURL;

  result.style.display = "flex";
  
  message.innerText = "URL shortened successfully! ✅";

}

function copyURL() {
  navigator.clipboard.writeText(shortURL.value)
  .then(function() {
    message.innerHTML = "URL copied! 📋✅";
  })
  .catch(function(){
    message.innerHTML = "Unable to copy URL ❌";
  });
}
