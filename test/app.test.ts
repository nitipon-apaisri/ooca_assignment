import { assert, expect, test } from "vitest";
import priceList from "../data/priceList.json";
import { calc } from "../app";
import { item, order, priceListType, promotionType, result } from "../types";

test("priceList is an object", () => {
    assert.isObject(priceList);
});

test("priceList has 7 keys", () => {
    const totalKeys = Object.keys(priceList).length;
    expect(totalKeys).toBe(7);
});

test("calc function should return a number", () => {
    const order: order = [
        {
            item: "red",
            qty: 1,
        },
        {
            item: "blue",
            qty: 1,
        },
    ];
    const result: result = calc(order);
    expect(result.total).toBeTypeOf("number");
});

test("it should return 460 when by all items each", () => {
    const order: order = [
        {
            item: "red",
            qty: 1,
        },
        {
            item: "blue",
            qty: 1,
        },
        {
            item: "green",
            qty: 1,
        },
        {
            item: "yellow",
            qty: 1,
        },
        {
            item: "pink",
            qty: 1,
        },
        {
            item: "purple",
            qty: 1,
        },
        {
            item: "orange",
            qty: 1,
        },
    ];

    const result: result = calc(order);
    expect(result.total).toBe(460);
});

test("it should return 414 when by all items each with 10% discount", () => {
    const isMember = true;

    const order: order = [
        {
            item: "red",
            qty: 1,
        },
        {
            item: "blue",
            qty: 1,
        },
        {
            item: "green",
            qty: 1,
        },
        {
            item: "yellow",
            qty: 1,
        },
        {
            item: "pink",
            qty: 1,
        },
        {
            item: "purple",
            qty: 1,
        },
        {
            item: "orange",
            qty: 1,
        },
    ];

    const result: result = calc(order, isMember);
    expect(result.total).toBe(414);
    expect(result.isMemberDiscount).toBe(true);
});

test("It should return 551 when buy all items, including any promotional items without member", () => {
  const isMember = false;
    const promotion: promotionType[] = [
        {
            item: "green",
            qty: 2,
        },
        {
            item: "pink",
            qty: 2,
        },
        {
            item: "orange",
            qty: 2,
        },
    ];

    const order: order = [
        {
            item: "red",
            qty: 1,
        },
        {
            item: "blue",
            qty: 1,
        },
        {
            item: "green",
            qty: 1,
        },
        {
            item: "yellow",
            qty: 1,
        },
        {
            item: "pink",
            qty: 1,
        },
        {
            item: "purple",
            qty: 1,
        },
        {
            item: "orange",
            qty: 2,
        },
    ];

    const result: result = calc(order, isMember, promotion);
    expect(result.total).toBe(551);
    expect(result.isMemberDiscount).toBe(false);
    expect(result.isPromotionDiscount).toBe(true);
});

test("It should return  when buy all items, including any promotional items with member", () => {
  const isMember = true;
    const promotion: promotionType[] = [
        {
            item: "green",
            qty: 2,
        },
        {
            item: "pink",
            qty: 2,
        },
        {
            item: "orange",
            qty: 2,
        },
    ];

    const order: order = [
        {
            item: "red",
            qty: 1,
        },
        {
            item: "blue",
            qty: 1,
        },
        {
            item: "green",
            qty: 1,
        },
        {
            item: "yellow",
            qty: 1,
        },
        {
            item: "pink",
            qty: 1,
        },
        {
            item: "purple",
            qty: 1,
        },
        {
            item: "orange",
            qty: 2,
        },
    ];

    const result: result = calc(order, isMember, promotion);
    expect(result.total).toBe(495.9);
    expect(result.isMemberDiscount).toBe(true);
    expect(result.isPromotionDiscount).toBe(true);
});

