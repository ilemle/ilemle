
import { getArtsParams } from '../types/artApiTypes';
import { instanceArt } from './instance';


const artsApi = {
    getArtsProductsOnLimit: ({ limit }: getArtsParams) => {
        return instanceArt.post(`products?limit=${limit}`);
    },
};

export default artsApi;
