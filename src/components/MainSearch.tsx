import { Container, Form, Row, Col } from 'react-bootstrap'

interface MainSearchProps {
  setMainSearchText: React.Dispatch<React.SetStateAction<string>>
}

const MainSearch = ({ setMainSearchText }: MainSearchProps) => (
  <Container>
    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              id="search-text"
              type="text"
              placeholder="Search Here"
              onChange={(e) => setMainSearchText(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
)

export default MainSearch
