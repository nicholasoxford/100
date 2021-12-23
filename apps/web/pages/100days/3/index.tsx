import { useEffect, useRef } from 'react'
import { createScene, createPointsAndGeometry, addFilterPoints } from 'functions/utils/threeUtils'
import InfoSlot, { infoProps } from 'ui/components/info'
export default function Three() {
  const mountRef = useRef(null)
  useEffect(() => {
    const { scene, renderer, camera, controls } = createScene()
    const sinInfo = createPointsAndGeometry(0x0000ff, scene, 1)
    const sinPoints = sinInfo.points
    const sinGeometry = sinInfo.geometry
    const tanInfo = createPointsAndGeometry('skyblue', scene)
    const tanPoints = tanInfo.points
    const tanGeometry = tanInfo.geometry
    const cosInfo = createPointsAndGeometry('webpurlpe', scene, -1)
    const cosPoints = cosInfo.points
    const cosGeometry = cosInfo.geometry

    renderer.render(scene, camera)
    var animate = function () {
      requestAnimationFrame(animate)
      addFilterPoints(sinPoints, sinGeometry, x => Math.sin(x))
      addFilterPoints(tanPoints, tanGeometry, x => Math.tan(x))
      addFilterPoints(cosPoints, cosGeometry, x => Math.cos(x))
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
  }, [])
  const props: infoProps = {
    day: 3,
    description:
      'Broke out a lot of the hardwork into functions. You can also move the camera around.',
    goal: 'Continue to learn ThreeJS and vizualize tan, cos, and sin functions.'
  }
  return (
    <div style={{ width: '500px' }}>
      <div>
        <InfoSlot {...props} />
        <div ref={mountRef}></div>
      </div>
    </div>
  )
}
