import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaVideo, FaHome, FaUsers, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import heroBg from './assets/hero-bg.png';
import aboutPhoto from './assets/about-photo.png';

// Lista de serviços oferecidos
const services = [
  {
    icon: <FaVideo size={32} />, // atendimento online
    title: 'Atendimento Online',
    description: 'Sessões de terapia individuais via vídeo, no conforto da sua casa.',
  },
  {
    icon: <FaHome size={32} />, // atendimento presencial
    title: 'Atendimento Presencial',
    description: 'Consultas presenciais em ambiente acolhedor e reservado.',
  },
  {
    icon: <FaUsers size={32} />, // grupos
    title: 'Grupos Terapêuticos',
    description: 'Encontros em grupo para partilha e desenvolvimento pessoal.',
  },
];

// Depoimentos fictícios
const testimonials = [
  {
    name: 'Ana M.',
    text: 'A terapia com a Nathalia me ajudou a enxergar novas perspectivas e melhorar minha autoestima.',
  },
  {
    name: 'Carlos R.',
    text: 'Profissional acolhedora e comprometida. Recomendo a todos que buscam autoconhecimento.',
  },
  {
    name: 'Júlia S.',
    text: 'Os encontros me deram ferramentas para lidar melhor com a ansiedade do dia a dia.',
  },
];

// Prévia de posts do blog
const blogPosts = [
  {
    title: 'Como a terapia cognitivo‑comportamental pode ajudar?',
    date: '10/06/2025',
    snippet: 'Entenda os princípios da TCC e como ela auxilia no tratamento de questões emocionais e comportamentais...',
    link: '#',
  },
  {
    title: 'A importância de cuidar da saúde mental',
    date: '22/05/2025',
    snippet: 'Saiba por que a saúde mental é tão importante quanto a física e veja dicas práticas para cultivá‑la...',
    link: '#',
  },
];

export default function App() {
  // índice do depoimento atual no slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // inicializa o AOS e configura o slider de depoimentos
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 100 });
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000); // troca a cada 7 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Navegação fixa */}
      <nav className="navbar">
        <div className="container nav-content">
          {/* Logo em SVG */}
          <div className="logo" aria-label="Logo Nathalia Simão Psicologia">
            <svg width="180" height="40" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="35" fontSize="32" fontFamily="'Poppins', sans-serif" fill="#512da8">Nathalia</text>
              <text x="0" y="70" fontSize="32" fontFamily="'Poppins', sans-serif" fill="#7e57c2">Simão</text>
              <text x="200" y="50" fontSize="16" fontFamily="'Poppins', sans-serif" fill="#b39ddb">Psicologia</text>
            </svg>
          </div>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#blog">Conteúdo</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Seção Hero */}
      <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <h1 data-aos="fade-down">Bem‑vindo(a)</h1>
          <p data-aos="fade-up" data-aos-delay="200">Cuidar da mente é um ato de amor próprio</p>
          <a href="#contato" className="btn-primary" data-aos="zoom-in" data-aos-delay="400">Agende uma sessão</a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section about">
        <div className="container about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={aboutPhoto} alt="Ilustração da psicóloga" />
          </div>
          <div className="about-text" data-aos="fade-left">
            <h2>Sobre Mim</h2>
            <p>
              Olá! Sou Nathalia Simão, psicóloga formada pela Universidade Federal do Ceará
              e apaixonada por auxiliar pessoas em suas jornadas de autoconhecimento.
              Trabalho com abordagens integrativas como a terapia cognitivo‑comportamental (TCC) e a psicanálise,
              adequando o método às necessidades de cada paciente.
            </p>
            <p>
              Acredito na construção de um espaço seguro e acolhedor para que você possa explorar suas emoções,
              ressignificar experiências e desenvolver habilidades para uma vida mais saudável.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section services">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Serviços</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="section testimonials">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Depoimentos</h2>
          <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="200">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`testimonial-item ${index === currentTestimonial ? 'active' : ''}`}
              >
                <p className="testimonial-text">“{item.text}”</p>
                <span className="testimonial-author">— {item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo / Blog */}
      <section id="blog" className="section blog">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Conteúdo</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article className="blog-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="blog-header">
                  <h3>{post.title}</h3>
                  <span className="blog-date">{post.date}</span>
                </div>
                <p className="blog-snippet">{post.snippet}</p>
                <a href={post.link} className="read-more">Leia mais</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contact">
        <div className="container contact-content">
          <div className="contact-form" data-aos="fade-right">
            <h2>Contato</h2>
            <p>Fique à vontade para enviar uma mensagem ou agendar sua sessão.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu e‑mail" required />
              <textarea name="message" rows="5" placeholder="Escreva sua mensagem" required></textarea>
              <button type="submit" className="btn-primary">Enviar</button>
            </form>
          </div>
          <div className="contact-info" data-aos="fade-left">
            <h3>Informações</h3>
            <ul>
              <li><strong>Endereço:</strong> Av. Beira Mar, 1000 – Fortaleza/CE</li>
              <li><strong>Telefone:</strong> (85) 9 9999‑9999</li>
              <li><strong>E‑mail:</strong> contato@nathaliasimao.com</li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Nathalia Simão Psicologia. Todos os direitos reservados.</p>
          <p className="disclaimer">As informações fornecidas neste site são para fins informativos e não substituem o acompanhamento profissional individual.</p>
        </div>
      </footer>
    </div>
  );
}