/** @type {import('next').NextConfig} */
const nextConfig = {

    typescript: {

        ignoreBuildErrors: true,
    },
    compiler: {
        styledComponents: true,

    },
    env: {
        baseUrl: "http://172.16.60.151:8002",
        imageService: 'http://172.16.60.111:8005',
        voiceService: "http://172.16.60.111:8004",
        galleryUrl: "http://172.16.60.151:8003",
        taskMangerUrl: 'http://172.16.60.111:8004',
        JWT_SECRET: "tTSSUYgnEkm6ioOt3Qe77h / xxcYMxs / NZ6iAtbMy83I=",
        NEXTAUTH_URL: 'http://localhost:3000/'
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
