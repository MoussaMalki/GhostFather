// I - Cube Functionality
let doc = document;
let log = console.log;
let speed = 5;
let speedBullet = 5;
let movement = 1;

let mainCharacter = document.querySelector(`#mainCharacter`);

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

setTimeout(() => {
  mainCharacter.style.top = `-1px`;
}, 10);

window.addEventListener(`keydown`, (e) => {
  window.characterTop = parseInt(
    getComputedStyle(mainCharacter).getPropertyValue("top")
  );
  window.characterLeft = parseInt(
    getComputedStyle(mainCharacter).getPropertyValue("left")
  );

  if (e.key === `ArrowDown`) {
    mainCharacter.setAttribute(`stopRight`, `no`);
    mainCharacter.setAttribute(`stopUp`, `no`);
    mainCharacter.setAttribute(`stopLeft`, `no`);

    if (characterTop === 556) {
      mainCharacter.setAttribute(`stopDown`, `yes`);
    }

    if (
      characterTop === 10 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
    ) {
      mainCharacter.setAttribute(`stopDown` === `yes`);
    }

    if (
      characterTop === 165 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
    ) {
      mainCharacter.setAttribute(`stopDown`, `yes`);
    }
    if (
      characterTop === 244 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
    ) {
      mainCharacter.setAttribute(`stopDown`, `yes`);
    }
    if (
      characterTop === 382 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
    ) {
      mainCharacter.setAttribute(`stopDown`, `yes`);
    }
    if (
      characterTop === 478 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
    ) {
      mainCharacter.setAttribute(`stopDown`, `yes`);
    }
    if (
      mainCharacter.getAttribute(`moving`) === `no` &&
      mainCharacter.getAttribute(`stopDown`) === `no`
    ) {
      let goDown = setInterval(() => {
        characterTop += 1;
        mainCharacter.style.top = `${characterTop}px`;

        mainCharacter.setAttribute(`moving`, `yes`);

        if (characterTop === 556) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }

        if (
          characterTop === 64 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
        ) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 10 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
        ) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 165 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
        ) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 244 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
        ) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 382 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
        ) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 478 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
        ) {
          mainCharacter.setAttribute(`stopDown`, `yes`);
          clearInterval(goDown);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (characterTop > 245 && characterTop < 300) {
          if (bulletPosition > 230 && bulletPosition < 275) {
            if (characterLeft === 258) {
              mainCharacter.setAttribute(`stopDown`, `yes`);
              clearInterval(goDown);
              mainCharacter.setAttribute(`moving`, `no`);
            }
          }
        }
      }, 1);
    }
  }
  if (e.key === `ArrowRight`) {
    mainCharacter.setAttribute(`stopDown`, `no`);
    mainCharacter.setAttribute(`stopLeft`, `no`);
    mainCharacter.setAttribute(`stopUp`, `no`);
    doc
      .querySelector(`.charaPic  `)
      .setAttribute(`src`, `images/mainChara.png`);
    if (characterLeft === 258) {
      mainCharacter.setAttribute(`stopRight`, `yes`);
    }

    if (
      mainCharacter.getAttribute(`moving`) === `no` &&
      mainCharacter.getAttribute(`stopRight`) === `no`
    ) {
      let goRight = setInterval(() => {
        characterLeft += 1;
        mainCharacter.style.left = `${characterLeft}px`;

        mainCharacter.setAttribute(`moving`, `yes`);

        if (characterLeft === 258) {
          mainCharacter.setAttribute(`stopRight`, `yes`);
          clearInterval(goRight);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 165 &&
          characterLeft === 162 &&
          spears.getAttribute(`out`) === `yes`
        ) {
          mainCharacter.setAttribute(`stopRight`, `yes`);
          clearInterval(goRight);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (characterTop === 478) {
          if (characterLeft > 180 && characterLeft < 250) {
            if (botPosition > 439 && botPosition < 512) {
              mainCharacter.setAttribute(`stopRight`, `yes`);
              clearInterval(goRight);
              mainCharacter.setAttribute(`moving`, `no`);
            }
          }
        }
      }, 1);
    }
  }
  if (e.key === `ArrowUp`) {
    mainCharacter.setAttribute(`stopRight`, `no`);
    mainCharacter.setAttribute(`stopDown`, `no`);
    mainCharacter.setAttribute(`stopLeft`, `no`);

    if (getComputedStyle(mainCharacter).getPropertyValue("top") === `-1px`) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      characterTop === 530 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
    ) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      characterTop === 435 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
    ) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      characterTop === 320 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
    ) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      characterTop === 215 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
    ) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      characterTop === 115 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
    ) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      characterTop === 63 &&
      getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
    ) {
      mainCharacter.setAttribute(`stopUp`, `yes`);
    }
    if (
      mainCharacter.getAttribute(`moving`) === `no` &&
      mainCharacter.getAttribute(`stopUp`) === `no`
    ) {
      let goUp = setInterval(() => {
        characterTop -= 1;
        mainCharacter.style.top = `${characterTop}px`;

        mainCharacter.setAttribute(`moving`, `yes`);

        if (characterTop === 0) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }

        if (
          characterTop === 530 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
        ) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 420 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
        ) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 320 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
        ) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 215 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
        ) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 115 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `0px`
        ) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 63 &&
          getComputedStyle(mainCharacter).getPropertyValue("left") === `258px`
        ) {
          mainCharacter.setAttribute(`stopUp`, `yes`);
          clearInterval(goUp);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (characterTop > 245 && characterTop < 300) {
          if (bulletPosition > 230 && bulletPosition < 275) {
            if (characterLeft === 258) {
              mainCharacter.setAttribute(`stopUp`, `yes`);
              clearInterval(goUp);
              mainCharacter.setAttribute(`moving`, `no`);
            }
          }
        }
      }, 1);
    }
  }

  if (e.key === `ArrowLeft`) {
    mainCharacter.setAttribute(`stopDown`, `no`);
    mainCharacter.setAttribute(`stopRight`, `no`);
    mainCharacter.setAttribute(`stopUp`, `no`);
    doc.querySelector(`.charaPic`).setAttribute(`src`, `images/mainChar2.png`);
    if (characterLeft === 0) {
      mainCharacter.setAttribute(`stopLeft`, `yes`);
    }

    if (
      mainCharacter.getAttribute(`moving`) === `no` &&
      mainCharacter.getAttribute(`stopLeft`) === `no`
    ) {
      let goLeft = setInterval(() => {
        characterLeft -= 1;
        mainCharacter.style.left = `${characterLeft}px`;

        mainCharacter.setAttribute(`moving`, `yes`);

        if (characterLeft === 0) {
          mainCharacter.setAttribute(`stopLeft`, `yes`);
          clearInterval(goLeft);

          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (
          characterTop === 165 &&
          characterLeft === 162 &&
          spears.getAttribute(`out`) === `yes`
        ) {
          mainCharacter.setAttribute(`stopLeft`, `yes`);
          clearInterval(goLeft);
          mainCharacter.setAttribute(`moving`, `no`);
        }
        if (characterTop === 478) {
          if (characterLeft > 180 && characterLeft < 250) {
            if (botPosition > 439 && botPosition < 512) {
              mainCharacter.setAttribute(`stopLeft`, `yes`);
              clearInterval(goLeft);
              mainCharacter.setAttribute(`moving`, `no`);
            }
          }
        }
        if (mainCharacter.getAttribute(`lost`) === `yes`) {
          mainCharacter.setAttribute(`stopLeft`, `yes`);
          clearInterval(goLeft);
          mainCharacter.setAttribute(`moving`, `no`);

          setTimeout(() => {
            mainCharacter.setAttribute(`lost`, `no`);
          }, 100);
        }
      }, 1);
    }
  }
});

