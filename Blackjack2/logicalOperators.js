let hasCompletedCourse = true
let givesCertificate = false

if (hasCompletedCourse && givesCertificate){
        generateCertificate()
    }
else {
    console.log("There seems to be an error generating the certificate")
}

function generateCertificate(){
    console.log("Generating Certificate")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

if (!hasSolvedChallenge || !hasHintsLeft){
    showSolution()
}

function showSolution(){
    console.log("Showing the Solutions")
}