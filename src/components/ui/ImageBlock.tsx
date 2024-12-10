const ImageBlock: React.FC<{src: string, alt: string}> = ({ src, alt }) => {
    return <div>
        <img src={src} alt={alt}/>
    </div>
}

export default ImageBlock;