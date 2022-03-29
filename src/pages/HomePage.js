import { BsPlusCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Cards from '../components/Cards';

export default function HomePage({ cards }) {
  console.log(cards);
  return (
    <>
      <header>
        Homepage
        <LinkStyled to="/formpage">
          <PlusIcon size={25} />
        </LinkStyled>
      </header>
      <main>
        <h1>Tight lines, Caspar</h1>
        <CardsList>
          {cards.map(({ date, time, water, targetSpecies, _id }) => (
            <li>
              <Cards
                date={date}
                time={time}
                water={water}
                targetSpecies={targetSpecies}
                key={_id}
              />
            </li>
          ))}
        </CardsList>
      </main>
    </>
  );
}

const PlusIcon = styled(BsPlusCircleFill)`
  position: absolute;
  right: 10px;
`;

const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const CardsList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;
