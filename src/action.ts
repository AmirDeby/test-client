import { Dispatch } from "redux";
import axios from 'axios';
import { ActionTypes } from "./reducer";


export const getGamesAction = () => {

    return async (dispatch: Dispatch) => {
        const response = await axios.get('http://localhost:3500/football');
        dispatch({
            type: ActionTypes.GetFGames,
            payload: response.data

        })
    }
}

export const getBasketAction = () => {
    
    return async (dispatch:Dispatch) => {
        const {data} = await axios.get('http://localhost:3500/basketball');
        dispatch({
            type: ActionTypes.GetGames,
            payload: data
        })
    }
}