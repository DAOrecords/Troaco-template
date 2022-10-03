import React from 'react';


export default function BottomMenu() {
  return (
    <>
      <div id="troacoSocialLinks">
        <a className="socialLine" href={'https://twitter.com/vandigital'}>
          <Twitter />
          <p className="socialLinkName">@vandigital</p>
        </a>
        <a className="socialLine" href={'https://www.instagram.com/vandigital/'}>
          <Insta />
          <p className="socialLinkName">@vandigital</p>
        </a>
        <a className="socialLine" href={'https://medium.com/@daorecords/vandal-revives-his-classic-album-troaco-4b7c231af438'}>
          <Medium />
          <p className="socialLinkName">Vandal on Medium</p>
        </a>
      </div>
      <p id="troacoLogo"><DAOrecordsTemp /></p>
    </>
  )
}


function Twitter() {
  return(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4.12317C19.281 4.4663 18.5102 4.68805 17.7188 4.77942C18.5233 4.2386 19.1273 3.44787 19.4375 2.52942C18.8438 2.90442 17.5312 3.43567 16.875 3.43567C16.0766 2.64321 14.9999 2.19457 13.875 2.18567C13.3331 2.18514 12.7965 2.29147 12.2958 2.49858C11.7951 2.70569 11.3401 3.00952 10.957 3.39266C10.5738 3.77581 10.27 4.23076 10.0629 4.73147C9.8558 5.23218 9.74947 5.76882 9.75 6.31067C9.74863 6.61524 9.78006 6.91908 9.84375 7.21692C6.75 7.12317 3.125 5.59192 1.09375 2.93567C0.583772 3.834 0.429236 4.89092 0.660669 5.89766C0.892102 6.90439 1.49267 7.78773 2.34375 8.37317C1.875 8.43567 0.96875 8.34192 0.5625 7.93567C0.53125 9.37317 1.21875 11.2794 3.75 11.9669C3.25 12.2169 2.40625 12.1544 2.03125 12.0919C2.15625 13.3107 3.875 14.9044 5.71875 14.9044C5.0625 15.6544 2.8125 17.0607 0 16.6232C1.94934 17.8089 4.18712 18.4359 6.46875 18.4357C8.03272 18.446 9.58238 18.1373 11.0229 17.5283C12.4635 16.9193 13.7647 16.0228 14.847 14.8938C15.9293 13.7647 16.7699 12.4267 17.3174 10.9617C17.8649 9.49664 18.1078 7.93531 18.0312 6.37317V6.21692C18.8226 5.65957 19.4924 4.94725 20 4.12317Z" fill="#F2F2F2"/>
    </svg>
  );
}

