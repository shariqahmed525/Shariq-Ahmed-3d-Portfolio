import * as THREE from "three";
import debounce from "lodash/debounce";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

export const preload = () => {
  let manager = new THREE.LoadingManager();
  manager.onLoad = async function () {
    const theme = localStorage.getItem("theme");
    const isDark = !theme || theme === "dark";
    const environment = new Environment(typo, particle, isDark);
  };

  var typo = null;
  const loader = new FontLoader(manager);
  const font = loader.load(
    "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json",
    function (font) {
      typo = font;
    }
  );
  const particle = new THREE.TextureLoader(manager).load(
    "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
  );
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
)
  preload();
else document.addEventListener("DOMContentLoaded", preload);

class Environment {
  constructor(font, particle, isDark) {
    this.font = font;
    this.particle = particle;
    this.container = document.querySelector("#magic");
    this.scene = new THREE.Scene();
    this.isDark = isDark;
    this.createCamera();
    this.createRenderer();
    this.setup();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  setup() {
    this.createParticles = new CreateParticles(
      this.scene,
      this.font,
      this.particle,
      this.camera,
      this.renderer,
      this.isDark
    );
  }

  render() {
    this.createParticles.render();
    this.renderer.render(this.scene, this.camera);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.container.clientWidth / this.container.clientHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 100);
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.setClearAlpha(0);

    this.container.appendChild(this.renderer.domElement);

    this.renderer.setAnimationLoop(() => {
      this.render();
    });
  }

  onWindowResize() {
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }

  cleanup() {
    this.renderer.dispose();
    this.scene.clear();
  }
}

class CreateParticles {
  constructor(scene, font, particleImg, camera, renderer, isDark) {
    this.scene = scene;
    this.font = font;
    this.particleImg = particleImg;
    this.camera = camera;
    this.renderer = renderer;
    this.isDark = isDark;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-200, 200);

    this.colorChange = new THREE.Color();

    this.buttom = false;

    this.data = {
      text: "Innovative Solutions\n Develop With Shariq",
      amount: 400,
      particleSize: 2,
      particleColor: 0xffffff,
      textSize: 7,
      area: 250,
      ease: 0.07,
    };

