import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí podrías integrar EmailJS o tu backend
    alert('¡Mensaje enviado! Gracias, te contactaré pronto.');
    setForm({ name: '', email: '', whatsapp: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4 text-dark">Contacto</h2>
        <div className="row">
          {/* Formulario */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="needs-validation">
              {['name','email','whatsapp'].map(field => (
                <div className="mb-3" key={field}>
                  <input
                    type={field==='email' ? 'email' : 'text'}
                    name={field}
                    className="form-control"
                    placeholder={
                      field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    value={form[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Mensaje"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>

          {/* Enlaces directos */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h5>También me encontrás en:</h5>
            <p>
              <a
                href="https://wa.me/3815678649"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block mb-2"
              >
                📱 WhatsApp
              </a>
              <a href="mailto:mezajulieta041@gmail.com" className="d-block mb-2">
                📧 Email
              </a>
              <a
                href="https://github.com/julimeza"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block mb-2"
              >
                💻 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/julieta-meza"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block"
              >
                🔗 LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
