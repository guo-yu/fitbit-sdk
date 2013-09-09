module.exports = function(params) {
    return {
        user: {
            read: 'user/-/profile.json',
            update: 'user/-/profile.json',
        },
        body: {
            read: 'user/-/body/date/' + params + '.json',
            weight: {
                read: 'user/-/body/log/weight/date/' + params + '.json',
                goal: 'user/-/body/log/weight/goal.json',
            },
            fat: {
                read: 'user/-/body/log/fat/date/' + params + '.json',
                goal: 'user/-/body/log/fat/goal.json',
            }
        },
        activity: {
            read: 'user/-/activities/date/' + params + '.json',
            goal: {
                daily: 'user/-/activities/goals/daily.json',
                weekly: 'user/-/activities/goals/weekly.json'
            }
        },
        sleep: {
            read: 'user/-/sleep/date/' + params + '.json'
        },
        heart: {
            read: 'user/-/heart/date/' + params + '.json'
        },
        bp: {
            read: 'user/-/bp/date/' + params + '.json'
        },
        glucose: {
            read: 'user/-/glucose/date/' + params + '.json'
        },
        foods: {
            read: 'user/-/foods/log/date/' + params + '.json',
            goal: 'user/-/foods/log/goal.json'
        },
        water: {
            read: 'user/-/foods/log/water/date/' + params + '.json'
        }
    }
}