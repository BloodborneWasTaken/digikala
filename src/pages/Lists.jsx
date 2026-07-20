import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const listsDetail = [
  {
    id: 1,
    content: "لیست علاقی مندی های شما خالی است.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="135"
        viewBox="0 0 180 135"
        fill="none"
      >
        <g filter="url(#filter0_f)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M118.8 122.4L118.123 123.3H60.6056H31.5L60.6056 122.4H118.8Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M45 92.7C45 98.6647 49.8353 103.5 55.8 103.5C61.7647 103.5 66.6 98.6647 66.6 92.7V54H45V92.7Z"
          fill="url(#paint1_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.8 103.5H113.303C117.333 103.5 120.6 100.233 120.6 96.2027V22.5H71.8826C68.9651 22.5 66.6 24.8651 66.6 27.7826V92.7C66.6 98.6647 61.7647 103.5 55.8 103.5Z"
          fill="url(#paint2_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.8 103.5H113.303C117.333 103.5 120.6 100.233 120.6 96.2027V22.5H71.8826C68.9651 22.5 66.6 24.8651 66.6 27.7826V92.7C66.6 98.6647 61.7647 103.5 55.8 103.5Z"
          fill="url(#paint3_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80.1 90H134.1V29.7973C134.1 25.7671 130.833 22.5 126.803 22.5H72.9C76.8764 22.5 80.1 25.7235 80.1 29.7V90Z"
          fill="url(#paint4_linear)"
        />
        <rect
          x="94.5"
          y="72.9"
          width="25.2"
          height="2.7"
          fill="url(#paint5_linear)"
        />
        <rect
          x="94.5"
          y="67.5"
          width="25.2"
          height="2.7"
          fill="url(#paint6_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.5 48.6C94.5 44.6235 97.7236 41.4 101.7 41.4C103.813 41.4 105.761 42.3186 107.1 43.8364C108.439 42.3186 110.387 41.4 112.5 41.4C116.476 41.4 119.7 44.6235 119.7 48.6C119.7 50.7811 118.723 52.8049 117.126 54.1153L108.734 61.9188C107.813 62.7755 106.387 62.7755 105.466 61.919L97.0876 54.1288C95.4607 52.7704 94.5 50.7625 94.5 48.6Z"
          fill="url(#paint7_linear)"
        />
        <defs>
          <filter
            id="filter0_f"
            x="28.7817"
            y="119.682"
            width="92.7366"
            height="6.33657"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="68.5659"
            y1="122.139"
            x2="68.5501"
            y2="123.679"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A3A8" />
            <stop offset="1" stop-color="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="45"
            y1="91.125"
            x2="75.653"
            y2="64.3733"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EAEAEA" />
            <stop offset="0.134859" stop-color="#D7D7D7" />
            <stop offset="1" stop-color="#EAEAEA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="100.871"
            y1="22.5768"
            x2="100.679"
            y2="103.577"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EF394E" />
            <stop offset="0.13805" stop-color="#F27484" />
            <stop offset="0.895465" stop-color="#EF5662" />
            <stop offset="1" stop-color="#EF394E" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="99.1857"
            y1="129.647"
            x2="41.71"
            y2="94.0854"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FEAFB5" stop-opacity="0.398984" />
            <stop offset="1" stop-color="#A01B2A" stop-opacity="0.493608" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="60.6744"
            y1="90"
            x2="60.6744"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E9E9E9" />
            <stop offset="0.910275" stop-color="#DDDDDD" />
            <stop offset="1" stop-color="#EDEDED" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="107.1"
            y1="76.95"
            x2="107.672"
            y2="71.6113"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EF394E" />
            <stop offset="1" stop-color="#FF848D" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="107.1"
            y1="71.55"
            x2="107.672"
            y2="66.2113"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EF394E" />
            <stop offset="1" stop-color="#FF848D" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="107.1"
            y1="73.142"
            x2="127.943"
            y2="48.3216"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EF394E" />
            <stop offset="1" stop-color="#FF848D" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    content: "هنوز هیچ لیستی نساخته اید!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="121"
        viewBox="0 0 160 121"
        fill="none"
      >
        <g filter="url(#filter0_f)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M105.6 109.301L104.998 110.101H53.8717H28L53.8717 109.301H105.6Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M40 82.9C40 88.2019 44.2981 92.5 49.6 92.5C54.9019 92.5 59.2 88.2019 59.2 82.9V48.5H40V82.9Z"
          fill="url(#paint1_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.5996 92.5H100.713C104.296 92.5 107.2 89.5959 107.2 86.0135V20.5H63.8953C61.3019 20.5 59.1996 22.6023 59.1996 25.1957V82.9C59.1996 88.2019 54.9015 92.5 49.5996 92.5Z"
          fill="url(#paint2_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.5996 92.5H100.713C104.296 92.5 107.2 89.5959 107.2 86.0135V20.5H63.8953C61.3019 20.5 59.1996 22.6023 59.1996 25.1957V82.9C59.1996 88.2019 54.9015 92.5 49.5996 92.5Z"
          fill="url(#paint3_linear)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M71.1998 80.5H119.2V26.9865C119.2 23.4041 116.296 20.5 112.713 20.5H64.7998C68.3344 20.5 71.1998 23.3654 71.1998 26.9V80.5Z"
          fill="url(#paint4_linear)"
        />
        <rect
          x="84"
          y="65.3008"
          width="22.4"
          height="2.39999"
          fill="url(#paint5_linear)"
        />
        <rect
          x="84"
          y="60.5"
          width="22.4"
          height="2.4"
          fill="url(#paint6_linear)"
        />
        <path
          d="M99.3782 46.8037L91.9754 50.5051C91.9914 50.6346 91.9996 50.7665 91.9996 50.9004C91.9996 52.6677 90.5669 54.1004 88.7996 54.1004C87.0323 54.1004 85.5996 52.6677 85.5996 50.9004C85.5996 49.1331 87.0323 47.7004 88.7996 47.7004C89.6624 47.7004 90.4455 48.0419 91.0211 48.5971L98.4238 44.8957C98.4078 44.7662 98.3996 44.6342 98.3996 44.5004C98.3996 44.3665 98.4078 44.2346 98.4238 44.1051L91.0211 40.4037C90.4455 40.9589 89.6624 41.3004 88.7996 41.3004C87.0323 41.3004 85.5996 39.8677 85.5996 38.1004C85.5996 36.3331 87.0323 34.9004 88.7996 34.9004C90.5669 34.9004 91.9996 36.3331 91.9996 38.1004C91.9996 38.2342 91.9914 38.3662 91.9754 38.4957L99.3782 42.1971C99.9537 41.6419 100.737 41.3004 101.6 41.3004C103.367 41.3004 104.8 42.7331 104.8 44.5004C104.8 46.2677 103.367 47.7004 101.6 47.7004C100.737 47.7004 99.9537 47.3589 99.3782 46.8037Z"
          fill="url(#paint7_linear)"
        />
        <defs>
          <filter
            id="filter0_f"
            x="25.2817"
            y="106.582"
            width="83.0366"
            height="6.23657"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="60.9474"
            y1="109.069"
            x2="60.9334"
            y2="110.438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A3A8" />
            <stop offset="1" stop-color="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="40"
            y1="81.5"
            x2="67.2471"
            y2="57.7207"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EAEAEA" />
            <stop offset="0.134859" stop-color="#D7D7D7" />
            <stop offset="1" stop-color="#EAEAEA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="89.6627"
            y1="20.5682"
            x2="89.4922"
            y2="92.5681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#024BB9" />
            <stop offset="0.13805" stop-color="#55A6F0" />
            <stop offset="0.895465" stop-color="#55A6F0" />
            <stop offset="1" stop-color="#024BB9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="94.3996"
            y1="101.3"
            x2="26.3135"
            y2="42.1271"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#003275" />
            <stop offset="1" stop-color="#1E76D0" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="53.9326"
            y1="80.5"
            x2="53.9326"
            y2="20.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E9E9E9" />
            <stop offset="0.910275" stop-color="#DDDDDD" />
            <stop offset="1" stop-color="#EDEDED" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="106.4"
            y1="66.5008"
            x2="84"
            y2="66.5008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#55A6F0" />
            <stop offset="1" stop-color="#024BB9" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="106.4"
            y1="61.7"
            x2="84"
            y2="61.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#55A6F0" />
            <stop offset="1" stop-color="#024BB9" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="102.057"
            y1="54.4984"
            x2="80.2845"
            y2="47.291"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#55A6F0" />
            <stop offset="1" stop-color="#024BB9" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    content: "لیست اطلاع‌رسانی‌های شما خالی است.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="150"
        viewBox="0 0 200 150"
        fill="none"
      >
        <g id="I wanna buy list">
          <g id="Shadow" filter="url(#filter0_f)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M132 136L131.248 137H67.3396H35L67.3396 136H132Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <g id="Paper">
            <path
              id="Back"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52 33C52 28.5817 55.5817 25 60 25C64.4183 25 68 28.5817 68 33V80H52V33Z"
              fill="url(#paint1_linear)"
            />
            <g id="Middle">
              <path
                id="Middle_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60 25H130.892C135.37 25 139 28.6301 139 33.1081V115H73.8696C70.6279 115 68 112.372 68 109.13V33C68 28.5817 64.4183 25 60 25V25Z"
                fill="url(#paint2_linear)"
              />
              <path
                id="Middle_3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60 25H130.892C135.37 25 139 28.6301 139 33.1081V115H73.8696C70.6279 115 68 112.372 68 109.13V33C68 28.5817 64.4183 25 60 25Z"
                fill="url(#paint3_linear)"
              />
              <g id="Shadow_2" opacity="0.3" filter="url(#filter1_f)">
                <rect x="117" y="31" width="18" height="20" fill="#030A16" />
              </g>
            </g>
            <path
              id="Front"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M83 100H154V106.892C154 111.37 150.37 115 145.892 115H75C79.4183 115 83 111.418 83 107V100Z"
              fill="url(#paint4_linear)"
            />
            <g id="Item 03">
              <rect
                id="Rectangle"
                x="81.5"
                y="78.5"
                width="10"
                height="10"
                stroke="#008EB2"
                stroke-width="3"
              />
              <rect
                id="Line 02"
                x="99"
                y="85"
                width="28"
                height="3"
                fill="url(#paint5_linear)"
              />
              <rect
                id="Line 01"
                x="99"
                y="79"
                width="28"
                height="3"
                fill="url(#paint6_linear)"
              />
            </g>
            <g id="Item 02">
              <rect
                id="Rectangle_2"
                x="81.5"
                y="59.5"
                width="10"
                height="10"
                stroke="#008EB2"
                stroke-width="3"
              />
              <rect
                id="Line 02_2"
                x="99"
                y="66"
                width="28"
                height="3"
                fill="url(#paint7_linear)"
              />
              <rect
                id="Line 01_2"
                x="99"
                y="60"
                width="28"
                height="3"
                fill="url(#paint8_linear)"
              />
            </g>
            <g id="Item 01">
              <rect
                id="Rectangle_3"
                x="81.5"
                y="40.5"
                width="10"
                height="10"
                stroke="#008EB2"
                stroke-width="3"
              />
              <rect
                id="Line 02_3"
                x="99"
                y="47"
                width="28"
                height="3"
                fill="url(#paint9_linear)"
              />
              <rect
                id="Line 01_3"
                x="99"
                y="41"
                width="28"
                height="3"
                fill="url(#paint10_linear)"
              />
            </g>
          </g>
          <g id="Bell">
            <g id="Oval Copy">
              <path
                d="M142.6 43.05C142.6 46.778 139.511 49.8 135.7 49.8C131.889 49.8 128.8 46.778 128.8 43.05C128.8 39.3221 131.889 36.3 135.7 36.3C139.511 36.3 142.6 39.3221 142.6 43.05Z"
                fill="#FF6A36"
              />
              <path
                d="M142.6 43.05C142.6 46.778 139.511 49.8 135.7 49.8C131.889 49.8 128.8 46.778 128.8 43.05C128.8 39.3221 131.889 36.3 135.7 36.3C139.511 36.3 142.6 39.3221 142.6 43.05Z"
                fill="url(#paint11_radial)"
                fill-opacity="0.8"
              />
            </g>
            <g id="Rectangle_4">
              <rect x="121" y="38.1" width="30" height="4.8" fill="#FF6A36" />
              <rect
                x="121"
                y="38.1"
                width="30"
                height="4.8"
                fill="url(#paint12_radial)"
              />
            </g>
            <g id="Rectangle_5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M125 25C125 18.9249 129.925 14 136 14C142.075 14 147 18.9249 147 25V33.9987C147 36.2246 148.775 38.0444 151 38.1H121C123.225 38.0444 125 36.2246 125 33.9987V25Z"
                fill="#FF6A36"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M125 25C125 18.9249 129.925 14 136 14C142.075 14 147 18.9249 147 25V33.9987C147 36.2246 148.775 38.0444 151 38.1H121C123.225 38.0444 125 36.2246 125 33.9987V25Z"
                fill="url(#paint13_radial)"
              />
            </g>
          </g>
          <g id="Bell Ring">
            <g id="Vector">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M142.435 8.72162C146.976 10.5179 150.583 14.1564 152.338 18.7176L149.538 19.7949C148.085 16.017 145.093 12.9992 141.332 11.5112L142.435 8.72162Z"
                fill="#FFD500"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M143.534 2.73413C150.231 4.99932 155.571 10.1974 158.03 16.8012C158.22 17.3117 158.393 17.8305 158.548 18.3571L155.67 19.2037C155.535 18.7449 155.384 18.2928 155.218 17.848C153.074 12.0883 148.412 7.55103 142.573 5.57595L143.534 2.73413Z"
                fill="#FFD500"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M129.565 8.72162C125.024 10.5179 121.417 14.1564 119.662 18.7176L122.462 19.7949C123.915 16.017 126.907 12.9992 130.668 11.5112L129.565 8.72162Z"
                fill="#FFD500"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M128.466 2.73413C121.769 4.99932 116.429 10.1974 113.97 16.8012C113.78 17.3117 113.607 17.8305 113.452 18.3571L116.331 19.2037C116.465 18.7449 116.616 18.2928 116.782 17.848C118.926 12.0883 123.588 7.55103 129.427 5.57595L128.466 2.73413Z"
                fill="#FFD500"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="32.2817"
            y="133.282"
            width="102.437"
            height="6.43656"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1.35914"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter1_f"
            x="92.5355"
            y="6.53546"
            width="66.9291"
            height="68.9291"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="12.2323"
              result="effect1_foregroundBlur"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="76.1843"
            y1="135.71"
            x2="76.1668"
            y2="137.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#A1A3A8" />
            <stop offset="1" stop-color="#C1C3C7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="59.5845"
            y1="54.1795"
            x2="70.5555"
            y2="48.5787"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#56C7DA" />
            <stop offset="0.743626" stop-color="#169DBC" />
            <stop offset="1" stop-color="#037B99" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="44.2186"
            y1="25"
            x2="44.2186"
            y2="115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E9E9E9" />
            <stop offset="0.0297262" stop-color="#EEEEEE" />
            <stop offset="0.894686" stop-color="#DDDDDD" />
            <stop offset="1" stop-color="#EDEDED" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="44.2186"
            y1="25"
            x2="44.2186"
            y2="115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E9E9E9" />
            <stop offset="0.0297262" stop-color="#EEEEEE" />
            <stop offset="0.894686" stop-color="#DDDDDD" />
            <stop offset="1" stop-color="#EDEDED" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="151.079"
            y1="113.891"
            x2="151.079"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#008EB2" />
            <stop offset="0.285376" stop-color="#0FABC6" />
            <stop offset="1" stop-color="#87D3E1" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="127"
            y1="86.5"
            x2="99"
            y2="86.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18AEC8" />
            <stop offset="1" stop-color="#008EB2" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="127"
            y1="80.5"
            x2="99"
            y2="80.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18AEC8" />
            <stop offset="1" stop-color="#008EB2" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="127"
            y1="67.5"
            x2="99"
            y2="67.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18AEC8" />
            <stop offset="1" stop-color="#008EB2" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="127"
            y1="61.5"
            x2="99"
            y2="61.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18AEC8" />
            <stop offset="1" stop-color="#008EB2" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="127"
            y1="48.5"
            x2="99"
            y2="48.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18AEC8" />
            <stop offset="1" stop-color="#008EB2" />
          </linearGradient>
          <linearGradient
            id="paint10_linear"
            x1="127"
            y1="42.5"
            x2="99"
            y2="42.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#18AEC8" />
            <stop offset="1" stop-color="#008EB2" />
          </linearGradient>
          <radialGradient
            id="paint11_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(123.421 54.1067) rotate(-44.6093) scale(16.3233 16.3224)"
          >
            <stop stop-color="#FFD500" stop-opacity="0.01" />
            <stop offset="1" stop-color="#FFD500" />
          </radialGradient>
          <radialGradient
            id="paint12_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(109.306 44.4312) rotate(-9.16512) scale(25.5893 8.04794)"
          >
            <stop stop-color="#FFD500" stop-opacity="0.01" />
            <stop offset="1" stop-color="#FFD500" />
          </radialGradient>
          <radialGradient
            id="paint13_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(109.306 45.7881) rotate(-39.0096) scale(32.5113 31.8042)"
          >
            <stop stop-color="#FFD500" stop-opacity="0.01" />
            <stop offset="1" stop-color="#FFD500" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
];

function Lists() {
  return (
    <div className="flex flex-col rounded-[10px] w-[60vw] h-[60vh] border-2 border-gray-200">
      <br />
      <h1 className="font-bold px-5 ">لیست‌ها</h1>
      <br />
      <br />
      <ul className="flex gap-10 border-b px-5 border-gray-200 h-10 text-gray-500 w-full">
        <NavLink
          to="1"
          className="in cursor-pointer transition-all duration-100 rounded-[3px]"
        >
          لیست علاقه‌مندی
        </NavLink>
        <NavLink
          to="2"
          className="in cursor-pointer transition-all duration-100 rounded-[3px]"
        >
          لیست‌های دیگر
        </NavLink>
        <NavLink
          to="3"
          className="in cursor-pointer transition-all duration-100 rounded-[3px]"
        >
          اطلاع‌رسانی‌ها
        </NavLink>
      </ul>
      <Outlet />
    </div>
  );
}

export default Lists;
