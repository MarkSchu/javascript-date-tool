import { element, repeat } from 'utils/dom.js';

function App() {
    const date = new Date();
    let prototypeStrs = Object.getOwnPropertyNames(Date.prototype);
    prototypeStrs = prototypeStrs.filter((name) => {
        return !name.startsWith('set') &&  name !== 'constructor'
    });
    prototypeStrs.sort().reverse();

    return (
        element('main', {className: 'main'},
            element('h1', {textContent: 'JavaScript Date Reference'}),
            element('p', {innerHTML: 'This table shows the value returned for each <b>get</b> and <b>to</b> method in the native JavaScript Date object.'}),
            element('p', {innerHTML: 'Each value is determined by <b>Date.now()</b>, called on page load.'}),
            element('table', {},
                element('tr', {},
                    element('th', {textContent: 'method' }),
                    element('th', {textContent: 'return value'})
                ),
                repeat(prototypeStrs, (method) => 
                    element('tr', {},
                        element('td', {textContent: method }),
                        element('td', {textContent: date[method]()})
                    )
                )
            )
        )
    )
}

document.body.appendChild(App());