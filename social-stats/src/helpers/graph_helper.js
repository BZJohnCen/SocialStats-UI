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
        
        if (objArr.length <= 0)
            return [];

        var allY = Object.keys(objArr[0]);
        var allGraphs = [];
        allY.splice(allY.indexOf(xAxis), 1)

        allY.forEach(y => {
            var objMapArr = objArr.filter(obj => moment().subtract(1, 'year').unix() <= moment(obj[xAxis]).unix()).map(obj => {
                return {
                    x: xAxis === 'date' ? moment(obj[xAxis]).toDate() : obj[xAxis],
                    y: obj[y],
                }
            })
            objMapArr.sort((a, b) => moment(a.x).unix() - moment(b.x).unix());
            allGraphs.push({
                yTitle: y,
                xTitle: xAxis,
                color: COLORS[allGraphs.length],
                visible: true,
                data: objMapArr
            });
        })
        return allGraphs
    }
}
export default GraphHelper;