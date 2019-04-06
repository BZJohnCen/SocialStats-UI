const SnapshotHelper = {
    initializeDailySnapshots: (uid, name) => {
        return fetch(`/api/snapshots/init?uid=${uid}&tname=${name}`, {
            method: 'POST',
            'Content-Type': 'application/json'
        }).then(res => res.json())
    },
    initializeWeeklySnapshots: (uid, name) => {
        return fetch(`/api/weekly_snap/init?uid=${uid}&tname=${name}`, {
            method: 'POST',
            'Content-Type': 'application/json'
        }).then(res => res.json())
    },
    getDailySnapshots: (uid) => {
        return fetch(`/api/snapshots?uid=${uid}`, {
            method: 'GET',
            'Content-Type': 'application/json'
        }).then(res => res.json())
    },
    getWeeklySnapshots:(uid) => {
        return fetch(`/api/weekly_snap?userid=${uid}`, {
            method: 'GET',
            'Content-Type': 'application/json'
        }).then(res => res.json())
    }
}

export default SnapshotHelper;