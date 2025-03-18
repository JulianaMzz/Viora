document.getElementById("menu-b").addEventListener("click", function() {
    document.getElementById("menu_lateral").style.left = "0";
})

document.getElementById("fechar").addEventListener("click", function() {
    document.getElementById("menu_lateral").style.left = "-250px";
})




const filterButtons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    cards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});