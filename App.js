let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let search = document.getElementById("search").value;

  let searchOriginal = search.split(" ").join("");

  if (searchOriginal === "") {
    alert("Enter a valid userName");
  } else {
    fetch("https://api.github.com/users/" + searchOriginal)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);

        document.getElementById("result").innerHTML = `
            
            <a href = "https://www.github.com/${searchOriginal}" class="anchor">
            <img src = "${data.avatar_url}"  class="userprofile"/>
            </a>
            <h3 class="name">${data.name}</h3>
            <span class="userbio">${data.bio}</span> 
            <div color:"green" class="usercompany">Company : ${data.company}</div>
            <div class="userrepo">Public Repo : ${data.public_repos}</div> 
            `;
      });
  }
});
