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

// 创建几何体
for (let i = 0; i < 50; i ++) {
    // 每个三角形需要三个顶点，每个顶点需要3哥值
    const geometry = new THREE.BufferGeometry()
    const positionArray = new Float32Array(9)
    for (let j = 0; j < 9 ; j ++) {
        positionArray[j] = Math.random() * 5
    }
    const color = new THREE.Color(Math.random(), Math.random(), Math.random())
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 - Math.random() * 0.5 })
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
}

// const geometry = new THREE.BufferGeometry()
// const vertices = new Float32Array([
//     -1.0, -1.0, 1.0,
//     1.0, -1.0, 1.0,
//     1.0, 1.0, 1.0,
//     1.0, 1.0, 1.0,
//     -1.0, 1.0, 1.0,
//     -1.0, -1.0, 1.0
// ])
// geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
// const material = new THREE.MeshBasicMaterial({color: 0x00ffff})
// const cube = new THREE.Mesh(geometry, material)
// console.log(cube)
// scene.add(cube)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true // 设置阻尼器

const clock = new THREE.Clock()
function render() {
	renderer.render(scene, camera)
	requestAnimationFrame(render)
	controls.update()
}

render()

console.log(cubeGeometry)

// 监听画面变化，更新渲染画面
window.addEventListener('resize', () => {
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight
    // 更新摄像机的投影矩阵
    camera.updateProjectionMatrix()
    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight)
    // 设置渲染器像素比
    renderer.setPixelRatio(window.devicePixelRatio)
})

// renderer.domElement.addEventListener('double')

window.addEventListener('dblclick', function() {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // 退出全屏
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome, Safari和Opera
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // Internet Explorer
      }
    } else {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen(); // 进入全屏
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen(); // Firefox
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(); // Chrome, Safari和Opera
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(); // Internet Explorer
      }
    }
  });
