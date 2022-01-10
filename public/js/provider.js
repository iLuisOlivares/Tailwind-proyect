


fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => response.json().then(data => {
        console.log(data);
      }))
      .then(json => console.log(json))