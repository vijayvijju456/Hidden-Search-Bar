const btnClick =  document.querySelector('.btn');
const inputBox = document.querySelector('.input');

btnClick.addEventListener('click', () => {
    inputBox.classList.toggle('active');
    btnClick.classList.toggle('active');
    inputBox.focus();
});