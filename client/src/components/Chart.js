import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries
} from 'vis-react';

const Chart = (props) => {

    const dataArr = props.players.slice(0, 10).map((d) => {
        return {
            x: d.name + '/' + d.searches,
            y: parseFloat(d.count / 1000)
        }
    });

    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Player Name" />
            <YAxis title="Number of Searches" />
            <LineSeries
                data={dataArr}
                style={{ stroke: 'violet', strokeWidth: 3 }} />
        </XYPlot>
    );
}

export default Chart;