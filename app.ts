import priceList from "./data/priceList.json";
import { item, order, priceListType, promotionType } from "./types";

const calc = (order: order, isMember?: boolean, promotion?: promotionType[]) => {
    let total: number = 0;
    let isMemberDiscount: boolean = false
    let isPromotionDiscount: boolean = false

    const priceListData: priceListType = priceList; // get price list data
    order.forEach((item: item) => {
        const findItem = priceListData[item.item]; // find item price
        const itemPrice = findItem ? findItem.price : 0;
        if (findItem) {
            total += itemPrice * item.qty; // calculate total price
        }
    });
    if (isMember) {
        total = total * 0.9; // 10% discount
        isMemberDiscount = true
    }
    if(promotion) {
        const isOrderMatchThePromotion = order.some((item: item) => promotion?.some((promo: promotionType) => promo.item === item.item && promo.qty <= item.qty));
        if(isOrderMatchThePromotion) {
            total = total * 0.95 // 5% discount
            isPromotionDiscount = true
        }
    }

    return {
        total: total,
        isMemberDiscount: isMemberDiscount,
        isPromotionDiscount: isPromotionDiscount
    }
};

export { calc };
