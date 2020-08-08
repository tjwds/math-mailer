import { readFileSync, writeFileSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const getData = (name: string): Promise<string> => {
    return readFile(resolve(__dirname, `data/${name}.txt`)).then(
        data => new Promise(resolve => resolve(data.toString()))
    );
}

const getDataSync = (name: string): string => {
    return readFileSync(resolve(__dirname, `data/${name}.txt`)).toString();
}

const setData = (name: string, data: string): Promise<void> => {
    return writeFile(resolve(__dirname, `data/${name}.txt`), data);
}

const setDataSync = (name: string, data: string): void => {
    writeFileSync(resolve(__dirname, `data/${name}.txt`), data);
}

export {
    getData,
    getDataSync,
    setData,
    setDataSync,
}
