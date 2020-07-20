export default {
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRETKEY || 'd0dbe97c-a7c4-4e2e-8053-aa78ca8a1cba',
    publicRoutes: process.env.PUBLICROUTES || [
        'users',
        'auth'
      ]
}

