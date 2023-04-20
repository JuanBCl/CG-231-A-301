var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    var size = 700;
        var arrowSize = 40;
        var divisions = 20;
        var origin = new THREE.Vector3( 0, 0, 0 );
        var x = new THREE.Vector3( 1, 0, 0 );
        var y = new THREE.Vector3( 0, 1, 0 );
        var z = new THREE.Vector3( 0, 0, 1 );
        var color2 = new THREE.Color( 0x333333 );  /// 0x333333
        var colorR = new THREE.Color( 0xAA0000 );
        var colorG = new THREE.Color( 0x00AA00 );
        var colorB = new THREE.Color( 0x0000AA );

        //Crear la Grilla
        var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);
        scene.add(gridHelperXZ);

    var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
    camera.position.z = 20;
    camera.position.y = 5;
    scene.add(camera);
    const light = new THREE.AmbientLight(0x404040, 5);
    scene.add(light);


    const color = [0x2c5a57, 0x4F9543, 0x84B342];

    function cubo(base, altura, ancho, col) {
      const geometry = new THREE.BoxGeometry(base, altura, ancho);
      const material = new THREE.MeshToonMaterial({ color: col });
      return new THREE.Mesh(geometry, material);
    }

    //group.rotation.y = Math.PI / 4;

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {

      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera)
    }
    animate();
