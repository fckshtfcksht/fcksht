
---

layout: base.njk

title: Fortune Teller

---

<button onclick="fortune()" style="padding:1rem;font-size:1.2rem;">Get Fortune</button>

<p id="result" style="font-size:2rem;margin-top:2rem;"></p>

<script>

const fortunes = [

  "Chaos reigns.",

  "Magic is science, science is magic.",
  "I do not spin the block, I am the block.",

  "Pspspssspsspspss.",

  "Curiosity killed the machine."

];

function fortune() {

  document.getElementById('result').innerText = fortunes[Math.floor(Math.random()*fortunes.length)];

}

</script>

