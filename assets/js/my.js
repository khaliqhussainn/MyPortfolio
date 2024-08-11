/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particle', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

/* Otherwise just put the config content (json): */

particlesJS("particle",
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// // starting from v2 you can add only the features you need reducing the bundle size
// $(document).ready(async function () {
//   await loadFull(tsParticles);

//   $("#tsparticles")
//       .particles()
//       .init(
//           {
//               background: {
//                   color: {
//                       value: "#0d47a1",
//                   },
//               },
//               fpsLimit: 120,
//               interactivity: {
//                   events: {
//                       onClick: {
//                           enable: true,
//                           mode: "push",
//                       },
//                       onHover: {
//                           enable: true,
//                           mode: "repulse",
//                       },
//                   },
//                   modes: {
//                       push: {
//                           quantity: 4,
//                       },
//                       repulse: {
//                           distance: 200,
//                           duration: 0.4,
//                       },
//                   },
//               },
//               particles: {
//                   color: {
//                       value: "#ffffff",
//                   },
//                   links: {
//                       color: "#ffffff",
//                       distance: 150,
//                       enable: true,
//                       opacity: 0.5,
//                       width: 1,
//                   },
//                   move: {
//                       direction: "none",
//                       enable: true,
//                       outModes: {
//                           default: "bounce",
//                       },
//                       random: false,
//                       speed: 6,
//                       straight: false,
//                   },
//                   number: {
//                       density: {
//                           enable: true,
//                       },
//                       value: 80,
//                   },
//                   opacity: {
//                       value: 0.5,
//                   },
//                   shape: {
//                       type: "circle",
//                   },
//                   size: {
//                       value: { min: 1, max: 5 },
//                   },
//               },
//               detectRetina: true,
//           },
//           function (container) {
//               // container is the particles container where you can play/pause or stop/start.
//               // the container is already started, you don't need to start it manually.
//           },
//       );

//   // or

//   $("#tsparticles")
//       .particles()
//       .ajax("particles.json", function (container) {
//           // container is the particles container where you can play/pause or stop/start.
//           // the container is already started, you don't need to start it manually.
//       });
// });