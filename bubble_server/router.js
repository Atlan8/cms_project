let express = require('express')
let login = require('./routes/login')
let register = require('./routes/register')
let getAuthCode = require('./routes/getAuthCode')
let get_user_info = require('./routes/user_info/index')
let get_user_address = require('./routes/user_info/address')
let logout = require('./routes/logout')
let get_shops_info = require('./routes/shops/getShopsInfo')
let get_shops_picture = require('./routes/shops/getPicture')
let get_shopcart_info = require('./routes/shopcart/getShopcartInfo')
let get_order_info = require('./routes/orders/getOrders')

// 后台管理系统路由入口
let form = require('./routes/AdminSystem/Form/index')
let shopsType = require('./routes/AdminSystem/shops/getShopType')
let shops = require('./routes/AdminSystem/shops/getShopInfo')



let router = express()

router.use(login)
router.use(register)
router.use(getAuthCode)
router.use(get_user_info)
router.use(get_user_address)
router.use(logout)
router.use(get_shops_info)
router.use(get_shops_picture)
router.use(get_shopcart_info)
router.use(get_order_info)

router.use(form)
router.use(shopsType)
router.use(shops)

module.exports = router
