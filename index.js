// Validation

const validInput = document.querySelector("#valid");
const validationButton = document.querySelector(".valid");
const validResult = document.querySelector(".valid-result");

const result = document.createElement("span");
validResult.append(result);

validationButton.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (
      Number(validInput.value) &&
      Number(validInput.value) >= 5 &&
      Number(validInput.value) <= 10
    ) {
      result.innerHTML = "";
      result.textContent = `${validInput.value}`;
    } else {
      throw new Error("Введите, пожалуйста, число от 5 до 10");
    }
  } catch (error) {
    alert(error);
    result.innerHTML = "";
  } finally {
    validInput.value = "";
  }
});

// Lottery

async function lottery() {
  console.log("Вы начали игру");
  let promise = new Promise(function () {
    setTimeout(function () {
      try {
        if (Math.random(0) > 0.5) {
          console.log("Вы выиграли");
          console.log("Вам заплатили");
        } else {
          throw new Error("Вы промахнулись");
        }
      } catch (error) {
        console.log(error);
        console.log("Вы проиграли");
      } finally {
        console.log("Игра закончена");
      }
    }, 1000);
  });

  let result = await promise;
  return result;
}

lottery();
