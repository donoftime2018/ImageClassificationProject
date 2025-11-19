import {Spinner, SpinnerType} from "solid-spinner"

export default function Loading(){
    return(<>
    <div className="flex justify-center items-center">
        <Spinner type={SpinnerType.spinningCircles} size={50} color="#2B6DE0"/>
    </div>
    </>)
}