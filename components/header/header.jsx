import Link from 'next/link';
import { useRouter } from "next/router";

import { LINKS } from "./constants";

export const Header = () => {
    const router = useRouter();
    return (
        <header className="grid header">
            <div className="grid grid-align-center header__logo">
                <div className="grid grid-justify-center text-center logo-square">
                    <span>W</span>
                    <span>e</span>
                </div>
                <div className="header__logo-title">
                    <span>R</span>
                    <span>devs</span>
                </div>
            </div>
            <div className="grid grid-align-center grid-justify-center header__links">
                {
                    LINKS.map((link, index) =>
                        <div key={index} className={router.pathname == link.href ? "active" : ""}><Link key={index} href={link.href}>{link.name}</Link></div>)
                }
            </div>
        </header>
    );
}