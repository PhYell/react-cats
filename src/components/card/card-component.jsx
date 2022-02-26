import "../card/card-styles.css";

export const Card = (props) => {
    return (
        <div className="card-container">
            <img
                alt="monster"
                src={`https://robohash.org/${props.cat.id}7?set=set4&size=160x160`}
            />
            <h2> {props.cat.name} </h2>
        </div>
    );
};
