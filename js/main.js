import { generatorHangMan } from "./Ahorcado.js"
import { $, createCharacterSpacesDOM, getRandomWord, resolveWord } from "./utils/main.js"

const palabra = getRandomWord()
const resolvedWord = resolveWord(palabra)


const context = $('canvas').getContext('2d')
const generator = generatorHangMan(context)

const characterElements = createCharacterSpacesDOM(palabra.length)

document.addEventListener('keyup', ({key})=>{
  if(resolvedWord[key])
    return resolvedWord[key]
      ?.forEach((_index)=>{
      characterElements[_index].textContent = key
    })

  console.log('te equivocaste')
  generator.next().done && console.log('Se acabo el juego, perdiste') // if(done) console.log('se acabo el juego')
})


