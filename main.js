import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';





const viewer = document.querySelector('#viewer-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, viewer.offsetWidth/viewer.offsetHeight, 0.1, 1000 );



const light = new THREE.AmbientLight( 0x404040, 25 ); // soft white light
const dl = new THREE.DirectionalLight( 0x404040, 80 );
scene.add( dl );
scene.add( light );


const container = document.querySelector('.components-list');




const renderer = new THREE.WebGLRenderer();
renderer.setSize( viewer.offsetWidth, viewer.offsetHeight );
renderer.setAnimationLoop( animate );
viewer.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const loader = new OBJLoader();
const mtlLoader = new MTLLoader();
mtlLoader.load('/MTLfiles/structurev1.mtl', (materials) => {
      materials.preload();
      loader.setMaterials(materials);
      loader.load( '/OBJfiles/structurev1.obj', (object) => {


            scene.add( object );
            //const allComponents = getAllComponents()
            //addToComponentList(allComponents);

            //container.addEventListener('click', () => {
            //      toggleVisibility(allComponents);
            //})
            //console.log(allComponents)
            

      },
      function (xhr) {
            // This optional function monitors the progress of the loading process
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
          function (error) {
            // This optional function runs if there is an error
            console.error('An error occurred while loading the OBJ file:', error);
      })
})

camera.position.z = 25;
controls.update();

function animate() {
	renderer.render( scene, camera );
}

const getAllComponents = () => {
      const allComponents = scene.children.find(item => item.type === 'Group').children
      return allComponents
}
const addToComponentList = (components) => {
      components.forEach((e) => {
            const name = e.name;
            createComponent(name, e);
      })

}
const createComponent = (el) => {
      const container = document.querySelector('.components-list');
      const name = el;

      const li = document.createElement('li')
      const label = document.createElement('label')
      const input = document.createElement('input')

      input.type = 'checkbox';
      label.name = name;
      input.name = name;
      label.innerHTML = name;

      li.appendChild(input)
      li.appendChild(label)
      container.appendChild(li)
      input.checked = true;
      li.classList.add('components')
      input.classList.add('component-input')
}

const toggleVisibility = (objs) => {
      const elList = document.querySelectorAll('.component-input')
      elList.forEach((e) => {
            let com = scene.getObjectByName(e.name)
            if (e.checked){
                  
                  com.visible = true
                  console.log(com)
            }else{
                  com.visible = false
                  console.log(com)
            }
      })
}

