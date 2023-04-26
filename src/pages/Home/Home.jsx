import collage from '../../img/collage.png';

import { CollageWrap, Collage } from './Home.styled';

export default function Home() {
  return (
    <CollageWrap>
      <Collage src={collage} alt="collage" />
    </CollageWrap>
  );
}
