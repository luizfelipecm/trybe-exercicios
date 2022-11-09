import validator from 'validator';
import './style.css';

const resultado = document.querySelector('h2');
const botao = document.getElementById('button');

botao.addEventListener('click', (param) => {
  param.preventDefault();
  const select = document.getElementById('validators');
  const option = select.options[select.selectedIndex].innerText;
  const texto = document.getElementById('tovalidate').value;
  if (option === 'isFloat') {
    const isFloat = validator.isFloat(texto);
    resultado.innerText = isFloat;
  }
  if (option === 'isInt') {
    const isInt = validator.isInt(texto);
    resultado.innerText = isInt;
  }
  if (option === 'isLowercase') {
    const isLowercase = validator.isLowercase(texto);
    resultado.innerText = isLowercase;
  }
  if (option === 'isUppercase') {
    const isUppercase = validator.isUppercase(texto);
    resultado.innerText = isUppercase;
  }
  if (option === 'isNumeric') {
    const isNumeric = validator.isNumeric(texto);
    resultado.innerText = isNumeric;
  }
});