// ===> traps

window.acc = 1;

function traps() {
  setInterval(() => {
    if (acc === 1) {
      doc.querySelector(`#trapsTringles`).style.cssText = `display: initial`;
      doc.querySelector(`.spearsImg`).setAttribute(`out`, `yes`);
      setTimeout(() => {
        window.acc = 2;
      }, 20);
    }
    if (acc === 2) {
      doc.querySelector(`#trapsTringles`).style.cssText = `display: none`;
      doc.querySelector(`.spearsImg`).setAttribute(`out`, `no`);
      setTimeout(() => {
        window.acc = 1;
      }, 20);
    }
  }, 700);
}

traps();

function traps2() {
  let spears2 = doc.querySelector(`#trapsTringles2`);
  let spearsImg2 = doc.querySelector(`.spearsImg2`);

  setInterval(() => {
    if (characterLeft === 0 && characterTop === 478) {
      setTimeout(() => {
        spears2.style.display = `initial`;
        spears2.setAttribute(`out`, `yes`);
      }, 500);
    }
  }, 100);
}
traps2();

// ===> moving bullet

function movingBullet() {
  let bullet = doc.querySelector(`#bullet`);

  let moving = setInterval(() => {
    window.bulletPosition = parseInt(
      getComputedStyle(bullet).getPropertyValue("left")
    );
    bullet.style.left = `${bulletPosition + movement}px`;

    if (bulletPosition === 275) {
      clearInterval(moving);
      bullet.style.display = `none`;
      setTimeout(() => {
        bullet.style.left = `24px`;
        bullet.style.display = `initial`;

        movingBullet();
      }, 20);
    }
  }, 1);
}
movingBullet();

// ===> moving bot
let bot = doc.querySelector(`#bot`);

