let card = document.querySelector(".card");
let total1 = document.querySelector(".total1");
let total2 = document.querySelector(".total2");
let totalPrice;

let tax = document.querySelector("#tax");

card.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText =
      Number(e.target.previousElementSibling.textContent) + 1;
    let fiyat = e.target.parentNode.parentNode.children[1].textContent
      .trim()
      .split("");
    fiyat.shift();
    fiyat.shift();
    fiyat = fiyat.join("");
    total1.innerText = e.target.previousElementSibling.textContent * fiyat;
    totalPrice = Number(total1.textContent) + Number(total2.textContent);
    tax.innerText = ((totalPrice * 18) / 100).toFixed(2);
  } else if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.textContent == 0) {
      alert("miktar 0 dan küçük olamaz");
    } else {
      e.target.nextElementSibling.innerText =
        Number(e.target.nextElementSibling.textContent) - 1;
      let fiyat = e.target.parentNode.parentNode.children[1].textContent
        .trim()
        .split("");
      fiyat.shift();
      fiyat.shift();
      fiyat = fiyat.join("");
      total1.innerText = e.target.nextElementSibling.textContent * fiyat;
      totalPrice = Number(total1.textContent) + Number(total2.textContent);
      tax.innerText = ((totalPrice * 18) / 100).toFixed(2);
    }
  }
});








todoUl.addEventListener("click", (e) => {
  console.log(e.target);

  const id = e.target.parentElement.getAttribute("id");
  //! event, bir delete butonundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    //? delete butonunun parent'ini DOM'dan sil
    e.target.parentElement.remove();

    //? Dizinin ilgili elementini sil
    todos = todos.filter((todo) => todo.id !== Number(id));

    //? todos dizisinin son halini localStorage'e sakla
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("fa-check")) {
    //! event, bir okey butonundan geldi ise
    //? ilgili li elementinde checked adinda bir class'i varsa bunu sil
    //?  aksi takdirde ekle (DOM)
    e.target.parentElement.classList.toggle("checked") ? 
    todos.filter((todo) => todo.id==(+e.target.parentElement.id)).map((todo)=>{
      return (todo.completed=true,todo.id=5)
    })
     : 
    todos.filter((todo) => todo.id==(+e.target.parentElement.id)).map((todo)=>{
      return (todo.completed=false,todo.id=5)}) 
    localStorage.setItem("TODOS", JSON.stringify(todos));
