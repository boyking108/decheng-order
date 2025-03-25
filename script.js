const form = document.getElementById('order-form');
const orderList = document.getElementById('order-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const drink = document.getElementById('drink').value;
  const sugar = document.getElementById('sugar').value;
  const ice = document.getElementById('ice').value;

  if (!name || !drink) {
    alert("請填寫完整資訊！");
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${name}：${drink}（${sugar}，${ice}）`;
  orderList.appendChild(li);

  form.reset();
});
