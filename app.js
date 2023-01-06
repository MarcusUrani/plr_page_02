const commentsSection = document.querySelector(".main__comments--section");
const dateArea = document.querySelector(".main__header__subtitle__bold");

const date = new Date();

const people = [
  {
    id: "1",
    name: "Mario Henrique dos Santos",
    photo: "https://imgur.com/EKdokDm.png",
    comment:
      "Sensacional, finalmente pude me livrar das dívidas e construir um patrimônio que me deixa seguro. 🤩",
  },
  {
    id: "2",
    name: "Lucas Fernandes",
    photo: "https://imgur.com/8fj2UHl.png",
    comment:
      "Nunca tinha conseguido me livrar das dívidas e quase perdi minha esposa por isso, mais agora finalmente consegui sair do aperto e agradeço muito por isso",
  },
  {
    id: "3",
    name: "Marta Silva",
    photo: "https://imgur.com/pjc4M1c.png",
    comment:
      "Depois de anos no aperto e recebendo cobranças todos os dias, finalmente me livrei das dívidas e agora posso dizer q tenho uma vida confortável e sem preocupação",
  },
  {
    id: "4",
    name: "Marcus Vinícius",
    photo: "https://imgur.com/vlwzs4b.png",
    comment: "Consegui me livrar das dívidas 🥳🥳",
  },
  {
    id: "5",
    name: "Brunna Nunes",
    photo: "https://imgur.com/kF1TOl4.png",
    comment:
      "Posso ter uma vida tranquila agora e sem me preocupar com os boletos 😜",
  },
  {
    id: "6",
    name: "Andressa Fernandes Melo",
    photo: "https://imgur.com/UHtnJ40.png",
    comment:
      "Tinha muitos problemas com dívidas, mas agora elas não são mais um problema pra mim e posso dormir tranquila",
  },
  {
    id: "7",
    name: "Luiz Gustavo",
    photo: "https://imgur.com/AC92x8B.png",
    comment:
      "Finalmente um método que REALMENTE FUNCIONA, agora estou livre das dívidas 🚀",
  },
  {
    id: "8",
    name: "Nessa Mendes",
    photo: "https://imgur.com/8mJW7v6.png",
    comment: "Agora não preciso mais me preocupar com os boletos",
  },
  {
    id: "9",
    name: "Enzo Miguel",
    photo: "https://imgur.com/W7qgfsI.png",
    comment:
      "Estava prestes a perder tudo, mas hoje agradeço muito todos os dias por ter encontrado esse método 🙏🏼",
  },
];

const verifyDate = (newDate) => {
  if (newDate < 10) {
    newDate = "0" + newDate;
  }

  return newDate;
};

const getDateAndInsertOnScreen = () => {
  let actualDay = date.getDate();
  let actualMonth = date.getMonth() + 1;
  const actualYear = date.getFullYear();

  actualDay = verifyDate(actualDay);
  actualMonth = verifyDate(actualMonth);
  dateArea.textContent = `${actualDay}/${actualMonth}/${actualYear}`;
};

const insertCommentsOnScreen = () => {
  commentsSection.innerHTML = people
    .map(
      (person) =>
        `<div class="main__comments--section__profile">
    <div class="main__comments--section__profile__user--data">
      <figure class="main__comments--section__profile__user--data__figure">
        <img
          class="main__comments--section__profile__user--data__figure__photo"
          src="${person.photo}"
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
};

getDateAndInsertOnScreen();
insertCommentsOnScreen();
