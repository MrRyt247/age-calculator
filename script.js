function age() {
  const d = new Date();
  var curDate = d.getDate();
  var curMonth = d.getMonth() + 1;
  var curYear = d.getFullYear();
  const lastDate = new Date(curYear, curMonth, 0).getDate();

  const inpDate = document.getElementById("inpDate");
  const inpMonth = document.getElementById("inpMonth");
  const inpYear = document.getElementById("inpYear");

  const resDate = document.getElementById("resDate");
  const resMonth = document.getElementById("resMonth");
  const resYear = document.getElementById("resYear");
  
  const logD = document.getElementsByClassName("log")[0];
  const logM = document.getElementsByClassName("log")[1];
  const logY = document.getElementsByClassName("log")[2];

  const card = document.querySelector(".card");
  const button = document.querySelector(".button");
  
  function shake(target) {
    target.style.setProperty("animation", "shake 1s ease-in-out alternate");
    setTimeout(() => {
      target.style.removeProperty('animation');
    }, 1005);
  };

  function glow(target) {
    target.style.boxShadow = "var(--cardShadow), var(--glowShadow)";
    setTimeout(() => {
      target.style.boxShadow = "var(--cardShadow)";
    }, 800);
  };

  button.addEventListener('click', glow(card));

  function handleAnswer(result, log, ans) {
    result.innerText = ans;
    log.innerText = "";
  }

  function handleError(result, log) {
    result.innerText = "--";
    log.innerText = "Error";
  }

  let resultD = curDate - inpDate.value;
  if(inpDate.value > lastDate || inpDate.value < 0) {
    handleError(resDate, logD);
    shake(logD);
  } else if(resultD < 0) {
    resultD = resultD + lastDate;
    curMonth--;
    handleAnswer(resDate, logD, resultD);
  } else {
    handleAnswer(resDate, logD, resultD);
  }
  
  let resultM = curMonth - inpMonth.value;
  if(inpMonth.value > 12 || inpMonth.value < 0) {
    handleError(resMonth, logM);
    shake(logM);
  } else if (resultM < 0) {
    resultM += 12;
    curYear--;
    handleAnswer(resMonth, logM, resultM);
  } else {
    handleAnswer(resMonth, logM, resultM);
  }
  
  let resultY = curYear - inpYear.value;
  if(resultY < 0 || inpYear.value < 0) {
    handleError(resYear, logY);
    shake(logY);
  } else {
    handleAnswer(resYear, logY, resultY);
  }

  if(inpDate.value === "") {
    resDate.innerText = "--";
  }
  
  if(inpMonth.value === "") {
    resMonth.innerText = "--";
  }
  
  if(inpYear.value === "") {
    resYear.innerText = "--";
  }
};

window.addEventListener("keypress", (e) => {
  if(e.key === 'Enter') {
    age();
    glow(card);
  };
})
