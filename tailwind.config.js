import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	variants: {
		extend: {
			maxWidth: ["hover", "focus"],
			width: ["hover", "focus"],
			outline: ["focus"],
		},
	},
	theme: {
		transitionDelay: {
			'0': '0ms',
			'2000': '2000ms',
			'3000': '3000ms',
			'3500': '3500ms',
			'4000': '4000ms',
			'4500': '45000ms',
			'5000': '50000ms',
			'16000': '16000ms',
		},
		colors: {
			white: {
				DEFAULT: "#FFFFFF",
			},
			primary: {
				100: "#F9F6F2",
				300: "#EBE8E0",
				500: "#7D7B7A",
				DEFAULT: "#2E2B29",
				blur: "#2E2B29E6",
			},
			violet: {
				100: "#CCC9E6",
				DEFAULT: "#8C87BB",
			},
			sand: {
				100: "#E8DABF",
				DEFAULT: "#D5C19A",
			},
			green: {
				100: "#C1D8B9",
				300: "#B1BE6E",
				DEFAULT: "#99BA8D",
			},
			pink: {
				DEFAULT: "#E0AA9E",
			},
			red: {
				DEFAULT: "#C24820",
			},
			blue: {
				DEFAULT: "#AFBDC8",
			},
			grayscale: {
				DEFAULT: "#636168",
				700: "#35363F",
			},
			ch6: {
				DEFAULT: "#B78B80"
			},
			ch7: {
				DEFAULT: '#E0A473'
			},
			ch8: {
				DEFAULT: "#A1C4BD"
			},
			ch9: {
				DEFAULT: "#7291B2"
			},
			ch10: {
				DEFAULT: "#A8A878"
			},
			ch11: {
				DEFAULT: "#B9B4A7"
			},
			ch12: {
				DEFAULT: "#E57373"
			},
			transparent: "transparent",
		},
		screens: {
			xs: { max: "600px" },
			xsRange: { min: "600px", max: "767px" },
			sm: { max: "767px" },
			smMin: { min: "767px" },
			smRange: { min: "767px", max: "1023px" },
			md: { max: "1023px" },
			mdMin: { min: "1023px" },
			mdRange: { min: "1023px", max: "1279px" },
			lg: { max: "1279px" },
			xl: { min: "1280px" },
			"2xl": { min: "1700px" },
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Grafier", "serif"],
		},
		extend: {
			spacing: {
				"16px": "16px",
				13: "3.375rem",
				28: "7rem",
				44: "11rem",
				54: "13.5rem",
				60: "15rem",
				62: "15.5rem",
				76: "18.5rem",
				80: "20rem",
				94: "23.5rem",
				100: "28rem",
				112: "30rem",
				120: "32rem",
				144: "46rem",
				152: "38rem",
				172: "43rem",
				min: "min-content",
				max: "max-content",
				"36%": "36%",
			},
			height: {
				"1/4": "25%",
				"1/2": "50%",
				"3/5": "60%",
				"4/5": "80%",
				"1/7": "75%",
				m: "500px",
				l: "600px",
				xl: "705px",
			},
			fontSize: {
				"8xl": "6rem",
			},
			letterSpacing: {
				3: "0.3em",
				"150%": "150%",
			},
			lineHeight: {
				15: "3.75rem",
				"150%": "150%",
			},
			maxWidth: {
				"4xs": "4rem",
				"3xs": "5.5rem",
				xxs: "16rem",
				"screen-sm": "600px",
				"screen-md": "960px",
				"screen-xl": "1280px",
			},
			minWidth: {
				xs: "300px",
				sm: "474px",
				md: "575px",
				xl: "28rem",
				"2xl": "42rem",
			},
			flex: {
				"1/4": "1 0 25%",
			},
			zIndex: {
				"-1": "-1",
				"2": "2",
				"5": "5",
			},
			borderWidth: {
				16: "16px",
			},
			opacity: {
				90: "0.9",
			},
			minWidth: {
				sm: "24rem",
			},
			inset: {
				"-1/20": "-10%",
				"-1/5": "-20%",
				"-1/2": "-50%",
				"-6": "-1.5rem",
				6: "1.5rem",
				12: "3rem",
				"1/20": "5%",
				"1/10": "10%",
				"3/20": "15%",
				"1/5": "20%",
				"1/4": "25%",
				"1/3": "33.333333%",
				"2/5": "40%",
				"1/2": "50%",
				"3/5": "60%",
				"2/3": "66.666667%",
				"3/4": "75%",
				"4/5": "80%",
				"9/10": "90%",
			},
			scale: {
				75: ".75",
				80: ".8",
				85: ".85",
				90: ".9",
				92: ".92",
				95: ".95",
			},
			boxShadow: {
				primaryTop: "0px 0 30px 30px #2E2B29",
				grayscalesm: "8px 8px 20px rgba(99, 97, 104, 0.5)",
				grayscalelg:
					"4px 4px 10px rgba(99, 97, 104, 0.5), 10px 10px 50px rgba(99, 97, 104, 0.5), 30px 30px 50px rgba(99, 97, 104, 0.5)",
				violetsm: "8px 8px 20px rgba(140, 135, 187, 0.5)",
				violetlg:
					"4px 4px 10px rgba(140, 135, 187, 0.5), 10px 10px 50px rgba(140, 135, 187, 0.5), 30px 30px 50px rgba(140, 135, 187, 0.5)",
				sandsm: "8px 8px 20px rgba(213,193,154, 0.5)",
				sandlg:
					"4px 4px 10px rgba(213,193,154, 0.5), 10px 10px 50px rgba(213,193,154,0.5), 30px 30px 50px rgba(213,193,154,0.5)",
				greensm: "8px 8px 20px rgba(153,186,141, 0.5)",
				greenlg:
					"4px 4px 10px rgba(153,186,141, 0.5), 10px 10px 50px rgba(153,186,141,0.5), 30px 30px 50px rgba(153,186,141,0.5)",
				pinksm: "8px 8px 20px rgba(224, 170, 158, 0.5)",
				pinklg:
					"4px 4px 10px rgba(224, 170, 158, 0.5), 10px 10px 50px rgba(224, 170, 158, 0.5), 30px 30px 50px rgba(224, 170, 158, 0.5)",
				DEFAULT: "8px 8px 20px rgba(99, 97, 104, 0.5)",
			},
			animation: {
				hideMe:
					"cssAnimation 5s forwards",
				scaleIn:
					"scale-in-bl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				scaleInCenter:
					"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				upDown: "up-down 1s linear infinite",
				vibrate: "vibrate 2s linear infinite both",
				fastVibrate: "vibrate 0.3s linear infinite both",
				focusInContractBck:
					"focus-in-contract-bck 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				blurOut: "blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
				focusIn: "focus-in 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
				slideInBlurredTop:
					"slide-in-blurred-top 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
				slideInBlurredBottom:
					"slide-in-blurred-bottom 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
				slideOutBlurredLeft:
					"slide-out-blurred-left 1s cubic-bezier(0.755, 0.050, 0.855, 0.060) both",
				slideOutBlurredRight:
					"slide-out-blurred-right 1s cubic-bezier(0.755, 0.050, 0.855, 0.060) both",
				slideInBlurredLeft: "slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
				slideInBlurredRight: "slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
				slideInBottom:
					"slide-in-bottom 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				slideInTop:
					"slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				slideOutTop:
					"slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
				slideOutBottom:
					"slide-out-bottom 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				shrinkDown: "shrink-down 0.75s ease-in-out both",
				fadeIn: "fade-in 0.75s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				fadeOut: "fade-out 0.75s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				fadeOutFast: "fade-out 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				fadeInSlow:
					"fade-in 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				fadeOutSlow:
					"fade-out 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
				textFlickerInGlow: "text-flicker-in-glow 2s linear both",
				scaleUp: "scale-up 1s ease-in-out both",
				scaleDown: "scale-down 0.75s ease-in-out both",
				pulse: "pulse 3s ease infinite",
				pulseforward: "pulse 3s ease 1",
				pulseReverse: "pulse-reverse 3s ease 1"
			},
			keyframes: {
				"cssAnimation": {
					"0%": { opacity: "1" },
					"90%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				"scale-in-bl": {
					"0%,100%": { transformOrigin: "0% 100%" },
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
				"scale-in-center": {
					"0%": {
						transform: "scale(0)",
						opacity: "1",
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1",
					},
				},
				"up-down": {
					"0%": { transform: "translate(0) " },
					"20%": { transform: "translate(0px, -3px)" },
					"40%": { transform: "translate(0px, -1.5px)" },
					"60%": { transform: "translate(0px, 1.5px)" },
					"80%": { transform: "translate(0px, 3px)" },
					"100%": { transform: "translate(0)" },
				},
				vibrate: {
					"0%": { transform: "translate(0) " },
					"20%": { transform: "translate(-2px, 2px)" },
					"40%": { transform: "translate(-2px, -2px)" },
					"60%": { transform: "translate(2px, 2px)" },
					"80%": { transform: "translate(2px, -2px)" },
					"100%": { transform: "translate(0)" },
				},
				"focus-in-contract-bck": {
					"0%": {
						letterSpacing: "1em",
						transform: "translateZ(300px)",
						filter: "blur(12px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateZ(12px)",
						filter: "blur(0)",
						opacity: "1",
					},
				},
				"blur-out": {
					"0%": {
						filter: "blur(0.01)",
					},
					"100%": {
						filter: "blur(12px)",
						opacity: "0",
					},
				},
				"focus-in": {
					"0%": {
						filter: "blur(12px)",
						opacity: "0",
					},
					"100%": {
						filter: "blur(0.01)",
						opacity: "1",
					},
				},
				"slide-in-blurred-top": {
					"0%": {
						transform: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
						transformOrigin: "50% 100%",
						filter: "blur(40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0) scaleY(1) scaleX(1)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "1",
					},
				},
				"slide-in-blurred-bottom": {
					"0%": {
						transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
						transformOrigin: "50% 100%",
						filter: "blur(40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0) scaleY(1) scaleX(1)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "1",
					},
				},
				"slide-out-blurred-left": {
					"0%": {
						transform: "translateX(0) scaleY(1) scaleX(1)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "1",
					},
					"100%": {
						transform: "translateX(-1000px) scaleX(2) scaleY(0.2)",
						transformOrigin: "0% 50%",
						filter: "blur(40px)",
						opacity: "0",
					},
				},
				"slide-out-blurred-right": {
					"0%": {
						transform: "translateX(0) scaleY(1) scaleX(1)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "1",
					},
					"100%": {
						transform: "translateX(1000px) scaleX(2) scaleY(0.2)",
						transformOrigin: "0% 50%",
						filter: "blur(40px)",
						opacity: "0",
					},
				},
				"slide-in-blurred-left": {
					"0%": {
						transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
						transformOrigin: "100% 50%",
						filter: "blur(40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0) scaleY(1) scaleX(1)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "1",
					}
				},
				"slide-in-blurred-right": {
					"0%": {
						transform: "translateX(1000px) scaleX(2.5) scaleY(0.2)",
						transformOrigin: "100% 50%",
						filter: "blur(40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0) scaleY(1) scaleX(1)",
						transformOrigin: "50% 50%",
						filter: "blur(0)",
						opacity: "1",
					}
				},
				"slide-in-bottom": {
					"0%": {
						transform: "translateY(1000px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				"slide-in-top": {
					"0%": {
						transform: "translateY(-1000px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
				},
				"slide-out-top": {
					"0%": {
						transform: "translateY(0)",
						opacity: "1",
					},
					"100%": {
						transform: "translateY(-1000px)",
						opacity: "0",
					},
				},
				"slide-out-bottom": {
					"0%": {
						transform: "translateY(0)",
						opacity: "1",
					},
					"100%": {
						transform: "translateY(1000px)",
						opacity: "0",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"fade-out": {
					"0%": {
						opacity: "1",
					},
					"100%": {
						opacity: "0",
					},
				},
				"shrink-down": {
					"0%": {
						transform: "scale(1)",
						transformOrigin: "bottom",
						opacity: "1",
					},
					"100%": {
						transform: "scale(0.75)",
						transformOrigin: "bottom",
						opacity: "1",
					},
				},
				"scale-up": {
					"0%": {
						transform: "scale(1)",
						transformOrigin: "bottom",
						opacity: "1",
					},
					"100%": {
						transform: "scale(1.25)",
						transformOrigin: "bottom",
						opacity: "1",
					},
				},
				"scale-down": {
					"0%": {
						transform: "scale(1)",
						transformOrigin: "center",
						opacity: "1",
					},
					"100%": {
						transform: "scale(0.9)",
						transformOrigin: "center",
						opacity: "1",
					},
				},
				"text-flicker-in-glow": {
					"0%": {
						opacity: "0",
					},
					"10%": {
						opacity: "0",
						textShadow: "none",
					},
					"10.1%": {
						opacity: "1",
						textShadow: "none",
					},
					"10.2%": {
						opacity: "0",
						textShadow: "none",
					},
					"20%": {
						opacity: "0",
						textShadow: "none",
					},
					"20.1%": {
						opacity: "1",
						textShadow: "0 0 10px rgba(255, 255, 255, 0.25)",
					},
					"20.6%": {
						opacity: "0",
						textShadow: "none",
					},
					"30%": {
						opacity: "0",
						textShadow: "none",
					},
					"30.1%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)",
					},
					"30.5%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)",
					},
					"30.6%": {
						opacity: "0",
						textShadow: "none",
					},
					"45%": {
						opacity: "0",
						textShadow: "none",
					},
					"45.1%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)",
					},
					"50%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)",
					},
					"55%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.45), 0 0 20px rgba(255, 255, 255, 0.25)",
					},
					"55.1%": {
						opacity: "0",
						textShadow: "none",
					},
					"57%": {
						opacity: "0",
						textShadow: "none",
					},
					"57.1%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.55), 0 0 20px rgba(255, 255, 255, 0.35)",
					},
					"60%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.55), 0 0 20px rgba(255, 255, 255, 0.35)",
					},
					"60.1%": {
						opacity: "0",
						textShadow: "none",
					},
					"65%": {
						opacity: "0",
						textShadow: "none",
					},
					"65.1%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.55), 0 0 20px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.1)",
					},
					"75%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.55), 0 0 20px rgba(255, 255, 255, 0.35), 0 0 35px rgba(255, 255, 255, 0.1)",
					},
					"75.1%": {
						opacity: "0",
						textShadow: "none",
					},
					"77%": {
						opacity: "0",
						textShadow: "none",
					},
					"77.1%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.55), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2), 0 0 35px rgba(255, 255, 255, 0.1)",
					},
					"85%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.55), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2), 0 0 35px rgba(255, 255, 255, 0.1)",
					},
					"85.1%": {
						opacity: "0",
						textShadow: "none",
					},
					"86%": {
						opacity: "0",
						textShadow: "none",
					},
					"86.1%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.45), 0 0 50px rgba(255, 255, 255, 0.25), 0 0 35px rgba(255, 255, 255, 0.1)",
					},
					"100%": {
						opacity: "1",
						textShadow:
							"0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.45), 0 0 50px rgba(255, 255, 255, 0.25), 0 0 35px rgba(255, 255, 255, 0.1)",
					},
				},
				"pulse": {
					"0%": {
						transform: "scale(1)",
						opacity: 1,
					},
					"100%": {
						transform: "scale(3)",
						opacity: 0,
					}
				},
				"pulse-reverse": {
					"0%": {
						transform: "scale(3)",
						opacity: 0,
					},
					"100%": {
						transform: "scale(1)",
						opacity: 1,
					}
				}
			},
			transitionProperty: {
				"max-width": "max-width",
				width: "width",
			},
		},
	},
	plugins: [typography, forms, containerQueries, aspectRatio]
};
