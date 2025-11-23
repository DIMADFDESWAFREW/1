{\rtf1\ansi\ansicpg1251\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cspthree\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\fs26 \cf2 const player = document.getElementById("player");\
const game = document.getElementById("game");\
const scoreEl = document.getElementById("score");\
\
let jumping = false;\
let score = 0;\
\
// \uc0\u1057 \u1086 \u1079 \u1076 \u1072 \u1085 \u1080 \u1077  \u1087 \u1088 \u1077 \u1087 \u1103 \u1090 \u1089 \u1090 \u1074 \u1080 \u1081 \
function createObstacle() \{\
  const obs = document.createElement("div");\
  obs.classList.add("obstacle");\
  obs.style.right = "-50px";\
  game.appendChild(obs);\
\
  let pos = -50;\
  const speed = 5;\
\
  const move = setInterval(() => \{\
    pos += speed;\
    obs.style.right = pos + "px";\
\
    // \uc0\u1055 \u1088 \u1086 \u1074 \u1077 \u1088 \u1082 \u1072  \u1089 \u1090 \u1086 \u1083 \u1082 \u1085 \u1086 \u1074 \u1077 \u1085 \u1080 \u1103 \
    const playerRect = player.getBoundingClientRect();\
    const obsRect = obs.getBoundingClientRect();\
\
    if (\
      playerRect.x < obsRect.x + obsRect.width &&\
      playerRect.x + playerRect.width > obsRect.x &&\
      playerRect.y < obsRect.y + obsRect.height &&\
      playerRect.height + playerRect.y > obsRect.y\
    ) \{\
      alert("\uc0\u1048 \u1075 \u1088 \u1072  \u1086 \u1082 \u1086 \u1085 \u1095 \u1077 \u1085 \u1072 ! \u1058 \u1074 \u1086 \u1081  \u1089 \u1095 \u1077 \u1090 : " + score);\
      location.reload();\
    \}\
\
    if (pos > window.innerWidth + 50) \{\
      clearInterval(move);\
      obs.remove();\
    \}\
  \}, 20);\
\}\
\
// \uc0\u1055 \u1088 \u1099 \u1078 \u1086 \u1082 \
document.addEventListener("click", () => \{\
  if (jumping) return;\
  jumping = true;\
\
  let up = setInterval(() => \{\
    player.style.bottom = parseInt(player.style.bottom || 0) + 5 + "px";\
    if (parseInt(player.style.bottom) > 150) \{\
      clearInterval(up);\
      let down = setInterval(() => \{\
        player.style.bottom = parseInt(player.style.bottom) - 5 + "px";\
        if (parseInt(player.style.bottom) <= 0) \{\
          clearInterval(down);\
          jumping = false;\
          player.style.bottom = "0px";\
        \}\
      \}, 20);\
    \}\
  \}, 20);\
\});\
\
// \uc0\u1054 \u1095 \u1082 \u1080  \u1080  \u1089 \u1087 \u1072 \u1091 \u1085  \u1087 \u1088 \u1077 \u1087 \u1103 \u1090 \u1089 \u1090 \u1074 \u1080 \u1081 \
setInterval(() => \{\
  score++;\
  scoreEl.innerText = score;\
\}, 500);\
\
setInterval(createObstacle, 1200);}