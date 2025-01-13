"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { teamMembers } from "@/data/team";
import Image from "next/image";

export default function Team() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Quote */}
        <div className="col-md-6 mb-sm-60 mb-xs-40 d-flex align-items-center">
          <blockquote className="testimonial mb-0 wow fadeInUp">
            <div className="blockquote-icon" aria-hidden="true">
              ”
            </div>
            <p>
              We are strong team who brings innovative ideas into production.
            </p>
            <footer>
              <div className="section-line mb-10" />
              Thomas Johnson
              <div className="small">Developer, Co-founder</div>
            </footer>
          </blockquote>
        </div>
        {/* End Quote */}
        {/* Team Carousel */}
        <div className="col-md-6 relative">
          <div>
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              breakpoints={{
                500: {
                  slidesPerView: 2, // When window width is <= 480px
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp1",
                nextEl: ".snbn1",
              }}
              watchSlidesProgress
              resizeObserver
              className="team-carousel owl-carousel owl-theme overflow-hidden position-static"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              {/* Team item */}
              {teamMembers.map((member, index) => (
                <SwiperSlide className="owl-item" key={index}>
                  <div className="team-carousel-item">
                    <div className="team-item">
                      <div className="team-item-image">
                        <Image
                          width={600}
                          height={800}
                          src={member.image}
                          className="wow scaleOutIn"
                          alt="Image Description"
                        />
                        <div className="team-item-detail">
                          <div className="team-social-links">
                            {member.socials.map((social, socialIndex) => (
                              <a
                                href={social.url}
                                target="_blank"
                                rel="noopener nofollow"
                                key={socialIndex}
                              >
                                <div className="visually-hidden">
                                  {social.platform}
                                </div>
                                <i className={social.icon} />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="team-item-descr">
                        <div className="team-item-name">{member.name}</div>
                        <div className="team-item-role">{member.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-controls clickable">
                <div className="owl-pagination">
                  <div className="owl-page">
                    <span className=""></span>
                  </div>
                  <div className="owl-page active">
                    <span className=""></span>
                  </div>
                </div>
                <div className="owl-buttons">
                  <div
                    className="owl-prev snbp1 owl-prev-testimonial-1"
                    role="button"
                    tabIndex="0"
                  >
                    <span className="visually-hidden">Previous Slide</span>
                    <i className="mi-arrow-left" aria-hidden="true"></i>
                  </div>
                  <div className="owl-next snbn1" role="button" tabIndex="0">
                    <span className="visually-hidden">Next Slide</span>
                    <i className="mi-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              {/* End Team item */}
            </Swiper>
          </div>
        </div>
        {/* End Team Carousel */}
      </div>
    </div>
  );
}
