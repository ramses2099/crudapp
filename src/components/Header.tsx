import React from "react";

interface Props {
  message: string;
}

const Header = ({ message }: Props): JSX.Element => {
  return (
    <>
      <article>
        <header>
          <div className="bg-blue-700 h-24 content-center p-8">
            <h1 className="text-center text-white font-bold text-lg">
              {message}
            </h1>
          </div>
        </header>
      </article>
    </>
  );
};

export default Header;
