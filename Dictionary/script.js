function search(){
  const input = document.getElementById('input').value.toLocaleLowerCase();
  const meaning = document.getElementById('meaning');

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const wordMeaning = data[0].meanings[0].definitions[0].definition;
      meaning.innerHTML = `<p>${input} : ${wordMeaning}</p>`;
    });
}
