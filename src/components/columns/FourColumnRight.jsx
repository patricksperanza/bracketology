import Game from "../Game";

export default function FourColumnRight() {
    return (<div className="mt-[38px] mr-3">
        <Game />
        <div className="mt-[88px]">
            <Game />
        </div>
        <div className="mt-[88px]">
            <Game />
        </div>
        <div className="mt-[88px]">
            <Game />
        </div>
   
    </div>)
}