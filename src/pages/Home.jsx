import './Home.css';
import home2 from '../assets/img/home2g.jpeg';
import home1 from '../assets/img/home1g.jpeg';
import home3 from '../assets/img/home3g.jpeg';
import { useState, useEffect } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const homeData = {
  1: {
    imgSrc: home1,
    date: '03.09—19.11.2022',
  },
  2: {
    imgSrc: home2,
    date: '03.09—19.11.2022',
  },
  3: {
    imgSrc: home3,
    date: '01.10—19.11.2022',
  },
};

export default function Home() {
  const [bg, setBg] = useState(1);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bg == 1 || bg == 2) {
        setBg((curr) => curr + 1);
      } else {
        setBg(1);
      }
      console.log(bg);
    }, 5000);

    return () => clearInterval(interval);
  }, [bg]);

  return (
    <>
      <div className='home'>
        <img
          className={`bg ${bg === 1 ? 'active' : ''}`}
          src={homeData[1].imgSrc}
          alt=''
        />
        <img
          className={`bg ${bg === 2 ? 'active' : ''}`}
          src={homeData[2].imgSrc}
          alt=''
        />
        <img
          className={`bg ${bg === 3 ? 'active' : ''}`}
          src={homeData[3].imgSrc}
          alt=''
        />

        <div className='nav'>
          <p className='galeria'>
            galeria—
            <br />
            jaqueline martins
          </p>

          <div className='menu-link'></div>
        </div>

        <div className='events'>
          <p className='date'>{homeData[bg].date}</p>
          <p
            className={
              bg === 1 || bg === 2 ? 'event-name one red' : 'event-name one'
            }
          >
            Lagoa de Dentro
            <br />
            ADRIANO AMARAL
          </p>
          <p className={bg === 3 ? 'event-name two red' : 'event-name two'}>
            3NÓS3
            <br />
            NÔMADE, CLANDESTINO E IMPRESSO
          </p>
        </div>
      </div>
      <div className='home-sm'>
        <div className='nav'>
          <svg
            // version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            // xmlns:xlink='http://www.w3.org/1999/xlink'
            style={{ width: '86.837px', height: '64.004px' }}
            viewBox='0 0 86.837 64.004'
            // enable-background='new 0 0 86.837 64.004'
            // xml:space='preserve'
          >
            <g>
              <path
                fill='#FF2800'
                d='M30.623,54.11c0-4.41-0.843-7.27-3.562-7.27c-1.642,0-2.865,0.893-2.865,3.658
		v4.688c0,3.1,1.033,4.834,3.282,4.834C29.78,60.02,30.623,57.536,30.623,54.11 M13.739,53.69c0-2.865-1.496-4.742-4.552-4.742
		c-3.046,0-4.588,1.877-4.544,4.742c0,2.857,1.642,4.545,4.544,4.545C11.91,58.235,13.739,56.59,13.739,53.69 M3.285,47.403
		C2.721,46.374,1.596,46.042,0,45.76l1.263-3.658c2.066,0.332,3.472,1.832,3.896,3.613c1.126-0.656,2.487-0.984,4.081-0.984
		c5.017,0,7.502,4.033,7.502,8.908c0,1.08-0.137,2.205-0.373,2.816c0.561,1.08,1.307,1.451,2.25,1.451
		c1.215,0,1.778-0.797,1.778-2.293v-5.305c0-4.924,2.157-7.551,6.055-7.551c5.669,0,7.173,6.098,7.173,11.775
		c0,4.781-1.221,9.471-5.676,9.471c-2.811,0-4.687-2.016-4.968-5.58c-0.237,1.969-1.643,3-3.376,3c-1.738,0-3.191-0.891-3.799-3.189
		c-1.177,2.629-3.38,4.225-6.566,4.225c-4.876,0-7.696-3.564-7.696-8.77C1.543,51.106,2.105,48.999,3.285,47.403'
              ></path>
            </g>
            <rect
              x='10.411'
              y='0.001'
              fill='#FF2800'
              width='3.001'
              height='40.519'
            ></rect>
            <g>
              <path
                fill='#FF2800'
                d='M55.629,36.739h21.997c7.129,0,9.425,3.895,9.196,10.322H83.25
		c0.379-4.223-1.215-6.1-5.433-6.1H55.629V36.739z M45.873,38.852c0-1.596,1.131-2.91,2.818-2.91c1.596,0,2.811,1.314,2.811,2.91
		c0,1.547-1.215,2.812-2.811,2.812C47.004,41.665,45.873,40.399,45.873,38.852'
              ></path>
              <path
                fill='#FF2800'
                d='M55.112,6.687c0-3.659,1.976-6.425,6.521-6.425h15.668v4.22H63.038
		c-2.668,0-4.264,1.172-4.264,3.61c0,2.485,1.733,4.924,6.095,4.924h12.432v4.222H63.038c-2.668,0-4.264,1.174-4.264,3.613
		s1.778,4.924,6.095,4.924h12.432v4.221H55.629v-3.332l4.178-0.517c-3.334-1.125-4.694-3.8-4.694-6.751
		c0-3.097,1.36-5.347,4.789-5.909C56.426,12.408,55.112,9.594,55.112,6.687'
              ></path>
            </g>
          </svg>
          <div className=''>MENU</div>
        </div>

        <div className='section'>
          <div className='date'>03.09—19.11.2022</div>
          <div className='image'>
            <img src={homeData[1].imgSrc} alt='Lagoa de Dentro' />
          </div>
          <div className='text'>
            <p>Lagoa de Dentro</p>
            <p>ADRIANO AMARAL</p>
          </div>
        </div>
        <div className='section'>
          <div className='date'>01.10—19.11.2022</div>
          <div className='image'>
            <img src={homeData[3].imgSrc} alt='3NÓS3' />
          </div>
          <div className='text'>
            <p>3NÓS3</p>
            <p>NÔMADE, CLANDESTINO E IMPRESSO</p>
          </div>
        </div>
      </div>
      {menu && (
        <div className='menu' onClick={() => setMenu(false)}>
          <div className='nav'>
            <div className=''>ENGLISH VERSION</div>
            <div className=''>FECHAR</div>
          </div>
          <div className='section'>
            <div>Home</div>
            <div>Artistas</div>
            <div>Projetos</div>
            <div>Exposições atuais</div>
            <div>Exposições passadas</div>
            <div>Online Viewing Rooms</div>
            <div>Sobre</div>
          </div>
          <div className='footer'>
            <div className='left'>
              <div className='left-newsletter'>
                <label htmlFor='email'>Inscrever-se na newsletter</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='e-mail + ENTER'
                />
              </div>
              <div className='social'>
                <div className='social-tag'>Social</div>
                <a href='https://www.instagram.com/galeriajaquelinemartins/'>
                  <AiFillInstagram size={25} />
                </a>
                <a href='https://www.facebook.com/galeriajaquelinemartins/'>
                  <FaFacebookF size={25} />
                </a>
              </div>
            </div>
            <div className='right'>
              <svg
                // version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                // xmlns:xlink='http://www.w3.org/1999/xlink'
                style={{ width: '86.837px', height: '64.004px' }}
                viewBox='0 0 86.837 64.004'
                // enable-background='new 0 0 86.837 64.004'
                // xml:space='preserve'
              >
                <g>
                  <path
                    fill='#FF2800'
                    d='M30.623,54.11c0-4.41-0.843-7.27-3.562-7.27c-1.642,0-2.865,0.893-2.865,3.658
		v4.688c0,3.1,1.033,4.834,3.282,4.834C29.78,60.02,30.623,57.536,30.623,54.11 M13.739,53.69c0-2.865-1.496-4.742-4.552-4.742
		c-3.046,0-4.588,1.877-4.544,4.742c0,2.857,1.642,4.545,4.544,4.545C11.91,58.235,13.739,56.59,13.739,53.69 M3.285,47.403
		C2.721,46.374,1.596,46.042,0,45.76l1.263-3.658c2.066,0.332,3.472,1.832,3.896,3.613c1.126-0.656,2.487-0.984,4.081-0.984
		c5.017,0,7.502,4.033,7.502,8.908c0,1.08-0.137,2.205-0.373,2.816c0.561,1.08,1.307,1.451,2.25,1.451
		c1.215,0,1.778-0.797,1.778-2.293v-5.305c0-4.924,2.157-7.551,6.055-7.551c5.669,0,7.173,6.098,7.173,11.775
		c0,4.781-1.221,9.471-5.676,9.471c-2.811,0-4.687-2.016-4.968-5.58c-0.237,1.969-1.643,3-3.376,3c-1.738,0-3.191-0.891-3.799-3.189
		c-1.177,2.629-3.38,4.225-6.566,4.225c-4.876,0-7.696-3.564-7.696-8.77C1.543,51.106,2.105,48.999,3.285,47.403'
                  ></path>
                </g>
                <rect
                  x='10.411'
                  y='0.001'
                  fill='#FF2800'
                  width='3.001'
                  height='40.519'
                ></rect>
                <g>
                  <path
                    fill='#FF2800'
                    d='M55.629,36.739h21.997c7.129,0,9.425,3.895,9.196,10.322H83.25
		c0.379-4.223-1.215-6.1-5.433-6.1H55.629V36.739z M45.873,38.852c0-1.596,1.131-2.91,2.818-2.91c1.596,0,2.811,1.314,2.811,2.91
		c0,1.547-1.215,2.812-2.811,2.812C47.004,41.665,45.873,40.399,45.873,38.852'
                  ></path>
                  <path
                    fill='#FF2800'
                    d='M55.112,6.687c0-3.659,1.976-6.425,6.521-6.425h15.668v4.22H63.038
		c-2.668,0-4.264,1.172-4.264,3.61c0,2.485,1.733,4.924,6.095,4.924h12.432v4.222H63.038c-2.668,0-4.264,1.174-4.264,3.613
		s1.778,4.924,6.095,4.924h12.432v4.221H55.629v-3.332l4.178-0.517c-3.334-1.125-4.694-3.8-4.694-6.751
		c0-3.097,1.36-5.347,4.789-5.909C56.426,12.408,55.112,9.594,55.112,6.687'
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
