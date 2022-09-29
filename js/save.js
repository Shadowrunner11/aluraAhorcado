import { $, saveWord } from "./utils/main.js";

$('#save-word').addEventListener('click', (e)=>{
  e.preventDefault()
  try {
    saveWord($('#word').value)
  } catch (error) {
    console.log("🚀 ~ file: save.js ~ line 8 ~ $ ~ error", error)
    alert('ups algo salio mal')
  }
})

