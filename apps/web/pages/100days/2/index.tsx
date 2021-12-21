import * as THREE from "three"
import { useRef, useEffect } from "react"
import InfoSlot, { infoProps } from "ui/info"

export default function Two() {
  const mountRef = useRef(null)
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(500, 500)
    console.log("window.innerWidth", window.innerWidth)
    document.body.appendChild(renderer.domElement)
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)
    const scene = new THREE.Scene()
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
    const points = []
    points.push(new THREE.Vector3(0, 0, 0))

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(geometry, material)
    scene.add(line)

    renderer.render(scene, camera)
    var animate = function () {
      requestAnimationFrame(animate)
      for (let i = 0; i < points.length; i++) {
        points[i].x += 0.5
        points[i].y += Math.sin(points[i].x)
      }

      points.push(new THREE.Vector3(0, 0, 0))

      geometry.setFromPoints(points)
      renderer.render(scene, camera)
    }
    animate()
    return () => {}
  }, [])

  const props: infoProps = {
    day: 2,
    description:
      "Visualizing Some Maths. Although this is a very basic visualisation of a sin wave, it's something I've wanted to do for awhile.",
    goal: "I created another workspace in my repo and installed it as a dependency."
  }

  return (
    <div style={{ width: "500px" }}>
      <InfoSlot {...props} />
      <div>
        <div ref={mountRef}></div>
      </div>
    </div>
  )
}
