'use client';

import dynamic from 'next/dynamic';


const Canvas = dynamic(() => import('@/canvas'), {
    ssr: false,
});
const page = () => {
    return (
        <div style={{ width: "100vw", height: '100vh', display: 'flex', Content: "center", flexDirection: 'column' }}>
            test
            <Canvas />
        </div>
    )
}

export default page