

import axios from 'axios';
import { artsApi } from '../../api/index';
import { getArtsParams } from '../../types/artApiTypes';
import { actions } from './arts.slice';
import { Dispatch } from '@reduxjs/toolkit';

export const getArtProducts = ({ limit }: getArtsParams) => async (dispatch: Dispatch) => {
    dispatch(actions.setArtsIsLoading())
    console.log('data getArtProducts 🍉', limit);
    try {
        const result = await artsApi.getArtsProductsOnLimit({ limit });
        console.log('result getArtProducts', result);
        dispatch(actions.setArts(result.data.data))
    } catch (e) {
        if (!axios.isAxiosError(e)) {
            console.log('getArtProducts', e);

            dispatch(actions.setArtsError('Неизвестная ошибка'));
        }
    }
};
