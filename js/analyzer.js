function analyzeSequence() {

    let input = document.getElementById("dnaInput").value;

    let sequence = input
        .toUpperCase()
        .replace(/\s/g, "");


    let errorBox = document.getElementById("errorBox");


    if (sequence.length === 0) {

        errorBox.innerText =
            "Please enter a DNA sequence.";

        errorBox.classList.remove("d-none");

        return;
    }


    if (!/^[ATGC]+$/.test(sequence)) {

        errorBox.innerText =
            "Invalid sequence! Only A, T, G and C are allowed.";

        errorBox.classList.remove("d-none");

        return;
    }


    errorBox.classList.add("d-none");


    let length = sequence.length;

    let a = countBase(sequence, "A");
    let t = countBase(sequence, "T");
    let g = countBase(sequence, "G");
    let c = countBase(sequence, "C");


    let gc = ((g + c) / length) * 100;

    let at = ((a + t) / length) * 100;


    let complement = getComplement(sequence);

    let reverse =
        sequence.split("").reverse().join("");

    let reverseComplement =
        complement.split("").reverse().join("");


    document.getElementById("length").innerText =
        length;

    document.getElementById("gc").innerText =
        gc.toFixed(2) + "%";

    document.getElementById("at").innerText =
        at.toFixed(2) + "%";


    document.getElementById("aCount").innerText = a;
    document.getElementById("tCount").innerText = t;
    document.getElementById("gCount").innerText = g;
    document.getElementById("cCount").innerText = c;


    document.getElementById("aPercent").innerText =
        ((a / length) * 100).toFixed(2) + "%";

    document.getElementById("tPercent").innerText =
        ((t / length) * 100).toFixed(2) + "%";

    document.getElementById("gPercent").innerText =
        ((g / length) * 100).toFixed(2) + "%";

    document.getElementById("cPercent").innerText =
        ((c / length) * 100).toFixed(2) + "%";


    document.getElementById("original").innerText =
        sequence;

    document.getElementById("complement").innerText =
        complement;

    document.getElementById("reverse").innerText =
        reverse;

    document.getElementById("reverseComplement").innerText =
        reverseComplement;


    document.getElementById("results")
        .classList.remove("d-none");

}


function countBase(sequence, base) {

    let count = 0;

    for (let i = 0; i < sequence.length; i++) {

        if (sequence[i] === base) {
            count++;
        }

    }

    return count;
}


function getComplement(sequence) {

    let result = "";

    for (let i = 0; i < sequence.length; i++) {

        if (sequence[i] === "A") {
            result += "T";
        }

        else if (sequence[i] === "T") {
            result += "A";
        }

        else if (sequence[i] === "G") {
            result += "C";
        }

        else if (sequence[i] === "C") {
            result += "G";
        }

    }

    return result;
}


function loadExample() {

    document.getElementById("dnaInput").value =
        "ATGCGTACGATCGATCGTAGCTAGCTAGCTAG";


    document.getElementById("errorBox")
        .classList.add("d-none");

}


function clearSequence() {

    document.getElementById("dnaInput").value = "";

    document.getElementById("results")
        .classList.add("d-none");

    document.getElementById("errorBox")
        .classList.add("d-none");

}
