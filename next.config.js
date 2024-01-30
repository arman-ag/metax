/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    typescript: {

        ignoreBuildErrors: true,
    },
    compiler: {
        styledComponents: true,

    },
    env: {
        baseUrl: "http://10.82.82.75:8001",
        JWT_SECRET: "tTSSUYgnEkm6ioOt3Qe77h / xxcYMxs / NZ6iAtbMy83I=",
        NEXTAUTH_URL: 'http://172.16.60.162:3000/'
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },

};

module.exports = nextConfig
