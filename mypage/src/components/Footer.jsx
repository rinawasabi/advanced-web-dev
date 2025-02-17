import React, { useEffect, useState } from "react";

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            <p>&copy; {year} My Simple HTML Page. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
