import { writable } from 'svelte/store';

// Initialize the store with the default language, e.g., English ('en')
export const language = writable('en');
