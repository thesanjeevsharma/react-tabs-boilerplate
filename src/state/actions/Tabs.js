export const tabClose = () => {
    return {
        type : 'TAB_CLOSE'
    }
}

export const tabSwitch = (payload) => {
    return {
        type : 'TAB_SWITCH',
        payload
    }
}

export const tabOpen = (payload) => {
    return {
        type : 'TAB_OPEN',
        payload
    }
}