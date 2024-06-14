/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        //? esta funcionalidade do nextjs está deprecated (depreciado)
        // domains: [
        //     'raw.githubusercontent.com'
        // ]
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
              port: '',
              pathname: '**',
            },
          ],
        
    }
};

export default nextConfig;
