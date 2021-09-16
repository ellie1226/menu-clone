import React from "react";
import { Users } from "react-feather";
import { t } from "ttag";

function Cover() {
  return (
    <div className="cover-group">
      <div className="cover-img">
        <img
          alt="brand cover"
          src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=800,height=250,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/21ebf629-c828-4ae6-b1cf-dc150cdb5a55.jpg"
          height="250"
        />
      </div>
      <div className="cover-profile-icon-left">
        <img
          loading="eager"
          alt="brand profile icon"
          src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=76,format=jpeg,quality=95/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/efe58558-a9dc-466d-922b-ecce4b3213b1.png"
        />
      </div>
      <div className="cover-group-content">
        <h1 className="cover-group-title">{t`McDonald's`}</h1>
        <div className="cover-group-subtitle text-light">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21.2529 9.08438C20.8307 8.29651 20.2018 7.63859 19.4338 7.18137C18.6657 6.72414 17.7876 6.48489 16.8938 6.48935L2.46366 6.50017C2.3717 6.50271 2.28244 6.53179 2.20664 6.58391C2.13084 6.63603 2.07173 6.70897 2.03645 6.79393C2.00118 6.87888 1.99123 6.97223 2.00781 7.06272C2.02439 7.1532 2.0668 7.23696 2.12992 7.30389L11.6797 16.8394C11.7041 16.8616 11.7339 16.8771 11.7661 16.8843C11.7983 16.8915 11.8318 16.8903 11.8634 16.8807C11.895 16.8711 11.9235 16.8534 11.9462 16.8295C11.969 16.8055 11.9851 16.7761 11.993 16.7441L12.8171 12.8481C12.8238 12.8066 12.8456 12.7691 12.8783 12.7427C12.911 12.7163 12.9523 12.7029 12.9942 12.7051L16.3489 12.6943C16.6298 12.7036 16.9032 12.6027 17.1107 12.413C17.3182 12.2234 17.4432 11.9601 17.4591 11.6794C17.4485 11.4367 17.3436 11.2077 17.1668 11.0411C16.99 10.8745 16.7552 10.7834 16.5123 10.7872L12.8915 10.798C12.8437 10.7993 12.7961 10.7909 12.7516 10.7734C12.7071 10.7558 12.6667 10.7294 12.6326 10.6958L11.0661 9.12926C11.0246 9.09063 10.9958 9.04028 10.9836 8.9849C10.9714 8.92952 10.9764 8.87174 10.9978 8.81924C11.0193 8.76675 11.0562 8.72202 11.1037 8.69102C11.1511 8.66001 11.2069 8.6442 11.2636 8.64567L16.9687 8.63485C17.3463 8.61013 17.7249 8.66436 18.0804 8.79406C18.4359 8.92377 18.7605 9.12611 19.0335 9.38819C19.3064 9.65027 19.5218 9.96634 19.6659 10.3163C19.8099 10.6662 19.8795 11.0423 19.8702 11.4206C19.8541 12.3341 19.478 13.2044 18.8237 13.8421C18.1694 14.4798 17.2898 14.8335 16.3761 14.8261H14.5173C14.4757 14.8254 14.4351 14.8393 14.4027 14.8654C14.3703 14.8916 14.3482 14.9283 14.3402 14.9692L13.8566 17.2645C13.8505 17.2913 13.8505 17.319 13.8565 17.3458C13.8625 17.3726 13.8745 17.3977 13.8914 17.4192C13.9084 17.4408 13.93 17.4582 13.9546 17.4704C13.9792 17.4825 14.0063 17.489 14.0337 17.4893H16.5532C20.4696 17.4893 23.4529 13.3005 21.2529 9.08438Z"
              fill="#00838A"
            ></path>
          </svg>
          <b>Dashpass</b>
          <span className="cover-group-dot-separator">•</span>
          <span>{t`{McDonald's}`}</span>
          <span className="cover-group-dot-breakpoint">•</span>
          <div className="cover-group-subtext">
            <span>4.5</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.9112 4.58819C12.7494 4.23012 12.3929 4 12 4C11.607 4 11.2505 4.23012 11.0887 4.58819L9.37313 8.38448L5.23251 8.84295C4.84196 8.8862 4.51293 9.15416 4.39151 9.52786C4.27008 9.90157 4.37877 10.3118 4.66932 10.5763L7.74967 13.381L6.90618 17.4606C6.82662 17.8454 6.97979 18.2412 7.29768 18.4721C7.61557 18.7031 8.03926 18.7265 8.38064 18.5319L12 16.469L15.6193 18.5319C15.9607 18.7265 16.3843 18.7031 16.7022 18.4721C17.0201 18.2412 17.1733 17.8454 17.0937 17.4606L16.2503 13.381L19.3306 10.5763C19.6212 10.3118 19.7298 9.90157 19.6084 9.52786C19.487 9.15416 19.158 8.8862 18.7674 8.84295L14.6268 8.38448L12.9112 4.58819Z"
                fill="#767676"
              ></path>
            </svg>
            <span>(1,800+ ratings)</span>
            <span className="cover-group-dot-separator">•</span>
            <span>53851.mi</span>
            <span className="cover-group-dot-separator">•</span>
            <span>$</span>
          </div>
        </div>
      </div>
      <div className="cover-pills">
        <div className="cover-pill-group-left">
          <div className="cover-pill-left">
            <h3>$0.00</h3>
            <span>delivery fee, first order</span>
          </div>
          <div className="cover-pill-right">
            <h3>Unavailable</h3>
            <span>too far away</span>
          </div>
        </div>
        <div className="cover-pill-group-right">
          <Users />
          <b>Group Order</b>
        </div>
      </div>
      <div className="cover-card">
        <h2>Enter your address</h2>
        <span className="subtext">
          {t`We'll confirm that you can have this restaurant delivered`}
        </span>
        <div className="cover-card-input">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5257 21.3514L12 20L13.4743 21.3514C13.0955 21.7647 12.5606 22 12 22C11.4394 22 10.9045 21.7647 10.5257 21.3514ZM13.2949 18.4463C12.5464 19.4039 12 20 12 20C12 20 11.4535 19.4039 10.7051 18.4463C9.07919 16.3658 6.5 12.5792 6.5 9.49242C6.5 6.45904 8.96243 4 12 4C15.0376 4 17.5 6.45904 17.5 9.49242C17.5 12.5792 14.9208 16.3658 13.2949 18.4463ZM13.4743 21.3514C13.4743 21.3514 13.4743 21.3514 12 20C10.5257 21.3514 10.5257 21.3514 10.5257 21.3514L10.5227 21.3482L10.5177 21.3427L10.5018 21.3252L10.4474 21.2647C10.4014 21.2133 10.3363 21.1398 10.2548 21.0461C10.0919 20.8589 9.86301 20.5903 9.59004 20.2553C9.04587 19.5873 8.31764 18.6441 7.58566 17.5456C6.85705 16.4522 6.10151 15.1704 5.5227 13.8275C4.95169 12.5026 4.5 10.9984 4.5 9.49242C4.5 5.35187 7.86046 2 12 2C16.1395 2 19.5 5.35187 19.5 9.49242C19.5 10.9984 19.0483 12.5026 18.4773 13.8275C17.8985 15.1704 17.1429 16.4522 16.4143 17.5456C15.6824 18.6441 14.9541 19.5873 14.41 20.2553C14.137 20.5903 13.9081 20.8589 13.7452 21.0461C13.6637 21.1398 13.5986 21.2133 13.5526 21.2647L13.4982 21.3252L13.4823 21.3427L13.4773 21.3482L13.4743 21.3514Z"
              fill="#494949"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"
              fill="#494949"
            ></path>
          </svg>
          <input className="fieldBox" placeholder="Address" />
        </div>
      </div>
      <div className="cover-text">
        <span>Local restaurants delivered in 45 minutes</span>
        <b>More</b>
      </div>
      <div className="cover-promotions">
        <h3>
          Try The Saweetie Meal today! Available for a limited time only,
          now-9/5
        </h3>
      </div>
    </div>
  );
}

export default Cover;
