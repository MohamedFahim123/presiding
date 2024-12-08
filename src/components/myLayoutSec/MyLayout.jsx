import { useState } from "react";
import { Outlet } from "react-router-dom";
import MyFooter from "../myFooterSec/MyFooter";
import MyNavBar from "../myNavBarSec/MyNavBar";
import MyNewsLetter from "../myNewsLetterSec/MyNewsLetter";

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
    );
};
