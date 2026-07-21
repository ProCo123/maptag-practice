// app.js
const countryData = {
    "North America": ["Canada", "United States", "Mexico", "Guatemala", "Belize", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama"],
    "South America": ["Brazil", "Argentina", "Peru", "Colombia", "Chile", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname"],
    "Europe": ["Russia", "Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Netherlands", "Belgium", "Greece", "Portugal", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Austria", "Switzerland", "Czech Republic", "Hungary", "Romania", "Bulgaria", "Croatia", "Serbia", "Slovenia", "Slovakia", "Belarus", "Ukraine", "Moldova", "Iceland"],
    "Africa": ["Egypt", "Nigeria", "Ethiopia", "Kenya", "South Africa", "Tanzania", "Algeria", "Sudan", "Uganda", "Morocco", "Angola", "Ghana", "Mozambique", "Madagascar", "Cameroon", "Niger", "Mali", "Burkina Faso", "Malawi", "Zambia", "Senegal", "Somalia", "Chad", "Zimbabwe", "Ivory Coast", "Botswana", "Namibia", "Gabon", "Lesotho", "Guinea", "Mauritania", "Liberia", "Sierra Leone", "Togo", "Benin"],
    "Asia": ["China", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan", "Philippines", "Vietnam", "Turkey", "Iran", "Thailand", "Myanmar", "South Korea", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan", "Malaysia", "Nepal", "Yemen", "North Korea", "Sri Lanka", "Kazakhstan", "Syria", "Cambodia", "Jordan", "Azerbaijan", "UAE", "Tajikistan", "Israel", "Laos", "Lebanon", "Kyrgyzstan", "Turkmenistan", "Palestine", "Oman", "Kuwait", "Georgia", "Mongolia", "Armenia", "Qatar", "Bahrain", "East Timor", "Cyprus", "Bhutan", "Maldives", "Brunei", "Singapore", "Hong Kong"],
    "Oceania": ["Australia", "Papua New Guinea", "New Zealand", "Fiji", "Solomon Islands", "Vanuatu", "Samoa", "Kiribati", "Micronesia", "Palau", "Nauru", "Tuvalu", "Marshall Islands"],
};

const countryCoordinates = {
    "Canada": [56.1304, -106.3468], "United States": [37.0902, -95.7129], "Mexico": [23.6345, -102.5528], "Guatemala": [15.5, -90.2], "Belize": [17.25, -88.75], "Honduras": [15, -86.25], "El Salvador": [13.79, -88.90], "Nicaragua": [12.87, -85.21], "Costa Rica": [9.75, -83.75], "Panama": [8.67, -80.74], "Brazil": [-14.2350, -51.9253], "Argentina": [-38.4161, -63.6167], "Peru": [-9.1900, -75.0152], "Colombia": [4.5709, -74.2973], "Chile": [-35.6751, -71.5430], "Venezuela": [6.4238, -66.5897], "Ecuador": [-1.8312, -78.1834], "Bolivia": [-16.2902, -63.5887], "Paraguay": [-23.4425, -58.4438], "Uruguay": [-32.5228, -55.7658], "Guyana": [4.8604, -58.9302], "Suriname": [3.9193, -56.0278], "Russia": [61.5240, 105.3188], "Germany": [51.1657, 10.4515], "France": [46.2276, 2.2137], "United Kingdom": [55.3781, -3.4360], "Italy": [41.8719, 12.5674], "Spain": [40.4637, -3.7492], "Poland": [51.9194, 19.1451], "Netherlands": [52.1326, 5.2913], "Belgium": [50.5039, 4.4699], "Greece": [39.0742, 21.8243], "Portugal": [39.3999, -8.2245], "Sweden": [60.1282, 18.6435], "Norway": [60.4720, 8.4689], "Denmark": [56.2639, 9.5018], "Finland": [61.9241, 25.7482], "Ireland": [53.4129, -8.2439], "Austria": [47.5162, 14.5501], "Switzerland": [46.8182, 8.2275], "Czech Republic": [49.8175, 15.4730], "Hungary": [47.1625, 19.5033], "Romania": [45.9432, 24.9668], "Bulgaria": [42.7339, 25.4858], "Croatia": [45.1, 15.2], "Serbia": [44.0165, 21.0059], "Slovenia": [46.1512, 14.9955], "Slovakia": [48.6690, 19.6990], "Belarus": [53.7098, 27.9534], "Ukraine": [48.3794, 31.1656], "Moldova": [47.4116, 28.3699], "Iceland": [64.96, -19.02], "Egypt": [26.8206, 30.8025], "Nigeria": [9.0820, 8.6753], "Ethiopia": [9.1450, 40.4897], "Kenya": [-0.0236, 37.9062], "South Africa": [-30.5595, 22.9375], "Tanzania": [-6.3690, 34.8888], "Algeria": [28.0339, 1.6596], "Sudan": [12.8628, 30.8025], "Uganda": [1.3733, 32.2903], "Morocco": [31.7917, -7.0926], "Angola": [-11.6021, 13.2344], "Ghana": [7.3697, -5.3679], "Mozambique": [-18.6657, 35.5296], "Madagascar": [-18.7669, 46.8691], "Cameroon": [3.8480, 11.5021], "Niger": [17.6078, 8.6753], "Mali": [17.5707, -3.9962], "Burkina Faso": [12.2383, -1.5616], "Malawi": [-13.2543, 34.3015], "Zambia": [-13.1339, 27.8493], "Senegal": [14.4974, -14.4524], "Somalia": [5.1521, 46.1996], "Chad": [15.4730, 18.7322], "Zimbabwe": [-19.0154, 29.1549], "Ivory Coast": [7.5400, -5.5471], "Botswana": [-22.3285, 24.6849], "Namibia": [-22.9375, 18.6947], "Gabon": [-0.8037, 11.6045], "Lesotho": [-29.6100, 28.2336], "Guinea": [9.9456, -9.6966], "Mauritania": [21.0079, -10.9408], "Liberia": [6.4281, -9.4295], "Sierra Leone": [8.4606, -11.7799], "Togo": [6.1256, 1.2324], "Benin": [9.3077, 2.3158], "China": [35.8617, 104.1954], "India": [20.5937, 78.9629], "Indonesia": [-0.7893, 113.9213], "Pakistan": [30.3753, 69.3451], "Bangladesh": [23.6850, 90.3563], "Japan": [36.2048, 138.2529], "Philippines": [12.8797, 121.7740], "Vietnam": [14.0583, 108.2772], "Turkey": [38.9637, 35.2433], "Iran": [32.4279, 53.6880], "Thailand": [15.8700, 100.9925], "Myanmar": [21.9162, 95.9560], "South Korea": [35.9078, 127.7669], "Iraq": [33.2232, 43.6793], "Afghanistan": [33.9391, 67.7099], "Saudi Arabia": [23.8859, 45.0792], "Uzbekistan": [41.3775, 64.5853], "Malaysia": [4.2105, 101.6964], "Nepal": [28.3949, 84.1240], "Yemen": [15.4730, 48.5164], "North Korea": [40.3399, 127.5101], "Sri Lanka": [7.8731, 80.7718], "Kazakhstan": [48.0196, 66.9237], "Syria": [34.8021, 38.9968], "Cambodia": [12.5657, 104.9910], "Jordan": [30.5852, 36.2384], "Azerbaijan": [40.1431, 47.5769], "UAE": [23.4241, 53.8478], "Tajikistan": [38.8610, 71.2761], "Israel": [31.0461, 34.8516], "Laos": [19.8523, 102.4955], "Lebanon": [33.8547, 35.8623], "Kyrgyzstan": [41.5015, 74.6671], "Turkmenistan": [38.9697, 59.5563], "Palestine": [31.9454, 35.2338], "Oman": [21.4735, 55.9754], "Kuwait": [29.3117, 47.4818], "Georgia": [42.3154, 43.3569], "Mongolia": [46.8625, 103.8467], "Armenia": [40.0691, 45.0382], "Qatar": [25.3548, 51.1839], "Bahrain": [26.0667, 50.5577], "East Timor": [-8.8383, 125.9181], "Cyprus": [34.9249, 33.4299], "Bhutan": [27.5142, 90.4336], "Maldives": [3.2028, 73.2207], "Brunei": [4.5353, 114.7277], "Singapore": [1.3521, 103.8198], "Hong Kong": [22.3193, 114.1694], "Australia": [-25.2744, 133.7751], "Papua New Guinea": [-6.3150, 143.9555], "New Zealand": [-40.9006, 174.8860], "Fiji": [-17.7134, 178.0650], "Solomon Islands": [-9.6457, 160.1562], "Vanuatu": [-15.3767, 166.9592], "Samoa": [-13.7590, -172.1046], "Kiribati": [-3.3704, -168.7340], "Micronesia": [7.4256, 150.5508], "Palau": [7.3150, 134.4815], "Nauru": [-0.5228, 166.9315], "Tuvalu": [-7.1095, 177.6493], "Marshall Islands": [7.1315, 171.1845],
};

let scene, camera, globe, canvas, engine;
let currentMode = "beginner";
let currentContinent = "North America";
let toLearn = [];
let learned = [];
let resultShowing = false;
let currentQuestion = "";
let gameStarted = false;

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
    initScene();
}

function resetGame() {
    gameStarted = false;
    document.getElementById("startModal").classList.remove("hidden");
    if (engine) engine.dispose();
}

function initScene() {
    canvas = document.getElementById("canvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera("camera", 0, Math.PI / 2.5, 25, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.inertia = 0.7;
    camera.angularSensibilityX = 400;
    camera.angularSensibilityY = 400;
    camera.wheelPrecision = 20;

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1;

    globe = BABYLON.MeshBuilder.CreateSphere("globe", { diameter: 20, segments: 128 }, scene);

    const material = new BABYLON.StandardMaterial("globeMat", scene);
material.diffuse = new BABYLON.Color3(0.2, 0.4, 0.8);
material.emissiveColor = new BABYLON.Color3(0.3, 0.5, 0.9);
material.specularColor = new BABYLON.Color3(0.2, 0.2, 0.2);
material.emissiveTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/earth.jpg", scene);

    globe.material = material;

    canvas.addEventListener("click", onCanvasTap);
    canvas.addEventListener("touchend", onCanvasTap);

    showNextQuestion();

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener("resize", () => {
        engine.resize();
    });
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
}

function updateProgress() {
    const total = currentMode === "beginner"
        ? countryData[currentContinent].length
        : Object.values(countryData).flat().length;
    const remaining = toLearn.length;
    document.getElementById("progress").textContent = `${total - remaining} / ${total}`;
    document.getElementById("stats").textContent = `Learned: ${learned.length}\nRemaining: ${toLearn.length}`;
}

function onCanvasTap(event) {
    if (resultShowing || toLearn.length === 0) return;

    const pickResult = scene.pick(event.clientX, event.clientY, (mesh) => mesh === globe);
    if (!pickResult || !pickResult.hit) return;

    const normal = pickResult.getNormal(true);
    const [lat, lng] = normalToLatLng(normal);
    checkAnswer(lat, lng);
}

function normalToLatLng(normal) {
    const lat = Math.asin(normal.y) * (180 / Math.PI);
    const lng = Math.atan2(normal.x, normal.z) * (180 / Math.PI);
    return [lat, lng];
}

function checkAnswer(tapLat, tapLng) {
    const [correctLat, correctLng] = countryCoordinates[currentQuestion] || [0, 0];
    const distance = Math.sqrt(Math.pow(tapLat - correctLat, 2) + Math.pow(tapLng - correctLng, 2));
    const tolerance = 12;

    const isCorrect = distance < tolerance;

    if (isCorrect) {
        toLearn = toLearn.filter(c => c !== currentQuestion);
        learned.push(currentQuestion);
        showResult(true);
    } else {
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
