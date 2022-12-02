import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3'

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        isLoggedIn: false,
        isLoading: false,
        $nytKey: 'api-key=pychykHAOAn2y4WiDcBPd4D77pqColE0',
        $googleBooksKey: 'AIzaSyCU3_mG_YmE1DY32yqi7ddEm_EjUEmTmUk'
    }),
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                this.users = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        checkLoggedInStatus() {
            if (localStorage.getItem('user')) {
                this.isLoggedIn = true
            }
        },
        setIsLoading(status: boolean) {
            this.isLoading = status
        },
    },
})