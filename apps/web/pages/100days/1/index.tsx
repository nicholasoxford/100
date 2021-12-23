import { useEffect, useRef } from 'react'
import { Engine, Render, World, Bodies, Runner } from 'matter-js'
import InfoSlot, { infoProps } from 'ui/components/info'
import createRender from 'functions/matterjs/createRender'
export default function One() {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())

  useEffect(() => {
    var { cw, ch, render, current } = createRender(scene, engine)

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, ch / 2, 50, 50, {
        isStatic: true,
        render: { fillStyle: 'red' }
      })
    ])

    return () => {
      Render.stop(render)
      World.clear(current.world, true)
      Engine.clear(current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }
  const props: infoProps = {
    day: 1,
    description: 'Learning to use Matter - a la Antfu',
    goal: 'Get a Turbo monorepo set up and deploy to Vercel.'
  }

  const handleAddCircle = e => {
    if (isPressed.current) {
      const sand = Bodies.circle(e.clientX, e.clientY, 3, {
        mass: 10,
        restitution: 0.2,
        friction: 0.1,
        render: {
          fillStyle: '#a68241'
        }
      })
      World.add(engine.current.world, [sand])
    }
  }

  return (
    <div style={{ width: '400px' }}>
      <div onMouseDown={handleDown} onMouseUp={handleUp} onMouseMove={handleAddCircle}>
        <div ref={scene} style={{ width: '100%', height: '100%' }} />
      </div>
      <InfoSlot {...props} />
    </div>
  )
}
