import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartHoldingsByCompany = ({sharesData}) => {
    
    const options = {
        chart: {
            plotBackgroundColor: 'white',
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text:'Portfolio Distribution by Company'
        },
        tooltip: {
            pointFormat: 'Value: <b>$ {point.y: .2f}</b>, Shares: {point.shares}'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format:'{point.name} ({point.symbol}): {point.percentage: .1f} %'
                }
            }
        },
        credits: {
            enabled: false
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
            y: company.currentPrice * company.numberOfShares,
            shares: company.numberOfShares
        }
    })
    
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />

    )
}

export default ChartHoldingsByCompany;