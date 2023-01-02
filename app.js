const comments__section = document.querySelector(".main__comments--section");
const people = [
  {
    name: "Mario Henrique dos Santos",
    photo: "man_3",
    comment:
      "Sensacional, finalmente pude me livrar das dívidas e construir um patrimônio que me deixa seguro. 🤩",
  },
  {
    name: "Lucas Fernandes",
    photo: "man_1",
    comment:
      "Nunca tinha conseguido me livrar das dívidas e quase perdi minha esposa por isso, mais agora finalmente consegui sair do aperto e agradeço muito por isso",
  },
  {
    name: "Marta Silva",
    photo: "woman_1",
    comment:
      "Depois de anos no aperto e recebendo cobranças todos os dias, finalmente me livrei das dívidas e agora posso dizer q tenho uma vida confortável e sem preocupação",
  },
  {
    name: "Marcus Vinícius",
    photo: "man_2",
    comment: "Consegui me livrar das dívidas 🥳🥳",
  },
  {
    name: "Brunna Nunes",
    photo: "woman_4",
    comment:
      "Posso ter uma vida tranquila agora e sem me preocupar com os boletos 😜",
  },
  {
    name: "Andressa Fernandes Melo",
    photo: "woman_3",
    comment:
      "Tinha muitos problemas com dívidas, mas agora elas não são mais um problema pra mim e posso dormir tranquila",
  },
  {
    name: "Luiz Gustavo",
    photo: "man_4",
    comment:
      "Finalmente um método que REALMENTE FUNCIONA, agora estou livre das dívidas 🚀",
  },
  {
    name: "Nessa Mendes",
    photo: "woman_2",
    comment: "Agora não preciso mais me preocupar com os boletos",
  },
  {
    name: "Enzo Miguel",
    photo: "man_5",
    comment:
      "Estava prestes a perder tudo, mas hoje agradeço muito todos os dias por ter encontrado esse método 🙏🏼",
  },
];

comments__section.innerHTML = people
  .map(
    (person) =>
      `<div class="main__comments--section__profile">
    <div class="main__comments--section__profile__user--data">
      <figure class="main__comments--section__profile__user--data__figure">
        <img
          class="main__comments--section__profile__user--data__figure__photo"
          src="./images/${person.photo}.png"
        />
      </figure>
      <p class="main__comments--section__profile__user--data__name">
        ${person.name}
      </p>
    </div>
    <p class="main__comments--section__profile__user--data__comment">
      ${person.comment}
    </p>
  </div>`
  )
  .join("");
