import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 10px;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
`

export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const Genre = styled.p`
  font-family: 'Roboto';
  color: #3b82f6;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 0px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
