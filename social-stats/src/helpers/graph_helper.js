import moment from 'moment';

const COLORS = [
    '#74EBA7',
    '#2D9CDB',
    '#828282',
    '#FF7D7D',
    '#FFAF68',
    '#D9B2FD',
    '#617DA3',

]

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
                color: COLORS[allGraphs.length],
                visible: true,
                data: objMapArr
            });
        })
        console.log('allGraphs', allGraphs)
        return allGraphs
    }
}
export default GraphHelper;