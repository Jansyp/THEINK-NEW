import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  TrendingUp,
  Printer,
  Palette,
  Sparkles,
  Gift,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { services, stats } from "../data/mock";

const Home = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [showHeroCtas, setShowHeroCtas] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const heroVideoRef = useRef(null);
  const homeRootRef = useRef(null);
  const touchStartXRef = useRef(null);
  const heroVideoSrc = `${process.env.PUBLIC_URL}/video.mp4?v=20260214`;
  const heroFallbackImage =
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1920&q=80";
  const heroPrimaryCopy =
    "We design and develop creative websites to showcase your brand and attract your audience.";
  const heroSecondaryCopy =
    "From stunning websites to complete digital marketing solutions, we bring your vision to life with creativity and innovation.";
  const heroLetterStaggerSeconds = 0.018;
  const heroLetterDurationSeconds = 0.52;
  const heroPrimaryStartSeconds = 0.2;
  const heroSecondaryStartSeconds = 0.95;
  const primaryTextEndSeconds =
    heroPrimaryStartSeconds + (heroPrimaryCopy.length - 1) * heroLetterStaggerSeconds + heroLetterDurationSeconds;
  const secondaryTextEndSeconds =
    heroSecondaryStartSeconds +
    (heroSecondaryCopy.length - 1) * heroLetterStaggerSeconds +
    heroLetterDurationSeconds;
  const heroCtaRevealDelayMs = Math.ceil(Math.max(primaryTextEndSeconds, secondaryTextEndSeconds) * 1000) + 120;
  const heroCtaStyle = {
    minWidth: "200px",
    borderRadius: "12px",
    backgroundColor: "#f0c94b",
    color: "#19131f",
    padding: "10px 16px",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontWeight: 700,
    fontSize: "14px",
    boxShadow: "0 10px 26px rgba(0, 0, 0, 0.35)",
  };
  const heroCtaIconStyle = {
    width: "26px",
    height: "26px",
    borderRadius: "999px",
    backgroundColor: "#1d1433",
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconMap = {
    Monitor,
    TrendingUp,
    Printer,
    Palette,
    Sparkles,
    Gift,
  };

  const serviceShowcaseImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop",
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("loadeddata", tryPlay);
    tryPlay();

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowHeroCtas(true);
    }, heroCtaRevealDelayMs);
    return () => window.clearTimeout(timer);
  }, [heroCtaRevealDelayMs]);

  useEffect(() => {
    const root = homeRootRef.current;
    if (!root) return;

    const revealNodes = Array.from(root.querySelectorAll(".scroll-premium-reveal"));
    if (revealNodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const getWrappedIndex = (index) => {
    const length = services.length;
    return ((index % length) + length) % length;
  };

  const carouselConfig = useMemo(() => {
    if (viewportWidth < 640) {
      return {
        offsets: [-1, 0, 1],
        translateStep: 166,
        rotateStep: 8,
        depthY: 12,
        cardWidth: 150,
        imageHeight: 128,
        shellHeight: 312,
        inactiveScale: 0.9,
      };
    }
    if (viewportWidth < 1024) {
      return {
        offsets: [-2, -1, 0, 1, 2],
        translateStep: 220,
        rotateStep: 6,
        depthY: 14,
        cardWidth: 200,
        imageHeight: 158,
        shellHeight: 370,
        inactiveScale: 0.92,
      };
    }
    return {
      offsets: [-2, -1, 0, 1, 2],
      translateStep: 254,
      rotateStep: 7,
      depthY: 16,
      cardWidth: 230,
      imageHeight: 190,
      shellHeight: 430,
      inactiveScale: 0.92,
    };
  }, [viewportWidth]);

  const handleCarouselTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleCarouselTouchEnd = (event) => {
    if (touchStartXRef.current == null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) {
      setActiveServiceIndex((prev) => getWrappedIndex(prev - 1));
    } else if (deltaX < -swipeThreshold) {
      setActiveServiceIndex((prev) => getWrappedIndex(prev + 1));
    }

    touchStartXRef.current = null;
  };

  const renderAnimatedLetters = (text, startDelay = 0) =>
    text.split("").map((char, index) => (
      <span
        key={`${startDelay}-${index}-${char}`}
        className="inline-block opacity-0"
        style={{
          animation: "heroLetterReveal 520ms ease-out forwards",
          animationDelay: `${startDelay + index * heroLetterStaggerSeconds}s`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div ref={homeRootRef} className="min-h-screen">
      <style>
        {`
          @keyframes heroBadgeEnter {
            0% { opacity: 0; transform: translateY(-10px) scale(0.96); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes heroBadgeGlow {
            0%, 100% { box-shadow: 0 0 24px rgba(255, 216, 77, 0.35); }
            50% { box-shadow: 0 0 34px rgba(255, 216, 77, 0.58); }
          }
          @keyframes heroTitleLineReveal {
            0% { opacity: 0; transform: translateY(22px) skewY(2deg); filter: blur(3px); }
            100% { opacity: 1; transform: translateY(0) skewY(0); filter: blur(0); }
          }
          @keyframes heroTitleLineSheen {
            0%, 100% { text-shadow: 0 0 0 rgba(255, 234, 87, 0); }
            50% { text-shadow: 0 0 14px rgba(255, 234, 87, 0.38); }
          }
          @keyframes heroLetterReveal {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroCtaReveal {
            0% { opacity: 0; transform: translateY(18px); filter: blur(2px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
          }
          @keyframes heroCtaGlow {
            0%, 100% { box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35); }
            50% { box-shadow: 0 14px 32px rgba(240, 201, 75, 0.4); }
          }
        `}
      </style>
      <section
        className="relative min-h-screen overflow-hidden bg-[#060511] text-white"
        style={{
          backgroundImage: `url(${heroFallbackImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          ref={heroVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroFallbackImage}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070710]/58 via-[#0b0820]/38 to-[#100b2b]/22" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/22" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 pb-14 pt-24 sm:px-10 lg:px-16">
          <div className="w-full max-w-[620px] bg-[#090713]/72 p-6 backdrop-blur-[1px] sm:p-9 lg:p-11">
            <span
              className="hero-premium-label inline-flex rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.17em]"
              style={{
                backgroundColor: "#5a20a8",
                color: "#ffea57",
                fontSize: "14px",
                fontWeight: 700,
                boxShadow: "0 0 24px rgba(255, 216, 77, 0.35)",
                marginTop: "48px",
                marginBottom: "28px",
                position: "relative",
                zIndex: 30,
                opacity: 0,
                animation: "heroBadgeEnter 700ms ease-out 1 both, heroBadgeGlow 2.2s ease-in-out 750ms infinite",
              }}
            >
              Creative Agency
            </span>

            <h1 className="hero-premium-title text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              <span
                className="block"
                style={{ opacity: 0, animation: "heroTitleLineReveal 700ms cubic-bezier(0.2, 0.85, 0.2, 1) 220ms 1 both, heroTitleLineSheen 1.4s ease-in-out 980ms 1" }}
              >
                Design
              </span>
              <span
                className="block"
                style={{ opacity: 0, animation: "heroTitleLineReveal 700ms cubic-bezier(0.2, 0.85, 0.2, 1) 380ms 1 both, heroTitleLineSheen 1.4s ease-in-out 1120ms 1" }}
              >
                The Future
              </span>
              <span
                className="block"
                style={{ opacity: 0, animation: "heroTitleLineReveal 700ms cubic-bezier(0.2, 0.85, 0.2, 1) 560ms 1 both, heroTitleLineSheen 1.4s ease-in-out 1260ms 1" }}
              >
                of Your Brand
              </span>
            </h1>

            <p className="hero-premium-body mt-12 max-w-md text-lg leading-relaxed text-white/88 sm:text-2xl">
              {renderAnimatedLetters(heroPrimaryCopy, heroPrimaryStartSeconds)}
            </p>

            <p className="hero-premium-body mt-6 max-w-md text-base leading-relaxed text-white/74 sm:text-lg">
              {renderAnimatedLetters(heroSecondaryCopy, heroSecondaryStartSeconds)}
            </p>

            <div className="mt-12 min-h-[72px]">
              {showHeroCtas ? (
                <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="hero-premium-button group inline-flex min-w-[260px] items-center justify-between gap-6 rounded-2xl bg-[#f0c94b] px-7 py-4 text-base font-semibold uppercase tracking-[0.02em] text-[#19131f] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_14px_34px_rgba(0,0,0,0.42)]"
                style={{
                  ...heroCtaStyle,
                  animation: "heroCtaReveal 650ms ease-out 120ms 1 both, heroCtaGlow 1.4s ease-in-out 850ms 1",
                }}
              >
                <span>Explore Services</span>
                <span style={heroCtaIconStyle}>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="hero-premium-button group inline-flex min-w-[260px] items-center justify-between gap-6 rounded-2xl bg-[#f0c94b] px-7 py-4 text-base font-semibold uppercase tracking-[0.02em] text-[#19131f] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_14px_34px_rgba(0,0,0,0.42)]"
                style={{
                  ...heroCtaStyle,
                  animation: "heroCtaReveal 650ms ease-out 240ms 1 both, heroCtaGlow 1.4s ease-in-out 980ms 1",
                }}
              >
                <span>Get Started</span>
                <span style={heroCtaIconStyle}>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-premium-reveal py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <p className="text-lg italic text-teal-600">Creative Solutions For Your Brand</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our{" "}
              <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                Service Categories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Swipe through our core offerings and explore what fits your project best
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{ height: `${carouselConfig.shellHeight}px` }}
              onTouchStart={handleCarouselTouchStart}
              onTouchEnd={handleCarouselTouchEnd}
            >
              {carouselConfig.offsets.map((offset) => {
                const index = getWrappedIndex(activeServiceIndex + offset);
                const service = services[index];
                const Icon = iconMap[service.icon];
                const isActive = offset === 0;
                const depth = Math.abs(offset);
                const rotate = offset * carouselConfig.rotateStep;

                return (
                  <article
                    key={`${service.id}-${offset}`}
                    className="group absolute bg-white rounded-[22px] shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl"
                    style={{
                      width: `${carouselConfig.cardWidth}px`,
                      transform: `translateX(${offset * carouselConfig.translateStep}px) translateY(${depth * carouselConfig.depthY}px) rotate(${rotate}deg) scale(${isActive ? 1 : carouselConfig.inactiveScale})`,
                      zIndex: 10 - depth,
                    }}
                  >
                    <div className="relative" style={{ height: `${carouselConfig.imageHeight}px` }}>
                      <img
                        src={serviceShowcaseImages[index]}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      <div
                        className={`absolute top-3 left-3 w-9 h-9 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight min-h-[44px]">
                        {service.title}
                      </h3>
                      <Link
                        to={`/services#service-${service.id}`}
                        className="inline-block mt-1 text-sm font-semibold text-teal-600 hover:text-teal-700"
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => setActiveServiceIndex((prev) => getWrappedIndex(prev - 1))}
                className="w-10 h-10 rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50 transition-colors flex items-center justify-center"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveServiceIndex(index)}
                    aria-label={`Go to service ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activeServiceIndex === index ? "w-7 bg-teal-500" : "w-2.5 bg-teal-200 hover:bg-teal-300"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveServiceIndex((prev) => (prev + 1) % services.length)}
                className="w-10 h-10 rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50 transition-colors flex items-center justify-center"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="scroll-premium-reveal py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl lg:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-premium-reveal py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="italic text-teal-600">Transform</span> Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Get in touch with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
