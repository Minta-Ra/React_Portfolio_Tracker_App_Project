import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({sharesData}) => {
    
    const options = {
        chart: {
            plotBackgroundColor: 'white',
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text:'Portfolio Distribution'
        },
        tooltip: {
            pointFormat: 'Value: <b>$ {point.y}</b>, Shares: {point.shares}'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format:'{point.name} ({point.symbol}): {point.percentage: .1f} %'
                }
            }
        },
        series:[{
            name: 'Companies',
            colorByPoint: true,
            data: []
        }]

    }

    options.series[0].data = sharesData.map((company) => {
        return {
            name: company.name,
            symbol: company.symbol,
            y: company.avgPurchasePrice, //placeholder, change to current total value once current value is held in portfolio db objects
            shares: company.numberOfShares
        }
    })
    
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />

    )
}

export default Chart;