function moveBotUp() {
  let moving = setInterval(() => {
    window.botPosition = parseInt(
      getComputedStyle(bot).getPropertyValue("top")
    );

    bot.style.top = `${botPosition - movement}px`;

    if (botPosition === 440) {
      clearInterval(moving);

      moveBotDown();
    }
  }, 2);
}

function moveBotDown() {
  let moving = setInterval(() => {
    window.botPosition = parseInt(
      getComputedStyle(bot).getPropertyValue("top")
    );

    bot.style.top = `${botPosition + movement}px`;

    if (botPosition === 562) {
      clearInterval(moving);
      moveBotUp();
    }
  }, 2);
}
moveBotUp();

///// =======> dying in the game

function firstTrap() {
  //// ===> I- First Trap

  window.spears = doc.querySelector(`.spearsImg`);
  window.heartAcc = 0;

  setInterval(() => {
    if (spears.getAttribute(`out`) === `yes`) {
      if (characterTop === 165 && characterLeft === 258) {
        mainCharacter.style.top = `0px`;
        mainCharacter.style.left = `0px`;
        characterLeft = 0;
        characterTop = 0;
        mainCharacter.setAttribute(`stopDown`, `no`);

        if (heartAcc === 0) {
          doc.querySelectorAll(`.heart`)[0].style.display = `none`;
          setTimeout(() => {
            heartAcc = 1;
          }, 1000);
        }
        if (heartAcc === 1) {
          doc.querySelectorAll(`.heart`)[1].style.display = `none`;
          setTimeout(() => {
            heartAcc = 2;
          }, 1000);
        }
        if (heartAcc === 2) {
          doc.querySelectorAll(`.heart`)[2].style.display = `none`;
          setTimeout(() => {
            heartAcc = 3;
          }, 1000);
        }
      }
    }
    if (spears.getAttribute(`out`) === `yes`) {
      if (characterTop === 165 && characterLeft === 162) {
        mainCharacter.style.top = `0px`;
        mainCharacter.style.left = `0px`;

        characterLeft = 0;
        characterTop = 0;
        mainCharacter.setAttribute(`stopRight`, `no`);
        mainCharacter.setAttribute(`stopLeft`, `no`);

        if (heartAcc === 0) {
          doc.querySelectorAll(`.heart`)[0].style.display = `none`;
          setTimeout(() => {
            heartAcc = 1;
          }, 1000);
        }
        if (heartAcc === 1) {
          doc.querySelectorAll(`.heart`)[1].style.display = `none`;
          setTimeout(() => {
            heartAcc = 2;
          }, 1000);
        }
        if (heartAcc === 2) {
          doc.querySelectorAll(`.heart`)[2].style.display = `none`;
          setTimeout(() => {
            heartAcc = 3;
          }, 1000);
        }
      }
    }
  }, 2);
}
firstTrap();

function secondTrap() {
  setInterval(() => {
    if (characterTop > 245 && characterTop < 300) {
      if (bulletPosition > 230 && bulletPosition < 275) {
        if (characterLeft === 258) {
          mainCharacter.style.top = `0px`;
          mainCharacter.style.left = `0px`;
          characterLeft = 0;
          characterTop = 0;
          mainCharacter.setAttribute(`stopDown`, `no`);
          mainCharacter.setAttribute(`stopUp`, `no`);

          if (heartAcc === 0) {
            doc.querySelectorAll(`.heart`)[0].style.display = `none`;
            setTimeout(() => {
              heartAcc = 1;
            }, 1000);
          }
          if (heartAcc === 1) {
            doc.querySelectorAll(`.heart`)[1].style.display = `none`;
            setTimeout(() => {
              heartAcc = 2;
            }, 1000);
          }
          if (heartAcc === 2) {
            doc.querySelectorAll(`.heart`)[2].style.display = `none`;
            setTimeout(() => {
              heartAcc = 3;
            }, 1000);
          }
        }
      }
    }
  }, 1);
}
secondTrap();

