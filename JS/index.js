// thanh cuon
const scoll_top = document.querySelector('.scoll_top');
scoll_top.addEventListener('click',()=>{
   window.scrollTo({
      top:0,
      behavior:'smooth'
   });
})
window.addEventListener('scroll', () => {
   scoll_top.style.display = window.scrollY > 300 ? 'block' : 'none';
});
// navbar fixed
window.addEventListener('scroll', function () {
   var nav = document.querySelector('.nav');
   if (window.scrollY > 0) {
      nav.classList.add('sticky');
   } else {
      nav.classList.remove('sticky');
   }
});
// ------------Tìm kiếm ----------------
const item_search = document.querySelector('.search');
const search_header = document.querySelector('.search_header');
const login = document.querySelector('.login');
const profile_user = document.querySelector('.profile_user');
const toggleDropdown = (clickedElement, dropdownToShow, dropdownToHide) => {
   event.stopPropagation();
   if (clickedElement === dropdownToHide) {
      dropdownToHide.style.display = 'none';
      return;
   }
   dropdownToShow.style.display = 'block';
   dropdownToHide.style.display = 'none';
};
if (item_search && search_header && login && profile_user) {
   item_search.addEventListener('click', (event) => {
      toggleDropdown(item_search, search_header, profile_user);
   });
   login.addEventListener('click', (event) => {
      toggleDropdown(login, profile_user, search_header);
   });
   document.addEventListener('click', (event) => {
      if (!item_search.contains(event.target) && !search_header.contains(event.target) &&
         !login.contains(event.target) && !profile_user.contains(event.target)) {
         search_header.style.display = 'none';
         profile_user.style.display = 'none';
      }
   });
   window.addEventListener('scroll', () => {
      search_header.style.display = 'none';
      profile_user.style.display = 'none';
   });
}
// modal sản phẩm
const btn_view = document.querySelectorAll('.view_js');
const btn_close_modal = document.querySelector('.btn_close a');
const modal = document.querySelector('.modal');
const scollfixed = () => {
   document.body.classList.add('no-scroll');
}
const deletescoll = () => {
   document.body.classList.remove('no-scroll');
}
const showModal = () => {
   modal.style.display = 'block';
   scollfixed();
}
for (let view of btn_view) {
   view.addEventListener('click', showModal)
}
btn_close_modal.addEventListener('click', () => {
   modal.style.display = 'none';
   deletescoll();
})
window.addEventListener('click', (event) => {
   if (event.target === modal) {
      modal.style.display = 'none';
      deletescoll();
   }
})
// Tăng giảm modal
let amountInput = document.getElementById('amount');
let amount_value = parseInt(amountInput.value);
const minus = document.querySelector('.giam');
const plus = document.querySelector('.tang');
const error_quantity = document.querySelector('.error_quantity');
let render = (amount) => {
   amountInput.value = amount;
}
// Giảm
minus.addEventListener('click', (event) => {
   event.preventDefault();
   if (amount_value > 1) {
      amount_value--;
      render(amount_value);
      error_quantity.textContent = "";
   } else {
      render(1);
      error_quantity.textContent = "Số lượng tối thiểu là 1";
   }
});
// Tăng
plus.addEventListener('click', (event) => {
   event.preventDefault();
   amount_value++;
   render(amount_value);
   error_quantity.textContent = "";
});
// Input
amountInput.addEventListener('input', () => {
   amount_value = parseInt(amountInput.value);
   amount_value = isNaN(amount_value) ? 1 : Math.max(amount_value, 1);
   render(amount_value);
   error_quantity.textContent = "";
});
// ===============chi tiết sản phẩm====================
// const breadcrumb = document.querySelectorAll('.breadcrumb li ');
// breadcrumb.forEach((item)=>{
//    item.addEventListener('click',()=>{
//       breadcrumb.forEach((remove)=>{
//          remove.classList.remove('active');
//       })
//       item.classList.add('active');
//    })
// })

