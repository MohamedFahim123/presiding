import MyNavBar from "../myNavBarSec/MyNavBar";
import { useState } from "react";
import MyFooter from "../myFooterSec/MyFooter";
import MyNewsLetter from "../myNewsLetterSec/MyNewsLetter";
import { Outlet } from "react-router-dom";

export default function MyLayout() {
    const [scrollToggle, setScrollToggle] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setScrollToggle(true);
        } else {
            setScrollToggle(false);
        };
    });

    return (
        <>
            <MyNavBar scrollToggle={scrollToggle} />
            <Outlet />
            <MyNewsLetter />
            <MyFooter />
        </>
    )
}
