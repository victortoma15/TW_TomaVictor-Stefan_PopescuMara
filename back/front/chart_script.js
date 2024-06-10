document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('chartCanvas').getContext('2d');
    let currentChart;

    document.getElementById('showRegionChart').addEventListener('click', async () => {
        if (currentChart) currentChart.destroy();
        const data = await fetchData('/api/statistics/attacksByRegion');
        currentChart = renderChart(ctx, data, 'Overall Number of Terrorist Attacks by Region', 'bar');
    });

    document.getElementById('showTargetChart').addEventListener('click', async () => {
        if (currentChart) currentChart.destroy();
        const data = await fetchData('/api/statistics/attacksByMethod');
        currentChart = renderChart(ctx, data, 'Number of Attacks per Target Type', 'pie');
    });

    document.getElementById('showWeaponChart').addEventListener('click', async () => {
        if (currentChart) currentChart.destroy();
        const data = await fetchData('/api/statistics/attacksByWeapon');
        currentChart = renderChart(ctx, data, 'Number of Attacks by Weapon Type', 'pie');
    });
    document.getElementById('exportBtn').addEventListener('click', () => {
        const exportOptions = document.getElementById('exportOptions');
        exportOptions.classList.toggle('hidden');
    });

    document.getElementById('exportCSV').addEventListener('click', () => {
        exportChart(currentChart, 'csv');
    });

    document.getElementById('exportPNG').addEventListener('click', () => {
        exportChart(currentChart, 'png');
    });

    document.getElementById('exportSVG').addEventListener('click', () => {
        exportChart(currentChart, 'svg');
    });

    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    }

    function renderChart(ctx, data, label, type) {
        if (!data || data.length === 0) {
            console.error('No data available to render chart');
            return;
        }

        const labels = data.map(item => item.region_txt || item.weaptype1_txt || item.iyear || item.targtype1_txt);
        const values = data.map(item => item.attack_count);

        return new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: values,
                    backgroundColor: type === 'pie' ? getRandomColors(data.length) : 'rgba(75, 192, 192, 0.2)',
                    borderColor: type === 'pie' ? getRandomColors(data.length) : 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: type !== 'pie',
                scales: type === 'bar' ? {
                    y: {
                        beginAtZero: true
                    }
                } : {},
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: label
                    }
                }
            }
        });
    }

    function getRandomColors(num) {
        const colors = [];
        for (let i = 0; i < num; i++) {
            colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`);
        }
        return colors;
    }
    function exportChart(chart, format) {
        const link = document.createElement('a');
        link.download = `chart.${format}`;

        if (format === 'png') {
            link.href = chart.toBase64Image();
        } else if (format === 'csv') {
            const csv = chart.data.labels.map((label, index) => {
                return `${label},${chart.data.datasets[0].data[index]}`;
            }).join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            link.href = URL.createObjectURL(blob);
        } else if (format === 'svg') {
            const svg = chart.toBase64Image('image/svg+xml');
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            link.href = URL.createObjectURL(blob);
        }

        link.click();
    }
});
