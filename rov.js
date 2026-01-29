const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '9933ff', '#ff6600','33ffff','ffffff'];
        
        // Function to initialize particlesJS with a given line color
        function initParticles(lineColor) {
            particlesJS('particles-js', {
                "particles": {
                                    "number": {
                                        "value": 80,
                                        "density": {
                                            "enable": true,
                                            "value_area": 800
                                        }
                                    },
                                    "color": {
                                        "value": "#ffffff"
                                    },
                                    "shape": {
                                        "type": "image",
                                        "stroke": {
                                            "width": 0,
                                            "color": "#000000"
                                        },
                                        "polygon": {
                                            "nb_sides": 5
                                        },
                        "image": {
                            "src": "https://cdn.jsdelivr.net/gh/tiptipios/ios@main/TipTip2.png",
                            "width": 200,
                            "height": 200
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
                                    "value": 10,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 1,
                                        "sync": false
                                    }
                                },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": lineColor,
                        "opacity": 0.6,
                        "width": 1,
                        
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
                    "background_color": "#ffffff",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            });
        }
        
        // Function to destroy particlesJS instance
        function destroyParticles() {
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        }
        
        // Initialize particles with default line color
        initParticles('#ffffff');
        
        // Generate color buttons dynamically
        const colorContainer = document.getElementById('colorContainer');
        colors.forEach(color => {
            const button = document.createElement('div');
            button.className = 'color-button';
            button.style.backgroundColor = color;
            button.dataset.color = color;
            button.addEventListener('click', function() {
                const newColor = this.dataset.color;
                // Destroy current particles instance
                destroyParticles();
                // Remove the canvas element created by particles.js
                document.getElementById('particles-js').innerHTML = '';
                // Re-initialize particles with new line color
                initParticles(newColor);
            });
            colorContainer.appendChild(button);
        });
        
        // Toggle visibility of the color container
        const toggleButton = document.getElementById('toggleButton');
        toggleButton.addEventListener('click', function() {
            if (colorContainer.style.display === 'none' || colorContainer.style.display === '') {
                colorContainer.style.display = 'block';
            } else {
                colorContainer.style.display = 'none';
            }
        });
