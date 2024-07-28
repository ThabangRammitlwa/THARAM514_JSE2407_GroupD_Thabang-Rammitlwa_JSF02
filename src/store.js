import { writable } from "svelte/store";    

export const activeCategory = writable('all');
export const activeSort = writable('default');