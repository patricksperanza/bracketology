import Game from "./Game"

export default function Final() {
    return (
    <div className="my-10">
        <div className='flex xl:justify-center gap-6 ml-[330px] xl:ml-0'>
            <div>
                <h3 className="text-center text-xs mb-2">Final Four</h3>
                <Game />
            </div>
            <div>
            <h3 className="text-center text-xs mb-2 font-semibold">CHAMPIONSHIP</h3>
                <Game />
            </div>
            <div>
            <h3 className="text-center text-xs mb-2">Final Four</h3>
                <Game />
            </div>
            
        </div>
    </div>)
}