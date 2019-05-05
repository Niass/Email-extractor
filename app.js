const rawText = document.querySelector("textarea[name=textarea]");
const finalText = document.querySelector("textarea[name=output]");
const btn = document.querySelector("button");
const counter = document.querySelector(".counter");

btn.addEventListener("click", function() {
  let temp = rawText.value;
  let exp = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi;
  let emailData = temp.match(exp);
  let holder = [];
  for(let x = 0; x< emailData.length; x++) {
    if(holder.indexOf(emailData[x]) == -1) {
      holder.push(emailData[x]);
    }
  }
  let tempHolder = holder.join("; ");
  counter.innerHTML= "Email Found " + holder.length;
  finalText.innerHTML = tempHolder;
});

finalText.addEventListener("click", function() {
  this.select();
});
