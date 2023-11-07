async function onTelegramAuth(user) {
  const r = await fetch("https://94ac-180-249-186-90.ngrok-free.app/api/tg-login", {
    method: "POST",
    body: JSON.stringify(user)
  });
  if (!r.ok) {
    return
  }

  const res = await r.json();
  localStorage.setItem("token", res.token);

  alert("Вы авторизованы — скоро на сайте появится возможность голосовать за вопросы и ответы, следите за новостями")
}
