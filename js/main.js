document.addEventListener('DOMContentLoaded', function() {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const redInput = document.getElementById('red-input');
    const greenInput = document.getElementById('green-input');
    const blueInput = document.getElementById('blue-input');
    const colorBox = document.getElementById('color-box');
    const hexCode = document.getElementById('hex-code');
    const colorPicker = document.getElementById('color-picker');

    // Función para actualizar el color
    function updateColor() {
        const red = parseInt(redSlider.value);
        const green = parseInt(greenSlider.value);
        const blue = parseInt(blueSlider.value);

        const color = `rgb(${red}, ${green}, ${blue})`;
        colorBox.style.backgroundColor = color;

        const hex = rgbToHex(red, green, blue);
        hexCode.value = hex;
        colorPicker.value = hex; // Sincronizar el color picker
    }

    // Función para convertir RGB a hexadecimal
    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    // Función para convertir hexadecimal a RGB
    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    // Sincronizar controles deslizantes y campos de entrada
    function syncInputs(slider, input) {
        slider.value = input.value;
        updateColor();
    }

    // Event listeners para los controles deslizantes
    redSlider.addEventListener('input', function() {
        redInput.value = redSlider.value;
        updateColor();
    });
    greenSlider.addEventListener('input', function() {
        greenInput.value = greenSlider.value;
        updateColor();
    });
    blueSlider.addEventListener('input', function() {
        blueInput.value = blueSlider.value;
        updateColor();
    });

    // Event listeners para los campos de entrada
    redInput.addEventListener('input', function() {
        if (redInput.value >= 0 && redInput.value <= 255) {
            redSlider.value = redInput.value;
            updateColor();
        }
    });
    greenInput.addEventListener('input', function() {
        if (greenInput.value >= 0 && greenInput.value <= 255) {
            greenSlider.value = greenInput.value;
            updateColor();
        }
    });
    blueInput.addEventListener('input', function() {
        if (blueInput.value >= 0 && blueInput.value <= 255) {
            blueSlider.value = blueInput.value;
            updateColor();
        }
    });

    // Event listener para el color picker
    colorPicker.addEventListener('input', function() {
        const hex = colorPicker.value;
        const { r, g, b } = hexToRgb(hex);

        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    });

    // Inicializar el color al cargar la página
    updateColor();
});