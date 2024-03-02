const imageSize = async (blob) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = blob;

    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
  });
};

export default imageSize;
