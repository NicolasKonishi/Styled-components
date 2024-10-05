
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const UserFeed = () => {
  return (
    <>
      <Header auth={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>#TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={75}
            name="NicolasKonishi"
            image="https://avatars.githubusercontent.com/u/145286206?s=400&u=633f35ac9a1c8850c3e568fdc49a91ebed19a4f0&v=4"
          />
            <UserInfo
            percentual={50}
            name="LucasCerione"
            image="https://avatars.githubusercontent.com/u/146773789?v=4"
          />
            <UserInfo
            percentual={45}
            name="Paulopaiv"
            image="https://avatars.githubusercontent.com/u/138790039?v=4"
          />
          <UserInfo
            percentual={40}
            name="AyuMuraki"
            image="https://avatars.githubusercontent.com/u/161631906?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { UserFeed };
