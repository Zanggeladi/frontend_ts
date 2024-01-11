// import * as echarts from 'echarts';
// import {useEffect} from "react";
import {GraphChart} from "@/pages/Home/components/GraphChart";

const nodeData = [
    {
        name: 'Node 1',
        x: 300,
        y: 300
    },
    {
        name: 'Node 2',
        x: 800,
        y: 300
    },
    {
        name: 'Node 3',
        x: 550,
        y: 100
    },
    {
        name: 'Node 4',
        x: 550,
        y: 500
    }
]
const linkData = [
    {
        source: 0,
        target: 1,
        symbolSize: [5, 20],
        label: {
            show: true
        },
        lineStyle: {
            width: 5,
            curveness: 0.2
        }
    },
    {
        source: 'Node 2',
        target: 'Node 1',
        label: {
            show: true
        },
        lineStyle: {
            curveness: 0.2
        }
    },
    {
        source: 'Node 1',
        target: 'Node 3'
    },
    {
        source: 'Node 2',
        target: 'Node 3'
    },
    {
        source: 'Node 2',
        target: 'Node 4'
    },
    {
        source: 'Node 1',
        target: 'Node 4'
    }
]

const Home = () =>{
    return (
        <div>
            <GraphChart
                title={'graph可视化初试'}
                nodeData={nodeData}
                linkData={linkData}
            />
        </div>
    )
}

export default Home