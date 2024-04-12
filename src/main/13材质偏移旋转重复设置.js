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
// 设置纹路坐标偏移
// doorColorTexture.offset.x = 0.5
// doorColorTexture.offset.y = 0.5
// doorColorTexture.offset.set(0, 0)
// 设置纹路角度偏移
// doorColorTexture.rotation = PI / 4 // 45°, 注意：这个不支持set方法
// 设置旋转中心点
// doorColorTexture.center.set(0.5, 0.5)
// 设置纹理重复次数
doorColorTexture.repeat.set(3, 2)
// 设置纹路重复模式 wrapS水平和wrapT垂直方向上纹理的包裹方式
// 一般默认设置为边框拉伸
doorColorTexture.wrapS = THREE.MirroredRepeatWrapping // 镜像重复
doorColorTexture.wrapT = THREE.RepeatWrapping // 一般重复

const geometry = new THREE.BoxGeometry(4, 4, 4, 4, 4, 4)
// const geometry = new THREE.CapsuleGeometry(3, 2)
const material = new THREE.MeshBasicMaterial({ map: doorColorTexture, side: THREE.FrontSide })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(2, 2, 2)
scene.add(cube)

const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    control.update()
}
render()

