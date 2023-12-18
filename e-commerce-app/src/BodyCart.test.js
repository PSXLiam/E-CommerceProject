import { Cart } from './BodyCart';

test('Is postage free when cart it empty?', () => {

    //Creating test data
    let testCart =  new Cart("", 0)

    //Compare the expected output to the actual output
    expect(testCart.findPostage()).toBe(0)
})

test('Is postage free when cart has products over £200?', () => {

    //Creating test data
    let testCart =  new Cart("", 250)

    //Compare the expected output to the actual output
    expect(testCart.findPostage()).toBe(0)
})

test('Is postage charged when cart has products under £200?', () => {

    //Creating test data
    let testCart =  new Cart("", 50)

    //Compare the expected output to the actual output
    expect(testCart.findPostage()).toBe(5)
})