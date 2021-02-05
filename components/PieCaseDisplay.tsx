import { Pie } from '@reactchartjs/react-chart.js'

export default function PieCaseDisplay() {
    const data = {
        labels: ['Active','Recovered'],
        datasets: [
            {
                label: "Case Composition in {{}}",
                data: [100,233],
                backgroundColor: [
                    'rgba(255,242,252,0.2)',
                    'rgba(255,242,252,0.2)',
                ]
            }
        ]
    }

    return(
        <>
            <Pie data={data}/>
        </>
    )
}
