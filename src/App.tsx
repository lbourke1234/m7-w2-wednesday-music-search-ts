import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MusicSearch from './components/MusicSearch'
import { Song } from './types/Song'
import MainSearch from './components/MainSearch'
import { Container, Row, Col } from 'react-bootstrap'
import Details from './components/Details'

function App() {
  const [songs, setSongs] = useState<Song[]>([])
  const [mainSearchText, setMainSearchText] = useState('')

  const fetchSongsFirst = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica}`
    )
    if (response.ok) {
      const body = await response.json()

      setSongs(body.data)
    }
  }

  const fetchSongsUpdate = async (text: string) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${text}`
    )
    if (response.ok) {
      const body = await response.json()
      setSongs(body.data)
    }
  }

  useEffect(() => {
    fetchSongsFirst()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    fetchSongsUpdate(mainSearchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainSearchText])

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <MainSearch setMainSearchText={setMainSearchText} />
                <Routes>
                  <Route path="/" element={<MusicSearch songs={songs} />} />
                  <Route path="/details/:id" element={<Details />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
