import { useEffect, useRef } from "react";
import { Engine, Render, World, Bodies } from "matter-js";
export default function One(props) {
  const scene = useRef();
  const isPressed = useRef(false);
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = 400;
    const ch = 400;
    console.log("hello", cw, ch);
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });
    // Create a simple box
    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);
    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, ch / 2, 50, 50, { isStatic: true, render: { fillStyle: "red" } }),
    ]);
    var current = engine.current;
    Engine.run(current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(current.world, true);
      Engine.clear(current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const sand = Bodies.circle(e.clientX, e.clientY, 3, {
        mass: 10,
        restitution: 0.2,
        friction: 0.1,
        render: {
          fillStyle: "#a68241",
        },
      });
      World.add(engine.current.world, [sand]);
    }
  };

  return (
    <div>
      <div onMouseDown={handleDown} onMouseUp={handleUp} onMouseMove={handleAddCircle}>
        <div ref={scene} style={{ width: "100%", height: "100%" }} />
      </div>
      <h1>Day 1 - Matter JS</h1>
    </div>
  );
}
