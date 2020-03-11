import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
const brandPrimary = getStyle('--primary');

/**
 * Creates a data chart line object
 * @param string label       Title
 * @param Array  data        Array of data
 * @param string borderColor Border color
 * @param style  style       Comp style
 */
const getChartLine = (label = 'My chart', data, style = brandPrimary, borderColor = 'rgba(255,255,255,.55)') => {
    console.log('chart data', data)
    return {
        labels: Object.keys(data),
        datasets: [
            {
                label: label,
                backgroundColor: style,
                borderColor: borderColor,
                data: Object.values(data),
            },
        ],
    };
};
const getChartLineOptions = (chartLine) => {
    return {
        tooltips: {
            enabled: false,
            custom: CustomTooltips
        },
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },
            }],
            yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, chartLine.datasets[0].data) - 5,
                    max: Math.max.apply(Math, chartLine.datasets[0].data) + 5,
                },
            }],
        },
        elements: {
            line: {
                borderWidth: 1,
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
            },
        }
    };
};

export default {
    getChartLine,
    getChartLineOptions
};