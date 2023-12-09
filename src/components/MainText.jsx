import { styled } from "styled-components";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import preview from "../assets/qa_preview.png"

const InfoDiv = styled.div`
  text-align: center;

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #aea9b4;
    margin-bottom: 12px;
    opacity: ${(props) => (props.showH2 ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
  }

  h1 {
    color: black;
    font-size: 1.5rem;
    opacity: ${(props) => (props.showH1 ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;

    span {
      color: #0078fe;
    }
  }

  img {
    max-width: 80%;
    height: auto;
    opacity: ${(props) => (props.showImg ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
  }

  h3 {
    opacity: ${(props) => (props.showH3 ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
  }

  .list {
    opacity: ${(props) => (props.showList ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
  }
`;

export default function MainText({ dataAugmentation, preprocessing }) {
  const [showH2, setShowH2] = useState(false);
  const [showH1, setShowH1] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showH3, setShowH3] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timeoutH2 = setTimeout(() => setShowH2(true), 800);
    const timeoutImg = setTimeout(() => setShowImg(true), 1600);
    const timeoutH1 = setTimeout(() => setShowH1(true), 2400);
    const timeoutH3 = setTimeout(() => setShowH3(true), 3200);
    const timeoutList = setTimeout(() => setShowList(true), 4000);

    return () => {
      clearTimeout(timeoutH2);
      clearTimeout(timeoutImg);
      clearTimeout(timeoutH1);
      clearTimeout(timeoutH3);
      clearTimeout(timeoutList);
    };
  }, []);

  return (
    <InfoDiv
      showH2={showH2}
      showH1={showH1}
      showImg={showImg}
      showH3={showH3}
      showList={showList}
    >
      <h2> Data to Information</h2>
      <img src={preview} alt="Preview" />
      <h1>
        인공지능 학습을 위한
        <br />
        <span className={dataAugmentation ? "highlight" : ""}>
          데이터 증강
        </span>{" "}
        및 <span className={preprocessing ? "highlight" : ""}>전처리 과정</span>
        에 대한 연구
      </h1>
      <h3>종합설계프로젝트 8팀</h3>
      <h3>김규회 • 여다영 • 장휘영 • 채준혁 • 황효성 </h3>
      <List
        className="list"
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Images" secondary="Dec 6, 2023" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MusicNoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Sound" secondary="Dec 7, 2023" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TextFieldsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Text" secondary="Dec 20, 2023" />
        </ListItem>
      </List>
    </InfoDiv>
  );
}
