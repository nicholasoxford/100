import { useEffect, useRef } from 'react'

import InfoSlot, { infoProps } from 'ui/components/info'

import * as THREE from 'three'
export default function Three() {
  const mountRef = useRef(null)
  let scene, camera, renderer

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(100, 3, 1, 1000)
  useEffect(() => {
    renderer = new THREE.WebGLRenderer()
    camera.position.z = 1
    camera.position.y = -10
    camera.rotation.x = 1.16
    camera.rotation.y = -0.12
    camera.rotation.z = 0.27
    let ambient = new THREE.AmbientLight('#ffffff', 0.5)
    scene.add(ambient)
    renderer.setSize(500, 500)
    scene.fog = new THREE.FogExp2(0x03544e, 0.001)
    renderer.setClearColor(scene.fog.color)
    document.body.appendChild(renderer.domElement)

    let cloudParticles = createGas(scene)

    renderer.render(scene, camera)

    var animate = function () {
      requestAnimationFrame(animate)
      cloudParticles.forEach(p => {
        p.rotation.z -= 0.03
      })
      renderer.render(scene, camera)
    }
    animate()
  }, [camera, renderer, scene])

  const props: infoProps = {
    day: 4,
    description:
      'Less impressive day on the threejs front, but I got layout working and had a few failed attempts at vizualization.',
    goal: 'Onward and upward.'
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
function createGas(scene: any) {
  let loader = new THREE.TextureLoader()
  let directionalLight = new THREE.DirectionalLight(0xff8c19)
  directionalLight.position.set(0, 0, 1)
  scene.add(directionalLight)
  let cloudParticles = []
  const texture = loader.load('/static/smoke.png')
  let cloudGeo = new THREE.PlaneBufferGeometry(500, 500)
  let cloudMaterial = new THREE.MeshLambertMaterial({
    map: texture,
    transparent: true
  })
  let orangeLight = new THREE.PointLight(0xcc6600, 50, 450, 1.7)
  orangeLight.position.set(200, 300, 100)
  scene.add(orangeLight)
  let redLight = new THREE.PointLight(0xd8547e, 50, 450, 1.7)
  redLight.position.set(100, 300, 100)
  scene.add(redLight)
  let blueLight = new THREE.PointLight(0x3677ac, 50, 450, 1.7)
  blueLight.position.set(300, 300, 200)
  scene.add(blueLight)
  for (let p = 0; p < 50; p++) {
    let cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
    cloud.position.set(Math.random() * 800 - 400, 500, Math.random() * 500 - 500)
    cloud.rotation.x = 1.16
    cloud.rotation.y = -0.12
    cloud.rotation.z = Math.random() * 2 * Math.PI
    cloud.material.opacity = 0.55
    cloudParticles.push(cloud)
    scene.add(cloud)
  }
  return cloudParticles
}
export async function getStaticProps(context) {
  return {
    props: {} // will be passed to the page component as props
  }
}
