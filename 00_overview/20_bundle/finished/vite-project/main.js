import './style.css';
import { wait } from './wait';
import * as fib from 'fibonacci-series';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const start = async () => {
    console.log('waiting...');
    await wait(1); // 2017 console.log('start');

    const a = { a: 'hi' };
    const b = { ...a }; // es2018
    console.log(b);

    try {
        throw new Error('エラー');
    } catch {
        console.log('catch!');
    }

    const result = a?.test?.(); // es2020
    console.log(result);

    const fibs = fib(5);
    console.log(fibs);
};

start();
