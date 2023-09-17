import $api from "../http";

export default class AuthService {
    static async login(username, password) {
        return $api.post('/user/login', {username, password})
    }

    static async signup(username, email, password) {
        return $api.post('/user/signup', {username, email, password})
    }

    static async check() {
        return $api.get('/user/auth')
    }
}