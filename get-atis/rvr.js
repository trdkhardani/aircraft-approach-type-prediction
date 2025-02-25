const rvr = require('rvr')

const getRvr = async () => {
    const rvrInfo = await rvr('ATL').then(result => JSON.parse(JSON.stringify(result, null, 2)))
    let rvrTD;
    // if(rvrInfo.rvrValues[0].TD === 0 || rvrInfo.rvrValues[0].TD === "0" || !rvrInfo.rvrValues[0].TD){

    // }
    console.log(rvrInfo.rvrValues[9].TD)
}

getRvr()