import { useState } from "react";
import { NavbarSelection } from "../../../types/homeTypes"

interface IconNavHomeProps {
    tag: NavbarSelection
    navberSelected: NavbarSelection
    onClickNavbar: (val: NavbarSelection) => void
}
function IconNavHome({ tag, navberSelected, onClickNavbar }: IconNavHomeProps) {
    const [isHovered, setHovered] = useState(false);
    const isActive: boolean = tag === navberSelected

    const fillColor = isActive ? "#fff" : isHovered ? "#FC4747" : "#5A698F";
    return (
        <svg
            onClick={() => onClickNavbar(tag)}
            width="20"
            height="20"
            style={{ cursor: !isActive ? 'pointer' : '' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill={fillColor}
            />
        </svg>
    )
}

export default IconNavHome