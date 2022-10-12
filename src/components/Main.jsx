import Card from "./Card";
import data from "../data";

const travels = data.map((travel) => {
    return <Card travel={travel} key={travel.id} />;
});

function Main() {
    return <main className="main">{travels}</main>;
}

export default Main;
