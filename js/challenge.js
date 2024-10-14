let timer = 0;
let timerInterval = setInterval(() => {
    timer++;
    document.getElementById('timer').innerText = timer;
}, 1000);

let counter = 0;

document.getElementById('plus').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').innerText = counter;
});

let likeCount = 0;

document.getElementById('like').addEventListener('click', () => {
    likeCount++;
    document.getElementById('like-count').innerText = `${likeCount} Likes`;
});

let isPaused = false;

document.getElementById('pause').addEventListener('click', () => {
    if (isPaused) {
        // Resume
        timerInterval = setInterval(() => {
            timer++;
            document.getElementById('timer').innerText = timer;
        }, 1000);
        document.getElementById('pause').innerText = 'Pause';
        isPaused = false;
        enableButtons();
    } else {
        // Pause
        clearInterval(timerInterval);
        document.getElementById('pause').innerText = 'Resume';
        isPaused = true;
        disableButtons();
    }
});

function disableButtons() {
    document.getElementById('plus').disabled = true;
    document.getElementById('minus').disabled = true;
    document.getElementById('like').disabled = true;
    document.getElementById('submit-comment').disabled = true;
}

function enableButtons() {
    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('like').disabled = false;
    document.getElementById('submit-comment').disabled = false;
}

document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    if (commentText) {
        const li = document.createElement('li');
        li.innerText = commentText;
        document.getElementById('comments-list').appendChild(li);
        commentInput.value = ''; // Clear input
    }
});