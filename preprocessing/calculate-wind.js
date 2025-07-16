const PromptSync = require("prompt-sync");

const prompt = PromptSync()

function calculateWindComponents(windSpeed, windDir, runwayHeading) {
    let angleDiff = Math.abs(runwayHeading - windDir);
    if (angleDiff > 180) angleDiff = 360 - angleDiff;
    const rad = angleDiff * (Math.PI / 180);
    const headwind = windSpeed * Math.cos(rad);
    const crosswind = Math.abs(windSpeed * Math.sin(rad));
    return { headwind: Number(headwind.toFixed(1)), crosswind: Number(crosswind.toFixed(1)) };
}

const windSpeed = parseInt(prompt("Enter wind speed: "));
const windDir = parseInt(prompt("Enter wind direction: "));
const runwayHeading = parseInt(prompt("Enter runway heading: "));

console.log(calculateWindComponents(windSpeed, windDir, runwayHeading * 10))