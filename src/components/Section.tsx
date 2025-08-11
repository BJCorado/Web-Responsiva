import { Card, Row, Col, Container } from 'react-bootstrap';

type CardItem = {
  title: string;
  text: string;
  img: string;
};

const items: CardItem[] = [
  {
    title: 'Artículo 1',
    text: 'Introducción al diseño responsivo y buenas prácticas de layout.',
    img: '/diseño responsivo.png',
  },
  {
    title: 'Artículo 2',
    text: 'Cómo usar utilidades responsivas de Bootstrap (grid y helpers).',
    img: '/boopstrap.png',
  },
  {
    title: 'Artículo 3',
    text: 'Media queries personalizadas para tipografía y espaciado.',
    img: '/media querys.png',
  },
];

export default function Section() {
  return (
    <section id="section" className="py-5 bg-light">
      <Container>
        <header className="mb-4 text-center">
          <h2 className="h1 fw-bold section-title">Tarjetas de ejemplo</h2>
          <p className="text-muted">Se adaptan automáticamente según el ancho de pantalla.</p>
        </header>

        <Row>
          {items.map((c, i) => (
            <Col key={i} xs={12} md={6} lg={4} className="mb-4">
              {/* xs=12 (móvil 1 col), md=6 (tablet 2 col), lg=4 (desktop 3 col) */}
              <Card className="h-100 shadow-sm overflow-hidden">
                <div className="ratio ratio-16x9 bg-light rounded-top">
                <Card.Img variant="top" src={c.img} alt={c.title} className="img-fluid w-100 h-100 object-fit-contain p-2"/>
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold">{c.title}</Card.Title>
                  <Card.Text>{c.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
