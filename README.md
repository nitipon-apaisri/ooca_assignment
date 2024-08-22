# README

Welcome to the project!

## Installation

To install this project, follow these steps:

1. Clone the repository.
2. Run `npm install` | `pnpm install` to install the dependencies.
3. Run `npm run test` | `pnpm run test` to run the tests.

## Usage

1. Add test cases to the `app.test.ts` file in the `test` directory.

Example:
if a customer is a member, promotion is available, and the customer buys all items, the total price should be 495.9
const isMember = true;
const promotion: promotionType[] = [ { item: "green", qty: 2 }, { item: "pink", qty: 2 }, { item: "orange", qty: 2 } ];
const order: order = [ { item: "red", qty: 1 }, { item: "blue", qty: 1 }, { item: "green", qty: 1 }, { item: "yellow", qty: 1 }, { item: "pink", qty: 1 }, { item: "purple", qty: 1 }, { item: "orange", qty: 2 } ];
const result: result = calc(order, isMember, promotion);
expect(result.total).toBe(495.9);
expect(result.isMemberDiscount).toBe(true);
expect(result.isPromotionDiscount).toBe(true);

`* qty in promotion is the minimum quantity to get the discount`

## Contributing

Contributions are welcome! Please follow the guidelines outlined in CONTRIBUTING.md.

## License

This project is licensed under the [MIT License](LICENSE).
