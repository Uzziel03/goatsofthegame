fetch('goats.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load goats.json');
    }
    return response.json();
  })
  .then(data => {
    const goatList = document.getElementById('goats');
    data.forEach(goat => {
      const goatCard = document.createElement('div');
      goatCard.classList.add('goat-card');
      goatCard.innerHTML = `
        <h3>${goat.name}</h3>
        <p>Sport: ${goat.Sport}</p>
        <p>What he won: ${goat["What he won"]}</p>
        <p>Trophies: ${goat["Trophy count"]}</p>
      `;
      goatList.appendChild(goatCard);
    });
  })
  .catch(error => {
    console.error('Error loading or processing data:', error);
    const goatList = document.getElementById('goats');
    goatList.innerHTML = `<p>Failed to load goat data. Please try again later.</p>`;
  });
