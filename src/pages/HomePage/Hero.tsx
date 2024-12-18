const Hero: React.FC<{id: string}> = ({id}) => {
    return <div id={id}>
        <span>#No1 URL Shortening Service</span>
        <p>Easy & Fast Url Shortening!</p>
    </div>
};

export default Hero;