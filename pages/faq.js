import { useEffect, useState } from "react";
import Link from "../src/components/Link";

export async function getStaticProps() {
  const FAQ_URL_API = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_URL_API)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      qualquercoisa: 'que eu passar aqui',
      faq,
    }, // will be passed to the page component as props
  }
}

export default function FAQPage({ faq }) {
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {
  //   let FAQ_URL_API = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  //   fetch(FAQ_URL_API)
  //     .then((respostaDoServidor) => {
  //       return respostaDoServidor.json();
  //     })
  //     .then((resposta) => {
  //       console.log(resposta);
  //       setFaq(resposta);
  //     })
  //     .catch((erro) => {
  //       console.error(erro);
  //     });
  // }, []);

  return (
    <div>
      <h1>FAQPage</h1>
      <Link href="/" passHref>
        <a>Ir para a home</a>
      </Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}