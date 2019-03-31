import moment from 'moment';

const GraphHelper = {
    convertObjArrToDataset: (objArr, xAxis) => {

        var allY = Object.keys(objArr[0]);
        var allGraphs = [];
        allY.splice(allY.indexOf(xAxis), 1)

        allY.forEach(y => {
            var objMapArr = objArr.map(obj => {
                return {
                    x: xAxis === 'date' ? moment(obj[xAxis]).toDate() : obj[xAxis],
                    y: obj[y],
                }
            })
            objMapArr.sort((a, b) => moment(b.x).unix() - moment(a.x).unix());
            allGraphs.push({
                yTitle: y,
                xTitle: xAxis,
                graphTitle: y + ' vs ' + xAxis,
                data: objMapArr
            });
        })
        console.log('allGraphs', allGraphs)
        return allGraphs
    }
}
export default GraphHelper;