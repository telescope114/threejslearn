import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import DoorMaterailJpg from '../assets/textures/minecraft.png'

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
// texture 纹理显示设置
// minFilter 当一个纹素覆盖小于一个像素时，贴图将如何采
// magFilter 当一个纹素覆盖大于一个像素时，贴图将如何采
texture.minFilter = THREE.NearestFilter
texture.magFilter = THREE.NearestFilter
// texture.minFilter = THREE.LinearFilter // 默认值
// texture.magFilter = THREE.LinearFilter // 默认值


const geometry = new THREE.BoxGeometry(4, 4, 4, 4, 4, 4)
// const geometry = new THREE.CapsuleGeometry(3, 2)
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(2, 2, 2)
scene.add(cube)

const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    control.update()
}
render()

