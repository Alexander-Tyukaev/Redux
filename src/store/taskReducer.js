const defaultState = {
    tasks:[],
    filter: 'all'
    
}

const ADD_TASK = "ADD_TASK"
const REMOVE_TASK = "REMOVE_TASK"
export const taskReducer = (state = defaultState,action) => {
    switch (action.type){
        case "ADD_TASK":
           
            return {...state,tasks: [...state.tasks,action.payload]}

        case "REMOVE_TASK":
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
            case 'SET_FILTER_ALL':
                return { ...state, filter: 'all' };
              case 'SET_FILTER_COMPLETED':
                return { ...state, filter: 'completed' };
              case 'SET_FILTER_INCOMPLETE':
                return { ...state, filter: 'incomplete' };

            default: return state;
    }
}

export const addTaskAction = (payload) =>({type:ADD_TASK,payload})
export const removeTaskAction = (id) => ({ type: REMOVE_TASK, payload: id });
export const setFilterAll = () => ({ type: 'SET_FILTER_ALL' });
export const setFilterCompleted = () => ({ type: 'SET_FILTER_COMPLETED' });
export const setFilterIncomplete = () => ({ type: 'SET_FILTER_INCOMPLETE' });