import React from "react";

import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://raw.githubusercontent.com/NicolasKonishi/Projeto-MarsTech/refs/heads/master/Imagens/captura-web.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/145286206?s=400&u=633f35ac9a1c8850c3e568fdc49a91ebed19a4f0&v=4" />
          <div>
            <h4>NicolasKonishi</h4>
            <p>Há 2 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>MarsTech</h4>
          <p>
            Este projeto visa o desenvolvimento de um sistema para o Museu
            Marstech,um museu multitemático focado na possível viagem do homem
            a Marte. O sistema permitirá ...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#CSharp #ASPNET</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
