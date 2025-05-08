import React from "react";

function LeftSideBar() {
    return (
    <aside className="w-64 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
        <MetarBox />
        <RvrBox />
        <WindBox />
    </aside>
    );
}

function MetarBox() {
    return (
    <div className="mb-4 p-3 bg-gray-700 rounded-md shadow">
        <h3 className="font-semibold opacity-50">METAR</h3>
        <p className="text-sm text-gray-300">KJFK 071851Z 24015G25KT 10SM FEW040 BKN250 23/14 A2992 RMK AO2</p>
    </div>
    );
}

function RvrBox() {
    return (
    <div>
        <div className="mb-4 p-3 bg-gray-700 rounded-md shadow">
        <h3 className="font-semibold opacity-50">RVR (Runway Visual Range)</h3>
        <table className="-mx-2 -my-2 w-64 border-separate border-spacing-2 table-auto text-sm">
            {/* <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td>RWY 04L</td>
                    <td>1800 feet</td>
                </tr>
                <tr>
                    <td>RWY 04R</td>
                    <td>2000 feet</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    );
}

function WindBox() {
    const windData = {
        speed: 15,
        gust: 3,
        direction: 250
    };

    return (
    <div className="mb-4 p-3 bg-gray-700 rounded-md shadow">
        <h3 className="font-semibold opacity-50">Wind Conditions</h3>
        <p className="text-sm text-gray-300 text-center">{windData.direction === -1 ? `Variable` : `${windData.direction}°`}</p>
        <img src={`/src/assets/${windData.direction === 0 ? `straight-line.png` : `arrow-up.png`}`} alt="Direction Arrow" className={`size-15 ${windData.direction === -1 ? `rotate` : ''}`} style={{ transform: `rotate(${windData.direction - 180 < 0 ? windData.direction+180 : windData.direction-180}deg)` }} />
        <p className="text-sm text-gray-300 text-center">{windData.gust === 0 ? `${windData.speed} kts` : `${windData.speed} kts Gust ${windData.gust} kts`}</p>
    </div>
    );
}

export default LeftSideBar