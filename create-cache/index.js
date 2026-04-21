// ⚡ Question 2: Implement a Cache System

// Design a simple in-memory cache.

// Requirements:
//  • If value exists → return from cache
//  • If not → store the value
//  • Support:
//  • add
//  • remove
//  • read all entries

function createCache() {
    const cache = new Map();

    return {
    get(key, computeValue) {
        if(cache.has(key)) {
            return cache.get(key);
        }
        return cache.set(key, computeValue());
        
    },

    set(key, value) {
        cache.set(key, value);
    },

    remove(key) {
        cache.delete(key);
    },

    readAllEntries() {
        return Array.from(cache.entries())
    }
};
}