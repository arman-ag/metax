import imageSize from '@/app/_lib/getImageSix';
import { useEffect, useRef, useState } from 'react';
import { Image, Layer, Rect, Stage, Text } from 'react-konva';
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
                                x={item?.region?.x}
                                y={item?.region?.y}
                                width={item?.region?.w}
                                height={item?.region?.h}
                                stroke="#9747FF"
                                strokeWidth={6}
                                closed
                            />
                        </Layer>
                        <Layer>
                            <Rect
                                x={item?.region?.x - 4}
                                y={item?.region?.h + item?.region?.y}
                                width={item?.region?.w + 7}
                                height={40}
                                fill="#9747FF"
                                strokeWidth={6}
                                closed
                            />
                        </Layer>

                        <Layer>
                            <Text
                                x={item?.region?.x + (item?.region?.w / 3)}
                                y={item?.region?.h + item?.region?.y + 3}
                                text={item?.age}
                                fontSize="35"
                                fontFamily='Calibri'
                                fill='white' />
                        </Layer>
                    </>

                })}

            </ Stage >
        </div >
    );
}

export default Canvas;





