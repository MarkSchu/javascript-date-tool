import { element, render } from 'utils/dom.js';
import { path } from 'state/path.js';

function App() {
    return (
        element('div', {},
            element('h1', {textContent: 'Im App!'})
        )
    )
}

path.onEmit((value) => {
    const { body } = document;
    if (value === '/') {
        render(document.body, App());
    }
    else {
        render(body, element('h1', {textContent: 'Not Found!'}))
    }
});

