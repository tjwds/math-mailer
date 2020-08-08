// I wish these were esm.
const fs = require('fs');
const fs_promises = require('fs/promises');
const path = require('path');

const readFileSync = fs.readFileSync;
const writeFileSync = fs.writeFileSync;
const readFile = fs_promises.readFile;
const writeFile = fs_promises.writeFile;

const appendData = (name: string, data: string): Promise<void> => {
    return setData(name, '\n'+data, {'flag': 'a'});
}

const appendDataSync = (name: string, data: string): void => {
    return setDataSync(name, '\n'+data, {'flag': 'a'});
}

const getData = (name: string): Promise<string> => {
    return readFile(path.resolve(__dirname, `data/${name}.txt`)).then(
        (data: Buffer) => new Promise(resolve => resolve(data.toString()))
    );
}

const getDataSync = (name: string): string => {
    return readFileSync(path.resolve(__dirname, `data/${name}.txt`)).toString();
}

const setData = (
    name: string,
    data: string,
    append?: object,
): Promise<void> => {
    return writeFile(path.resolve(__dirname, `data/${name}.txt`), data, append);
}

const setDataSync = (
    name: string,
    data: string,
    append?: object,
): void => {
    writeFileSync(path.resolve(__dirname, `data/${name}.txt`), data, append);
}

const truncateData = (name: string): Promise<void> => {
    return writeFile(path.resolve(__dirname, `data/${name}.txt`), '');
}

const truncateDataSync = (name: string): void => {
    writeFileSync(path.resolve(__dirname, `data/${name}.txt`), '');
}

module.exports = {
    appendData,
    appendDataSync,
    getData,
    getDataSync,
    setData,
    setDataSync,
    truncateData,
    truncateDataSync,
}
