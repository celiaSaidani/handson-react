import _ from 'lodash';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const helloWorlds = [
    {region: 'asia', country: 'Japan', hello: 'こんにちは'},
    {region: 'asia', country: 'China', hello: '你好'},
    {region: 'asia', country: 'Korea', hello: '여보세요'},
    {region: 'asia', country: 'Vietnam', hello: 'chào bạn'},
    {region: 'europa', country: 'France', hello: 'Bonjour'},
    {region: 'europa', country: 'Germany', hello: 'Hallo'},
    {region: 'europa', country: 'Italy', hello: 'Ciao'},
    {region: 'america', country: 'Canada', hello: 'CréVindiou'},
    {region: 'america', country: 'USA', hello: 'Hello'},
    {region: 'america', country: 'Mexico', hello: 'Hola'},
];
const tab=_.map(helloWorlds, (elm,i) => {
    return React.createElement('p',{key:i},elm.hello,null);
});
const root= React.createElement('div', null,null,tab);
ReactDOM.render(
    root,
    document.getElementById('root')
);
