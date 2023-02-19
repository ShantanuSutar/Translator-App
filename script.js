const selectTag = document.querySelectorAll("select");

selectTag.forEach((tag) => {
  for (const country_code in countries) {
    let option = `<option value="${country_code}">${countries[country_code]}</option>`;

    tag.insertAdjacentHTML("beforeend", option); //adding language options inside option tag
  }
});
