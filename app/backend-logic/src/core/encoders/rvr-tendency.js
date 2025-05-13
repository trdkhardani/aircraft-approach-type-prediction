const FeatureUtils = require("./generic")

class RvrTendencyEncode {
    static rvrTendencyOneHotEncode(rvrTendency){
        const rvrTendencies = 
        [
            {
                value: "Deteriorating",
                binary: 0
            }, 
            {
                value: "Excellent",
                binary: 0
            }, 
            {
                value: "Improving",
                binary: 0
            }, 
            {
                value: "Stable",
                binary: 0
            },
        ]

        // capitalize input
        // const rvrTendencyCapitalized = rvrTendency.charAt(0).toUpperCase() + rvrTendency.slice(1)

        const encodedRvrTendency = FeatureUtils.oneHotEncode("rvr_tendency", rvrTendencies, rvrTendency)

        return {
            mappedCategories: encodedRvrTendency.mappedCategories
        }
    }
}

module.exports = RvrTendencyEncode