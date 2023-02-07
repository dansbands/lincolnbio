import { useState } from "react";
import styled from "styled-components";

import SectionHeading from "./section-heading";

// @TODO: Combine this and Calendar into one ExpandableSection component,
// add styles and animations
const Bio = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <SectionHeading isOpen={isOpen} isCollapsible caption="Bio" />
      {isOpen && (
        <Content $isOpen={isOpen}>
          <h2>Dan O'Dea</h2>
          <p>
            Dan O’Dea plays fiddle, mandolin, guitar, banjo, and stand-up bass,
            and also sings lead and harmony vocals. He has performed live on the
            radio with John McEuen (Nitty Gritty Dirt Band), has jammed on stage
            with Pete Seeger, Peter Yarrow (Peter, Paul, and Mary), Clarence
            Clemmons (E Street Band), Tony Trischka, Tom Paxton, Jason Hahn
            (String Cheese Incident), members of Railroad Earth, Vinx (Taj
            Mahal, Sting), and The Zen Tricksters, and has been billed with The
            Avett Brothers, Dickey Betts (Allman Bros), Levon Helm (The Band),
            The Wailers, Del McCoury Band, Rhonda Vincent, and Rain-The Beatles
            Experience.
          </p>
          <p>
            He has released two albums,{" "}
            <a href="https://open.spotify.com/album/62lIkqnEt0QW2s8Nf3fbIz?si=HZkNDZ_mRrqAq7-tPi5OAw&nd=1">
              Old Favorites (2016)
            </a>{" "}
            and{" "}
            <a href="https://open.spotify.com/album/0Xcss5ashEM5PdBUmHstrf?si=3zOKhlgSQRmmW0WAQo_ofA&nd=1">
              Eagle Ridge (2010)
            </a>
            .
          </p>
          <hr />
          <h2>Eagle Ridge</h2>
          <p>Modern Bluegrass</p>
          <h2>Nick Conte - guitar, vocals</h2>
          <p>
            Nick Conte has the longest tenure in Eagle Ridge, having joined in
            2013. He is a multi instrumentalist based in NJ. He grew up heavily
            involved in his Irish heritage, surrounded by the culture and music.
            For a decade he has been performing in the tri-state area sharing
            the stage with the likes of Tony Trischka, Alex Hargreaves, and Mike
            Munford. He has also opened up for national touring acts such as The
            Jeff Austin Band, Big Brother and the Holding Company, and Mark
            Karen of Bob Weir and Ratdog. Outside of the Shire Rats, Nick can be
            seen performing with several bands based in North Jersey including
            Brother John Brown, Dan O'Dea and Eagle Ridge, and Blue Plate
            Special. He has also hosted the Jersey City Bluegrass jam for over
            five years.
          </p>
          <h2>Bobby Baxmeyer - banjo, dobro, vocals</h2>
          <p>
            Bobby Baxmeyer joined Eagle Ridge in 2016. He is a multi
            instrumentalist based in NJ. Over a long career spanning several
            decades he has recorded and performed on stage and in Broadway
            orchestras with a widely diverse array of artists including Paquito
            D’Rivera, Charanga America, Jose Fajardo, Ray Martinez, Peter Yarrow
            (Peter, Paul and Mary), Sam Moore (Sam and Dave), Christian McBride,
            Tony Trischka, Sally Van Meter, Steve Martin, Mike Munford, and many
            others. He has held chairs on Broadway for the shows Rent, Shrek,
            Motown, and Bright Star, as well as having toured and subbed for
            many others. He can be heard on the Broadway cast albums of Shrek,
            Motown, and Bright Star. In addition to his work with the Shire Rats
            he can currently be heard as a member of The Stonethrowers from
            Philadelphia, Magnolia Street String Band from central NJ, Music
            From The Shed from south NJ, Dan O’Dea and Eagle Ridge from north
            NJ, and freelancing for many others. He is featured on the new CD
            from Magnolia Street String Band, released this past June. He can
            also be found picking at bluegrass jams in NY, NJ, and PA.{" "}
          </p>
        </Content>
      )}
    </Container>
  );
};

export default Bio;

const Container = styled.div`
  cursor: pointer;
  width: 80vw;
`;

const Content = styled.div``;
