export interface IState {
    football: string[],
    games: string[],
}

export interface IAction {
    type: string;
    payload: any;

}


const initialState: IState = {
    football: [],
    games: []
};

export enum ActionTypes {
    GetFGames = "GET_F_GAMES",
    GetGames = "GET_GAMES",
}

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        case ActionTypes.GetFGames: {
            return {
                ...state,
                football: action.payload
            }
        }

        case ActionTypes.GetGames: {
            return {
                ...state,
                games: action.payload
            }
        }


        default: {
            return state;
        }
    }
}