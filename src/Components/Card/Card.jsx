export const Card = ({imgSrc, title , desc}) => {
    return (
        <div>
            <img src={imgSrc} alt="" />
            <h1>title :{title}</h1>
            <h1>description : {desc}</h1>
        </div>
    )
}