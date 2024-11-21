let currentValue = '0';
        let previousValue = '';
        let operation = null;
        let shouldResetDisplay = false;

        const display = document.getElementById('display');

        function updateDisplay() {
            display.textContent = currentValue;
        }

        function appendNumber(number) {
            if (currentValue === '0' || shouldResetDisplay) {
                currentValue = number;
                shouldResetDisplay = false;
            } else {
                currentValue += number;
            }
            updateDisplay();
        }

        function clearDisplay() {
            currentValue = '0';
            previousValue = '';
            operation = null;
            updateDisplay();
        }

        function setOperation(op) {
            if (operation !== null) {
                calculate();
            }
            previousValue = currentValue;
            operation = op;
            shouldResetDisplay = true;
        }

        function calculate() {
            if (operation === null || shouldResetDisplay) {
                return;
            }

            let result;
            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);

            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentValue = result.toString();
            operation = null;
            updateDisplay();
        }
        