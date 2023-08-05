import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

// Get the canvas element
const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);

// Create a scene
const scene = new BABYLON.Scene(engine);

// Create a camera
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 5, new BABYLON.Vector3(0, 0, 0), scene);

// Attach the camera to the canvas
camera.attachControl(canvas, true);

// for light
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

// Create a cube
const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

// Run the render loop
engine.runRenderLoop(() => {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener('resize', () => {
    engine.resize();
});
