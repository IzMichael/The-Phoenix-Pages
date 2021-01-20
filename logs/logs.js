function load() {
    fetch('https://api.github.com/repos/IzMichael/The-Phoenix-Pages/commits')
        .then(response => response.json())
        .then(data => {parseCommits(data)});
}

function parseCommits(data) {
    console.log(data)
    var index;
    for (index = 0; index < data.length; ++index) {
        const list = document.getElementById('commitList');
        var commit = data[index];
        list.innerHTML = list.innerHTML + '<div class="logEntry"><p class="w-64">' + parseDate(commit.commit.committer.date) + '</p><p class="flex-1">' + commit.commit.message + '</p><p class="w-24 text-right">' + commit.commit.committer.name + '</p></div>'
    }
}

function parseDate(input) {
    const date = new Date(input);
    var day = date.getDate()
    var month = date.getMonth() + 1;
    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }
    const year = date.getFullYear();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    const time = hours + ':' + minutes;

    return day + '/' + month + '/' + year + ' ' + time
}