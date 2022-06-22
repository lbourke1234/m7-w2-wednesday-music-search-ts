import { Container, Col, Row } from 'react-bootstrap'
import { Song } from '../types/Song'
import SingleSong from './SingleSong'

interface MusicSearchProps {
  songs: Song[]
}

const MusicSearch = ({ songs }: MusicSearchProps) => {
  return (
    <div>
      <Container>
        <Row>
          {songs.map((song) => (
            <Col md={4} className="my-3">
              <SingleSong song={song} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
export default MusicSearch
