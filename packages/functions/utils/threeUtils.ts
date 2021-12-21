import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import filterInPlace from 'functions/utils/filterInPlace'

export function createScene(width = 500, height = 500) {
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  console.log('window.innerWidth', window.innerWidth)
  document.body.appendChild(renderer.domElement)
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
  camera.position.set(-50, 0, 10)
  //   camera.lookAt(0, -20, 100)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()
  const scene = new THREE.Scene()
  return { scene, renderer, camera, controls }
}
export function addFilterPoints(
  points: THREE.Vector3[],
  geometry: THREE.BufferGeometry,
  mathMethod: (x: any) => number
) {
  for (let i = 0; i < points.length; i++) {
    points[i].x += 0.5
    points[i].y += mathMethod(points[i].x)
  }

  points.push(new THREE.Vector3(0, 0, points[0].z))
  filterInPlace(points, (point: THREE.Vector3) => point.x < 250)
  geometry.setFromPoints(points)
}
export function createPointsAndGeometry(color: THREE.ColorRepresentation = 0x0000ff, scene: THREE.Scene, zOffset = 0) {
  const points = []
  const material = new THREE.LineBasicMaterial({ color: color })

  points.push(new THREE.Vector3(0, 0, zOffset))
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const Line = new THREE.Line(geometry, material)
  scene.add(Line)
  const response = { points, geometry } as pointAndGeo
  return response
}
type pointAndGeo = {
  points: THREE.Vector3[]
  geometry: THREE.BufferGeometry
}
