import { Render, World, Bodies, Runner, Engine } from "matter-js"

export default function createRender(scene, engine) {
  const cw: number = 400
  const ch: number = 400
  const render: Render = Render.create({
    element: scene.current,
    engine: engine.current,
    options: {
      width: cw,
      height: ch,
      wireframes: false,
      background: "transparent"
    }
  })
  // Create a simple box
  World.add(engine.current.world, [
    Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
    Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
    Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
    Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
  ])
  for (var x = 0.5; x < cw; x += 10) {
    render.canvas.getContext("2d").moveTo(0, x)
    render.canvas.getContext("2d").lineTo(cw, x)
    render.canvas.getContext("2d").lineWidth = 5
    render.canvas.getContext("2d").strokeStyle = "black"
    render.canvas.getContext("2d").stroke()
  }
  for (var y = 0.5; y < ch; y += 10) {
    render.canvas.getContext("2d").moveTo(0, y)
    render.canvas.getContext("2d").lineTo(ch, y)
  }
  render.canvas.getContext("2d").strokeStyle = "black"
  var current: Engine = engine.current
  var runner = Runner.create()
  Runner.run(runner, engine.current)
  Render.run(render)
  return { cw, ch, render, current }
}
