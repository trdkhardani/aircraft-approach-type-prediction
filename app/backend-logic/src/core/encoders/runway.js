const runway_designator_numbers = require("../../config/categories/runway_designator_numbers");
const FeatureUtils = require("./generic");

class RunwayEncode {
    static runwayDesignatorNumberOneHotEncode(runwayDesignatorNumber){
        const encodedRunwayDesignatorNumber = FeatureUtils.oneHotEncode("runway_designator_number", runway_designator_numbers, runwayDesignatorNumber)

        return {
            mappedCategories: encodedRunwayDesignatorNumber.mappedCategories
        }
    }

    static runwayDesignatorSideOneHotEncode(runwayDesignatorSide){
        const runwayDesignatorSideUpper = runwayDesignatorSide.toUpperCase();

        const runway_designator_side = 
        [
            {
                value: "C",
                binary: 0,
            },
            {
                value: "L",
                binary: 0,
            },
            {
                value: "R",
                binary: 0,
            },
            {
                value: "X",
                binary: 0,
            },
        ]

        const encodedRunwayDesignatorSide = FeatureUtils.oneHotEncode("runway_designator_side", runway_designator_side, runwayDesignatorSideUpper)

        return {
            mappedCategories: encodedRunwayDesignatorSide.mappedCategories
        }
    }

    static runwayIlsCategoryOneHotEncode(runwayIlsCategory){
        const runway_ils_category = 
        [
            {
                value: "CAT I",
                binary: 0,
            },
            {
                value: "CAT II",
                binary: 0,
            },
            {
                value: "CAT III",
                binary: 0,
            },
        ]

        const runwayIlsCategoryUpper = runwayIlsCategory.toUpperCase();

        const encodedRunwayDesignatorSide = FeatureUtils.oneHotEncode("runway_ils_category", runway_ils_category, runwayIlsCategoryUpper)

        return {
            mappedCategories: encodedRunwayDesignatorSide.mappedCategories
        }
    }
}

module.exports = RunwayEncode