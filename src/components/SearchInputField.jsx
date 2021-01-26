import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { JobContext } from "../contexts/JobContextProvider";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: whitesmoke;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Heading = styled.h1`
  color: #8aa895;
  margin-bottom: 40px;
`;
const Inputfield = styled.input`
  display: flex;
  justify-content: center;
  width: 450px;
  padding: 15px 20px;
  border-radius: 14pt;
  border: none;
  font-size: 17px;
  color: darkslategrey;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 200px;
  border-radius: 14pt;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 15px 0 15px 0;
  background: #8aa895;
  color: white;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px;

  &: hover {
    background: #b6c9bd;
  }

  :focus {
    outline: none;
  }
`;

export default function SearchInputField() {
  const {
    keyInput,
    setKeyInput,
    setJobs,
    dataStorage,
    setDataStorage,
  } = useContext(JobContext);
  const history = useHistory();

  function handle_fetch() {
    const urlStr = keyInput.replace(" ", "+");
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${urlStr}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          console.log("no matching");
          history.push("/error");
        } else {
          let newObj = {
            keyword: keyInput,
            data,
          };
          let updatedStorage = [...dataStorage, newObj];
          setDataStorage(updatedStorage);
          setJobs(data);
          history.push("/jobs");
          console.log("My context array", dataStorage);
        }
      });
  }

  function getJobList() {
    if (keyInput.length === 0 || keyInput.trim() === "") {
      history.push("/");
      console.log("is empty");
    } else {
      if (dataStorage.length === 0) {
        console.log("fetching");
        handle_fetch();
      } else {
        let oldSearchFound = dataStorage.find(
          (obj) => obj.keyword === keyInput
        );
        console.log("Found in context", oldSearchFound);
        if (oldSearchFound) {
          setJobs(oldSearchFound.data);
          history.push("/jobs");
          console.log("My context array", dataStorage);
        } else {
          console.log("not found in context, handle fetch");
          handle_fetch();
        }
      }
    }
  }

  return (
    <Wrapper>
      <div className="shape1"></div>
      <div className="shape2"></div>
      <Heading>What kind of job are you looking for? </Heading>
      <Box>
        <Inputfield
          type="text"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
        />
        <SearchButton onClick={() => getJobList(keyInput)}>Search</SearchButton>
      </Box>
    </Wrapper>
  );
}