function Discord() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_839_6059)">
      <path d="M16.9309 3.64169C15.6342 3.04655 14.2659 2.62218 12.86 2.37919C12.8472 2.37669 12.8339 2.37833 12.8221 2.38387C12.8103 2.38941 12.8005 2.39857 12.7942 2.41002C12.6192 2.72252 12.4242 3.13002 12.2875 3.45169C10.7721 3.22151 9.23051 3.22151 7.71503 3.45169C7.56294 3.09527 7.39129 2.74752 7.20087 2.41002C7.1943 2.39883 7.18449 2.38989 7.17274 2.38438C7.16099 2.37888 7.14784 2.37707 7.13504 2.37919C5.72907 2.62167 4.36064 3.04607 3.0642 3.64169C3.05323 3.64629 3.04392 3.65414 3.03753 3.66419C0.444201 7.53836 -0.266632 11.3167 0.0825343 15.0475C0.0833825 15.0568 0.086111 15.0658 0.090553 15.0739C0.0949949 15.0821 0.101057 15.0893 0.108368 15.095C1.61803 16.2135 3.30679 17.0674 5.10253 17.62C5.11519 17.6237 5.12866 17.6234 5.14117 17.6193C5.15367 17.6151 5.16461 17.6072 5.17253 17.5967C5.55859 17.0721 5.90032 16.5163 6.1942 15.935C6.1983 15.9271 6.20066 15.9183 6.20114 15.9094C6.20162 15.9005 6.20019 15.8915 6.19696 15.8832C6.19374 15.8748 6.18878 15.8673 6.18241 15.861C6.17604 15.8547 6.16842 15.8498 6.16003 15.8467C5.62122 15.6405 5.09959 15.3919 4.60003 15.1034C4.59088 15.0981 4.58317 15.0906 4.5776 15.0816C4.57203 15.0726 4.56877 15.0624 4.56811 15.0518C4.56745 15.0413 4.56941 15.0307 4.57382 15.0211C4.57823 15.0115 4.58494 15.0031 4.59337 14.9967C4.69857 14.918 4.80193 14.8369 4.90337 14.7534C4.91224 14.7462 4.92294 14.7416 4.93427 14.7401C4.9456 14.7386 4.95712 14.7403 4.96753 14.745C8.24087 16.2392 11.7842 16.2392 15.0192 14.745C15.0297 14.7402 15.0414 14.7384 15.0529 14.7398C15.0644 14.7413 15.0752 14.746 15.0842 14.7534C15.1842 14.835 15.2892 14.9184 15.395 14.9967C15.4034 15.003 15.41 15.0112 15.4145 15.0207C15.4189 15.0301 15.421 15.0405 15.4205 15.0509C15.42 15.0614 15.4169 15.0715 15.4116 15.0805C15.4063 15.0895 15.3989 15.097 15.39 15.1025C14.8916 15.3938 14.3695 15.6425 13.8292 15.8459C13.8208 15.8491 13.8132 15.854 13.8068 15.8604C13.8004 15.8668 13.7955 15.8744 13.7922 15.8828C13.789 15.8912 13.7876 15.9002 13.7881 15.9092C13.7886 15.9182 13.7909 15.927 13.795 15.935C14.095 16.5167 14.4384 17.07 14.8159 17.5959C14.8236 17.6066 14.8346 17.6146 14.8471 17.6188C14.8597 17.623 14.8732 17.6231 14.8859 17.6192C16.6846 17.0682 18.3761 16.2143 19.8875 15.0942C19.8949 15.089 19.9011 15.0823 19.9057 15.0745C19.9103 15.0668 19.9132 15.0581 19.9142 15.0492C20.3309 10.735 19.2159 6.98752 16.9567 3.66586C16.9514 3.65465 16.9422 3.64576 16.9309 3.64086V3.64169ZM6.68337 12.775C5.69754 12.775 4.88587 11.8709 4.88587 10.7592C4.88587 9.64836 5.68254 8.74336 6.68337 8.74336C7.6917 8.74336 8.4967 9.65669 8.48087 10.76C8.48087 11.8709 7.6842 12.775 6.68337 12.775ZM13.3292 12.775C12.3434 12.775 11.5317 11.8709 11.5317 10.7592C11.5317 9.64836 12.3275 8.74336 13.3292 8.74336C14.3375 8.74336 15.1425 9.65669 15.1267 10.76C15.1267 11.8709 14.3384 12.775 13.3292 12.775Z" fill="#F2F2F2"/>
      </g>
      <defs>
      <clipPath id="clip0_839_6059">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
}