    this.setup();
    this.bindEvents();
  }

  setup() {
    const geometry = new THREE.PlaneGeometry(
      this.visibleWidthAtZDepth(100, this.camera),
      this.visibleHeightAtZDepth(100, this.camera)
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.0,
    });
    this.planeArea = new THREE.Mesh(geometry, material);
    this.planeArea.visible = false;

    this.createText();

    this.observeMutation();
  }

  bindEvents() {
    document.addEventListener("mousedown", this.onMouseDown.bind(this));
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));

    document.addEventListener("touchstart", this.OnTouchStart.bind(this));
    document.addEventListener("touchmove", this.OnTouchMove.bind(this));
    document.addEventListener("touchend", this.OnTouchEnd.bind(this));

    this.debouncedResize = debounce(this.onWindowResize.bind(this), 200);
    window.addEventListener("resize", this.debouncedResize);
  }

  observeMutation() {
    const targetNode = document.getElementById("magic");
    const config = { attributes: true, attributeOldValue: true };

    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "disabled"
        ) {
          if (mutation.oldValue === null) {
            // Magic no longer in frame
            this.clearText();
          } else {
            // Magic is now in frame
            this.calculateMobile();
            this.calculateTextSize();
            this.clearText();
            this.createText();
          }
        }
      }
    }.bind(this);

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    this.observer.observe(targetNode, config);
  }

  onWindowResize() {
    this.calculateMobile();
    this.calculateTextSize();
    this.clearText();
    this.createText();
  }

  onMouseDown() {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    this.currenPosition = this.camera.position
      .clone()
      .add(dir.multiplyScalar(distance));

    const pos = this.particles.geometry.attributes.position;
    this.buttom = true;
    this.data.ease = 0.01;
  }

  onMouseUp() {
    this.buttom = false;
    this.data.ease = 0.05;
  }

  onMouseMove() {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  OnTouchStart(event) {
    this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = (event.touches[0].clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    this.currenPosition = this.camera.position
      .clone()
      .add(dir.multiplyScalar(distance));

    const pos = this.particles.geometry.attributes.position;
    this.buttom = true;
    this.data.ease = 0.01;
  }

  OnTouchEnd(event) {
    this.buttom = false;
    this.data.ease = 0.05;
  }

  OnTouchMove(event) {
    this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = (event.touches[0].clientY / window.innerHeight) * 2 + 1;
  }

  render(level) {
    const time = ((0.001 * performance.now()) % 12) / 12;
    const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObject(this.planeArea);

    const baseHue = this.isDark ? 0.5 : 0;
    const baseLightness = this.isDark ? 0.7 : 0;

    if (intersects.length > 0) {
      const pos = this.particles.geometry.attributes.position;
      const copy = this.geometryCopy.attributes.position;
      const coulors = this.particles.geometry.attributes.customColor;
      const size = this.particles.geometry.attributes.size;

      const mx = intersects[0].point.x;
      const my = intersects[0].point.y;
      const mz = intersects[0].point.z;

      for (var i = 0, l = pos.count; i < l; i++) {
        const initX = copy.getX(i);
        const initY = copy.getY(i);
        const initZ = copy.getZ(i);

        let px = pos.getX(i);
        let py = pos.getY(i);
        let pz = pos.getZ(i);
        if (this.isDark) {
          this.colorChange.setHSL(0.5, 1, 1);
        } else {
          this.colorChange.setHSL(0, 1, 0);
        }
        coulors.setXYZ(
          i,
          this.colorChange.r,
          this.colorChange.g,
          this.colorChange.b
        );
        coulors.needsUpdate = true;

        size.array[i] = this.data.particleSize;
        size.needsUpdate = true;

        let dx = mx - px;
        let dy = my - py;
        const dz = mz - pz;

        const mouseDistance = this.distance(mx, my, px, py);
        let d = (dx = mx - px) * dx + (dy = my - py) * dy;
        const f = -this.data.area / d;

        if (this.buttom) {
          const t = Math.atan2(dy, dx);
          px -= f * Math.cos(t);
          py -= f * Math.sin(t);
          if (this.isDark) {
            this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
          } else {
            this.colorChange.setHSL(0 + zigzagTime, 1.0, 0.1);
          }
          coulors.setXYZ(
            i,
            this.colorChange.r,
            this.colorChange.g,
            this.colorChange.b
          );
          coulors.needsUpdate = true;

          if (
            px > initX + 70 ||
            px < initX - 70 ||
            py > initY + 70 ||
            py < initY - 70
          ) {
            if (this.isDark) {
              this.colorChange.setHSL(0.15, 1.0, 0.5);
            } else {
              this.colorChange.setHSL(0, 1.0, 0);
            }
            coulors.setXYZ(
              i,
              this.colorChange.r,
              this.colorChange.g,
              this.colorChange.b
            );
            coulors.needsUpdate = true;
          }
        } else {
          if (mouseDistance < this.data.area) {
            if (i % 5 == 0) {
              const t = Math.atan2(dy, dx);
              px -= 0.03 * Math.cos(t);
              py -= 0.03 * Math.sin(t);

              if (this.isDark) {
                this.colorChange.setHSL(0.4, 0.6, 0.8);
              } else {
                this.colorChange.setHSL(0.01, 1.0, 0);
              }
              coulors.setXYZ(
                i,
                this.colorChange.r,
                this.colorChange.g,
                this.colorChange.b
              );
              coulors.needsUpdate = true;

              size.array[i] = this.data.particleSize / 1.2;
              size.needsUpdate = true;
            } else {
              const t = Math.atan2(dy, dx);
              px += f * Math.cos(t);
              py += f * Math.sin(t);

              pos.setXYZ(i, px, py, pz);
              pos.needsUpdate = true;

              size.array[i] = this.data.particleSize * 1.3;
              size.needsUpdate = true;
            }

            if (
              px > initX + 10 ||
              px < initX - 10 ||
              py > initY + 10 ||
              py < initY - 10
            ) {
              if (this.isDark) {
                this.colorChange.setHSL(0.4, 0.6, 0.8);
              } else {
                this.colorChange.setHSL(0.5, 1.0, 0.8);
              }
              coulors.setXYZ(
                i,
                this.colorChange.r,
                this.colorChange.g,
                this.colorChange.b
              );
              coulors.needsUpdate = true;

              size.array[i] = this.data.particleSize / 1.8;
              size.needsUpdate = true;
            }
          }
        }

        px += (initX - px) * this.data.ease;
        py += (initY - py) * this.data.ease;
        pz += (initZ - pz) * this.data.ease;

        pos.setXYZ(i, px, py, pz);
        pos.needsUpdate = true;
      }
    }
  }

  calculateMobile() {
    const screenWidth = window.innerWidth;
    const mobileThreshold = 480;
    const tabletThreshold = 768;
    const laptopThreshold = 992;
    const desktopThreshold = 1280;

    // Match device type with screen size and adjust data parameters
    if (screenWidth >= desktopThreshold) {
      // Big Desktop Size
      this.data.amount = 400;
      this.data.particleSize = 2;
      this.data.text = "Innovative Solutions\n Develop With Shariq";
      (this.data.particleColor = 0xffffff), (this.data.textSize = 7);
      this.data.area = 250;
      this.data.ease = 0.07;
    } else if (
      screenWidth >= laptopThreshold &&
      screenWidth < desktopThreshold
    ) {
      // Laptop Size
      this.data.amount = 300;
      this.data.particleSize = 1.75;
      this.data.text = "Innovative Solutions\n Develop With Shariq";
      (this.data.particleColor = 0xffffff), (this.data.textSize = 5);
      this.data.area = 200;
      this.data.ease = 0.06;
    } else if (
      screenWidth >= tabletThreshold &&
      screenWidth < laptopThreshold
    ) {
      // Tablet Size
      this.data.amount = 250;
      this.data.particleSize = 1.5;
      this.data.text = "Innovative Solutions\n Develop With Shariq";
      (this.data.particleColor = 0xffffff), (this.data.textSize = 4);
      this.data.area = 150;
      this.data.ease = 0.05;
    } else if (screenWidth < tabletThreshold && screenWidth > mobileThreshold) {
      // Big Mobile Size
      this.data.amount = 200;
      this.data.particleSize = 1.25;
      this.data.text = "  Innovative\n   Solutions\nDevelop With\n      Shariq";
      (this.data.particleColor = 0xffffff), (this.data.textSize = 3.5);
      this.data.area = 100;
      this.data.ease = 0.04;
    } else if (screenWidth <= mobileThreshold) {
      this.data.amount = 125;
      this.data.particleSize = 1;
      this.data.text = "  Innovative\n   Solutions\nDevelop With\n      Shariq";
      (this.data.particleColor = 0xffffff), (this.data.textSize = 3);
      this.data.area = 50;
      this.data.ease = 0.03;
    }
  }

  calculateTextSize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const baseTextSize = this.data.textSize;
    const scaleFactor = 0.00390625;

    // Calculate the dynamic text size based on the screen resolution
    this.data.textSize =
      baseTextSize + Math.min(screenWidth, screenHeight) * scaleFactor;
  }

  clearText() {
    this.scene.remove(this.particles);
    this.geometryCopy.clearGroups();
  }

  createText() {
    let thePoints = [];
    this.calculateMobile();
    this.calculateTextSize();
    let shapes = this.font.generateShapes(this.data.text, this.data.textSize);
    let geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    const yMid =
      (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;

    geometry.center();

    let holeShapes = [];

    for (let q = 0; q < shapes.length; q++) {
      let shape = shapes[q];

      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          let hole = shape.holes[j];
          holeShapes.push(hole);
        }
      }
    }
    shapes.push.apply(shapes, holeShapes);

    let colors = [];
    let sizes = [];

    for (let x = 0; x < shapes.length; x++) {
      let shape = shapes[x];

      const amountPoints =
        shape.type == "Path" ? this.data.amount / 2 : this.data.amount;

      let points = shape.getSpacedPoints(amountPoints);

      points.forEach((element, z) => {
        const a = new THREE.Vector3(element.x, element.y, 0);
        thePoints.push(a);
        colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
        sizes.push(1);
      });
    }

    let geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
    geoParticles.translate(xMid, yMid, 0);

    geoParticles.setAttribute(
      "customColor",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    geoParticles.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(sizes, 1)
    );

    const vertexShaderSource = `
			attribute float size;
			attribute vec3 customColor;
			varying vec3 vColor;

			void main() {
				vColor = customColor;
				vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
				gl_PointSize = size * (300.0 / -mvPosition.z);
				gl_Position = projectionMatrix * mvPosition;
			}
		`;

    const fragmentShaderSource = `
			uniform vec3 color;
			uniform sampler2D pointTexture;
			varying vec3 vColor;

			void main() {
				gl_FragColor = vec4(color * vColor, 1.0);
				gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
			}
		`;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        pointTexture: { value: this.particleImg },
      },
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,

      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    this.particles = new THREE.Points(geoParticles, material);
    this.scene.add(this.particles);

    this.geometryCopy = new THREE.BufferGeometry();
    this.geometryCopy.copy(this.particles.geometry);
  }

  visibleHeightAtZDepth(depth, camera) {
    const cameraOffset = camera.position.z;
    if (depth < cameraOffset) depth -= cameraOffset;
    else depth += cameraOffset;

    const vFOV = (camera.fov * Math.PI) / 180;

    return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
  }

  visibleWidthAtZDepth(depth, camera) {
    const height = this.visibleHeightAtZDepth(depth, camera);
    return height * camera.aspect;
  }

  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
}
