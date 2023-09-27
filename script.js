function convertToBinary() {
    const ipv4Input = document.getElementById("ipv4Input").value;
    const binaryOutput = document.getElementById("binaryOutput");

    if (ipv4Input === "") {
        alert("Please enter an IPv4 address.");
        return;
    }

    const parts = ipv4Input.split(".");

    if (parts.length !== 4) {
        alert("Please enter a valid IPv4 address with four parts.");
        return;
    }

    const binaryParts = [];

    for (let i = 0; i < parts.length; i++) {
        const decimalPart = parseInt(parts[i], 10);

        if (isNaN(decimalPart) || decimalPart < 0 || decimalPart > 255) {
            alert("Please enter valid decimal numbers between 0 and 255 for each part.");
            return;
        }

        const binaryPart = decimalPart.toString(2).padStart(8, "0");
        binaryParts.push(binaryPart);
    }

    const binaryAddress = binaryParts.join(".");
    binaryOutput.textContent = binaryAddress;
}
