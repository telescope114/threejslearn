import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap/gsap-core'

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

// const geometry = new THREE.BufferGeometry()
// const positionArray = new Float32Array([
//     1.0, 1.0, 0,
//     -1.0, 1.0, 0,
//     -1.0, -1.0, 0,
//     -1.0, -1.0, 0,
//     1.0, -1.0, 0,
//     1.0, 1.0, 0,
// ])
// geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
const geometry = new THREE.CircleGeometry(3, 100, Math.PI, Math.PI / 2)
const material1 = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.FrontSide })
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ffff, side: THREE.BackSide })
const circle1 = new THREE.Mesh(geometry, material1)
const circle2 = new THREE.Mesh(geometry, material2)
scene.add(circle1)
scene.add(circle2)

gsap.to(circle1.rotation, {
    x: PI * 2,
    y: PI * 2,
    z: PI * 2,
    ease: 'none',
    duration: 5,
    repeat: -1,
})

gsap.to(circle2.rotation, {
    x: PI * 2,
    y: PI * 2,
    z: PI * 2,
    ease: 'none',
    duration: 5,
    repeat: -1,
})

const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    control.update()
}
render()

