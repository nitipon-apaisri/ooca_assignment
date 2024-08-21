type item = {
    item: string;
    qty: number;
};
type order = item[];
type priceListType = {
    [key: string]: {
        price: number;
    };
};

type promotionType = {
    item: string;
    qty: number;
}

type result = {
    total: number;
    isMemberDiscount: boolean;
    isPromotionDiscount: boolean;
}

export type { item, order, priceListType, promotionType, result };