import React from "react";
// import { AgCharts } from 'ag-charts-react'

function RightSideBar() {
    return (
        <aside className="w-100 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
            <h2 className="font-semibold text-lg">Approach Prediction</h2>
            <ApproachRecommendation />
            <RiskAssessmentBox />
        </aside>
    )
}

function ApproachRecommendation() {
    // const [gaugeOptions, setGaugeOptions] = useState({

    // })
    const modelOutput = {
        prediction: 
        [
            1, 0, 0, 1
        ],
        probabilities: [
            0.92, 0.52, 0.42, 0.81
        ]
    }

    return (
        <>
        <div id="top-confidence-score" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <h3 className="font-semibold">Confidence Score</h3>
            <p className="text-sm text-gray-300">{Math.max(...modelOutput.probabilities) * 100}%</p>
        </div>
        <div id="recommended-approach" className="mb-4 p-3 bg-gray-700 rounded-md shadow">
            <h3 className="font-semibold opacity-50">Recommended Approach</h3>
            <p className="text-sm text-gray-300">ILS Approach</p>
        </div>
        <div id="other-approach-1" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">RNAV</p>
            <p className="text-sm text-white-300">30%</p>
        </div>
        <div id="other-approach-1" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">RNP</p>
            <p className="text-sm text-white-300">20%</p>
        </div>
        <div id="other-approach-1" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">Visual</p>
            <p className="text-sm text-white-300">10%</p>
        </div>
        </>
    )
}

function RiskAssessmentBox() {
    return (
        <div></div>
    )
}

export default RightSideBar