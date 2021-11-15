export function Msg({ name, img }) {
    return (
        <div className="Msg">
            <img className="prof-pic" src={img} alt={name} />
            <h1 className="msg"> 🙋‍♂️ {name}!!!😍😍</h1>
        </div>
    );
}
