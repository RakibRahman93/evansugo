"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <div className="container position-relative">
      <div className="wow fadeInUp">
        <div className="relative">
          <Swiper
            spaceBetween={0}
            breakpoints={{
              1199: {
                slidesPerView: 3, // When window width is <= 1199px
              },
              768: {
                slidesPerView: 2, // When window width is <= 768px
              },
              480: {
                slidesPerView: 1, // When window width is <= 480px
              },
              200: {
                slidesPerView: 1, // When window width is <= 200px
              },
            }}
            modules={[Navigation, Pagination]}
            loop
            navigation={{
              prevEl: ".snbp3",
              nextEl: ".snbn3",
            }}
            pagination={{
              el: ".sp1",
              clickable: true,
              bulletActiveClass: "active",
              renderBullet: (index, className) => {
                return `<div class=" owl-page ${className}">
                   <span></span>
                  </div>`;
              },
            }}
            watchSlidesProgress
            resizeObserver
            className="item-carousel owl-carousel owl-theme overflow-hidden position-static"
            style={{
              opacity: 1,
              display: "block",
            }}
          >
            {/* Team item */}

            <>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M17.517 10.012c.151.23.087.541-.144.692l-2.2 1.444c-.085.056-.179.082-.274.082-.162 0-.322-.079-.418-.225-.152-.231-.087-.541.143-.692l2.201-1.445c.23-.151.541-.089.692.144m-6.242-2.595l1.111-2.385c.116-.252.414-.36.664-.243.25.117.36.413.242.664l-1.111 2.386c-.085.181-.265.288-.453.288l-.211-.047c-.25-.115-.359-.413-.242-.663m-2.624.613c1.377-2.652 1.484-5.104.318-7.286-.178-.333.066-.734.441-.734.177 0 .351.095.442.264 1.33 2.49 1.225 5.254-.314 8.217-.089.171-.263.269-.444.269-.078 0-.156-.018-.23-.056-.245-.127-.341-.429-.213-.674m15.349 5.526c0 .352-.351.588-.671.47-2.808-1.028-5.254-.821-7.271.611-.088.063-.189.093-.29.093-.155 0-.309-.073-.406-.21-.16-.224-.108-.537.117-.696 2.301-1.637 5.059-1.884 8.193-.737.203.074.328.266.328.469m-16.484-2.608l2.865 7.517-2.248.964-2.753-7.512.778-2.176 1.358 1.207zm3.785 7.124l-2.168-5.687 5.025 4.463-2.857 1.224zm-8.27.419l.989 2.699-2.307.989 1.318-3.688zm1.823-5.103l2.358 6.435-2.271.973-1.384-3.777 1.297-3.631zm-4.853 10.612l15.997-6.853-10.283-9.137-5.714 15.99zm20.46-15.629l.552-.694.281.841.831.309-.713.528-.038.886-.723-.516-.854.238.268-.846-.491-.739.887-.007zm-1.384.885l-.639 2.019 2.041-.568 1.724 1.23.089-2.115 1.704-1.258-1.985-.739-.672-2.008-1.315 1.658-2.118.017 1.171 1.764zm-2.167-4.194c.593-.044.924-.141 1.074-.315.176-.204.226-.647.165-1.433-.023-.276.183-.517.459-.539.277-.016.515.18.537.456.063.806.059 1.62-.402 2.156-.429.499-1.13.602-1.76.647-.702.052-.72.243-.774.878-.056.67-.152 1.744-1.84 1.933-1.017.115-1.433.33-1.377 1.956.008.275-.207.325-.484.325h-.016c-.269 0-.491-.022-.5-.291-.049-1.461.191-2.655 2.265-2.887.874-.099.9-.404.956-1.072.054-.635.145-1.7 1.697-1.814m5.264-3.048c.454 0 .823.37.823.824 0 .454-.369.823-.823.823-.454 0-.824-.369-.824-.823 0-.454.37-.824.824-.824m0 2.647c1.006 0 1.823-.817 1.823-1.823s-.817-1.823-1.823-1.823c-1.007 0-1.824.817-1.824 1.823s.817 1.823 1.824 1.823m-8.446-3.662c.552 0 1 .449 1 .999 0 .551-.448.999-1 .999s-1-.448-1-.999c0-.55.448-.999 1-.999m0 2.998c1.103 0 1.999-.896 1.999-1.999 0-1.103-.896-1.998-1.999-1.998-1.104 0-2 .895-2 1.998s.896 1.999 2 1.999" />
                    </svg>
                  </div>
                  <div className="features-title">Simplicity</div>
                  <div className="features-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque congue rhoncus enim, in pharetra lacus.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M22 9.74l-2 1.02v7.24c-1.007 2.041-5.606 3-8.5 3-3.175 0-7.389-.994-8.5-3v-7.796l-3-1.896 12-5.308 11 6.231v8.769l1 3h-3l1-3v-8.26zm-18 1.095v6.873c.958 1.28 4.217 2.292 7.5 2.292 2.894 0 6.589-.959 7.5-2.269v-6.462l-7.923 4.039-7.077-4.473zm-1.881-2.371l9.011 5.694 9.759-4.974-8.944-5.066-9.826 4.346z" />
                    </svg>
                  </div>
                  <div className="features-title">Accountability</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M3.278 3.956c-.459 0-.883.211-1.103.552-.363.561-.218 1.315.352 1.832.383.346.888.546 1.385.546.581 0 1.093-.268 1.444-.755l3.208-4.373-.502-.366-2.928 3.966-.4-.557c-.39-.546-.908-.845-1.456-.845m.634 3.928c-.743 0-1.492-.293-2.056-.804-.578-.525-.883-1.211-.883-1.891 0-1.62 1.426-2.232 2.305-2.232.675 0 1.308.265 1.829.756l2.742-3.713 2.112 1.541-3.797 5.177c-.542.751-1.342 1.166-2.252 1.166m15.386-7.839l-1.2 2.215-2.476.455 1.735 1.825-.332 2.496 2.273-1.086 2.271 1.086-.331-2.496 1.735-1.825-2.476-.455-1.199-2.215zm0 2.098l.548 1.013 1.132.208-.793.834.152 1.142-1.039-.496-1.039.496.152-1.142-.794-.834 1.132-.208.549-1.013m-7.312 3.894c-2.48 0-4.494 2.014-4.494 4.494 0 2.482 2.014 4.494 4.494 4.494 2.481 0 4.495-2.012 4.495-4.494 0-2.48-2.014-4.494-4.495-4.494m0 .999c1.928 0 3.496 1.569 3.496 3.495 0 1.927-1.568 3.495-3.496 3.495-1.927 0-3.495-1.568-3.495-3.495 0-1.926 1.568-3.495 3.495-3.495m-4.983 15.965h9.974v-2.778c0-1.256.204-1.786.661-2.494l1.024-1.58c1.148-1.764 2.233-3.43 2.792-4.491.078-.148.03-.328-.112-.418-.168-.109-.403-.076-.536.07-.671.734-2.03 2.164-4.041 4.251l-.369.396c-.951 1.04-1.53 1.54-4.287 1.54h-.123c-2.859-.014-3.442-.515-4.391-1.554l-.356-.382c-1.999-2.074-3.359-3.504-4.042-4.251-.133-.146-.368-.177-.535-.07-.142.091-.189.271-.112.418.585 1.112 1.828 3.18 3.796 6.323.479.766.657 1.44.657 2.489v2.531zm10.973.999h-11.972v-3.53c0-.851-.132-1.363-.504-1.958-2.01-3.208-3.228-5.239-3.833-6.388-.321-.611-.126-1.352.455-1.725.565-.361 1.361-.258 1.812.236.668.731 2.059 2.195 4.024 4.233l.374.402c.786.86 1.111 1.216 3.659 1.228h.118c2.439 0 2.764-.355 3.55-1.215l.387-.415c2.005-2.08 3.358-3.504 4.024-4.232.452-.495 1.249-.598 1.811-.237.582.373.777 1.114.457 1.725-.582 1.101-1.677 2.786-2.839 4.57l-1.022 1.576c-.348.541-.501.889-.501 1.953v3.777z" />
                    </svg>
                  </div>
                  <div className="features-title">High Loyalty</div>
                  <div className="features-descr">
                    Mauris a libero et diam sodales semper. Aenean elit leo,
                    hendrerit nec dolor id, rutrum finibus velit.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="owl-item">
                <div className="features-item">
                  <div className="features-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M22 9.74l-2 1.02v7.24c-1.007 2.041-5.606 3-8.5 3-3.175 0-7.389-.994-8.5-3v-7.796l-3-1.896 12-5.308 11 6.231v8.769l1 3h-3l1-3v-8.26zm-18 1.095v6.873c.958 1.28 4.217 2.292 7.5 2.292 2.894 0 6.589-.959 7.5-2.269v-6.462l-7.923 4.039-7.077-4.473zm-1.881-2.371l9.011 5.694 9.759-4.974-8.944-5.066-9.826 4.346z" />
                    </svg>
                  </div>
                  <div className="features-title">Accountability</div>
                  <div className="features-descr">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </div>
                </div>
              </SwiperSlide>
            </>

            <div className="owl-controls clickable">
              <div className="owl-pagination sp1"></div>
              <div className="owl-buttons">
                <div className="owl-prev snbp3" role="button" tabIndex="0">
                  <span className="visually-hidden">Previous Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="27px"
                    height="57px"
                    viewBox="0 0 27 57"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
                  </svg>
                </div>
                <div className="owl-next snbn3" role="button" tabIndex="0">
                  <span className="visually-hidden">Next Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="27px"
                    height="57px"
                    viewBox="0 0 27 57"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* End Team item */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
