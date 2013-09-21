// api routers
module.exports = {
    token: {
        request: {
            method: 'post',
            url: '/oauth/request_token'
        },
        access: {
            method: 'post',
            url: '/oauth/access_token'
        },
        authPage: {
            url: '/oauth/authorize'
        }
    },
    user: {
        read: {
            url: '/user/-/profile.json'
        },
        update: {
            method: 'post',
            url: '/user/-/profile.json'
        }
    },
    device: {
        list: {
            url: '/user/-/devices.json'
        }
    },
    alarm: {
        list: {
            url: '/user/-/devices/tracker/{{deviceID}}/alarms.json'
        },
        add: {
            method:'post',
            url: '/user/-/devices/tracker/{{deviceID}}/alarms.json'
        },
        update: {
            method:'post',
            url: '/user/-/devices/tracker/{{deviceID}}/alarms/{{alarmID}}.json'
        },
        remove: {
            method:'delete',
            url: '/user/-/devices/tracker/{{deviceID}}/alarms/{{alarmID}}.json'
        }
    },
    goal: {
        read: {
            url: '/user/-/body/log/{{type}}/goal.json'
        },
        update: {
            method: 'post',
            url: '/user/-/body/log/{{type}}/goal.json'
        }
    },
    body: {
        read: {
            url: '/user/-/body/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/body.json'
        }
    },
    weight: {
        read: {
            url: '/user/-/body/log/weight/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/body/log/weight.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/body/log/weight/{{id}}.json'
        }
    },
    fat: {
        read: {
            url: '/user/-/body/log/fat/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/body/log/fat.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/body/log/fat/{{id}}.json'
        }
    },
    activity: {
        read: {
            url: '/user/-/activities/date/{{date}}.json'
        },
        // THIS IS A ugly hack
        readGoal: {
            url: '/user/-/activities/goals/{{date}}.json'
        },
        updateGoal: {
            method: 'post',
            url: '/user/-/activities/goals/{{date}}.json'
        },
        remove: {
            url: '/user/-/activities/{{id}}.json'
        }
    },
    sleep: {
        read: {
            url: '/user/-/sleep/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/sleep.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/sleep/{{id}}.json'
        }
    },
    heart: {
        read: {
            url: '/user/-/heart/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/heart.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/heart/{{id}}.json'
        }
    },
    bp: {
        read: {
            url: '/user/-/bp/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/bp.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/bp/{{id}}.json'
        }
    },
    glucose: {
        read: {
            url: '/user/-/glucose/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/glucose.json'
        }
    },
    food: {
        read: {
            url: '/user/-/foods/log/date/{{date}}.json',
        },
        update: {
            method: 'post',
            url: '/user/-/foods/log.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/foods/log/{{id}}.json'
        }
    },
    water: {
        read: {
            url: '/user/-/foods/log/water/date/{{date}}.json'
        },
        update: {
            method: 'post',
            url: '/user/-/foods/log/water.json'
        },
        remove: {
            method: 'delete',
            url: '/user/-/foods/log/water/{{id}}.json'
        }
    },
    stat: {
        activity: {
            url: '/user/-/activities.json'
        }
    },
    // networks
    friend: {
        list: {
            url: '/user/-/friends.json'
        },
        board: {
            url: '/user/-/friends/leaderboard.json'
        },
        config: {
            method: 'post',
            url: '/user/-/friends/leaderboard.json'
        }
    },
    invite: {
        list: {
            url: '/user/-/friends/invitations.json'
        },
        create: {
            method: 'post',
            url: '/user/-/friends/invitations.json'
        },
        accept: {
            method: 'post',
            url: '/user/-/friends/invitations/{{id}}.json'
        }
    },
    badge: {
        list: {
            url: '/user/-/badges.json'
        }
    }
}