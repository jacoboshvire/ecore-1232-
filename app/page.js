import Image from "next/image";
import "./page.css";
import Link from "next/link";
import Wave from './image/Wave.png'
import Profile from './image/Group_4.png'

export default function Home() {
  return (
    <div className="header">
      <nav>
        <li>
          <a href="tel:+2348127187633">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3334 18.3333C33.3334 13.6518 33.3334 11.311 32.2098 9.62952C31.7234 8.90159 31.0984 8.27658 30.3705 7.79019C28.689 6.66666 26.3482 6.66666 21.6667 6.66666H18.3334C13.6518 6.66666 11.311 6.66666 9.62955 7.79019C8.90162 8.27658 8.27661 8.90159 7.79022 9.62952C6.66669 11.311 6.66669 13.6518 6.66669 18.3333C6.66669 23.0149 6.66669 25.3556 7.79022 27.0371C8.27661 27.7651 8.90162 28.3901 9.62955 28.8765C11.0985 29.858 13.0705 29.982 16.6667 29.9977V30L18.5093 33.6852C19.1235 34.9136 20.8765 34.9136 21.4907 33.6852L23.3334 30V29.9977C26.9295 29.982 28.9016 29.858 30.3705 28.8765C31.0984 28.3901 31.7234 27.7651 32.2098 27.0371C33.3334 25.3556 33.3334 23.0149 33.3334 18.3333ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H20C20.5523 22.6667 21 22.2189 21 21.6667C21 21.1144 20.5523 20.6667 20 20.6667H15Z" />
            </svg>
            <h3>
              Let's talk
            </h3>
          </a>
        </li>
        {/* 2nd link */}
        <li>
          <a href="tel:+2348127187633">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path className="portIcon" fill-rule="evenodd" clip-rule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
            </svg>
            <h3>
              Portifilio
            </h3>
          </a>
        </li>
        <div className="menuPath">
          {/* 3rd link */}
          <li>
            <a href="#" >
              <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8977 19.6881L8.77543 17.314L8.77542 17.314L8.77541 17.314C6.42221 16.5296 5.24561 16.1374 5.24561 15.4167C5.24561 14.6959 6.42221 14.3037 8.77543 13.5193L27.0386 7.43157C28.6944 6.87964 29.5223 6.60368 29.9593 7.04069C30.3963 7.47771 30.1203 8.3056 29.5684 9.96139L23.4807 28.2246C22.6963 30.5778 22.3041 31.7544 21.5833 31.7544C20.8626 31.7544 20.4704 30.5778 19.686 28.2246L17.3119 21.1023L23.8321 14.5821C24.2226 14.1916 24.2226 13.5584 23.8321 13.1679C23.4416 12.7774 22.8084 12.7774 22.4179 13.1679L15.8977 19.6881Z" />
              </svg>
              <h3>
                send Email
              </h3>
            </a>
          </li>
          {/* burger menu */}
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      <div className="nav2">
        <li>
          <a href="tel:+2348127187633">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path className="portIcon" fill-rule="evenodd" clip-rule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
            </svg>
          </a>
        </li>
        <div className="inside_nav2">
          <li>
            <a href="tel:+2348127187633">
              <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8977 19.6881L8.77543 17.314L8.77542 17.314L8.77541 17.314C6.42221 16.5296 5.24561 16.1374 5.24561 15.4167C5.24561 14.6959 6.42221 14.3037 8.77543 13.5193L27.0386 7.43157C28.6944 6.87964 29.5223 6.60368 29.9593 7.04069C30.3963 7.47771 30.1203 8.3056 29.5684 9.96139L23.4807 28.2246C22.6963 30.5778 22.3041 31.7544 21.5833 31.7544C20.8626 31.7544 20.4704 30.5778 19.686 28.2246L17.3119 21.1023L23.8321 14.5821C24.2226 14.1916 24.2226 13.5584 23.8321 13.1679C23.4416 12.7774 22.8084 12.7774 22.4179 13.1679L15.8977 19.6881Z" />
              </svg>
            </a>
          </li>
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* the main path  */}
      <div className="main_container">
        <div className="inside_container">
          <div className="writeUp">
            <Image className="wave"
              src={Wave}
              alt="wave"
              width={60}
              height={60}
            />
            {/* writeUp */}
            <p className="text_writeup">
              Hi, I’m <stong className="myName">Jacob i’m a software developer</stong>  who has good taste in aesthetics.
            </p>
            {/* skills Path */}
            <div className="skills">
              <span>
                <p>
                  software dev
                </p>
                <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.94141 10.3721L0 8.17969V7.33984L4.94141 4.86914V6.31934L1.90918 7.70117L4.94141 8.93164V10.3721Z" />
                  <path d="M9.80957 4L7.14844 11.3389H5.45898L8.12012 4H9.80957Z" />
                  <path d="M10.2832 8.93164L13.3154 7.70117L10.2832 6.31934V4.86914L15.2246 7.33984V8.17969L10.2832 10.3721V8.93164Z" />
                </svg>
              </span>
              {/* 2nd skills */}
              <span>
                <p>
                  ui/ux designer
                </p>
                <svg width="15" height="19" className="uidesign" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3.75" y="10.0369" width="3.08824" height="2.5" rx="1.25" transform="rotate(90 3.75 10.0369)" />
                  <rect x="10.625" y="9.26465" width="3.08824" height="2.5" rx="1.25" transform="rotate(-90 10.625 9.26465)" />
                  <path d="M11.25 8.49276L10.3125 9.65085C10.3052 9.65982 10.3016 9.66431 10.2987 9.66786C9.49846 10.6472 8.00154 10.6472 7.2013 9.66786C7.1984 9.66431 7.19476 9.65982 7.1875 9.65085V9.65085C7.18024 9.64188 7.1766 9.63739 7.1737 9.63384C6.37346 8.65452 4.87654 8.65452 4.0763 9.63384C4.0734 9.63739 4.06976 9.64188 4.0625 9.65085L3.125 10.8089" />
                </svg>
              </span>
              {/* 3rd skills */}
              <span>
                <p>
                  Graphic designer
                </p>
                <svg width="17" height="17" className="uidesign" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.5" y="10" width="10" height="2.5" rx="1.25" />
                  <path d="M3.40949 7.61424L5 10H10L11.5905 7.61424C12.0259 6.96118 12.2436 6.63465 12.2083 6.27888C12.1731 5.92311 11.8956 5.64561 11.3406 5.09062L7.5 1.25L3.65938 5.09062C3.10439 5.64561 2.82689 5.92311 2.79166 6.27888C2.75643 6.63465 2.97412 6.96118 3.40949 7.61424Z" />
                  <circle cx="7.5" cy="6.875" r="1.375" />
                  <path d="M7.5 1.25V5.625" />
                </svg>
              </span>
            </div>
            <div className="about">
              <Link href={"#"}>
                About me
              </Link>
            </div>
          </div>
          <div className="image">
            <Image

              src={Profile}
              alt="profile"
              width={233}
              height={233}
            />
          </div>
        </div>
      </div>
      <footer>
        {/* copyright writeup */}
        <div className="copyright">
          <p>
            &copy; copyright by  Ejiro Jacob Oshevire
          </p>
        </div>
        <div className="links">
          {/* 1st svg */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.74451C16.0425 3.74467 12.2141 5.15303 9.19997 7.71759C6.1858 10.2821 4.18253 13.8355 3.54858 17.742C2.91463 21.6484 3.69139 25.653 5.73986 29.0391C7.78833 32.4252 10.9748 34.972 14.7292 36.2237C15.5626 36.3695 15.8751 35.8695 15.8751 35.432C15.8751 35.0362 15.8542 33.7237 15.8542 32.3278C11.6667 33.0987 10.5834 31.3071 10.25 30.3696C9.88015 29.4578 9.29382 28.6498 8.54169 28.0153C7.95836 27.7028 7.12503 26.932 8.52084 26.9112C9.05382 26.969 9.565 27.1545 10.0111 27.4519C10.4571 27.7492 10.825 28.1498 11.0834 28.6195C11.3113 29.029 11.6178 29.3895 11.9853 29.6803C12.3529 29.9712 12.7741 30.1866 13.2251 30.3143C13.676 30.4421 14.1477 30.4796 14.6132 30.4247C15.0786 30.3698 15.5286 30.2236 15.9375 29.9945C16.0096 29.1472 16.3873 28.355 17 27.7654C13.2917 27.3487 9.41669 25.9112 9.41669 19.5362C9.39327 17.8798 10.0045 16.2772 11.125 15.0571C10.6155 13.6174 10.6751 12.0375 11.2917 10.6404C11.2917 10.6404 12.6875 10.2029 15.875 12.3487C18.6022 11.5987 21.4812 11.5987 24.2084 12.3487C27.3958 10.1821 28.7917 10.6404 28.7917 10.6404C29.4084 12.0375 29.468 13.6174 28.9584 15.0571C30.0823 16.2751 30.694 17.8791 30.6667 19.5362C30.6667 25.932 26.7708 27.3487 23.0625 27.7654C23.4603 28.1685 23.7666 28.6525 23.9607 29.1846C24.1548 29.7166 24.2322 30.2842 24.1875 30.8487C24.1875 33.0779 24.1667 34.8695 24.1667 35.4321C24.1667 35.8696 24.4792 36.3904 25.3125 36.2237C29.0603 34.9618 32.2376 32.4091 34.2774 29.0213C36.3171 25.6334 37.0865 21.6309 36.4482 17.7282C35.8098 13.8256 33.8053 10.2768 30.7925 7.71536C27.7796 5.15392 23.9545 3.74657 20 3.74451Z" />
            </svg>
          </a>
          {/* 2nd svg */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.1167 3.33333H5.88335C5.56598 3.32892 5.25085 3.38708 4.95596 3.50447C4.66107 3.62187 4.39219 3.7962 4.16468 4.01752C3.93717 4.23884 3.75549 4.50281 3.63 4.79435C3.50452 5.08589 3.4377 5.3993 3.43335 5.71667V34.2833C3.4377 34.6007 3.50452 34.9141 3.63 35.2057C3.75549 35.4972 3.93717 35.7612 4.16468 35.9825C4.39219 36.2038 4.66107 36.3781 4.95596 36.4955C5.25085 36.6129 5.56598 36.6711 5.88335 36.6667H34.1167C34.4341 36.6711 34.7492 36.6129 35.0441 36.4955C35.339 36.3781 35.6078 36.2038 35.8354 35.9825C36.0629 35.7612 36.2445 35.4972 36.37 35.2057C36.4955 34.9141 36.5623 34.6007 36.5667 34.2833V5.71667C36.5623 5.3993 36.4955 5.08589 36.37 4.79435C36.2445 4.50281 36.0629 4.23884 35.8354 4.01752C35.6078 3.7962 35.339 3.62187 35.0441 3.50447C34.7492 3.38708 34.4341 3.32892 34.1167 3.33333ZM13.4833 31.2333H8.48335V16.2333H13.4833V31.2333ZM10.9833 14.1333C10.2938 14.1333 9.63247 13.8594 9.14487 13.3718C8.65728 12.8842 8.38335 12.2229 8.38335 11.5333C8.38335 10.8438 8.65728 10.1824 9.14487 9.69486C9.63247 9.20726 10.2938 8.93333 10.9833 8.93333C11.3495 8.89181 11.7203 8.92809 12.0715 9.0398C12.4226 9.15152 12.7462 9.33615 13.0211 9.5816C13.296 9.82706 13.5159 10.1278 13.6665 10.4641C13.817 10.8005 13.8949 11.1648 13.8949 11.5333C13.8949 11.9018 13.817 12.2662 13.6665 12.6025C13.5159 12.9389 13.296 13.2396 13.0211 13.4851C12.7462 13.7305 12.4226 13.9151 12.0715 14.0269C11.7203 14.1386 11.3495 14.1749 10.9833 14.1333ZM31.5167 31.2333H26.5167V23.1833C26.5167 21.1667 25.8 19.85 23.9833 19.85C23.4211 19.8541 22.8737 20.0305 22.4147 20.3553C21.9558 20.6801 21.6075 21.1378 21.4167 21.6667C21.2863 22.0584 21.2297 22.471 21.25 22.8833V31.2167H16.25C16.25 31.2167 16.25 17.5833 16.25 16.2167H21.25V18.3333C21.7042 17.5452 22.3649 16.8959 23.1608 16.4553C23.9566 16.0148 24.8576 15.7998 25.7667 15.8333C29.1 15.8333 31.5167 17.9833 31.5167 22.6V31.2333Z" />
            </svg>
          </a>
          {/* 3rd svg */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.45 10.5833H25V12.9333H33.4833L33.45 10.5833ZM31.6666 26.75C31.0256 27.1747 30.2686 27.3902 29.5 27.3667C28.9912 27.4197 28.4769 27.3671 27.9894 27.2123C27.5019 27.0574 27.0516 26.8036 26.6666 26.4667C25.955 25.6598 25.5845 24.6081 25.6333 23.5333H36.6666C36.7462 22.4142 36.6506 21.2896 36.3833 20.2C36.1248 19.1634 35.6724 18.185 35.05 17.3167C34.4235 16.4743 33.6144 15.7849 32.6833 15.3C31.6474 14.7892 30.5048 14.5322 29.35 14.55C28.2638 14.542 27.1871 14.7517 26.1833 15.1667C25.2641 15.5541 24.4313 16.1207 23.7333 16.8333C23.0373 17.5602 22.4983 18.4225 22.15 19.3667C21.7761 20.3859 21.5898 21.4644 21.6 22.55C21.5828 23.651 21.7635 24.7462 22.1333 25.7833C22.4474 26.7225 22.9461 27.5895 23.6 28.3333C24.2765 29.0636 25.1079 29.6331 26.0333 30C27.0652 30.3931 28.1626 30.5855 29.2666 30.5667C30.8157 30.615 32.345 30.2094 33.6666 29.4C35.0015 28.4514 35.9625 27.0659 36.3833 25.4833H32.7C32.5028 26.0069 32.1399 26.4517 31.6666 26.75ZM25.95 19.8833C26.0797 19.4678 26.295 19.084 26.5821 18.7568C26.8691 18.4296 27.2216 18.1661 27.6166 17.9833C28.1399 17.7478 28.7097 17.6338 29.2833 17.65C29.6977 17.6146 30.1148 17.6693 30.506 17.8102C30.8973 17.9512 31.2534 18.1751 31.55 18.4667C32.1163 19.1599 32.4797 19.9963 32.6 20.8833H25.6833C25.7103 20.5446 25.7717 20.2096 25.8666 19.8833H25.95ZM17.1333 19.0833C17.9816 18.7301 18.7187 18.1543 19.2666 17.4167C19.7704 16.6333 20.0206 15.7139 19.9833 14.7833C20.016 13.9347 19.8505 13.0902 19.5 12.3167C19.2055 11.6465 18.7328 11.07 18.1333 10.65C17.4977 10.2133 16.776 9.91776 16.0166 9.78332C15.118 9.59485 14.2014 9.50542 13.2833 9.51666H3.33331V30.4833H13.5C14.4278 30.484 15.3519 30.3664 16.25 30.1333C17.1012 29.9131 17.9077 29.5465 18.6333 29.05C19.3362 28.5628 19.9086 27.9104 20.3 27.15C20.7332 26.2996 20.9452 25.3539 20.9166 24.4C20.9482 23.2179 20.6166 22.0545 19.9666 21.0667C19.2676 20.0732 18.2308 19.3682 17.05 19.0833H17.1333ZM7.94998 13.1H12.2666C12.6632 13.0995 13.0591 13.133 13.45 13.2C13.8099 13.2533 14.1555 13.378 14.4666 13.5667C14.7672 13.7367 15.0108 13.9918 15.1666 14.3C15.3597 14.6695 15.4517 15.0835 15.4333 15.5C15.4644 15.8587 15.4095 16.2197 15.2733 16.553C15.1371 16.8863 14.9234 17.1824 14.65 17.4167C14.0535 17.8267 13.3398 18.0315 12.6166 18H7.94998V13.1ZM16.0166 25.5C15.8454 25.8397 15.5865 26.1274 15.2666 26.3333C14.9338 26.5403 14.5671 26.687 14.1833 26.7667C13.7567 26.8621 13.3204 26.9069 12.8833 26.9H7.88331V21.15H12.8833C13.7413 21.1124 14.5887 21.352 15.3 21.8333C15.6213 22.1217 15.8703 22.4817 16.0266 22.8842C16.183 23.2867 16.2424 23.7203 16.2 24.15C16.245 24.6081 16.1823 25.0705 16.0166 25.5Z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
