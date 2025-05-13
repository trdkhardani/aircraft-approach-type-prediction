class PreprocessRawInput {
    constructor(runwayDesignator){
        this.runwayDesignator = runwayDesignator
    }

    _calculateWindComponents(windSpeed, windDirection) {
        let angleDiff = Math.abs(parseInt(this.runwayDesignator) * 10 - windDirection);
        if (angleDiff > 180) angleDiff = 360 - angleDiff;
    
        const rad = angleDiff * (Math.PI / 180);
        const headwind = windSpeed * Math.cos(rad);
        const crosswind = Math.abs(windSpeed * Math.sin(rad));
        
        return { 
            headwind: Number(headwind.toFixed(1)), 
            crosswind: Number(crosswind.toFixed(1)) 
        };
    }

    _separateRunwayComponents() {
        const splittedRunway = this.runwayDesignator.split('')
        const splittedRunwayLastIndex = splittedRunway.length - 1
        let runwayDesignatorSide = splittedRunway[splittedRunwayLastIndex].toUpperCase()
        // console.log(splittedRunway)
        // console.log(splittedRunwayLastIndex)

        if(runwayDesignatorSide === "L" || runwayDesignatorSide === "R" || runwayDesignatorSide === "C"){
            return {
                runway_designator_number: parseInt(this.runwayDesignator).toString(),
                runway_designator_side: runwayDesignatorSide,
            };
        } else {
            return {
                runway_designator_number: parseInt(this.runwayDesignator).toString(),
                runway_designator_side: "X",
            };
        }
    }

    static separateRvrComponents(rawRvr) {
        const trimmedRawRvr = rawRvr.trim();
        let rvr = parseInt(trimmedRawRvr);
        let rvrTendency;

        if(trimmedRawRvr.includes(">")) {
            rvr = this.#parseString(trimmedRawRvr)
            rvrTendency = "Excellent";
        } else if(trimmedRawRvr.includes("▲") || trimmedRawRvr.includes("▼")) {
            switch(rvrTendency) {
                case "▲":
                    rvrTendency = "Improving";
                    break;
                case "▼":
                    rvrTendency = "Deteriorating";
                    break;
            }
        } else {
            rvrTendency = "Stable"
        }

        return {
            rvr: rvr,
            rvr_tendency: rvrTendency
        }
    }

    static #parseString(str) {
    const numericString = str.replace(/[^0-9]/g, ''); //removes all non-numeric characters
        if (numericString.length > 0) {
            return parseInt(numericString, 10);
        } else {
            return NaN;
        }
    }
}

module.exports = PreprocessRawInput