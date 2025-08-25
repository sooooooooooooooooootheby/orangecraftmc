modu:e.exports = {
    apps: [
        {
            name: 'orangecraftmcdocs',
            port: '3987',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
