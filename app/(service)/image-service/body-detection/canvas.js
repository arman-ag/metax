import imageSize from '@/app/_lib/getImageSix';
import { useEffect, useRef, useState } from 'react';
import { Image, Layer, Rect, Stage } from 'react-konva';
import useImage from 'use-image';
function Canvas({ imageUrl, detectionResult }) {

    const canvasContainer = useRef(null)
    const [imageDimension, setImageDimensions] = useState({})
    const ResultImage = () => {
        const [image] = useImage(imageUrl);
        return <Image image={image} />;
    };
    useEffect(() => {
        (async function () {
            const imageDimensions = await imageSize(imageUrl)
            setImageDimensions(imageDimensions)
        }())
    }, [imageUrl])
    console.log(detectionResult)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "black", }} ref={canvasContainer}>

            <Stage width={500} height={300} scale={
                { x: (500 / imageDimension.width), y: (300 / imageDimension.height) }}  >
                < Layer >
                    <ResultImage />

                </ Layer>
                {detectionResult?.map(item => {
                    return <>
                        <Layer Layer >
                            <Rect
                                x={item[0]}
                                y={item[1]}
                                width={item[2] - item[0]}
                                height={item[3] - item[1]}
                                stroke="#9747FF"
                                strokeWidth={6}
                                closed
                            />
                        </Layer>

                    </>

                })}

            </ Stage >
        </div >
    );
}

export default Canvas;





