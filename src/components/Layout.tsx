import { FC } from "react";
interface Layout {}

const Layout: FC<Layout> = ({}) => {
  return (
    <>
      <div className="plg bg-container text-text ">
        <button
          onClick={() => {
            document.body.classList.remove("sky");
            document.body.classList.remove("light");
            document.body.classList.add("dark");
          }}
        >
          dark
        </button>
        <button
          onClick={() => {
            document.body.classList.remove("dark");
            document.body.classList.remove("sky");
            document.body.classList.add("light");
          }}
        >
          light
        </button>
        <button
          onClick={() => {
            document.body.classList.remove("dark");
            document.body.classList.remove("light");
            document.body.classList.add("sky");
          }}
        >
          dark
        </button>
        <h4 >colors</h4>
        <ul className="border-1px border-solid border-border plg rounded-lg">
          <li>
            primary : <button className="bg-primary  p-8px"></button>
          </li>
          
          <li>
            secondary : <button className="bg-primary-border p-8px"></button>
          </li>
          <li>
            text color : <button className="bg-text p-8px"></button>
          </li>
          <li>
            backgrounds : <button className="bg-container p-8px"></button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Layout;
