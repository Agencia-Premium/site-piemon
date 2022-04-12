/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import * as S from './style';

export function Footer() {
  return (
    <S.Container>
      <div className="line" />
      <div className="content">
        <div className="wrapperTextImg">
          <p>Feito por </p>
          <Link href="https://www.agenciapremium.com.br/">
            <a target="_blank">
              <img
                src="/logoPremium.png"
                alt="logo da empresa premium, um troféu cortado no meio na cor dourada, logo abaixo texto escrito premium agência digital"
              />
            </a>
          </Link>
        </div>
      </div>
    </S.Container>
  );
}
