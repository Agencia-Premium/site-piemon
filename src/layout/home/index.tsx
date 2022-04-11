import Image from 'next/image';
import * as S from './style';

function HomeLayout() {
  return (
    <S.Container>
      <div className="line" />
      <S.Content>
        <Image
          src="/icon.png"
          alt="logo da empresa piemon"
          width={2000}
          height={500}
        />
        <div className="containerText">
          <div className="wrapper">
            <h1>
              Estamos trabalhando em nossa página no momento 🚧, volte em breve.{' '}
            </h1>
          </div>

          <p className="text">veja nossos pontos</p>
        </div>
        <div className="wrapperMaps">
          <div className="map1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7446960755733!2d-61.46577958519327!3d-11.426067391882725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c82f087c955223%3A0xcf7c844212130557!2sPiemon!5e0!3m2!1spt-BR!2sbr!4v1649713258528!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="address">
              Av.Malaquita, 2915, Nova Esperança, Cacoal/RO, 76962-136{' '}
            </p>
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
}
export { HomeLayout };
