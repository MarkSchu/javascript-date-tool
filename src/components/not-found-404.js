import { element } from '/utils/dom.js';

export function pageNotFound404() {
    return (
        element('div', {
            textContent: `Oops! page not found`
        })
    )
}