function Insta() {
  return(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 7.52C9.5095 7.52 9.03002 7.66545 8.62219 7.93795C8.21435 8.21046 7.89648 8.59778 7.70878 9.05095C7.52107 9.50411 7.47196 10.0028 7.56765 10.4838C7.66334 10.9649 7.89954 11.4068 8.24638 11.7536C8.59321 12.1005 9.0351 12.3367 9.51618 12.4323C9.99725 12.528 10.4959 12.4789 10.9491 12.2912C11.4022 12.1035 11.7895 11.7856 12.062 11.3778C12.3346 10.97 12.48 10.4905 12.48 10C12.48 9.67432 12.4159 9.35183 12.2912 9.05095C12.1666 8.75006 11.9839 8.47666 11.7536 8.24638C11.5233 8.01609 11.2499 7.83341 10.9491 7.70878C10.6482 7.58415 10.3257 7.52 10 7.52ZM19.93 5.07C19.9247 4.29776 19.7825 3.53257 19.51 2.81C19.3093 2.28126 18.9987 1.80109 18.5988 1.40119C18.1989 1.00128 17.7187 0.690718 17.19 0.49C16.4674 0.217464 15.7022 0.0752609 14.93 0.0699999C13.64 -6.70552e-08 13.26 0 10 0C6.74 0 6.36 -6.70552e-08 5.07 0.0699999C4.29776 0.0752609 3.53257 0.217464 2.81 0.49C2.28126 0.690718 1.80109 1.00128 1.40119 1.40119C1.00128 1.80109 0.690718 2.28126 0.49 2.81C0.217464 3.53257 0.0752609 4.29776 0.0699999 5.07C-6.70552e-08 6.36 0 6.74 0 10C0 13.26 -6.70552e-08 13.64 0.0699999 14.93C0.0807639 15.705 0.222774 16.4725 0.49 17.2C0.689828 17.7263 1.00013 18.2037 1.4 18.6C1.79819 19.0023 2.27939 19.3129 2.81 19.51C3.53257 19.7825 4.29776 19.9247 5.07 19.93C6.36 20 6.74 20 10 20C13.26 20 13.64 20 14.93 19.93C15.7022 19.9247 16.4674 19.7825 17.19 19.51C17.7206 19.3129 18.2018 19.0023 18.6 18.6C18.9999 18.2037 19.3102 17.7263 19.51 17.2C19.7823 16.4739 19.9244 15.7055 19.93 14.93C20 13.64 20 13.26 20 10C20 6.74 20 6.36 19.93 5.07ZM17.39 13.07C17.3579 13.6871 17.2262 14.295 17 14.87C16.8059 15.3497 16.5173 15.7854 16.1514 16.1514C15.7854 16.5173 15.3497 16.8059 14.87 17C14.2895 17.2136 13.6783 17.3318 13.06 17.35C12.27 17.35 12.06 17.35 10 17.35C7.94 17.35 7.73 17.35 6.94 17.35C6.32173 17.3318 5.71049 17.2136 5.13 17C4.6341 16.8157 4.18628 16.5217 3.82 16.14C3.45767 15.7813 3.17784 15.3479 3 14.87C2.78556 14.2901 2.67061 13.6782 2.66 13.06C2.66 12.27 2.66 12.06 2.66 10C2.66 7.94 2.66 7.73 2.66 6.94C2.67061 6.32183 2.78556 5.70988 3 5.13C3.18428 4.6341 3.47827 4.18628 3.86 3.82C4.22033 3.45962 4.65326 3.18009 5.13 3C5.71049 2.78641 6.32173 2.66821 6.94 2.65C7.73 2.65 7.94 2.65 10 2.65C12.06 2.65 12.27 2.65 13.06 2.65C13.6783 2.66821 14.2895 2.78641 14.87 3C15.3659 3.18428 15.8137 3.47827 16.18 3.86C16.5423 4.21875 16.8222 4.65213 17 5.13C17.2136 5.71049 17.3318 6.32173 17.35 6.94C17.35 7.73 17.35 7.94 17.35 10C17.35 12.06 17.42 12.27 17.39 13.06V13.07ZM15.79 5.63C15.6709 5.30698 15.4832 5.01364 15.2398 4.77021C14.9964 4.52678 14.703 4.33906 14.38 4.22C13.9365 4.06626 13.4693 3.99179 13 4C12.22 4 12 4 10 4C8 4 7.78 4 7 4C6.52827 4.00461 6.06107 4.09263 5.62 4.26C5.30193 4.37366 5.01169 4.55371 4.76858 4.7882C4.52547 5.02269 4.33506 5.30624 4.21 5.62C4.06478 6.06537 3.99383 6.5316 4 7C4 7.78 4 8 4 10C4 12 4 12.22 4 13C4.00991 13.4712 4.09777 13.9375 4.26 14.38C4.37906 14.703 4.56678 14.9964 4.81021 15.2398C5.05364 15.4832 5.34698 15.6709 5.67 15.79C6.09667 15.9469 6.54565 16.0347 7 16.05C7.78 16.05 8 16.05 10 16.05C12 16.05 12.22 16.05 13 16.05C13.4717 16.0454 13.9389 15.9574 14.38 15.79C14.703 15.6709 14.9964 15.4832 15.2398 15.2398C15.4832 14.9964 15.6709 14.703 15.79 14.38C15.9574 13.9389 16.0454 13.4717 16.05 13C16.05 12.22 16.05 12 16.05 10C16.05 8 16.05 7.78 16.05 7C16.0503 6.5278 15.9621 6.05972 15.79 5.62V5.63ZM10 13.82C9.49882 13.82 9.00257 13.7211 8.53966 13.529C8.07676 13.3369 7.6563 13.0554 7.30238 12.7005C6.94846 12.3457 6.66803 11.9245 6.47714 11.4611C6.28626 10.9977 6.18868 10.5012 6.19 10C6.19 9.24405 6.4143 8.5051 6.83449 7.87669C7.25468 7.24828 7.85187 6.75866 8.55047 6.46983C9.24907 6.181 10.0177 6.10594 10.7589 6.25415C11.5002 6.40236 12.1808 6.76717 12.7147 7.30241C13.2485 7.83764 13.6116 8.51924 13.7578 9.2609C13.9041 10.0026 13.827 10.771 13.5363 11.4688C13.2457 12.1666 12.7545 12.7625 12.125 13.1811C11.4955 13.5996 10.7559 13.822 10 13.82ZM14 6.93C13.7789 6.9066 13.5744 6.80222 13.4257 6.63697C13.277 6.47172 13.1947 6.25729 13.1947 6.035C13.1947 5.81271 13.277 5.59828 13.4257 5.43303C13.5744 5.26778 13.7789 5.1634 14 5.14C14.2211 5.1634 14.4256 5.26778 14.5743 5.43303C14.723 5.59828 14.8053 5.81271 14.8053 6.035C14.8053 6.25729 14.723 6.47172 14.5743 6.63697C14.4256 6.80222 14.2211 6.9066 14 6.93Z" fill="#F2F2F2"/>
    </svg>
  );
}

