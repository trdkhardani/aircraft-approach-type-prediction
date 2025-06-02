import GaugeComponent from "react-gauge-component"
import React from "react"

/**
 * @param {number} percentage
 * @returns {number}
 */
function gaugeComponent(percentage){
    return (
        <>
        <GaugeComponent arc={
                {
                    width: 0.2,
                    // padding: 0.003,
                    subArcs: [
                        {
                            limit: 20,
                            color: '#EA4228',
                            showTick: true,
                            tooltip: {
                                text: "Low Confidence"
                            }
                        },
                        {
                            limit: 40,
                            color: '#F58B19',
                            showTick: true,
                            tooltip: {
                                text: "Medium Confidence"
                            }
                        },
                        {
                            limit: 60,
                            color: '#F5CD19',
                            showTick: true,
                            tooltip: {
                                text: "Confident"
                            }
                        },
                        {
                            limit: 100,
                            color: '#5BE12C',
                            showTick: true,
                            tooltip: {
                                text: "Very Confidence"
                            }
                        },
                    ]
                }
            }
            value={percentage}
            />
            </>
    )
}

export default gaugeComponent