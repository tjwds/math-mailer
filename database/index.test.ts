import {
    getData,
    getDataSync,
    setData,
    setDataSync,
} from './index';

test('setData and getData', () => {
    const validity = Math.random() + '';
    expect.assertions(1);
    return expect(setData('example', validity).then(() => {
        return getData('example')
    })).resolves.toEqual(validity)
})

test('setDataSync and getDataSync', () => {
    const validity = Math.random() + '';
    setDataSync('example', validity);
    expect(getDataSync('example')).toEqual(validity);
})
