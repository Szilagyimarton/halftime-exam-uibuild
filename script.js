const rootElement = document.getElementById("root")
const bodyComponent = () => {
  return `<h1>Visszajelzés</h1>
          <input class ="subject" type="text" placeholder="Tárgy"><br>
          <textarea class="comment" placeholder="Megjegyzés"></textarea>
          <div class="data"><input class="check" type="checkbox"><p>Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót.<span></p></div>
          <div class="newsletter"><input class="check" type="checkbox"><p>Szeretnék hírlevelet kapni.</p></div>
          <button>Mentés</button>
          `

}

rootElement.insertAdjacentHTML("beforeend",bodyComponent())