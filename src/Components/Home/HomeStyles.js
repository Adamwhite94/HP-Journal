import styled from 'styled-components'


const HomeContainer = styled.div`
background-image: url(${require(`../../Assets/Images/hpbg.jpg`)});
  background-position: center; 
    background-repeat: no-repeat; 
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    height: 100vh;
    max-width:100%;
    overflow-y:auto;
`;
const HomeElements = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2.5rem;
padding-top: 1rem;
`;

const HomeButtonContainer = styled.div`
display:flex;
flex-direction: column;
`;

const HomeButton = styled.button``;

const HomeTitle = styled.h1`
color: #fff;
font-size: 4rem;
font-weight:bold;
`;


const SettingsContainer = styled.form`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2.5rem;
padding-top: 1rem;
`;

const Card = styled.div`

`;
const CardElements = styled.div`
display:grid;
grid-template-columns: repeat(4, 18rem);
align-items: center;
gap: 1rem;
`;
const CardTitle = styled.h1`
color: #fff;
font-size: 2rem;
text-align: center;


`;
const CardInfo = styled.h3``;
const CardImage = styled.img`
width:10rem;
height: 10rem;
`;
const CardInfoContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;


export{
    HomeContainer,
    HomeElements,
    HomeButtonContainer,
    HomeTitle,
    SettingsContainer,
    Card,
    HomeButton,
    CardElements,
    CardTitle,
    CardInfo,
    CardImage,
    CardInfoContainer
}