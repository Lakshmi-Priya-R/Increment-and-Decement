let counter = 0;

        function increment() {
            counter++;
            document.getElementById('counterValue').innerText = counter;
        }

        function decrement() {
            if (counter > 0) {
                counter--;
                document.getElementById('counterValue').innerText = counter;
            }
        }