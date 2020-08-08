const testDb = require('./index');

// I do not want these to run in parallel 🤷🏻‍♂️
test('Test all methods', async () => {
    let validity = Math.random() + '';

    testDb.setDataSync('example', validity);
    expect(testDb.getDataSync('example')).toEqual(validity);

    validity = Math.random() + '';
    testDb.setDataSync('example', validity);
    expect(testDb.getDataSync('example')).toEqual(validity);
    testDb.truncateDataSync('example');
    expect(testDb.getDataSync('example')).toEqual('');

    validity = Math.random() + '';
    await testDb.setData('example', validity);
    let dataTest;
    await testDb.getData('example').then(async (data: string) => {
        dataTest = data;
    })
    expect(dataTest).toEqual(validity);

    validity = Math.random() + '';
    testDb.setDataSync('example', validity);
    await testDb.truncateData('example');
    expect(testDb.getDataSync('example')).toEqual('');

    testDb.appendData('example', 'test one');
    testDb.appendData('example', 'test two');
})
