/**
 * Orbit Hopper — shared Firebase initialization + Remote Config gates.
 *
 * Exports the initialized Firebase app plus `getIsAvailable()`, which returns
 * the current `is_available` Remote Config flag. Default is `true` so a missing
 * or slow config never blocks the page.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getRemoteConfig, fetchAndActivate, getBoolean } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-remote-config.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpVgr8OXnBsSNkVr-8EAzdR47m72KcMXc",
    authDomain: "orbithop-d8b1b.firebaseapp.com",
    databaseURL: "https://orbithop-d8b1b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "orbithop-d8b1b",
    storageBucket: "orbithop-d8b1b.firebasestorage.app",
    messagingSenderId: "1018327336962",
    appId: "1:1018327336962:web:07b3653b9f594409a37f1b",
    measurementId: "G-VW2MQJ5ZLT"
};

export const app = initializeApp(firebaseConfig);

const remoteConfig = getRemoteConfig(app);
// Short interval so a launch-day flip in the Firebase console propagates to visitors within ~1 minute.
remoteConfig.settings.minimumFetchIntervalMillis = 60 * 1000;
remoteConfig.defaultConfig = { is_available: true };

/**
 * Resolves to the current `is_available` boolean. Races a 1500ms timeout so
 * a slow network falls back to the default (true) and never blocks the page.
 */
export function getIsAvailable() {
    const fetchPromise = fetchAndActivate(remoteConfig)
        .then(() => getBoolean(remoteConfig, 'is_available'))
        .catch(() => true);
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(true), 1500));
    return Promise.race([fetchPromise, timeoutPromise]);
}
