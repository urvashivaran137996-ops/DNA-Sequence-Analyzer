function analyzeDNA() {

    const input = document.getElementById("dnaInput");
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    let sequence = input.value.toUpperCase().replace(/\s/g, "");

    error.style.display = "none";

    if (sequence.length === 0) {
        error.textContent = "Please enter a DNA sequence.";
        error.style.display = "block";
        return;
    }

    if (!/^[ATGC]+$/.test(sequence)) {
        error.textContent =
            "Invalid DNA sequence. Use only A, T, G and C.";
        error.style.display = "block";
        return;
    }

    const total = sequence.length;

    let A = 0;
    let T = 0;
    let G = 0;
    let C = 0;

    for (let base of sequence) {

        if (base === "A") {
            A++;
        } else if (base === "T") {
            T++;
        } else if (base === "G") {
            G++;
        } else if (base === "C") {
            C++;
        }
    }

    const APercent = ((A / total) * 100).toFixed(2);
    const TPercent = ((T / total) * 100).toFixed(2);
    const GPercent = ((G / total) * 100).toFixed(2);
    const CPercent = ((C / total) * 100).toFixed(2);

    const GC = (((G + C) / total) * 100).toFixed(2);
    const AT = (((A + T) / total) * 100).toFixed(2);

    result.innerHTML = `
        <h3>Analysis Result</h3>

        <p><strong>DNA Sequence:</strong> ${sequence}</p>

        <p><strong>Total Length:</strong> ${total}</p>

        <p><strong>Adenine (A):</strong>
        ${A} (${APercent}%)</p>

        <p><strong>Thymine (T):</strong>
        ${T} (${TPercent}%)</p>

        <p><strong>Guanine (G):</strong>
        ${G} (${GPercent}%)</p>

        <p><strong>Cytosine (C):</strong>
        ${C} (${CPercent}%)</p>

        <hr>

        <p><strong>GC Content:</strong> ${GC}%</p>

        <p><strong>AT Content:</strong> ${AT}%</p>
    `;
}


function clearDNA() {

    document.getElementById("dnaInput").value = "";

    document.getElementById("error").style.display = "none";

    document.getElementById("result").innerHTML =
        "<p>Enter a DNA sequence and click Analyze.</p>";
}


function copyResult() {

    const result = document.getElementById("result");

    const text = result.innerText;

    if (!text || text.includes("Enter a DNA sequence")) {
        alert("Please analyze a DNA sequence first.");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(function() {
            alert("Result copied successfully!");
        })
        .catch(function() {
            alert("Copy failed. Please copy the result manually.");
        });
}
