import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidBreakpointExample() {
    return (
        <Container>
            <Row xs={1} md={3} style={{ backgroundColor: 'red' }}>
                <Col style={{ backgroundColor: 'blue' }}>1 of 2</Col>
                <Col style={{ backgroundColor: 'yellow' }}>2 of 2</Col>
            </Row>
            <Row xs={1} md={2} lg={3}>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col style={{ backgroundColor: 'blue' }}>3 of 3</Col>
            </Row>
            <Row md="auto">
                <Col style={{ backgroundColor: 'blue' }}>1 of 3</Col>
                <Col style={{ backgroundColor: 'red' }}>2 of 3</Col>
                <Col style={{ backgroundColor: 'blue' }}>3 of 3</Col>
            </Row>
            <Row xs="auto">
                <Col style={{ backgroundColor: 'blue' }}>1 of 3</Col>
                <Col style={{ backgroundColor: 'red ' }}>2 of 3</Col>
                <Col style={{ backgroundColor: 'blue' }}>3 of 3</Col>
            </Row>
            <Row xs="auto">
                <Col xs={12} md={8}>
                    xs=12 md=8
                </Col>
                <div className="vr" />
                <Col xs={6} md={4} style={{ backgroundColor: 'red' }}>
                    xs=6 md=4
                </Col>
                <Col xs={12} md={8} style={{ backgroundColor: 'blue' }}>
                    xs=12 md=8
                </Col>
                <Col xs={6} md={4} style={{ backgroundColor: 'red' }}>
                    xs=6 md=4
                </Col>
            </Row>
            <Row xs={2} md={4} lg={4} style={{ backgroundColor: 'red' }}>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    );
}

export default ContainerFluidBreakpointExample;