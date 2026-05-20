import * as THREE from "three";

type Cleanup = () => void;

export const initThreeLogo = (container: HTMLDivElement): Cleanup => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0, 4);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xc9a84c,
    roughness: 0.3,
    metalness: 0.9,
  });
  const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.4,
    metalness: 0.8,
  });

  const group = new THREE.Group();

  const legGeometry = new THREE.BoxGeometry(0.18, 1.3, 0.18);
  const crossGeometry = new THREE.BoxGeometry(0.6, 0.14, 0.18);
  const nLegGeometry = new THREE.BoxGeometry(0.18, 1.3, 0.18);
  const nBridgeGeometry = new THREE.BoxGeometry(0.18, 1.3, 0.18);

  const leftLeg = new THREE.Mesh(legGeometry, goldMaterial);
  leftLeg.position.set(-0.7, 0, 0);

  const rightLeg = new THREE.Mesh(legGeometry, goldMaterial);
  rightLeg.position.set(-0.2, 0, 0);

  const cross = new THREE.Mesh(crossGeometry, goldMaterial);
  cross.position.set(-0.45, 0, 0);

  const nLeft = new THREE.Mesh(nLegGeometry, darkMaterial);
  nLeft.position.set(0.35, 0, 0);

  const nRight = new THREE.Mesh(nLegGeometry, darkMaterial);
  nRight.position.set(0.85, 0, 0);

  const nBridge = new THREE.Mesh(nBridgeGeometry, darkMaterial);
  nBridge.rotation.z = -0.5;
  nBridge.scale.set(1, 0.9, 1);
  nBridge.position.set(0.6, 0, 0);

  group.add(leftLeg, rightLeg, cross, nLeft, nRight, nBridge);
  scene.add(group);

  const topLight = new THREE.PointLight(0xc9a84c, 1.5, 10);
  topLight.position.set(2, 2, 3);
  scene.add(topLight);

  const fillLight = new THREE.PointLight(0xffffff, 0.6, 10);
  fillLight.position.set(-2, -2, 3);
  scene.add(fillLight);

  const ambient = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(ambient);

  let targetX = 0;
  let targetY = 0;

  const handleMouseMove = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    targetX = x * 0.4;
    targetY = y * 0.4;
  };

  const handleResize = () => {
    const nextWidth = container.clientWidth;
    const nextHeight = container.clientHeight;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);

  const animate = () => {
    group.rotation.y += 0.003;
    group.rotation.x += (targetY - group.rotation.x) * 0.05;
    group.rotation.z += (targetX - group.rotation.z) * 0.05;
    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);

  return () => {
    renderer.setAnimationLoop(null);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
    container.removeChild(renderer.domElement);
    renderer.dispose();
  };
};