function GitHub() {
  return(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99999 0C7.62443 0.00165209 5.32693 0.848394 3.51846 2.38877C1.70999 3.92914 0.508512 6.06267 0.128945 8.40772C-0.250622 10.7528 0.216478 13.1564 1.44669 15.1886C2.67691 17.2208 4.58999 18.7491 6.84374 19.5C7.34374 19.5938 7.53124 19.2813 7.53124 19.0313V17.1563C4.74999 17.75 4.15624 15.9688 4.15624 15.9688C3.68749 14.8125 3.03124 14.5 3.03124 14.5C2.12499 13.875 3.09374 13.9063 3.09374 13.9063C4.09374 13.9688 4.62499 14.9375 4.62499 14.9375C5.53124 16.4688 6.96874 16.0313 7.53124 15.7813C7.57506 15.2738 7.79636 14.798 8.15624 14.4375C5.93749 14.1875 3.59374 13.3125 3.59374 9.5C3.57542 8.50424 3.94526 7.54041 4.62499 6.8125C4.32987 5.94548 4.36323 5.0003 4.71874 4.15625C4.71874 4.15625 5.56249 3.875 7.46874 5.1875C8.28343 4.96396 9.12395 4.84838 9.96874 4.84375C10.8137 4.84625 11.6545 4.96186 12.4687 5.1875C14.375 3.90625 15.2187 4.15625 15.2187 4.15625C15.5743 5.0003 15.6076 5.94548 15.3125 6.8125C15.9971 7.53734 16.3678 8.50324 16.3437 9.5C16.3437 13.3438 14 14.1875 11.7812 14.4375C12.0185 14.6796 12.2024 14.9688 12.3208 15.2864C12.4392 15.604 12.4896 15.9429 12.4687 16.2813V19.0313C12.4687 19.3125 12.6562 19.5938 13.1562 19.5C15.41 18.7491 17.3231 17.2208 18.5533 15.1886C19.7835 13.1564 20.2506 10.7528 19.871 8.40772C19.4915 6.06267 18.29 3.92914 16.4815 2.38877C14.6731 0.848394 12.3756 0.00165209 9.99999 0V0Z" fill="#F2F2F2"/>
      <path d="M3.78126 14.3438C3.75001 14.4063 3.68751 14.4063 3.62501 14.375C3.56251 14.3438 3.50001 14.2813 3.53126 14.2188C3.56251 14.1563 3.62501 14.1563 3.71876 14.1875C3.78126 14.25 3.81251 14.3125 3.78126 14.3438ZM4.18751 14.8125C4.15258 14.8317 4.11235 14.8391 4.07287 14.8335C4.0334 14.8279 3.99681 14.8096 3.96862 14.7814C3.94042 14.7532 3.92214 14.7166 3.91654 14.6772C3.91093 14.6377 3.91829 14.5975 3.93751 14.5625C3.97292 14.5453 4.01269 14.5391 4.05167 14.5446C4.09066 14.5502 4.12709 14.5673 4.15626 14.5938C4.17288 14.6059 4.18691 14.6213 4.19751 14.6389C4.2081 14.6566 4.21506 14.6762 4.21798 14.6966C4.22089 14.7169 4.21969 14.7377 4.21446 14.7576C4.20923 14.7775 4.20007 14.7962 4.18751 14.8125ZM4.59376 15.375C4.55211 15.3881 4.50716 15.3858 4.46704 15.3686C4.42692 15.3514 4.39428 15.3204 4.37501 15.2813C4.34426 15.2469 4.32727 15.2024 4.32727 15.1563C4.32727 15.1101 4.34426 15.0656 4.37501 15.0313C4.41666 15.0182 4.46161 15.0205 4.50173 15.0377C4.54185 15.0549 4.5745 15.0859 4.59376 15.125C4.65626 15.2188 4.65626 15.3438 4.59376 15.375ZM5.12501 15.9375C5.06251 16 4.96876 15.9688 4.87501 15.9063C4.78126 15.8125 4.75001 15.7188 4.81251 15.6563C4.85104 15.6308 4.89744 15.6199 4.9433 15.6256C4.98915 15.6313 5.03144 15.6533 5.06251 15.6875C5.084 15.6989 5.10286 15.7146 5.11785 15.7338C5.13285 15.7529 5.14364 15.775 5.14954 15.7986C5.15543 15.8222 5.1563 15.8467 5.15207 15.8707C5.14785 15.8946 5.13863 15.9174 5.12501 15.9375ZM5.87501 16.25C5.84376 16.3438 5.75001 16.375 5.62501 16.3438C5.50001 16.3125 5.43751 16.2188 5.46876 16.125C5.50001 16.0313 5.59376 16 5.71876 16.0313C5.81251 16.0938 5.90626 16.1875 5.87501 16.25ZM6.68751 16.3125C6.68751 16.4063 6.59376 16.4688 6.46876 16.4688C6.34376 16.4688 6.25001 16.4063 6.25001 16.3125C6.25001 16.2188 6.34376 16.1563 6.46876 16.1563C6.59376 16.1875 6.68751 16.25 6.68751 16.3125ZM7.43751 16.1875C7.43751 16.2813 7.37501 16.3438 7.25001 16.375C7.20386 16.3897 7.15412 16.3884 7.10879 16.3714C7.06345 16.3544 7.02514 16.3227 7.00001 16.2813C7.00001 16.1875 7.06251 16.125 7.18751 16.0938C7.34376 16.0625 7.43751 16.125 7.43751 16.1875Z" fill="#F2F2F2"/>
    </svg>
  );
}

