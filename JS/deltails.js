//  Tăng giảm chi tiết sản phẩm
let quantityInput = document.getElementById('quabtity');
let quantity_value = parseInt(quantityInput.value);
const quantity_minus = document.querySelector('.quantity_minus');
const quantity_Plus = document.querySelector('.quantity_Plus');
const error_deltails = document.querySelector('.error_quantitys');
let render_detail = (quantity) => {
   quantityInput.value = quantity;
}
// Giảm
quantity_minus.addEventListener('click', (event) => {
   event.preventDefault();
   if (quantity_value > 1) {
      quantity_value--;
      render_detail(quantity_value);
      error_deltails.textContent = "";
   } else {
      render_detail(1);
      error_deltails.textContent = "Số lượng tối thiểu là 1";
   }
});

// Tăng
quantity_Plus.addEventListener('click', (event) => {
   event.preventDefault();
   quantity_value++;
   render_detail(quantity_value);
   error_deltails.textContent = "";
});

// Input
quantityInput.addEventListener('input', () => {
   quantity_value = parseInt(quantityInput.value);
   quantity_value = isNaN(quantity_value) ? 1 : Math.max(quantity_value, 1);
   render_detail(quantity_value);
   error_deltails.textContent = "";
});
// Tab 
const openTab = (tabName)=>{
   let i, tabContent, tabBtns;
   // Ẩn tất cả các tab content và loại bỏ class active từ các nút tab
   tabContent = document.getElementsByClassName("tab-content");
   for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
   }
   // Ẩn tất cả các nút tab và loại bỏ class active
   tabBtns = document.getElementsByClassName("tab-btn");
   for (i = 0; i < tabBtns.length; i++) {
      tabBtns[i].classList.remove("active");
   }
   // Hiển thị tab content và đánh dấu là active cho nút tab được chọn
   document.getElementById(tabName + "Tab").classList.add("active");
   event.currentTarget.classList.add("active");
}
