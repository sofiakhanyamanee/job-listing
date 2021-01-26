import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  padding: 100px 0;

  & img {
    width: 70px;
  }
`;

const Box = styled.div`
  width: 50%;
  padding: 50px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  text-align: right;
`;

const LoadingMsg = styled.h1`
  text-align: center;
  padding-top: 40vh;
`;

const BackButton = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 160px;
  border-radius: 14pt;
  font-size: 17px;
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

export default function JobItemDetail({ job }) {
  const history = useHistory();

  function toJobs() {
    history.push("/jobs");
  }

  return (
    <Wrapper>
      <BackButton onClick={() => toJobs()}>Back</BackButton>
      <Box>
        {job ? (
          <div>
            <img className="company_logo" alt="img" src={job.company_logo} />
            <Paragraph>{job.created_at}</Paragraph>
            <strong>{job.type}</strong>
            <h2>{job.title}</h2>
            <h3>{job.location}</h3>
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
            <a href={job.company_url}>{job.company_url}</a>
          </div>
        ) : (
          <LoadingMsg>Loading...</LoadingMsg>
        )}
      </Box>
    </Wrapper>
  );
}
