import { MENUS } from "../../until/data";

export default function Navbar() {
  return (
    <div className="navbar">
      {" "}
      <ul>
        {MENUS.map((menu, index) => {
          return (
            <li key={index}>
              <a href={menu.url}>{menu.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
