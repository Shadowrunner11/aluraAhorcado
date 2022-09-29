function drawHead(context){
  context.beginPath()
  context.arc(75, 75, 50, 0, Math.PI * 2, true)
  context.stroke()
}

function drawBody(context){
  context.beginPath()
  context.moveTo(75, 450)
  context.lineTo(75, 125)
  context.stroke()
}

function drawLeftArm(context){
  context.beginPath()
  context.moveTo(275, 150)
  context.lineTo(75, 225)
  context.stroke()
}

export function* generatorHangMan(context){
  yield drawHead(context)
  yield drawBody(context)
  yield drawLeftArm(context)
}