export const DEFAULT_PLOT_OPTIONS_PIE = {
    series: {
        dataLabels: [{
            enabled: true,
            distance: 20
        }, {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
                fontSize: '1.2em',
                textOutline: 'none',
                opacity: 0.7
            },
            filter: {
                operator: '>',
                property: 'percentage',
                value: 10
            }
        }]
    }
}