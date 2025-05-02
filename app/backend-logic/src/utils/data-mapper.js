class DataMapper {
    static mapOneHotEncodedData(inputData){
        return inputData.mappedCategories.map((data) => {
            return data.is_input // is_input property is from FeatureUtils class, oneHotEncode method
        })
    }
}

module.exports = DataMapper