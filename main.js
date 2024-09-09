import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';





const viewer = document.querySelector('#viewer-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF0FCFF);
const camera = new THREE.PerspectiveCamera( 75, viewer.offsetWidth/viewer.offsetHeight, 0.1, 1000 );



const light = new THREE.AmbientLight( 0x404040, 25 ); // soft white light
const dl = new THREE.DirectionalLight( 0x404040, 80 );
scene.add( dl );
scene.add( light );


const container = document.querySelectorAll('.components-list');




const renderer = new THREE.WebGLRenderer();
renderer.setSize( viewer.offsetWidth, viewer.offsetHeight );
renderer.setAnimationLoop( animate );
viewer.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const loader = new OBJLoader();
const mtlLoader = new MTLLoader();
mtlLoader.load('assets/MTLfiles/ModelAirv7.mtl', (materials) => {
      materials.preload();
      loader.setMaterials(materials);
      loader.load( 'assets/OBJfiles/ModelAirv7.obj', (object) => {


            scene.add( object );
            const allComponents = getAllComponents()
            //addToComponentList(allComponents);
            separateParts(allComponents)
            container.forEach((e) => {
                  e.addEventListener('click', () => {
                        toggleVisibility(allComponents);
                  })
            })
            
            

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

camera.position.z = 8;
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
      const container = document.querySelector('.structures-list');
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
            }else{
                  com.visible = false
            }
      })
}
const separateParts = (list) => {
      const parts = list;
      parts.forEach( (e) => {

            if (e.name.split('_')[0] === 'str') {
                  createComponent(e.name)
            }else {
                  let partsList = document.querySelector('.parts-list')
                  const name = e.name;

                  const li = document.createElement('li')
                  const label = document.createElement('label')
                  const input = document.createElement('input')

                  input.type = 'checkbox';
                  label.name = name;
                  input.name = name;
                  label.innerHTML = name;

                  li.appendChild(input)
                  li.appendChild(label)
                  partsList.appendChild(li)
                  input.checked = true;
                  li.classList.add('components')
                  input.classList.add('component-input')
            }

      })
}