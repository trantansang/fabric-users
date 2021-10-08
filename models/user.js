const db = reqlib('utils/redis.js')

class User {
    static listAll = async () => {
        let all = db.keys('user:*')
        return all
    }
}

module.exports = User