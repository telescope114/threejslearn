import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 导入动画库
import gsap from 'gsap'


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
// 设置时钟

// 设置动画
gsap.to(cube.position, {
    x: 5,
    ease: "power1.in",
    duration: 5,
    onComplete: () => {
        console.log('animation has finished.')
    }
})
gsap.to(cube.rotation, {
    x: Math.PI * 2,
    ease: "power1.in",
    duration: 5
})

const clock = new THREE.Clock()
function render() {
	renderer.render(scene, camera)
	requestAnimationFrame(render)
	controls.update()
}

render()
