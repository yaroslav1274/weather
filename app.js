const weatherBlocks = document.querySelectorAll('.weather');
const images = document.querySelectorAll('img');
const morning = document.querySelector('.morning');
const day = document.querySelector('.day');
const evening = document.querySelector('.evening');
const night = document.querySelector('.night');
const sun = document.querySelector('.sun');
const cloudy = document.querySelector('.cloudy');
const rain = document.querySelector('.rain');
const nightCloudy = document.querySelector('.night-cloudy');


const weatherStatuses = document.querySelectorAll('.weather-status');
const windStatuses = document.querySelectorAll('.wind');
const humidityStatuses = document.querySelectorAll('.humidity');

for (const image of images) {
    for (const humidityStatus of humidityStatuses) {
        for (const windStatus of windStatuses) {
            for (const weatherStatus of weatherStatuses) {
                for (const weatherBlock of weatherBlocks) {
                    weatherBlock.addEventListener('mouseover', () => {
                        weatherBlock.style.height = '300px';
                        
                    });
                    weatherBlock.addEventListener('mouseleave', () => {
                        weatherBlock.style.height = '100px';
                        image.style.opacity = '0';
                        weatherStatus.style.display = 'none';
                        windStatus.style.display = 'none';
                        humidityStatus.style.display = 'none';
                    });
                    morning.addEventListener('mouseover', () => {
                        sun.style.opacity = '1';
                        document.querySelectorAll('.mor').forEach((mor) => {
                            mor.style.display = 'block';
                        });
                    });
                    day.addEventListener('mouseover', () => {
                        cloudy.style.opacity = '1';
                        document.querySelectorAll('.da').forEach((da) => {
                            da.style.display = 'block';
                        });
                    });
                    evening.addEventListener('mouseover', () => {
                        rain.style.opacity = '1';
                        document.querySelectorAll('.eve').forEach((eve) => {
                            eve.style.display = 'block';
                        });
                    });
                    night.addEventListener('mouseover', () => {
                        nightCloudy.style.opacity = '1';
                        document.querySelectorAll('.nig').forEach((nig) => {
                            nig.style.display = 'block';
                        });
                    });
                }
            }
        }
    }
}