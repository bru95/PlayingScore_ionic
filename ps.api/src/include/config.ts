export default {
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRETKEY || '316e1da8-e595-418d-b1b6-259fd87caa63',
    publicRoutes: process.env.PUBLICROUTES || [
        'users',
        'auth'
      ]
}