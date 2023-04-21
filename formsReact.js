import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const Form = ({ showed }) => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  const inputFocus = useRef();

  useEffect(() => {
    if (showed) {
      inputFocus.current.focus();
    }
  }, [showed]);

  const sendForm = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setBody('');
        setTitle('');
        console.log(json);
      });
  };

  return (
    <form onSubmit={(e) => sendForm(e)}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          ref={inputFocus}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Cuerpo</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Mostrar formulario</button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
