const initialState = {
    tabs : [],
    currentTab: undefined
}

const tabsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TAB_OPEN': {
            let check = state.tabs.find(tab => tab.title === action.payload.title);
            if (check) return { ...state, currentTab : check };
            else return { ...state, tabs : [...state.tabs, action.payload], currentTab : action.payload };
        }    
        case 'TAB_CLOSE': {
            let updatedCurrentTab;
            let updatedTabs = state.tabs;
            let index = state.tabs.findIndex(tab => tab.title === state.currentTab.title);
            updatedTabs.splice(index, 1);
            if (updatedTabs.length) {
                updatedCurrentTab = index === 0 ? updatedTabs[0] : updatedTabs[index - 1];
            }
            return { ...state, tabs : updatedTabs, currentTab : updatedCurrentTab };
        }     
        case 'TAB_SWITCH': {
            return { ...state, currentTab : action.payload.currentTab };
        }
        default:
            return state;
    }
}

export default tabsReducer;
