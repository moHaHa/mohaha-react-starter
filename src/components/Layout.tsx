import { FC } from "react";
import DineInIcon from "./icons/DineInIcon";
interface Layout {}

const Layout: FC<Layout> = ({}) => {
  const name = async () => {};
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

        <h4>colors</h4>
        <div className="plg mlg border-1px border-solid border-gray rounded-xl">
          <div className="bg-base-container p-lg rounded-xl">
            <div className="flex ">
              <div className="me-sm">
                <button className="text-base-blue border-none w-40px h-40px rounded-full bg-base-light-blue">
                  9
                </button>
              </div>
              <div className="me-sm">
                <button className="text-base-orange border-none w-40px h-40px rounded-full bg-base-light-orange">
                  5
                </button>
              </div>
              <div className="me-sm">
                <div className="w-40px text-red">
                  <div className="i-logos-vue text-3xl" />

                  <div className="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
                    <div className="i-vscode-icons:file-type-light-pnpm" />
                    <div className="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
                  </div>
                  <DineInIcon></DineInIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
