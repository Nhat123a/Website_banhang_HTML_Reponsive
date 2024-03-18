const dropShopElement = document.getElementById('drop_shop');
const height = dropShopElement.offsetHeight;
console.log(height);

const minu_shop = document.querySelector('.chevon_minus');
const category_list = document.querySelector('.category_list');
const chevon_category = document.getElementById('chevron_icon');
let isOpen = false;

dropShopElement.addEventListener('click', () => {
   if (isOpen) {
      category_list.style.height = '49px';
      chevon_category.innerHTML = '<i class="fas fa-plus"></i>';
   } else {;
      category_list.style.height = 'auto';
      chevon_category.innerHTML = '<i class="fas fa-minus"></i>';
   }
   isOpen = !isOpen;
})
