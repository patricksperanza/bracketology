import EightColumnRight from "./columns/EightColumnRight"
import FourColumnRight from "./columns/FourColumnRight"
import TwoColumnRight from "./columns/TwoColumnRight"
import OneColumRight from "./columns/OneColumnRight"

export default function Midwest() {
    return (
    <div>
        <h2 className='text-center font-semibold my-4'>Midwest</h2>
        <div className='flex mr-4'>
            <OneColumRight />
            <TwoColumnRight />
            <FourColumnRight />
            <EightColumnRight />
        </div>
    </div>)
}