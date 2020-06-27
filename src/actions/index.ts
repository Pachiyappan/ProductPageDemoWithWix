import {variantDB} from "../data/ProductData";
import * as Constant from "./Constants";

function findTypeValue(optionsArray: { type: string, value: string }[], type: string) {
    return optionsArray.find(x => x.type === type).value
}

export const changeOptionType = (type: string, value: string, currentOptions: { type: string, value: string }[]) => {
    const newCurrentOptions = [...currentOptions.filter(x => x.type !== type), {type, value}];
    const lookupKey = ["Color", "RAM", "Storage"].reduce((acc, x) => `${acc}${x}${findTypeValue(newCurrentOptions, x)}`, "")
    const newVariantDetail = variantDB[lookupKey];
    return {type: Constant.UPDATE_VARIANT, payload: newVariantDetail}
}
