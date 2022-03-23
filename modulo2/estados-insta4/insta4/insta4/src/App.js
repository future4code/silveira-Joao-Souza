import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/250'}
        />
        <Post2
          nomeUsuario={'maria'}
          fotoUsuario={'https://picsum.photos/200/300'}
          fotoPost={'https://picsum.photos/200/300'}
        />
        <Post3
          nomeUsuario={'ana'}
          fotoUsuario={'https://picsum.photos/id/870/536/354?grayscale&blur=2'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
