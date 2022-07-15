export const minCounterValue = 0;
export const maxCounterValue = 5;

type countStateType = {
    count: number
}
export type IncrementCounterReducerActionType = {
    type: 'INCREMENT-COUNT',
}
export type ResetCounterReducerActionType = {
    type: 'RESET-COUNT',
}
type ActionsType = IncrementCounterReducerActionType | ResetCounterReducerActionType

const initialState: countStateType = {count:minCounterValue}

export const counterReducer = (state: countStateType = initialState, action: ActionsType): countStateType => {
    switch (action.type) {
        case 'INCREMENT-COUNT': {
            const stateCopy = {...state}
            stateCopy.count++;
            return stateCopy;
        }
        case 'RESET-COUNT': {
            const stateCopy = {...state}
            stateCopy.count = minCounterValue;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const incrementCounterReducerAC = (): IncrementCounterReducerActionType => {
    return {type: 'INCREMENT-COUNT'}
}
export const resetCounterReducerAC = (): ResetCounterReducerActionType => {
    return {type: 'RESET-COUNT'}
}