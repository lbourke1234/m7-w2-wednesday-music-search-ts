import { Song } from '../types/Song'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface SingleSongProps {
  song: Song
}

const SingleSong = ({ song }: SingleSongProps) => {
  const navigate = useNavigate()
  return (
    <Card>
      <Card.Img variant="top" src={song.artist.picture} />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>
          Duration: {Math.floor(song.duration / 60)}.{song.duration % 60}
        </Card.Text>
        <Button
          className="song-button"
          onClick={() => navigate(`/details/${song.id}`)}
          variant="primary"
          size="lg"
        >
          Go to Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SingleSong
