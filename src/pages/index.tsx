import { Header } from 'components/Header';
import { useThemeContext } from 'context/ThemeContext';
import * as animationData from '../../public/lulapalooza.json';
import { Introduction } from 'components/Introduction';
import { Content } from 'components/Content';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Content />
      </main>
    </>
  );
}

export default Home;
