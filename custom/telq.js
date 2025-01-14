async function onTelegramAuth(user) {
  const r = await fetch("https://telq.org/api/tg-login", {
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
