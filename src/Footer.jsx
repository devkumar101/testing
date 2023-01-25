import { React } from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyrights &copy;  {currentYear}</p>
        </footer>
    );
}

export  {Footer};