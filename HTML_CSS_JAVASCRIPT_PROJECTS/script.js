// ----------------- EEG Live Graph -----------------
const eegCtx = document.getElementById('eegChart').getContext('2d');
const eegChart = new Chart(eegCtx, {
    type: 'line',
    data: {
        labels: Array(50).fill(''),
        datasets: [
            { label: 'Alpha', data: Array(50).fill(0), borderColor: '#FFD700', fill: false, tension: 0.4 },
            { label: 'Beta', data: Array(50).fill(0), borderColor: '#00FF00', fill: false, tension: 0.4 },
            { label: 'Theta', data: Array(50).fill(0), borderColor: '#1E90FF', fill: false, tension: 0.4 },
            { label: 'Delta', data: Array(50).fill(0), borderColor: '#FF4500', fill: false, tension: 0.4 },
        ]
    },
    options: {
        responsive: true,
        animation: false,
        scales: { y: { min: -50, max: 50 } },
        plugins: { legend: { labels: { color: '#f0f0f0' } } }
    }
});

// Simulate EEG live data
setInterval(() => {
    eegChart.data.datasets.forEach(dataset => {
        dataset.data.shift();
        dataset.data.push(Math.floor(Math.random() * 100 - 50));
    });
    eegChart.update();
}, 300);

// ----------------- Emotion Detection -----------------
const emojis = { Happy: '😊', Sad: '😢', Neutral: '😐' };
const colors = { Happy: '#FFD700', Sad: '#1E90FF', Neutral: '#AAAAAA' };
const moodText = document.getElementById('moodText');
const emojiDiv = document.getElementById('emoji');

// ----------------- Emotion History -----------------
const historyCtx = document.getElementById('historyChart').getContext('2d');
const historyChart = new Chart(historyCtx, {
    type: 'bar',
    data: {
        labels: Array(10).fill(''),
        datasets: [
            { label: 'Happy', data: Array(10).fill(0), backgroundColor: '#FFD700' },
            { label: 'Sad', data: Array(10).fill(0), backgroundColor: '#1E90FF' },
            { label: 'Neutral', data: Array(10).fill(1), backgroundColor: '#AAAAAA' },
        ]
    },
    options: {
        responsive: true,
        animation: false,
        plugins: { legend: { labels: { color: '#f0f0f0' } } },
        scales: { y: { min: 0, max: 1 } }
    }
});

// Simulate emotion changes
let currentEmotion = 'Neutral';
setInterval(() => {
    const emotions = ['Happy', 'Sad', 'Neutral'];
    currentEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    moodText.textContent = currentEmotion;
    emojiDiv.textContent = emojis[currentEmotion];
    emojiDiv.style.color = colors[currentEmotion];

    // Update emotion history
    historyChart.data.labels.push('');
    historyChart.data.datasets[0].data.push(currentEmotion === 'Happy' ? 1 : 0);
    historyChart.data.datasets[1].data.push(currentEmotion === 'Sad' ? 1 : 0);
    historyChart.data.datasets[2].data.push(currentEmotion === 'Neutral' ? 1 : 0);

    if (historyChart.data.labels.length > 50) {
        historyChart.data.labels.shift();
        historyChart.data.datasets.forEach(ds => ds.data.shift());
    }
    historyChart.update();
}, 5000);

// ----------------- Music Player -----------------
const songs = {
    Happy: { title: 'Happy Song', artist: 'Artist A', cover: 'https://via.placeholder.com/150/FFD700' },
    Sad: { title: 'Sad Song', artist: 'Artist B', cover: 'https://via.placeholder.com/150/1E90FF' },
    Neutral: { title: 'Relaxing Music', artist: 'Artist C', cover: 'https://via.placeholder.com/150/AAAAAA' }
};

const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const albumArt = document.getElementById('albumArt');
const playPauseBtn = document.getElementById('playPause');

let isPlaying = false;
playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
});

// Update music automatically when emotion changes
setInterval(() => {
    const song = songs[currentEmotion];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumArt.src = song.cover;
}, 5000);

// ----------------- EEG Headset Status -----------------
const statusSpan = document.getElementById('status');
setTimeout(() => {
    statusSpan.textContent = 'Connected';
    statusSpan.classList.remove('disconnected');
    statusSpan.classList.add('connected');
}, 2000);
