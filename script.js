const radios = Array.from(document.querySelectorAll(".radio"));

const questionNumbers = Array.from(
  document.querySelectorAll(".question-number")
);

const answers = Array.from(document.querySelectorAll(".answer-box"));

const change = function (i) {
  questionNumbers.forEach((item, j) => {
    if (j !== i) {
      item.classList.remove("selected");
      answers[j].className = "answer-box hidden";
    } else {
      item.classList.add("selected");
      answers[j].classList.remove("hidden");
    }
  });
};

radios.forEach((radio, i) => {
  radio.addEventListener("change", function (e) {
    change(i);
  });
});

questionNumbers.forEach((number, i) => {
  number.addEventListener("click", function (e) {
    radios[i].checked = true;
    change(i);
  });
});

const fetchAndDisplayData = function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      document.querySelector(".section3").insertAdjacentHTML(
        "beforeend",
        `
        Số task đã hoàn thành: ${
          res.filter((item) => item.completed).length
        }<br/>
        User 10 có <b>${
          res.filter((item) => item.userId === 10 && !item.completed).length
        }</b> tasks chưa hoàn thành 
      `
      );
    });
};

fetchAndDisplayData();

const students = [
  {
    id: 1,
    name: "Jame",
    score: 9,
  },
  {
    id: 2,
    name: "Davis",
    score: 6,
  },
  {
    id: 3,
    name: "Davis",
    score: 7.5,
  },
  {
    id: 4,
    name: "Erik",
    score: 10,
  },
];

const newStudents = [...students];
newStudents
  .sort((s1, s2) => s1.score - s2.score)
  .forEach((student) => {
    student.score = Math.min(10, student.score + 0.5);
  });
