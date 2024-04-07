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
console.log(cube);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement)

function render() {
	renderer.render(scene, camera)
	requestAnimationFrame(render)
    // 缩放
    // 方法一：直接设置scale缩放值
    // cube.scale.x = cube.scale.x * 0.75 < 0.125 ? 1 : cube.scale.x * 0.75
    // 方法二：scale.set设置缩放值
    // cube.scale.set(cube.scale.x * 0.75 < 0.125 ? 1 : cube.scale.x * 0.75, 1, 1)

    // 旋转
    // 方法一：直接设置rotation旋转值
    // cube.rotation.x = (cube.rotation.x + 0.01) % (Math.PI * 2)
    // cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2)
    // 方法二：通过rotation的set方法设置旋转值
    cube.rotation.set((cube.rotation.x + 0.01) % (Math.PI * 2), (cube.rotation.y + 0.01) % (Math.PI * 2), 1, 'XYZ')
	controls.update()
}

render()
