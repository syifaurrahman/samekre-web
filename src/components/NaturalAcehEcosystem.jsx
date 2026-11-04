import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Sprout, Activity, Users, Sparkles } from 'lucide-react';
import './NaturalAcehEcosystem.css';

export default function NaturalAcehEcosystem() {
  const containerRef = useRef(null);
  // Re-triggers dynamically on enter / leave
  const isInView = useInView(containerRef, {
    amount: 0.2, // Activates when 20% visible, resets when scrolled away
  });
  const shouldReduceMotion = useReducedMotion();

  // Active state determines whether continuous loops run or reset to 0
  const isPlaying = isInView && !shouldReduceMotion;

  return (
    <div
      ref={containerRef}
      className={`natural-ecosystem ${isInView ? 'is-in-view' : 'is-out-view'}`}
      aria-label="Ekosistem Digital Interaktif Natural Aceh"
    >
      {/* Dynamic Key ensures complete reset to 0 when scrolled away, and fresh replay when scrolled back */}
      <div
        key={isInView ? 'ecosystem-active' : 'ecosystem-dormant'}
        className="natural-ecosystem__inner"
      >
        {/* SVG Canvas - Vector Mangrove, Environment & Digital Nodes */}
        <svg
          className="natural-ecosystem__svg"
          viewBox="0 0 500 625"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sky Gradient */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B231C" />
              <stop offset="30%" stopColor="#123B2F" />
              <stop offset="65%" stopColor="#1B4D3E" />
              <stop offset="100%" stopColor="#25624F" />
            </linearGradient>

            {/* Golden Sun & Aura Gradients */}
            <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="sunCore" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="45%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </radialGradient>

            {/* Distant Hills Gradient */}
            <linearGradient id="hillsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#164A3C" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0E3026" stopOpacity="0.95" />
            </linearGradient>

            {/* Water Gradients */}
            <linearGradient id="waterDeep" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B2820" />
              <stop offset="40%" stopColor="#0E352B" />
              <stop offset="100%" stopColor="#081E18" />
            </linearGradient>
            <linearGradient id="waterSurface" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>

            {/* Mangrove Foliage Gradients */}
            <linearGradient id="canopyDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1A5342" />
              <stop offset="100%" stopColor="#0D2E24" />
            </linearGradient>
            <linearGradient id="canopyMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A7B62" />
              <stop offset="100%" stopColor="#144737" />
            </linearGradient>
            <linearGradient id="canopyLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>

            {/* Root Bark Gradient */}
            <linearGradient id="barkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3E34" />
              <stop offset="50%" stopColor="#132B24" />
              <stop offset="100%" stopColor="#0B1A15" />
            </linearGradient>

            {/* Digital Energy Glow Filter */}
            <filter id="digitalGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Particle Glow */}
            <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="60%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. SKY BACKGROUND */}
          <rect width="500" height="625" fill="url(#skyGrad)" />

          {/* 2. DIGITAL TECH GRID MATRIX */}
          <g opacity="0.08" stroke="#34D399" strokeWidth="0.75" strokeDasharray="3 6">
            <line x1="50" y1="0" x2="50" y2="440" />
            <line x1="125" y1="0" x2="125" y2="440" />
            <line x1="200" y1="0" x2="200" y2="440" />
            <line x1="275" y1="0" x2="275" y2="440" />
            <line x1="350" y1="0" x2="350" y2="440" />
            <line x1="425" y1="0" x2="425" y2="440" />
            <line x1="0" y1="80" x2="500" y2="80" />
            <line x1="0" y1="160" x2="500" y2="160" />
            <line x1="0" y1="240" x2="500" y2="240" />
            <line x1="0" y1="320" x2="500" y2="320" />
          </g>

          {/* 3. GOLDEN SUN WITH CONTINUOUS PULSE */}
          <g transform="translate(390, 115)">
            <motion.circle
              cx="0"
              cy="0"
              r="70"
              fill="url(#sunAura)"
              initial={{ scale: 0.9, opacity: 0.3 }}
              animate={
                isPlaying
                  ? {
                      scale: [0.95, 1.25, 0.95],
                      opacity: [0.35, 0.7, 0.35],
                    }
                  : { scale: 0.9, opacity: 0.3 }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              cx="0"
              cy="0"
              r="44"
              fill="url(#sunAura)"
              initial={{ scale: 1 }}
              animate={
                isPlaying
                  ? {
                      scale: [1, 1.15, 1],
                    }
                  : { scale: 1 }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <circle cx="0" cy="0" r="30" fill="url(#sunCore)" />
          </g>

          {/* 4. FLOATING CLOUDS */}
          <g opacity="0.45">
            <motion.path
              d="M 60 110 Q 75 90 100 95 Q 120 85 145 98 Q 170 95 185 110 Q 195 125 175 130 L 70 130 Q 50 125 60 110 Z"
              fill="#C8E6C9"
              initial={{ x: 0 }}
              animate={
                isPlaying
                  ? {
                      x: [-20, 25, -20],
                    }
                  : { x: 0 }
              }
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.path
              d="M 270 145 Q 285 130 305 135 Q 320 125 340 135 Q 355 130 370 145 Q 380 155 365 160 L 280 160 Q 260 155 270 145 Z"
              fill="#A7F3D0"
              opacity="0.35"
              initial={{ x: 0 }}
              animate={
                isPlaying
                  ? {
                      x: [15, -20, 15],
                    }
                  : { x: 0 }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>

          {/* 5. DISTANT HILLS */}
          <path
            d="M 0 340 Q 90 280 200 310 Q 320 270 430 320 L 500 335 L 500 450 L 0 450 Z"
            fill="url(#hillsGrad)"
          />
          <path
            d="M 0 365 Q 120 330 250 350 Q 380 325 500 360 L 500 450 L 0 450 Z"
            fill="#133C30"
            opacity="0.6"
          />

          {/* 6. TIDAL WATER BASE */}
          <rect x="0" y="440" width="500" height="185" fill="url(#waterDeep)" />

          {/* Layered Animated Wave 1 */}
          <motion.path
            d="M -50 450 Q 70 440 200 455 Q 330 470 460 450 Q 530 440 600 455 L 600 625 L -50 625 Z"
            fill="#0F382E"
            opacity="0.8"
            initial={{ x: 0, y: 0 }}
            animate={
              isPlaying
                ? {
                    x: [0, -35, 0],
                    y: [0, 4, 0],
                  }
                : { x: 0, y: 0 }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Layered Animated Wave 2 (Middle) */}
          <motion.path
            d="M -50 475 Q 80 460 210 475 Q 340 490 470 470 Q 540 460 600 475 L 600 625 L -50 625 Z"
            fill="#114236"
            opacity="0.75"
            initial={{ x: -35, y: 0 }}
            animate={
              isPlaying
                ? {
                    x: [-35, 0, -35],
                    y: [0, -3, 0],
                  }
                : { x: -35, y: 0 }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Water Surface Shimmer */}
          <motion.path
            d="M 0 452 Q 130 442 260 454 Q 390 464 500 450"
            fill="none"
            stroke="url(#waterSurface)"
            strokeWidth="2.5"
            initial={{ opacity: 0.4 }}
            animate={
              isPlaying
                ? {
                    opacity: [0.3, 0.8, 0.3],
                    y: [-1, 2, -1],
                  }
                : { opacity: 0.4, y: 0 }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* 7. DIGITAL CONNECTIONS & CIRCUIT FLOWS */}
          <g filter="url(#digitalGlow)">
            <motion.path
              d="M 70 540 C 130 520, 180 470, 230 430 C 245 400, 250 350, 250 280"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0, opacity: 0.4 }}
              animate={
                isPlaying
                  ? {
                      strokeDashoffset: [0, -60],
                      opacity: [0.4, 0.9, 0.4],
                    }
                  : { strokeDashoffset: 0, opacity: 0.4 }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.path
              d="M 250 280 C 270 230, 310 190, 370 160 C 400 145, 420 135, 450 140"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 0, opacity: 0.4 }}
              animate={
                isPlaying
                  ? {
                      strokeDashoffset: [-60, 0],
                      opacity: [0.35, 0.85, 0.35],
                    }
                  : { strokeDashoffset: 0, opacity: 0.4 }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.path
              d="M 130 460 C 160 450, 190 445, 230 430"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 0, opacity: 0.5 }}
              animate={
                isPlaying
                  ? {
                      strokeDashoffset: [0, -32],
                      opacity: [0.4, 0.95, 0.4],
                    }
                  : { strokeDashoffset: 0, opacity: 0.5 }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Nodes */}
            <g transform="translate(70, 540)">
              <circle cx="0" cy="0" r="4.5" fill="#10B981" />
              <motion.circle
                cx="0"
                cy="0"
                r="10"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.5"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={
                  isPlaying
                    ? {
                        scale: [0.8, 1.8, 0.8],
                        opacity: [0.8, 0, 0.8],
                      }
                    : { scale: 0.8, opacity: 0.8 }
                }
                transition={{ duration: 2.2, repeat: Infinity }}
              />
            </g>

            <g transform="translate(250, 330)">
              <circle cx="0" cy="0" r="5" fill="#38BDF8" />
              <motion.circle
                cx="0"
                cy="0"
                r="12"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.5"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={
                  isPlaying
                    ? {
                        scale: [0.8, 1.7, 0.8],
                        opacity: [0.8, 0, 0.8],
                      }
                    : { scale: 0.8, opacity: 0.8 }
                }
                transition={{ duration: 2.6, repeat: Infinity, delay: 0.5 }}
              />
            </g>

            <g transform="translate(370, 160)">
              <circle cx="0" cy="0" r="4.5" fill="#FBBF24" />
              <motion.circle
                cx="0"
                cy="0"
                r="11"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="1.5"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={
                  isPlaying
                    ? {
                        scale: [0.8, 1.8, 0.8],
                        opacity: [0.8, 0, 0.8],
                      }
                    : { scale: 0.8, opacity: 0.8 }
                }
                transition={{ duration: 2.4, repeat: Infinity, delay: 1 }}
              />
            </g>
          </g>

          {/* 8. MANGROVE STILT ROOTS (Akar Tunjang) */}
          <g id="mangroveRoots" fill="url(#barkGrad)" opacity="0.95">
            <path d="M 235 385 C 205 425 170 470 145 545 L 135 545 C 160 465 195 420 225 385 Z" />
            <path d="M 245 390 C 225 435 195 485 175 555 L 165 555 C 185 480 215 430 235 390 Z" />
            <path d="M 255 395 C 250 440 235 490 220 565 L 210 565 C 225 485 240 435 245 395 Z" />
            <path d="M 265 395 C 275 440 295 495 320 560 L 330 560 C 305 490 285 435 275 395 Z" />
            <path d="M 270 385 C 295 425 330 475 365 545 L 375 545 C 340 470 305 420 280 385 Z" />
            <path d="M 260 405 C 270 450 285 500 300 550 L 290 550 C 275 495 260 450 250 405 Z" />
            <path d="M 235 385 L 230 270 Q 248 260 270 270 L 275 385 Z" />
          </g>

          {/* 9. MANGROVE FOLIAGE CANOPY */}
          <motion.g
            id="canopyGroup"
            initial={{ rotate: 0 }}
            animate={
              isPlaying
                ? {
                    rotate: [-1.2, 1.4, -1.2],
                    y: [0, -3, 0],
                  }
                : { rotate: 0, y: 0 }
            }
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformOrigin: '250px 320px' }}
          >
            <path
              d="M 160 280 C 130 260 120 210 150 180 C 160 140 210 130 240 150 C 270 120 330 130 350 170 C 390 180 400 230 380 270 C 360 300 320 310 290 295 C 260 315 200 310 160 280 Z"
              fill="url(#canopyDark)"
              opacity="0.85"
            />
            <path
              d="M 180 270 C 155 245 150 205 180 180 C 190 150 230 140 260 160 C 285 135 335 145 345 180 C 375 195 380 235 360 265 C 340 290 305 295 280 285 C 250 300 205 295 180 270 Z"
              fill="url(#canopyMid)"
            />
            <circle cx="210" cy="190" r="32" fill="url(#canopyLight)" opacity="0.9" />
            <circle cx="270" cy="175" r="38" fill="url(#canopyLight)" opacity="0.9" />
            <circle cx="330" cy="205" r="30" fill="url(#canopyLight)" opacity="0.9" />
            <circle cx="170" cy="235" r="28" fill="url(#canopyLight)" opacity="0.85" />
            <circle cx="240" cy="225" r="35" fill="url(#canopyMid)" opacity="0.95" />
            <circle cx="310" cy="245" r="34" fill="url(#canopyLight)" opacity="0.85" />
            <circle cx="225" cy="265" r="26" fill="url(#canopyLight)" opacity="0.8" />
            <circle cx="280" cy="265" r="25" fill="url(#canopyLight)" opacity="0.8" />

            <motion.g
              initial={{ opacity: 0.6 }}
              animate={
                isPlaying
                  ? {
                      opacity: [0.5, 1, 0.5],
                    }
                  : { opacity: 0.6 }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <circle cx="200" cy="170" r="5" fill="#BBF7D0" />
              <circle cx="255" cy="155" r="6" fill="#BBF7D0" />
              <circle cx="295" cy="165" r="5" fill="#BBF7D0" />
              <circle cx="345" cy="190" r="5" fill="#BBF7D0" />
              <circle cx="165" cy="220" r="4.5" fill="#BBF7D0" />
              <circle cx="320" cy="230" r="5" fill="#BBF7D0" />
            </motion.g>
          </motion.g>

          {/* 10. COMMUNITY SILHOUETTE */}
          <g id="communitySilhouettes" opacity="0.92">
            <path
              d="M 125 475 C 120 460 125 440 140 435 C 150 432 158 442 160 455 C 160 465 155 478 145 480 Z"
              fill="#0F2E24"
            />
            <circle cx="142" cy="425" r="9" fill="#0F2E24" />
            <ellipse cx="140" cy="422" rx="12" ry="3.5" fill="#1B4D3E" />
            <path
              d="M 152 445 C 165 455 178 468 185 480 L 180 483 C 172 472 160 460 148 450 Z"
              fill="#0F2E24"
            />

            <path
              d="M 100 480 L 105 440 C 105 432 115 428 122 432 L 124 480 Z"
              fill="#12382D"
            />
            <circle cx="114" cy="420" r="8" fill="#12382D" />
            <path
              d="M 90 455 L 102 455 L 99 475 L 92 475 Z"
              fill="#1B4D3E"
            />
            <path d="M 94 455 Q 92 445 96 442" stroke="#34D399" strokeWidth="2" fill="none" />
            <path d="M 98 455 Q 101 444 104 443" stroke="#4ADE80" strokeWidth="2" fill="none" />

            {/* Fresh Mangrove Propagule */}
            <g transform="translate(185, 475)">
              <path d="M 0 5 L 0 -18" stroke="#052E16" strokeWidth="3" />
              <path
                d="M 0 -18 C -10 -25 -10 -35 0 -40 C 10 -35 10 -25 0 -18 Z"
                fill="#22C55E"
              />
              <motion.circle
                cx="0"
                cy="-28"
                r="14"
                fill="url(#particleGlow)"
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={
                  isPlaying
                    ? {
                        scale: [0.8, 1.4, 0.8],
                        opacity: [0.3, 0.85, 0.3],
                      }
                    : { scale: 0.8, opacity: 0.3 }
                }
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          </g>

          {/* 11. FLOATING ENERGY PARTICLES */}
          {isPlaying && (
            <g>
              <motion.circle
                cx="220"
                cy="340"
                r="2.5"
                fill="#34D399"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -80, -160],
                  x: [0, 15, -10],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 0.2,
                  ease: 'easeOut',
                }}
              />
              <motion.circle
                cx="280"
                cy="360"
                r="2"
                fill="#38BDF8"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -90, -170],
                  x: [0, -20, 15],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: 'easeOut',
                }}
              />
              <motion.circle
                cx="170"
                cy="450"
                r="3"
                fill="#FBBF24"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -70, -140],
                  x: [0, 10, -5],
                  opacity: [0, 0.95, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 2.5,
                  ease: 'easeOut',
                }}
              />
            </g>
          )}
        </svg>

        {/* HTML GLASSMORPHISM OVERLAY CARDS */}
        <div className="natural-ecosystem__overlay">
          {/* Brand Tagline Ribbon (Top Left) */}
          <motion.div
            className="ecosystem-tagline"
            initial={{ y: -16, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: -16, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="ecosystem-tagline__pulse"></span>
            <span className="ecosystem-tagline__text">Humanity & Nature Are One</span>
            <Sparkles size={12} className="ecosystem-tagline__icon" />
          </motion.div>

          {/* Card 1: Restorasi Mangrove (Top Right) */}
          <motion.div
            className="ecosystem-card ecosystem-card--top-right"
            initial={{ x: 20, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                    y: isPlaying ? [0, -7, 0] : 0,
                  }
                : { x: 20, opacity: 0, y: 0 }
            }
            transition={{
              x: { duration: 0.5, delay: 0.2 },
              opacity: { duration: 0.5, delay: 0.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              },
            }}
          >
            <div className="ecosystem-card__icon-wrapper ecosystem-card__icon--green">
              <Sprout size={16} />
            </div>
            <div className="ecosystem-card__body">
              <span className="ecosystem-card__label">Restorasi Mangrove</span>
              <strong className="ecosystem-card__value">50.000+ Bibit Pesisir</strong>
            </div>
          </motion.div>

          {/* Card 2: Riset & Sains Hayati (Center Left) */}
          <motion.div
            className="ecosystem-card ecosystem-card--mid-left"
            initial={{ x: -20, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                    y: isPlaying ? [0, 7, 0] : 0,
                  }
                : { x: -20, opacity: 0, y: 0 }
            }
            transition={{
              x: { duration: 0.5, delay: 0.35 },
              opacity: { duration: 0.5, delay: 0.35 },
              y: {
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              },
            }}
          >
            <div className="ecosystem-card__icon-wrapper ecosystem-card__icon--cyan">
              <Activity size={16} />
            </div>
            <div className="ecosystem-card__body">
              <span className="ecosystem-card__label">Riset & Sains Hayati</span>
              <strong className="ecosystem-card__value">Monitoring Real-Time</strong>
            </div>
          </motion.div>

          {/* Card 3: Partisipasi Warga (Bottom Left) */}
          <motion.div
            className="ecosystem-card ecosystem-card--bottom-left"
            initial={{ y: 20, opacity: 0 }}
            animate={
              isInView
                ? {
                    y: isPlaying ? [0, -6, 0] : 0,
                    opacity: 1,
                  }
                : { y: 20, opacity: 0 }
            }
            transition={{
              opacity: { duration: 0.5, delay: 0.5 },
              y: {
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              },
            }}
          >
            <div className="ecosystem-card__icon-wrapper ecosystem-card__icon--amber">
              <Users size={16} />
            </div>
            <div className="ecosystem-card__body">
              <span className="ecosystem-card__label">Pemberdayaan Warga</span>
              <strong className="ecosystem-card__value">Kemandirian Komunitas</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
