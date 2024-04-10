import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import DoorMaterailJpg from '../assets/textures/door/color.jpg'

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
const doorColorTexture = textureLoader.load(DoorMaterailJpg)
console.log(doorColorTexture)

const geometry = new THREE.BoxGeometry(2, 2, 2, 4, 4, 4)
const material = new THREE.MeshBasicMaterial({ map: doorColorTexture, side: THREE.DoubleSide })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(1, 1, 1)
scene.add(cube)

const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    control.update()
}
render()

