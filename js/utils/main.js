export function $(selector, node = document.body){
  return node.querySelector(selector)
}

export function $$(selector, node = document.body){
  return [...node.querySelectorAll(selector)]
}

/**
 * @param  {string} word
 */
export function resolveWord(word){
  const mapWord = {}
  for(let i = 0; i < word.length; i++){
    if(!mapWord[word[i]])
      mapWord[word[i]] = []
    
      mapWord[word[i]].push(i)
  }

  return mapWord
}

export function createCharacterSpacesDOM(length, node = document.body){
  const children = []

  for(let i=0; i<length; i++){
    const parrafo = document.createElement('p')
    parrafo.classList.add('character')
    node.appendChild(parrafo)
    children.push(parrafo)
  }

  return children
}

export function isValidCharacter(char){
  return (/[a-z]/).test(char)
}

export function saveWord(word){
  const words = JSON.parse(localStorage.getItem('words') ?? '[]')

  if(words.includes(word))
    return

  localStorage
    .setItem(
      'words',
      JSON.stringify([...words, word])
    )
}

export function getRandomWord(){
  const words = JSON.parse(localStorage.getItem('words') ?? '[]')
  console.log("🚀 ~ file: main.js ~ line 56 ~ getRandomWord ~ words", words)

  const randomNumber = Math.round(Math.random()*(words.length-1))
  
  return words[randomNumber]
}