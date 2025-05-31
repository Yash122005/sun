 let isOn = false;

        function toggleBulb() {
            if (isOn) {
                document.querySelector(".bulb").style.backgroundColor = 'transparent';
            } else {
                document.querySelector(".bulb").style.backgroundColor = 'yellow';
            }
            isOn = !isOn;
        }