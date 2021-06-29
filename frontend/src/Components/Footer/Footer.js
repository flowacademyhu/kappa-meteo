import { FooterStyle, FooterText, FooterDescript } from './FooterElements';

export default function Footer() {
  return (
    <div className="p-4">
      <FooterStyle>
        <FooterText>MeteOApp</FooterText>
        <FooterDescript>
          Több mint 200 moduláris állomás adatai egy helyen...
        </FooterDescript>
      </FooterStyle>
    </div>
  );
}
