import axios from 'axios';
import { publicRoutes } from '../api/routes/public-routes';
import { getRequestOptions } from '../hooks/useFetchOptions';

export const getHomeSliders = async () => {
    try {
        const { data } = await axios.get(
            publicRoutes.GET_CAROUSEL_SLIDERS,
            { ...getRequestOptions }
        );

        return {
            props: {
                sliderData: data.data,
            },
        };
    } catch (e) {
        return {
            props: {
                sliderData: null,
            },
        };
    }
};

export const getFeaturedProducts = async () => {
    try {
        const { data } = await axios.get(
            publicRoutes.GET_FEATURED_PRODUCTS,
            { ...getRequestOptions }
        );

        return {
            props: {
                featuredProducts: data.data,
            },
        };
    } catch (e) {
        return {
            props: {
                featuredProducts: null,
            },
        };
    }
};