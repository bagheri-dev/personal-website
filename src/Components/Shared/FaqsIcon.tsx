import * as React from "react";
import { SVGProps } from "react";

const FaqsIcon = ({ width = 60, height = 60, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="50 40 70 70"
        width={width}
        height={height}
        {...props}
    >
        <g fill="#fff" filter="url(#a)">
            <path d="m98.204 79.631 1.994 4.744h-3.989l1.995-4.744Z" />
            <path d="M113.146 67.848h-11.741v.776a7.435 7.435 0 0 1-7.514 7.32H77.75v16.291a5.271 5.271 0 0 0 5.358 5.165h18.964c.087.032.173.053.259.086l8.636 6.878a.537.537 0 0 0 .873-.42v-6.178a.374.374 0 0 1 .388-.367h.917a5.352 5.352 0 0 0 5.509-5.164V73.012a5.354 5.354 0 0 0-5.509-5.164Zm-10.544 22.253-1.499-3.569h-5.8l-1.499 3.569a1.078 1.078 0 0 1-1.984-.841c.885-2.092 1.715-4.086 2.588-6.156.862-2.081 1.768-4.237 2.792-6.663l.011-.011a1.077 1.077 0 0 1 1.984 0l.01.01c4.464 10.642 3.429 8.173 5.381 12.82a1.08 1.08 0 0 1-.572 1.412 1.076 1.076 0 0 1-1.412-.571ZM84.188 59.331a5.335 5.335 0 0 1-1.197 3.342l-2.34-2.641a1.077 1.077 0 0 0-1.617 1.423l2.296 2.598a5.28 5.28 0 0 1-2.533.669 5.39 5.39 0 1 1 5.39-5.39Z" />
            <path d="M93.89 44.517H63.855a5.343 5.343 0 0 0-5.51 5.164v19.224a5.35 5.35 0 0 0 5.51 5.164h.916a.376.376 0 0 1 .389.366v6.178a.538.538 0 0 0 .873.42l8.636-6.878c.084-.034.17-.062.258-.086h18.965a5.272 5.272 0 0 0 5.358-5.165V49.682a5.264 5.264 0 0 0-5.358-5.165ZM85.029 64.98a1.081 1.081 0 0 1-1.617 1.434l-.614-.7a7.518 7.518 0 1 1 1.65-1.392l.581.658Z" />
        </g>
        <defs>
            <filter
                id="a"
                width={197}
                height={197}
                x={-10}
                y={-4}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={20} />
                <feGaussianBlur stdDeviation={32} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0.42207 0 0 0 0 0.815733 0 0 0 0 1 0 0 0 1 0" />
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_9736_34419"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_9736_34419"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export default FaqsIcon;
