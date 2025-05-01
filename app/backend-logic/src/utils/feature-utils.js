class FeatureUtils {
    /**
     * oneHotEncoder method that receives array as parameter
     */
    static oneHotEncode(prefix, categories, featureValue){
        const matchedCategory = categories.find((category) => {
            return category.value === featureValue
        })

        if(!matchedCategory){
            throw {
                statusCode: 404,
                message: `${featureValue} not found`
            }
        }                        

        for(let i = 0; i < categories.length; i++){
            if(categories[i].value === featureValue){
                categories[i].binary = 1
            }
        }

        const mappedCategories = categories.map((category) => {
            return {
                category: `${prefix}_${category.value}`,
                is_input: category.binary
            }
        })

        return {
            matchedCategory,
            mappedCategories
        };
    }
}

module.exports = FeatureUtils