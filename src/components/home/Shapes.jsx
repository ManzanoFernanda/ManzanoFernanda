import React from 'react';
import AppleLogo from '../../assets/apple.svg?url';

const Shapes = () => {
  return (
    <div className="shapes">
      <svg
        width="40"
        height="40"
        className="shape s1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="46" height="46" fill="#3178C6" stroke="#1A1A2E" strokeWidth="3"/>
        <text x="10" y="38" fontSize="25" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#FFF">TS</text>
      </svg>

      <svg
        width="55"
        height="50"
        className="shape s2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="27.5" cy="25" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="3"/>
        <ellipse cx="27.5" cy="25" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 27.5 25)"/>
        <ellipse cx="27.5" cy="25" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 27.5 25)"/>
        <circle cx="27.5" cy="25" r="5" fill="#61DAFB"/>
      </svg>

      <svg
        width="35"
        height="55"
        className="shape s3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 55"
      >
        <rect x="5" y="3" width="25" height="49" rx="4" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="8" y="8" width="19" height="35" rx="2" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="10" y="11" width="6" height="6" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="18" y="11" width="6" height="6" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="10" y="19" width="6" height="6" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="18" y="19" width="6" height="6" rx="1" fill="#4ECDC4" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="10" y="27" width="6" height="6" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="18" y="27" width="6" height="6" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        <circle cx="17.5" cy="48" r="3" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="15" y="1" width="5" height="1.5" rx="0.75" fill="#1A1A2E"/>
      </svg>

      <svg
        width="40"
        height="40"
        className="shape s4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="#A4C639" fillRule="evenodd" d="M5.68524564,7.91390616 L18.4032637,7.91390616 L18.4032637,18.2777185 C18.4032637,18.8934049 17.9041016,19.392567 17.2891666,19.392567 L16.0152889,19.392567 L16.0152889,22.54887 C16.0152889,23.3504036 15.3759782,24 14.5867968,24 C13.7955958,24 13.1572245,23.3504036 13.1572245,22.54887 L13.1572245,19.392567 L10.9323651,19.392567 L10.9323651,22.54887 C10.9323651,23.3504036 10.2917863,24 9.50265183,24 C8.71365828,24 8.07312646,23.3504036 8.07312646,22.54887 L8.07312646,19.392567 L6.80037593,19.392567 C6.18530006,19.392567 5.68519867,18.8934049 5.68519867,18.2777185 L5.68519867,7.91390616 L5.68524564,7.91390616 Z M3.19295784,7.82931914 C2.39574512,7.82931914 1.75,8.48511514 1.75,9.2946801 L1.75,15.0216583 C1.75,15.8302839 2.39574512,16.4872071 3.19295784,16.4872071 C3.99031146,16.4872071 4.63591568,15.8302839 4.63591568,15.0216583 L4.63591568,9.2946801 C4.63591568,8.48511514 3.99031146,7.82931914 3.19295784,7.82931914 L3.19295784,7.82931914 Z M18.4033106,6.86955468 L5.68524564,6.86955468 C5.84220834,5.05767343 7.01754994,3.49847301 8.70952521,2.59567916 L7.50032062,0.820150132 C7.33725225,0.580713909 7.39877862,0.254013563 7.63868451,0.0909921564 C7.8783086,-0.07202925 8.20435141,-0.0100332096 8.36821822,0.229215147 L9.68615071,2.16574601 C10.4168586,1.91306518 11.2100322,1.76798505 12.0442547,1.76798505 C12.8794634,1.76798505 13.672684,1.91306518 14.4033449,2.16607478 L15.7212774,0.229919647 C15.8831246,-0.00998624287 16.2102007,-0.0719822833 16.4498248,0.0910391231 C16.6897307,0.25406053 16.7512571,0.580760876 16.5881887,0.820197099 L15.3799704,2.59572613 C17.0718987,3.49795638 18.2464419,5.0571568 18.4033106,6.86955468 L18.4033106,6.86955468 Z M10.0653129,4.40760737 C10.0653129,4.01905189 9.75068296,3.70390535 9.36226837,3.70390535 C8.97286748,3.70390535 8.65823758,4.01905189 8.65823758,4.40760737 C8.65823758,4.79597499 8.97390075,5.11098063 9.36226837,5.11098063 C9.75063599,5.11098063 10.0653129,4.79597499 10.0653129,4.40760737 L10.0653129,4.40760737 Z M15.5194145,4.40760737 C15.5194145,4.01905189 15.2037044,3.70390535 14.8153837,3.70390535 C14.4259828,3.70390535 14.1122923,4.01905189 14.1122923,4.40760737 C14.1122923,4.79597499 14.4259828,5.11098063 14.8153837,5.11098063 C15.2037514,5.11098063 15.5194145,4.79597499 15.5194145,4.40760737 L15.5194145,4.40760737 Z M20.8965378,7.82729957 C20.1001704,7.82729957 19.4525936,8.48408187 19.4525936,9.2936938 L19.4525936,15.0226915 C19.4525936,15.8323035 20.1001704,16.4892736 20.8965378,16.4892736 C21.6939384,16.4892736 22.3384623,15.8323504 22.3384623,15.0226915 L22.3384623,9.2936938 C22.3385093,8.48408187 21.6939384,7.82729957 20.8965378,7.82729957 L20.8965378,7.82729957 Z"/>
      </svg>

      <img 
        src={AppleLogo} 
        alt="Apple" 
        className="shape s5"
        style={{ width: '55px', height: '60px' }}
      />

      <svg
        width="40"
        height="40"
        className="shape s6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd" transform="translate(4)">
          <circle cx="12" cy="12" r="4" fill="#19BCFE"/>
          <path fill="#09CF83" d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z"/>
          <path fill="#A259FF" d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z"/>
          <path fill="#F24E1E" d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z"/>
          <path fill="#FF7262" d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z"/>
        </g>
      </svg>

      <svg
        width="54"
        height="28"
        className="shape s7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 28"
      >
        <rect x="2" y="4" width="50" height="20" rx="4" fill="#FFF8E7" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="5" y="7" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="10" y="7" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="15" y="7" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="20" y="7" width="4" height="4" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="25" y="7" width="4" height="4" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="30" y="7" width="4" height="4" rx="1" fill="#4ECDC4" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="35" y="7" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="40" y="7" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="45" y="7" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="7" y="13" width="4" height="4" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="12" y="13" width="4" height="4" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="17" y="13" width="4" height="4" rx="1" fill="#4ECDC4" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="22" y="13" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="27" y="13" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="32" y="13" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="37" y="13" width="4" height="4" rx="1" fill="#9B59B6" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="42" y="13" width="4" height="4" rx="1" fill="#FF8C42" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="10" y="19" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="15" y="19" width="4" height="4" rx="1" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="20" y="19" width="12" height="4" rx="2" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="33" y="19" width="4" height="4" rx="1" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="1"/>
        <rect x="38" y="19" width="4" height="4" rx="1" fill="#FFE156" stroke="#1A1A2E" strokeWidth="1"/>
        <circle cx="6" cy="24" r="1.2" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="0.7"/>
        <circle cx="48" cy="24" r="1.2" fill="#00D4AA" stroke="#1A1A2E" strokeWidth="0.7"/>
      </svg>

      <svg
        width="55"
        height="45"
        className="shape s8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="50" height="40" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="2" rx="4"/>
        <rect x="2" y="2" width="50" height="10" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="2" rx="4"/>
        <circle cx="10" cy="7" r="2" fill="#FF4757"/>
        <circle cx="18" cy="7" r="2" fill="#FFE156"/>
        <circle cx="26" cy="7" r="2" fill="#00D4AA"/>
        <text x="10" y="32" fontSize="14" fontFamily="monospace" fontWeight="bold" fill="#00D4AA">&gt;_</text>
      </svg>

      <svg
        width="60"
        height="40"
        className="shape s9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 32 Q3 32 3 22 Q3 12 15 12 Q17 4 30 4 Q44 4 46 14 Q56 14 56 24 Q56 32 44 32 Z"
          fill="#4ECDC4"
          stroke="#1A1A2E"
          strokeWidth="3"
        />
        <circle cx="22" cy="20" r="3" fill="#1A1A2E"/>
        <circle cx="34" cy="20" r="3" fill="#1A1A2E"/>
        <path d="M24 26 Q30 30 36 26" stroke="#1A1A2E" strokeWidth="2" fill="none"/>
      </svg>

      <svg
        width="60"
        height="45"
        className="shape s10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="5" width="44" height="28" rx="2" fill="#1A1A2E" stroke="#1A1A2E" strokeWidth="2"/>
        <rect x="11" y="8" width="38" height="22" fill="#9B59B6"/>
        <line x1="14" y1="13" x2="28" y2="13" stroke="#FFE156" strokeWidth="2"/>
        <line x1="14" y1="18" x2="38" y2="18" stroke="#00D4AA" strokeWidth="2"/>
        <line x1="14" y1="23" x2="32" y2="23" stroke="#FF6B9D" strokeWidth="2"/>
        <path d="M3 35 L8 33 L52 33 L57 35 L57 38 Q57 40 55 40 L5 40 Q3 40 3 38 Z" fill="#C0C0C0" stroke="#1A1A2E" strokeWidth="2"/>
      </svg>

      <svg
        width="55"
        height="45"
        className="shape s11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="51" height="41" fill="#FFE156" stroke="#1A1A2E" strokeWidth="3"/>
        <text x="8" y="18" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#1A1A2E">1010</text>
        <text x="8" y="32" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#1A1A2E">0101</text>
        <text x="8" y="42" fontSize="8" fontFamily="monospace" fill="#1A1A2E">1100</text>
      </svg>
    </div>
  );
};

export default Shapes;
