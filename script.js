fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const informacija = document.querySelector('.informacija');
    const name = informacija.querySelector('.name');
    const location = informacija.querySelector('.location');
    const email = informacija.querySelector('.email');
    const phone = informacija.querySelector('.phone');
    
    const img = document.createElement("img");
    img.src = data.results[0].picture.large;
    img.alt = "img";
    informacija.prepend(img);

    name.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
    location.textContent = `Miestas: ${data.results[0].location.city}, ${data.results[0].location.country}`;
    email.textContent = `El.paštas: ${data.results[0].email}`;
    phone.textContent = `Telefono numeris: ${data.results[0].phone}`;
  })
    .catch(e => console.log(e.message));


