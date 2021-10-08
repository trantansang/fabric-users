const db = reqlib('utils/redis.js')
const uuid = require('uuid');

class User {
    static listAll = async () => {
        const keys = await db.keys(`user:*`)
        return await Promise.all(keys.map((key) => new Promise((resolve) => {
            resolve(db.hgetall(key))
        })))
    }
    static add = async (data) => {
        data['credit_limit'] = parseFloat(data['credit_limit']) || 0
        data['id'] = uuid.v4()
        await db.hmset(`user:${data.id}`, data)
        return data
    }
}

module.exports = User