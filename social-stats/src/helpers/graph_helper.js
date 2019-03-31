const GraphHelper = {
    convertObjArrToDataset: (objArr, yAxis) => {
        console.log('eeyeyeyey')
        var yKeys = {};
        var numGraphs = 0;
        var graphs = [];
        objArr.forEach(obj => {
            var key = obj[yAxis]
            delete obj[yAxis]
            numGraphs = Object.keys(obj).length;
            yKeys[key] = obj
        });

        yKeys.forEach(k => {

        })
    }
}
module.exports = GraphHelper;