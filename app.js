// app.js
const countryData = {
    "North America": ["Canada", "United States", "Mexico", "Guatemala", "Belize", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama"],
    "South America": ["Brazil", "Argentina", "Peru", "Colombia", "Chile", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname"],
    "Europe": ["Russia", "Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Netherlands", "Belgium", "Greece", "Portugal", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Austria", "Switzerland", "Czech Republic", "Hungary", "Romania", "Bulgaria", "Croatia", "Serbia", "Slovenia", "Slovakia", "Belarus", "Ukraine", "Moldova", "Iceland"],
    "Africa": ["Egypt", "Nigeria", "Ethiopia", "Kenya", "South Africa", "Tanzania", "Algeria", "Sudan", "Uganda", "Morocco", "Angola", "Ghana", "Mozambique", "Madagascar", "Cameroon", "Niger", "Mali", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Chad", "Zimbabwe", "Ivory Coast", "Botswana", "Namibia", "Gabon", "Lesotho", "Guinea", "Mauritania", "Liberia", "Sierra Leone", "Togo", "Benin"],
    "Asia": ["China", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan", "Philippines", "Vietnam", "Turkey", "Iran", "Thailand", "Myanmar", "South Korea", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan", "Malaysia", "Nepal", "Yemen", "North Korea", "Sri Lanka", "Kazakhstan", "Syria", "Cambodia", "Jordan", "Azerbaijan", "UAE", "Tajikistan", "Israel", "Laos", "Lebanon", "Kyrgyzstan", "Turkmenistan", "Palestine", "Oman", "Kuwait", "Georgia", "Mongolia", "Armenia", "Qatar", "Bahrain", "East Timor", "Cyprus", "Bhutan", "Maldives", "Brunei", "Singapore", "Hong Kong"],
    "Oceania": ["Australia", "Papua New Guinea", "New Zealand", "Fiji", "Solomon Islands", "Vanuatu", "Samoa", "Kiribati", "Micronesia", "Palau", "Nauru", "Tuvalu", "Marshall Islands"],
};

// Country coordinates in mercator projection (normalized 0-1)
const countryCoordinates = {
    "Canada": [0.35, 0.25], "United States": [0.25, 0.35], "Mexico": [0.20, 0.45], "Guatemala": [0.19, 0.48], "Belize": [0.20, 0.47], "Honduras": [0.21, 0.49], "El Salvador": [0.20, 0.50], "Nicaragua": [0.20, 0.51], "Costa Rica": [0.19, 0.52], "Panama": [0.21, 0.54], "Brazil": [0.45, 0.60], "Argentina": [0.38, 0.75], "Peru": [0.32, 0.58], "Colombia": [0.28, 0.52], "Chile": [0.33, 0.72], "Venezuela": [0.32, 0.50], "Ecuador": [0.30, 0.55], "Bolivia": [0.36, 0.65], "Paraguay": [0.39, 0.68], "Uruguay": [0.42, 0.73], "Guyana": [0.44, 0.54], "Suriname": [0.45, 0.52], "Russia": [0.65, 0.25], "Germany": [0.52, 0.32], "France": [0.50, 0.34], "United Kingdom": [0.48, 0.30], "Italy": [0.54, 0.37], "Spain": [0.47, 0.36], "Poland": [0.55, 0.30], "Netherlands": [0.51, 0.31], "Belgium": [0.50, 0.31], "Greece": [0.57, 0.39], "Portugal": [0.45, 0.37], "Sweden": [0.55, 0.23], "Norway": [0.52, 0.22], "Denmark": [0.53, 0.28], "Finland": [0.58, 0.22], "Ireland": [0.46, 0.29], "Austria": [0.54, 0.32], "Switzerland": [0.51, 0.33], "Czech Republic": [0.54, 0.31], "Hungary": [0.56, 0.32], "Romania": [0.58, 0.33], "Bulgaria": [0.58, 0.35], "Croatia": [0.55, 0.34], "Serbia": [0.56, 0.34], "Slovenia": [0.54, 0.33], "Slovakia": [0.55, 0.31], "Belarus": [0.58, 0.29], "Ukraine": [0.59, 0.31], "Moldova": [0.59, 0.32], "Iceland": [0.43, 0.18], "Egypt": [0.59, 0.48], "Nigeria": [0.53, 0.52], "Ethiopia": [0.63, 0.51], "Kenya": [0.63, 0.56], "South Africa": [0.58, 0.70], "Tanzania": [0.62, 0.58], "Algeria": [0.52, 0.42], "Sudan": [0.60, 0.48], "Uganda": [0.62, 0.54], "Morocco": [0.48, 0.40], "Angola": [0.57, 0.63], "Ghana": [0.50, 0.53], "Mozambique": [0.64, 0.63], "Madagascar": [0.68, 0.65], "Cameroon": [0.54, 0.53], "Niger": [0.54, 0.47], "Mali": [0.48, 0.46], "Burkina Faso": [0.51, 0.49], "Malawi": [0.63, 0.61], "Zambia": [0.60, 0.64], "Senegal": [0.44, 0.48], "Somalia": [0.66, 0.52], "Chad": [0.56, 0.48], "Zimbabwe": [0.61, 0.66], "Ivory Coast": [0.49, 0.54], "Botswana": [0.60, 0.68], "Namibia": [0.57, 0.66], "Gabon": [0.56, 0.57], "Lesotho": [0.62, 0.70], "Guinea": [0.47, 0.51], "Mauritania": [0.48, 0.44], "Liberia": [0.48, 0.55], "Sierra Leone": [0.46, 0.53], "Togo": [0.51, 0.53], "Benin": [0.52, 0.52], "China": [0.72, 0.35], "India": [0.68, 0.45], "Indonesia": [0.77, 0.55], "Pakistan": [0.66, 0.40], "Bangladesh": [0.71, 0.42], "Japan": [0.82, 0.33], "Philippines": [0.79, 0.48], "Vietnam": [0.76, 0.45], "Turkey": [0.60, 0.38], "Iran": [0.62, 0.41], "Thailand": [0.74, 0.49], "Myanmar": [0.71, 0.46], "South Korea": [0.80, 0.36], "Iraq": [0.61, 0.42], "Afghanistan": [0.65, 0.39], "Saudi Arabia": [0.62, 0.48], "Uzbekistan": [0.64, 0.37], "Malaysia": [0.75, 0.51], "Nepal": [0.69, 0.41], "Yemen": [0.64, 0.52], "North Korea": [0.81, 0.34], "Sri Lanka": [0.71, 0.50], "Kazakhstan": [0.67, 0.33], "Syria": [0.60, 0.40], "Cambodia": [0.76, 0.47], "Jordan": [0.60, 0.43], "Azerbaijan": [0.62, 0.36], "UAE": [0.63, 0.50], "Tajikistan": [0.66, 0.38], "Israel": [0.59, 0.44], "Laos": [0.74, 0.46], "Lebanon": [0.59, 0.42], "Kyrgyzstan": [0.67, 0.36], "Turkmenistan": [0.64, 0.36], "Palestine": [0.59, 0.44], "Oman": [0.65, 0.51], "Kuwait": [0.62, 0.46], "Georgia": [0.61, 0.37], "Mongolia": [0.72, 0.32], "Armenia": [0.61, 0.37], "Qatar": [0.63, 0.49], "Bahrain": [0.63, 0.48], "East Timor": [0.79, 0.57], "Cyprus": [0.58, 0.41], "Bhutan": [0.71, 0.40], "Maldives": [0.70, 0.53], "Brunei": [0.77, 0.52], "Singapore": [0.75, 0.54], "Hong Kong": [0.78, 0.45], "Australia": [0.80, 0.68], "Papua New Guinea": [0.83, 0.60], "New Zealand": [0.87, 0.75], "Fiji": [0.88, 0.62], "Solomon Islands": [0.86, 0.59], "Vanuatu": [0.86, 0.63], "Samoa": [0.92, 0.60], "Kiribati": [0.92, 0.56], "Micronesia": [0.87, 0.48], "Palau": [0.85, 0.49], "Nauru": [0.86, 0.57], "Tuvalu": [0.91, 0.61], "Marshall Islands": [0.89, 0.47],
};

let currentMode = "beginner";
let currentContinent = "North America";
let toLearn = [];
let learned = [];
let resultShowing = false;
let currentQuestion = "";
let gameStarted = false;
let mapElement = null;
let lastPin = null;

function selectMode(mode) {
    currentMode = mode;
    document.getElementById("beginnerBtn").classList.toggle("active", mode === "beginner");
    document.getElementById("hardBtn").classList.toggle("active", mode === "hard");
    document.getElementById("continentSection").style.display = mode === "beginner" ? "block" : "none";
}

function selectContinent(continent) {
    currentContinent = continent;
    document.querySelectorAll("#continentButtons .btn").forEach(btn => {
        btn.classList.toggle("active", btn.textContent === continent);
    });
}

function startGame() {
    gameStarted = true;
    document.getElementById("startModal").classList.add("hidden");
    loadCountries();
    initMap();
}

function resetGame() {
    gameStarted = false;
    document.getElementById("startModal").classList.remove("hidden");
}

function initMap() {
    mapElement = document.getElementById("map");
    mapElement.addEventListener("click", onMapClick);
    showNextQuestion();
}

function setupStartModal() {
    const continentSection = document.getElementById("continentButtons");
    Object.keys(countryData).forEach(continent => {
        const btn = document.createElement("button");
        btn.className = "btn" + (continent === currentContinent ? " active" : "");
        btn.textContent = continent;
        btn.onclick = () => selectContinent(continent);
        continentSection.appendChild(btn);
    });
}

function loadCountries() {
    if (currentMode === "beginner") {
        toLearn = [...countryData[currentContinent]];
    } else {
        toLearn = Object.values(countryData).flat();
    }
    learned = [];
}

function showNextQuestion() {
    if (toLearn.length === 0) {
        document.getElementById("question").textContent = "🎉 All mastered!";
        return;
    }

    currentQuestion = toLearn[Math.floor(Math.random() * toLearn.length)];
    document.getElementById("question").textContent = `Where is ${currentQuestion}?`;
    updateProgress();
    resultShowing = false;
    document.getElementById("result").classList.remove("show");
    if (lastPin) lastPin.remove();
}

function updateProgress() {
    const total = currentMode === "beginner"
        ? countryData[currentContinent].length
        : Object.values(countryData).flat().length;
    const remaining = toLearn.length;
    document.getElementById("progress").textContent = `${total - remaining} / ${total}`;
    document.getElementById("stats").textContent = `Learned: ${learned.length}\nRemaining: ${toLearn.length}`;
}

function onMapClick(event) {
    if (resultShowing || toLearn.length === 0) return;

    const rect = mapElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    checkAnswer(x, y);
    showPin(x, y);
}

function showPin(x, y, isCorrect = false) {
    if (lastPin) lastPin.remove();
    lastPin = document.createElement("div");
    lastPin.className = "pin" + (isCorrect ? " correct" : "");
    lastPin.style.left = (x * 100) + "%";
    lastPin.style.top = (y * 100) + "%";
    mapElement.appendChild(lastPin);
}

function checkAnswer(tapX, tapY) {
    const [correctX, correctY] = countryCoordinates[currentQuestion] || [0.5, 0.5];
    const distance = Math.sqrt(Math.pow(tapX - correctX, 2) + Math.pow(tapY - correctY, 2));
    const tolerance = 0.08;

    const isCorrect = distance < tolerance;

    if (isCorrect) {
        toLearn = toLearn.filter(c => c !== currentQuestion);
        learned.push(currentQuestion);
        showPin(correctX, correctY, true);
        showResult(true);
    } else {
        showPin(correctX, correctY, false);
        showResult(false);
    }
}

function showResult(correct) {
    resultShowing = true;
    const result = document.getElementById("result");
    result.classList.add("show");
    result.classList.remove(correct ? "incorrect" : "correct");
    result.classList.add(correct ? "correct" : "incorrect");

    document.getElementById("resultTitle").textContent = correct ? "✓ Correct!" : "✗ Try Again";
    document.getElementById("resultMessage").textContent = `${currentQuestion} ${correct ? "locked in! 🎯" : "—keep trying."}`;
}

function nextQuestion() {
    showNextQuestion();
}

setupStartModal();
