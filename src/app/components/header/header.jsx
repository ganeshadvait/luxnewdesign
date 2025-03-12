import Link from "next/link";
import "./headerstyles.css";

export default function Header() {
    const logos = [
        "/lux logo final .png",
        "/nabh.png",
        "/trail.png",
    ];

    const menuItems = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Services", url: "/services" },
        { id: 4, name: "Contact", url: "/contact" },
    ];

    const cta = { name: "+91123456789", url: "/get-started" };

    return (
        <section className="header">
            <div className="header__logos">
    <a href="/"><img className="header__logo" src="/lux logo final .png" /></a>
    <a href="/"><img className="header__logotwo" src="/nabh.png" /></a>
    <a href="/"><img className="header__logothree" src="/trail.png" /></a>
</div>


            <nav className="header__menu">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link href={item.url}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="header__cta">
                <Link href={cta.url} className="header_cta_type_one">{cta.name}</Link>
            </div>
        </section>
    );
}
