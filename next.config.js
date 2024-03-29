module.exports = {
    images: {
        deviceSizes: [100, 200, 320, 375, 425, 640, 750, 768, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [
            "media.graphcms.com",
            "s3.us-west-2.amazonaws.com",
            "media.graphassets.com"
        ]
    },
    async redirects() {
        return [
            {
            "source": '/about',
            "destination": '/',
            "permanent": true,
            },
        ]
    },
}