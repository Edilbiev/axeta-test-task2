export function sendBasket(basket) {
  console.log("запрос");
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ basket }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.res === "success") {
        console.log("basket information sent successful");
      } else if (json.res === "fail") {
        console.log("basket information sending failed");
      }
    });
}
