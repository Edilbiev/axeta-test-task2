export function sendBasket(basket) {
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ basket }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.status === 200) {
        console.log("basket information sent successful");
      } else {
        console.log("basket information sending failed");
      }
    })
    .catch((err) => console.error(err));
}