function thirdTrap() {
  setInterval(() => {
    if (characterTop === 478) {
      if (characterLeft > 180 && characterLeft < 250) {
        if (botPosition > 439 && botPosition < 512) {
          mainCharacter.style.top = `0px`;
          mainCharacter.style.left = `0px`;
          characterLeft = 0;
          characterTop = 0;
          mainCharacter.setAttribute(`lost`, `yes`);
          mainCharacter.setAttribute(`stopRight`, `no`);
          mainCharacter.setAttribute(`stopLeft`, `no`);

          if (heartAcc === 0) {
            doc.querySelectorAll(`.heart`)[0].style.display = `none`;
            setTimeout(() => {
              heartAcc = 1;
            }, 1000);
          }
          if (heartAcc === 1) {
            doc.querySelectorAll(`.heart`)[1].style.display = `none`;
            setTimeout(() => {
              heartAcc = 2;
            }, 1000);
          }
          if (heartAcc === 2) {
            doc.querySelectorAll(`.heart`)[2].style.display = `none`;
            setTimeout(() => {
              heartAcc = 3;
            }, 1000);
          }
        }
      }
    }
    if (characterTop === 556) {
      if (characterLeft > 180 && characterLeft < 250) {
        if (botPosition > 530 && botPosition < 557) {
          mainCharacter.style.top = `0px`;
          mainCharacter.style.left = `0px`;
          characterLeft = 0;
          characterTop = 0;
          mainCharacter.setAttribute(`lost`, `yes`);
          mainCharacter.setAttribute(`stopRight`, `no`);
          mainCharacter.setAttribute(`stopLeft`, `no`);

          if (heartAcc === 0) {
            doc.querySelectorAll(`.heart`)[0].style.display = `none`;
            setTimeout(() => {
              heartAcc = 1;
            }, 1000);
          }
          if (heartAcc === 1) {
            doc.querySelectorAll(`.heart`)[1].style.display = `none`;
            setTimeout(() => {
              heartAcc = 2;
            }, 1000);
          }
          if (heartAcc === 2) {
            doc.querySelectorAll(`.heart`)[2].style.display = `none`;
            setTimeout(() => {
              heartAcc = 3;
            }, 1000);
          }
        }
      }
    }
  }, 1);
}
thirdTrap();

function forthTrap() {
  setInterval(() => {
    if (characterTop === 478 && characterLeft >= 0 && characterLeft < 65) {
      setTimeout(() => {
        mainCharacter.style.top = `0px`;
        mainCharacter.style.left = `0px`;
        characterLeft = 0;
        characterTop = 0;
        mainCharacter.setAttribute(`lost`, `yes`);
        mainCharacter.setAttribute(`stopRight`, `no`);

        if (heartAcc === 0) {
          doc.querySelectorAll(`.heart`)[0].style.display = `none`;
          setTimeout(() => {
            heartAcc = 1;
          }, 1000);
        }
        if (heartAcc === 1) {
          doc.querySelectorAll(`.heart`)[1].style.display = `none`;
          setTimeout(() => {
            heartAcc = 2;
          }, 1000);
        }
        if (heartAcc === 2) {
          doc.querySelectorAll(`.heart`)[2].style.display = `none`;
          setTimeout(() => {
            heartAcc = 3;
          }, 1000);
        }

        setTimeout(() => {
          mainCharacter.setAttribute(`stopDown`, `no`);
          mainCharacter.setAttribute(`stopLeft`, `no`);
          mainCharacter.setAttribute(`lost`, `no`);
          doc.querySelector(`#trapsTringles2`).style.display = `none`;
        }, 300);
      }, 500);
    }
  }, 1);
}
forthTrap();

function doorOpening() {
  let door = doc.querySelector(`.door`);
  setInterval(() => {
    if (characterTop === 556 && characterLeft === 200) {
      setTimeout(() => {
        door.setAttribute(`src`, `images/doors2.png`);
      }, 100);
      setTimeout(() => {
        door.setAttribute(`src`, `images/doors3.png`);
      }, 200);
      setTimeout(() => {
        door.setAttribute(`src`, `images/doors4.png`);
      }, 300);
    }
  }, 1);
}

doorOpening();

// =====> wining popUp / losing popUp

function losingPopUp() {
  setInterval(() => {
    if (heartAcc === 3) {
      doc.querySelector(`#losing`).style.display = `flex`;
      mainCharacter.setAttribute(`stopDown`, `yes`);
      mainCharacter.setAttribute(`stopRight`, `yes`);
      mainCharacter.setAttribute(`stopUp`, `yes`);
      mainCharacter.setAttribute(`stopLeft`, `yes`);

      doc.querySelector(`.restartBtn`).onclick = () => {
        location.reload();
      };
    }
  }, 50);
}
losingPopUp();

function winingPopUp() {
  setInterval(() => {
    if (characterTop === 556 && characterLeft === 0) {
      doc.querySelector(`#wining`).style.display = `flex`;
      mainCharacter.setAttribute(`stopDown`, `yes`);
      mainCharacter.setAttribute(`stopRight`, `yes`);
      mainCharacter.setAttribute(`stopUp`, `yes`);
      mainCharacter.setAttribute(`stopLeft`, `yes`);

      doc.querySelector(`.restartBtn`).onclick = () => {
        location.reload();
      };
    }
  }, 50);
}
winingPopUp();

setInterval(() => {
  if (characterTop < 0 || characterTop > 560) {
    location.reload();
  }
  if (characterLeft < 0 || characterLeft > 260) {
    location.reload();
  }
}, 50);
