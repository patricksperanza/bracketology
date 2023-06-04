import EightColumnLeft from '@/components/columns/EightColumnLeft'
import FourColumnLeft from '@/components/columns/FourColumnLeft'
import TwoColumnLeft from '@/components/columns/TwoColumnLeft'
import OneColumLeft from '@/components/columns/OneColumLeft'

export default function South() {
    return (
    <div>
        <h2 className='text-center font-semibold my-4'>South</h2>
        <div className='flex ml-4'>
            <EightColumnLeft />
            <FourColumnLeft />
            <TwoColumnLeft />
            <OneColumLeft />
        </div>
    </div>)
}