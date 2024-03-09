import { useEffect, useRef, useState } from 'react';
import { Image, Layer, Rect, Stage } from 'react-konva';
import useImage from 'use-image';
function Canvas({ imageUrl, detectionResult }) {
    console.log("tesssssssssssssst", detectionResult)
    const canvasContainer = useRef(null)
    const [stageSize, setStageSize] = useState({})
    const ResultImage = () => {
        const [image] = useImage(imageUrl);
        return <Image image={image} />;
    };
    const points = [898, 430, 1022, 584,];
    const points2 = [1517, 213, 1557, 264]
    useEffect(() => {
        (function () {
            const sceneWidth = 700;
            const sceneHeight = 300;


            // now we need to fit stage into parent container
            const containerWidth = canvasContainer.current.offsetWidth;
            console.log(containerWidth)

            // but we also make the full scene visible
            // so we need to scale all objects on canvas`
            const scale = containerWidth / sceneWidth;
            setStageSize({ width: sceneWidth * scale, height: sceneHeight * scale, scale: { x: scale, y: scale } })

        }())
    }, [])
    console.log("tesssssssssssssst", stageSize)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "black", }} ref={canvasContainer}>
            <Stage width={700} height={400} scale={
                { x: .37, y: .37 }}  >
                < Layer >
                    <ResultImage />

                </ Layer>
                <Layer>
                    <Rect
                        x={detectionResult.region.x}
                        y={detectionResult.region.y}
                        width={detectionResult.region.w}
                        height={detectionResult.region.h}
                        stroke="#9747FF"
                        strokeWidth={6}
                        closed
                    />
                </Layer>
                <Layer>
                    <Rect
                        x={points2[0]}
                        y={points2[1]}
                        width={points2[2] - points2[0]}
                        height={points2[3] - points2[1]}
                        stroke="#9747FF"
                        strokeWidth={6}
                        closed
                    />
                </Layer>
            </ Stage >
        </div>
    );
}

export default Canvas;





