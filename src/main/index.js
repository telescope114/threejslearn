import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import DoorMaterailJpg from '../assets/textures/door/color.jpg'
import DoorAlpha from '../assets/textures/door/alpha.jpg'

const { PI } = Math
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set(0, 0, 20)
scene.add(camera)
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
window.document.documentElement.appendChild(renderer.domElement)

const control = new OrbitControls(camera, renderer.domElement)
control.update()

// 导入纹路
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load(DoorMaterailJpg)
const doorAplhaTexture = textureLoader.load(DoorAlpha)


const geometry = new THREE.BoxGeometry(4, 4, 4, 4, 4, 4)
// const geometry = new THREE.CapsuleGeometry(3, 2)
const material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.FrontSide,
  alphaMap: doorAplhaTexture,
  transparent: true 
})
const cube = new THREE.Mesh(geometry, material)
cube.position.set(2, 2, 2)
scene.add(cube)

// 添加平面
const plane = new THREE.Mesh(
    new THREE.BufferGeometry(4, 4),
    THREE.DoubleSide
)
plane.position.set(10, 0, 0)
scene.add(plane)

const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    control.update()
}
render()

