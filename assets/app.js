import "./css/style.css";
import {ActuAPI} from "./js/ActuAPI";
import images from "./images/noImage.jpg";
import {Theme} from "./js/Theme";

Theme.addButton();

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/build/js/sw.js').then(function(reg) {

        if(reg.installing) {
            console.log('Service worker installing');
        } else if(reg.waiting) {
            console.log('Service worker installed');
        } else if(reg.active) {
            console.log('Service worker active');
        }

    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}