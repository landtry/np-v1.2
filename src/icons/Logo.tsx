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
      width="98.56"
      height="38.141"
      viewBox="0 0 98.56 38.141">
      <g
        id="Group_129"
        data-name="Group 129"
        transform="translate(-98.44 -33.5)">
        <g id="Group_1" data-name="Group 1" transform="translate(98.44 33.5)">
          <path
            id="Line_1"
            data-name="Line 1"
            d="M-1.216,32.388A3.784,3.784,0,0,1-5,28.6V-1.216A3.784,3.784,0,0,1-1.216-5,3.784,3.784,0,0,1,2.568-1.216V28.6A3.784,3.784,0,0,1-1.216,32.388Z"
            transform="translate(5 5)"
            fill="#317ce6"
          />
          <path
            id="Line_2"
            data-name="Line 2"
            d="M-1.216,32.388A3.784,3.784,0,0,1-5,28.6V-1.216A3.784,3.784,0,0,1-1.216-5,3.784,3.784,0,0,1,2.568-1.216V28.6A3.784,3.784,0,0,1-1.216,32.388Z"
            transform="translate(17.035 5)"
            fill="#317ce6"
          />
          <path
            id="Line_3"
            data-name="Line 3"
            d="M-1.216,32.388A3.784,3.784,0,0,1-5,28.6V-1.216A3.784,3.784,0,0,1-1.216-5,3.784,3.784,0,0,1,2.568-1.216V28.6A3.784,3.784,0,0,1-1.216,32.388Z"
            transform="translate(29.069 5)"
            fill="#317ce6"
          />
          <path
            id="Line_4"
            data-name="Line 4"
            d="M-1.216,17.808A3.784,3.784,0,0,1-5,14.024V-1.216A3.784,3.784,0,0,1-1.216-5,3.784,3.784,0,0,1,2.568-1.216v15.24A3.784,3.784,0,0,1-1.216,17.808Z"
            transform="translate(41.104 5)"
            fill="#317ce6"
          />
        </g>
        <text
          id="Neutral_Party"
          data-name="Neutral Party"
          transform="translate(134 68.641)"
          fontSize="10"
          fontFamily="DMSans-Bold, DM Sans"
          fontWeight="700"
          letterSpacing="-0.01em">
          <tspan x="0" y="0">
            Neutral Party
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Logo;
