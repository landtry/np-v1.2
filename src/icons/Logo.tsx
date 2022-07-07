import React from "react";

interface Props {
  view: string;
}

const Logo = ({ view }: Props) => {
  if (view === "desktop") {
    return (
      <svg
        className={"hidden lg:block h-11 w-auto"}
        xmlns="http://www.w3.org/2000/svg"
        width="136"
        height="51.141"
        viewBox="0 0 134 51.141">
        <g id="Group_2" data-name="Group 2" transform="translate(-98.44 -33.5)">
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(103.44 38.5)">
            <line
              id="Line_1"
              data-name="Line 1"
              y2="39.405"
              fill="none"
              stroke="#317ce6"
              strokeLinecap="round"
              strokeWidth="10"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              y2="39.405"
              transform="translate(15.903)"
              fill="none"
              stroke="#317ce6"
              strokeLinecap="round"
              strokeWidth="10"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              y2="39.405"
              transform="translate(31.805)"
              fill="none"
              stroke="#317ce6"
              strokeLinecap="round"
              strokeWidth="10"
            />
            <line
              id="Line_4"
              data-name="Line 4"
              y2="20.138"
              transform="translate(47.708)"
              fill="none"
              stroke="#317ce6"
              strokeLinecap="round"
              strokeWidth="10"
            />
          </g>
          <text
            id="Neutral_Party"
            data-name="Neutral Party"
            transform="translate(146 80.641)"
            fontSize="14"
            fontFamily="DM Sans, Helvetica-Bold, Helvetica"
            fontWeight="700"
            letterSpacing="-0.01em"
            color="#000">
            <tspan x="0" y="0">
              Neutral Party
            </tspan>
          </text>
        </g>
      </svg>
    );
  }

  return (
    <svg
      className="block lg:hidden h-8 w-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="57.708"
      height="49.405"
      viewBox="0 0 57.708 49.405">
      <g id="Group_127" data-name="Group 127" transform="translate(5 5)">
        <line
          id="Line_1"
          data-name="Line 1"
          y2="39.405"
          fill="none"
          stroke="#317ce6"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          y2="39.405"
          transform="translate(15.903)"
          fill="none"
          stroke="#317ce6"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          y2="39.405"
          transform="translate(31.805)"
          fill="none"
          stroke="#317ce6"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <line
          id="Line_4"
          data-name="Line 4"
          y2="20.138"
          transform="translate(47.708)"
          fill="none"
          stroke="#317ce6"
          strokeLinecap="round"
          strokeWidth="10"
        />
      </g>
    </svg>
  );
};

export default Logo;
