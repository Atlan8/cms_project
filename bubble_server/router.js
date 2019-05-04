let express = require('express')
let login = require('./routes/login')
let register = require('./routes/register')
let getAuthCode = require('./routes/getAuthCode')
let get_user_info = require('./routes/user_info/index')
let logout = require('./routes/logout')
let get_shops_info = require('./routes/shops/getShopsInfo')
let get_shops_picture = require('./routes/shops/getPicture')

let router = express()

router.use(login)
router.use(register)
router.use(getAuthCode)
router.use(get_user_info)
router.use(logout)
router.use(get_shops_info)
router.use(get_shops_picture)

module.exports = router
