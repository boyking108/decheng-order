const form = document.getElementById('order-form');
const orderList = document.getElementById('order-list');
const categorySelect = document.getElementById('category');
const drinkSelect = document.getElementById('drink');

const drinks = {
  original: ["紅茶", "綠茶", "春烏龍", "焙烏龍", "香片烏龍"],
  milk: ["奶茶", "烏龍奶茶", "珍珠奶茶", "黃金珍珠奶綠", "焙烏奶茶"],
  fruit: ["檸檬春烏龍", "香橙春烏龍", "甘蔗春烏龍", "青梅春烏龍", "雙柚春烏龍"],
  fresh: ["紅茶鮮奶", "春烏龍鮮奶", "焙烏龍鮮奶", "焙吉鮮奶"],
  foam: ["芝士奶蓋春烏", "芝士奶蓋焙烏", "芝士奶蓋阿華田", "芝士奶蓋焙吉"]
};

categorySelect.addEventListener('change', () => {
  const selected = categorySelect.value;
  drinkSelect.innerHTML = '<option value="">請選擇</option>';
  if (drinks[selected]) {
    drinks[selected].forEach(drink => {
      const option = document.createElement('option');
      option.value = drink;
      option.textContent = drink;
      drinkSelect.appendChild(option);
    });
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const drink = document.getElementById('drink').value;
  const sugar = document.getElementById('sugar').value;
  const ice = document.getElementById('ice').value;

  const li = document.createElement('li');
  li.textContent = `${name}：${drink}（${sugar}，${ice}）`;
  orderList.appendChild(li);

  form.reset();
  drinkSelect.innerHTML = '<option value="">請先選擇類別</option>';
});
