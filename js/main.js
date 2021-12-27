const editor = document.getElementById('editor');
const preview = document.querySelector('#preview');
import { initText } from "./InitialText.js";

const updatePreview = ()=> {
    const text = editor.value;
    preview.innerHTML = marked(text);
};

editor.addEventListener('keyup',updatePreview);

window.onload = ()=>{
  editor.innerHTML = initText
  preview.innerHTML = marked(initText);
}
