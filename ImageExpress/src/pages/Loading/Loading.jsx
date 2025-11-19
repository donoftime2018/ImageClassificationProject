import {Spinner, SpinnerType} from "solid-spinner"

export default function Loading(){
    return(<>
    <Spinner type={SpinnerType.spinningCircles} size={50} color="#2B6DE0"/>
    </>)
}