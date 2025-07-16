const axios = require('axios');
const { writeFile } = require('fs');

const ATIS_API_URL = "http://localhost:3000/api/atis";
const limit = 100;
let page = 1;
const maxPages = 112;
const interval = 10000; // 10 seconds between requests

const fetchAtisData = async (page, limit) => {
    try {
        const response = await axios.get(ATIS_API_URL, {
            params: { page, limit }
        });
        return response.data;
    } catch (err) {
        console.error("Fetch error:", err);
        return null;
    }
};

const saveJSON = (data, filename) => {
    if (!data) {
        console.warn("No data to save.");
        return;
    }

    const jsonString = JSON.stringify(data, null, 2);
    writeFile(filename, jsonString, (err) => {
        if (err) throw err;
        console.log(`Saved JSON: ${filename}`);
    });
};

const fetchWithDelay = async () => {
    if (page > maxPages) {
        console.log("Done fetching.");
        return;
    }

    console.log(`Fetching page ${page}...`);
    const data = await fetchAtisData(page, limit);
    if (data) saveJSON(data, `atis_page${page}.json`);
    page++;

    setTimeout(fetchWithDelay, interval);
};

fetchWithDelay();