function DAOrecordsTemp() {
  return(
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#EAE723"/>
      <path d="M52.2933 18.0161C48.3352 15.8035 44.0261 14.8517 39.5509 14.5148C36.9829 14.3217 34.4136 14.4018 31.8467 14.5325C29.3299 14.6616 26.8256 14.9022 24.3547 15.4289C23.8818 15.5294 23.7335 15.7041 23.7339 16.1988C23.7494 29.5113 23.7536 42.8235 23.7463 56.1361C23.7463 57.9651 23.7576 59.7937 23.7373 61.6225C23.7327 62.0115 23.8502 62.1497 24.2342 62.235C25.506 62.5115 26.7853 62.7497 28.0781 62.8694C32.5771 63.2867 37.0805 63.5358 41.5883 62.9865C44.8579 62.5883 48.0181 61.7889 51.0024 60.3622C52.2501 59.7654 53.4269 59.0489 54.5829 58.2195C54.6885 58.4857 54.8064 58.7062 54.8629 58.9417C54.9541 59.3219 55.1456 59.4507 55.5531 59.4438C57.2333 59.4169 58.9141 59.4193 60.5944 59.4417C61.0203 59.4473 61.0445 59.3315 60.9093 58.9739C60.3069 57.3739 59.7317 55.763 59.128 54.163C59.0128 53.8587 59.0235 53.6321 59.2136 53.3566C60.1925 51.9409 60.9888 50.4225 61.5376 48.7958C63.6549 42.5209 63.7429 36.1771 61.8459 29.8587C60.2824 24.6557 57.0632 20.6827 52.2933 18.0161ZM40.9779 44.9633H39.1968C38.0781 44.9633 36.9597 44.9606 35.8411 44.9633C35.6269 44.9633 35.4883 44.9531 35.5928 44.6691C36.2989 42.7449 36.9952 40.8166 37.6947 38.8897C37.6563 41.4974 38.2856 43.7025 40.9779 44.9633ZM40.2115 42.0875C39.8213 41.3579 39.7251 40.5614 39.6955 39.7481C39.7232 38.9398 39.8171 38.1433 40.2032 37.4118C40.7264 36.4193 41.5531 35.9009 42.6755 35.9099C43.7773 35.919 44.6248 36.4238 45.0848 37.4211C45.8003 38.9646 45.8069 40.5494 45.072 42.0894C44.5984 43.0817 43.7459 43.5745 42.6437 43.5731C41.5419 43.5721 40.7293 43.0579 40.2115 42.0875ZM46.9616 42.4521C47.4888 41.3174 47.5709 40.1134 47.5968 38.8755C48.3328 40.8081 49.0691 42.7417 49.8061 44.6763C49.8899 44.8958 49.8293 44.9665 49.5987 44.9659C47.8731 44.9606 46.148 44.9627 44.4032 44.9321C45.5792 44.4275 46.4272 43.5995 46.9611 42.4521H46.9616ZM42.6501 34.2862C41.1067 34.2862 39.8453 34.8886 38.8669 36.1067C38.8861 35.5555 41.9896 27.9766 42.7147 26.7086C44.0531 29.8393 45.3037 32.9425 46.4741 36.0955C45.4656 34.9027 44.2021 34.2854 42.6493 34.2862H42.6501ZM30.5043 43.4662V42.9017C30.5043 35.6529 30.5 28.4041 30.4917 21.1556C30.4917 20.6733 30.6291 20.5694 31.0861 20.5434C33.9336 20.3808 36.7797 20.3051 39.6291 20.4813C40.2056 20.517 40.2091 20.5189 39.9587 21.0735C36.6749 28.343 33.4984 35.6579 30.668 43.1185C30.6405 43.1907 30.6016 43.2593 30.5043 43.4662ZM51.2699 52.4643C49.008 54.7857 46.1971 56.059 43.0768 56.731C39.992 57.3955 36.8648 57.3747 33.7344 57.2833C33.0101 57.2622 32.2864 57.223 31.5621 57.2014C31.2472 57.1921 31.1856 57.0811 31.2947 56.7795C32.1208 54.4913 32.9357 52.1993 33.7397 49.9035C33.8408 49.6134 33.9851 49.5435 34.2693 49.5446C37.0861 49.5539 39.9027 49.5502 42.7192 49.5502C45.5029 49.5502 48.2867 49.5571 51.0701 49.5417C51.4264 49.5417 51.6272 49.6315 51.6848 49.9897C51.7005 50.0857 51.7443 50.1779 51.7757 50.2705C52.1971 51.503 52.2005 51.5062 51.2699 52.4609V52.4643ZM55.5539 43.7182C55.5376 43.8158 55.512 43.9113 55.4867 44.007C55.48 44.0321 55.4579 44.0537 55.3976 44.1454C52.5637 36.6158 49.4213 29.267 46.0664 21.8822C47.0253 22.2262 47.9408 22.6811 48.7941 23.2375C52.0483 25.3372 54.0472 28.3542 55.0813 32.0281C56.1693 35.8753 56.2035 39.7854 55.5539 43.7147V43.7182Z" fill="black"/>
      <path d="M54.8152 62.2006C54.5867 62.2316 54.2675 62.1846 54.288 62.6108C54.3171 63.1686 54.2952 63.7289 54.2952 64.3524L53.9563 64.251C52.7584 63.898 51.8037 64.4049 51.5048 65.5537C51.1592 66.8812 51.7768 68.0502 52.9731 68.2892C53.5101 68.3964 54.0528 68.3268 54.592 68.2308C54.8992 68.1756 55.0301 68.0604 55.0267 67.7198C55.0091 66.007 55.0213 64.294 55.0136 62.5806C55.0181 62.4348 55.1296 62.159 54.8152 62.2006ZM53.6307 67.6017C53.1139 67.6097 52.6333 67.5036 52.3605 67.014C52.0683 66.49 52.0816 65.934 52.3563 65.4092C52.6621 64.8244 53.6741 64.6814 54.1853 65.1161C54.2917 65.2065 54.2952 65.3044 54.2952 65.4201C54.2952 65.7156 54.2952 66.011 54.2952 66.3068C54.2952 66.5201 54.2952 66.7334 54.2952 66.9468C54.2955 67.5612 54.2648 67.5918 53.6307 67.6017Z" fill="black"/>
      <path d="M31.2835 64.2678C30.4819 63.947 29.5163 64.1998 29.0088 64.863C28.4256 65.6251 28.4413 66.9712 29.0421 67.6776C29.5867 68.3176 31.0149 68.5691 31.8013 68.1766C32.0947 68.0299 31.9397 67.8214 31.9144 67.6262C31.8853 67.3918 31.7427 67.4528 31.5915 67.492C31.1069 67.6171 30.6197 67.6558 30.1296 67.5115C29.7312 67.3942 29.4955 67.1352 29.3821 66.7358C29.3187 66.5099 29.3744 66.4427 29.6021 66.4502C29.9784 66.4624 30.3587 66.4536 30.7376 66.4528C31.1491 66.4528 31.5605 66.4488 31.9717 66.4528C32.1597 66.4552 32.2656 66.4232 32.2877 66.1918C32.3696 65.359 31.952 64.5358 31.2835 64.2678ZM31.2835 65.7283C31.0067 65.7136 30.7285 65.7248 30.4509 65.7251C30.2224 65.7251 29.9928 65.7387 29.7659 65.72C29.636 65.7094 29.4379 65.8216 29.3893 65.6278C29.3539 65.4907 29.4717 65.3547 29.5739 65.244C30.0872 64.6846 31.2061 64.7806 31.4773 65.4043C31.5653 65.6126 31.5736 65.7432 31.2819 65.7283H31.2835Z" fill="black"/>
      <path d="M42.7451 64.243C41.7035 63.8889 40.6285 64.415 40.28 65.4494C39.8659 66.678 40.3955 67.97 41.4619 68.3318C42.8197 68.7926 44.0459 67.8297 44.0493 66.2988C44.052 65.2836 43.5691 64.5225 42.7451 64.243ZM42.1115 67.6993C41.3787 67.7044 40.8805 67.1222 40.8883 66.2686C40.8963 65.4372 41.3779 64.878 42.0957 64.8732C42.8277 64.8678 43.3272 65.4513 43.3192 66.3038C43.3115 67.135 42.8272 67.6945 42.1115 67.6993Z" fill="black"/>
      <path d="M59.7744 66.0001C59.4643 65.895 59.1525 65.7908 58.8515 65.6614C58.6965 65.5958 58.5763 65.4614 58.5987 65.274C58.6213 65.0865 58.76 65.0105 58.9267 64.9486C59.3379 64.8012 59.7451 64.8684 60.1392 64.9862C60.3979 65.0617 60.4515 64.9638 60.4845 64.7462C60.5157 64.5406 60.6491 64.323 60.3069 64.2489C59.82 64.1433 59.3323 64.0817 58.8419 64.2065C58.2211 64.3652 57.8792 64.7462 57.8568 65.2825C57.8331 65.8526 58.1059 66.2084 58.7384 66.4321C59.0483 66.5412 59.3619 66.6401 59.6661 66.763C59.8544 66.8382 60.0304 66.9641 60.0139 67.1937C59.9952 67.4606 59.7656 67.5174 59.5536 67.5614C59.1149 67.6484 58.6613 67.6148 58.2403 67.4644C58.0045 67.3846 57.8989 67.4014 57.8261 67.6766C57.7397 68.002 57.7923 68.166 58.1389 68.2358C58.4277 68.3012 58.7227 68.335 59.0184 68.3369C59.1992 68.3281 59.3819 68.3329 59.5603 68.3076C60.2936 68.2038 60.7128 67.8358 60.7549 67.2724C60.8051 66.6124 60.5267 66.2553 59.7744 66.0001Z" fill="black"/>
      <path d="M37.3995 67.5251C36.4168 67.7481 35.8147 67.4531 35.6171 66.7067C35.2888 65.4683 36.0245 64.6873 37.2803 64.9451C37.4976 64.9899 37.6888 65.0641 37.7427 64.7214C37.7803 64.4894 37.8493 64.3147 37.5344 64.2414C36.7208 64.0531 35.9395 64.0601 35.3509 64.7371C34.7035 65.4803 34.6624 66.3587 35.012 67.2401C35.3293 68.0451 36.0091 68.3273 36.8299 68.3318C37.1152 68.347 37.388 68.287 37.6613 68.2254C37.8557 68.1814 37.9248 68.0747 37.9056 67.8718C37.8723 67.5369 37.7483 67.4457 37.3995 67.5251Z" fill="black"/>
      <path d="M26.0467 64.1883C25.5005 64.0939 24.9662 64.1576 24.4309 64.2742C24.1455 64.3363 24.0205 64.4678 24.0356 64.7792C24.0612 65.3062 24.0427 65.8334 24.0427 66.3603C24.0427 66.8547 24.0458 67.3491 24.0427 67.843C24.0405 68.1102 23.9938 68.3494 24.4215 68.3467C24.8356 68.344 24.7716 68.1075 24.7716 67.8651C24.7716 67.124 24.7716 66.3827 24.7716 65.6416C24.7716 64.9264 24.8631 64.836 25.5795 64.8771C25.6944 64.8792 25.8085 64.8974 25.9184 64.931C26.2546 65.048 26.2448 64.7942 26.308 64.5955C26.3882 64.3424 26.2907 64.2307 26.0467 64.1883Z" fill="black"/>
      <path d="M48.8885 64.1894C48.324 64.0934 47.7768 64.1585 47.2261 64.2884C46.9451 64.3542 46.8645 64.4996 46.8747 64.7748C46.8944 65.302 46.8805 65.8292 46.8805 66.3561C46.8805 66.8998 46.8955 67.4441 46.8747 67.9868C46.864 68.2849 46.992 68.3348 47.2536 68.3398C47.5405 68.3454 47.6184 68.2412 47.6131 67.9678C47.5984 67.1942 47.6083 66.4198 47.6083 65.6454C47.6083 64.9252 47.7211 64.8212 48.4616 64.8788C48.5603 64.883 48.6579 64.8998 48.752 64.9292C49.0829 65.0486 49.0824 64.803 49.1451 64.5996C49.2213 64.3494 49.1371 64.2316 48.8885 64.1894Z" fill="black"/>
    </svg>
  );
}

function Medium() {
  return(
    <p style={{color: "#F2F2F2"}}>M</p>
  )
}