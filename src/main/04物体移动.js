import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const scene = new THREE.Scene()
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)

camera.position.set(0, 0, 10)
scene.add(camera)

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x00ffff})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add( cube )

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement)

function render() {
	renderer.render(scene, camera)
	requestAnimationFrame(render)
    // 第一种赋值方法/修改方法
    // cube.position.set((cube.position.x + 0.1) % 60, 0, 0)
    // 第二章修改方法
    cube.position.x = (cube.position.x + 0.1) % 6
	controls.update()
}

render()
