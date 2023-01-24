import {Constants} from "./Constants";

export const getAsset = (url) => {
    return (
        Constants.BASE_PATH + url
    );
}