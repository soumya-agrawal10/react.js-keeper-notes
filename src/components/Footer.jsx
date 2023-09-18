import React from "react";

const currentDate = new Date();
const Year = currentDate.getFullYear();

function Footer() {
    return(
    <footer>
        <p>
            Copyright © {Year}
        </p>
    </footer>
    );
}

export default Footer;