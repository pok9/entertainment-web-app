import { useState } from "react";
import { NavbarSelection } from "../../../types/homeTypes"



interface IconNavTvSeriesProps {
    tag: NavbarSelection
    navberSelected: NavbarSelection
    onClickNavbar: (val: NavbarSelection) => void
}

function IconNavTvSeries({ tag, navberSelected, onClickNavbar }: IconNavTvSeriesProps) {
    const [isHovered, setHovered] = useState(false);
    const isActive: boolean = tag === navberSelected

    const fillColor = isActive ? "#fff" : isHovered ? "#FC4747" : "#5A698F";
    return (
        <svg
            onClick={() => onClickNavbar(tag)}
            width="20"
            height="20"
            style={{ cursor: !isActive ? 'pointer' : ''}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                fill={fillColor}
            />
        </svg>
    )
}

export default IconNavTvSeries