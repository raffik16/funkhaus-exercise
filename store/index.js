// Export state const to conuter = 0
export const state = () => ({
    counter: 0
})

// Export mutations in state to increment.
export const mutations = {
    increment(state) {
        state.counter++
    }
}