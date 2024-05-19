import { ObservableVar } from 'utils/observable.js';

export const path = new ObservableVar(window.location.pathname);

window.addEventListener('popstate', () => {
    path.set(window.location.pathname);
});

window.addEventListener('redirect', (e) => {
    path.set(window.location.pathname);
});

window.addEventListener('load', () => {
    path.set(window.location.pathname);
});

path.redirect = (newPathname) => {
    history.pushState({}, '',  newPathname);
    const navEvent = new CustomEvent('redirect');
    window.dispatchEvent(navEvent);
}