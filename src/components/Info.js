import React from "react";
import { GithubContext } from "../context/context";
import { ContactData } from "../components";
import styled from "styled-components";
const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    name,
    login,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    created_at,
  } = githubUser;

  const date = new Date(created_at.slice(0, -1)).toDateString().substring(4);

  return (
    <Wrapper>
      <div className="info-main">
        <div className="avatar">
          <img src={avatar_url} alt="avatar" />
        </div>

        <div className="info-main-top">
          <div className="info-wrap">
            <div>
              <h2>{name || "Not Available"}</h2>
              <div className="link-wrap">
                <a href={`https://github.com/${login}`}>@{login}</a>
              </div>
            </div>
            <p>Joined {date || "Joined 25 Jan 2011"}</p>
          </div>
        </div>
        <div className="bio">
          <p>{bio || "This profile has no bio."} </p>
        </div>

        <div className="repo-followings-ct">
          <div>
            <p className="q-name">Repos</p>
            <p className="quantity">{public_repos}</p>
          </div>
          <div>
            <p className="q-name">Followers</p>
            <p className="quantity">{followers}</p>
          </div>
          <div>
            <p className="q-name">Following</p>
            <p className="quantity">{following}</p>
          </div>
        </div>
        <ContactData />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--cl-text);

  .info-main {
    width: 27.9rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    .avatar {
      margin-right: 1.9rem;
      margin-top: 0.5rem;
      img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
      }
    }
  }

  .info-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h2 {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: var(--cl-bold);
    }

    .link-wrap {
      a {
        color: #0079ff;
        font-size: 1.3rem;
        line-height: 1.9rem;
      }
      margin-bottom: 0.6rem;
    }
  }
  .info-main-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 3.3rem;
  }
  .bio {
    width: 23.3rem;
    margin-bottom: 2.3rem;
  }
  .repo-followings-ct {
    width: 27.9rem;
    height: 8.5rem;
    padding: 1.5rem 1.5rem 1.9rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--cl-bg);
    border-radius: 1rem;
    margin-bottom: 2.4rem;

    div {
      width: 7.9rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .q-name {
        font-size: 1.1rem;
        color: var(--cl-text);
        text-align: center;
      }
      .quantity {
        font-weight: 700;
        font-size: 1.6rem;
        color: var(--cl-bold);
        text-align: center;
      }
    }
  }
  @media (min-width: 48em) {
    .info-main {
      width: 48rem;
      .avatar {
        margin-right: 3.7rem;
        margin-top: 0;
        img {
          width: 11.7rem;
          height: 11.7rem;
        }
      }
    }
    .info-wrap {
      h2 {
        font-size: 2.6rem;
        line-height: 3.8rem;
      }
      .link-wrap {
        a {
          font-size: 1.6rem;
          line-height: 2.4rem;
        }
      }
    }
    .info-main-top {
      margin-bottom: 4rem;
    }
    .bio {
      width: 33.4rem;
      margin-bottom: 3.2rem;
    }
    .repo-followings-ct {
      width: 49.3rem;
      padding: 1.5rem 9.6rem 1.7rem 3.2rem;
      text-align: left;
      margin-bottom: 3rem;

      div {
        align-items: flex-start;
        justify-content: center;
        .q-name {
          font-size: 1.3rem;
          text-align: left;
        }
        .quantity {
          font-size: 2.2rem;
          text-align: left;
          align-self: left;
        }
      }
    }
  }
  @media (min-width: 90em) {
    .info-main {
      align-items: flex-start;
      justify-content: flex-end;
      width: 63.4rem;
      .avatar {
        margin-right: 3.7rem;
        justify-self: start;
        img {
        }
      }
    }

    .info-wrap {
      width: 48rem;
      margin-bottom: 3.3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .info-main-top {
      gap: 2.4rem;
      margin-bottom: 0;
    }
    .bio {
      width: 48rem;
      margin-top: -2rem;
    }
    .repo-followings-ct {
      width: 48rem;
      padding: 1.5rem 9.6rem 1.7rem 3.2rem;
      text-align: left;
      margin-bottom: 3.7rem;

      div {
        .q-name {
          font-size: 1.3rem;
          text-align: left;
        }
        .quantity {
          font-size: 2.2rem;
          text-align: left;
        }
      }
    }
  }
`;

export default UserInfo;
