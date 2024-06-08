/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
  
      screens: {

        'mediumMob': '325px',
        'largeMob': '410px',
  
      },   

      keyframes: {
        
        fadeT: {
           '0%': { transform:'translateY(-30px)', opacity: 0 },
           '100%': { transform:'translateY(0)', opacity: 1 }
        },

        zoom: {
           '0%': { transform:'scale(0)'},
           '100%': { transform:'scale(100%)'}
        },

        fadeL: {
          '0%': { transform:'translatex(-30px)', opacity: 0 },
          '100%': { transform:'translatex(0)', opacity: 1 }
       },

       fadeR: {
        '0%': { transform:'translatex(30px)', opacity: 0 },
        '100%': { transform:'translatex(0)', opacity: 1 }
       },

       fadeB: {
        '0%': { transform:'translateY(30px)', opacity: 0 },
        '100%': { transform:'translateY(0)', opacity: 1 }
       },
 

       revolve1: {
          '0%': { transform: 'rotate(0deg)translate(100px)rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)translate(100px)rotate(-360deg)'},
       },

       revolve2: {
        '0%': { transform: 'rotate(0deg)translate(-100px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(-100px)rotate(-360deg)'},
       },

       revolve3: {
        '0%': { transform: 'rotate(0deg)translate(-177px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(-177px)rotate(-360deg)'},
       },

       revolve4: {
        '0%': { transform: 'rotate(0deg)translate(177px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(177px)rotate(-360deg)'},
       },

       revolve5: {
        '0%': { transform: 'rotate(0deg)translate(230px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(230px)rotate(-360deg)'},
       },

       revolve6: {
        '0%': { transform: 'rotate(0deg)translate(60px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(60px)rotate(-360deg)'},
       },
  
       revolve7: {
        '0%': { transform: 'rotate(0deg)translate(-60px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(-60px)rotate(-360deg)'},
       },
  
       revolve8: {
        '0%': { transform: 'rotate(0deg)translate(-115px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(-115px)rotate(-360deg)'},
       },
  
       revolve9: {
        '0%': { transform: 'rotate(0deg)translate(115px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(115px)rotate(-360deg)'},
       },
  
       revolve10: {
        '0%': { transform: 'rotate(0deg)translate(165px)rotate(0deg)'},
        '100%': { transform: 'rotate(360deg)translate(165px)rotate(-360deg)'},
       },
  

      },

      animation: {
        fadeT: 'fadeT 1s ease-in 1',
        fadeL: 'fadeL 1s ease-in 1',
        fadeR: 'fadeR 1s ease-in 1',
        fadeB: 'fadeB 1s ease-in 1',
        zoom: 'zoom 1s ease-out 1',
        slowSpin: 'spin 12s linear infinite',
        revolve1: 'revolve1 6s linear infinite',
        revolve2: 'revolve2 6s linear infinite',
        revolve3: 'revolve3 7s linear infinite',
        revolve4: 'revolve4 7s linear infinite',
        revolve5: 'revolve5 8s linear infinite',
        revolve6: 'revolve6 6s linear infinite',
        revolve7: 'revolve7 6s linear infinite',
        revolve8: 'revolve8 7s linear infinite',
        revolve9: 'revolve9 7s linear infinite',
        revolve10: 'revolve10 8s linear infinite',
      },
      

    },
  },
  plugins: [],
}

