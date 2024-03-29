'use strict'

import express from 'express'
import access from './access/index.js'
import product from './product/index.js'
import discount from './discount/index.js'
import cart from './cart/index.js'
import checkout from './checkout/index.js'
import { apiKey, permission } from '../auth/checkAuth.js'

const router = express.Router()

// check api key


router.use(apiKey)

// check permissions
router.use(permission('0000'))

router.use('/v1/api/checkout/', checkout)
router.use('/v1/api/cart/', cart)

router.use('/v1/api/discount/', discount)
router.use('/v1/api/product', product)
router.use('/v1/api/', access)

// router.get('', (req, res, next) => {
//   return res.status(200).json({
//     message: 'Begin shop clothing'
//   })
// })

export default router