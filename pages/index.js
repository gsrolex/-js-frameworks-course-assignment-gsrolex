import Head from "next/head";
import Layout from "./components/layout/Layout";
import Heading from "./components/Heading";
import axios from "axios";
import { BASE_URL } from "../api/api";

export default function Index({ users }) {
  console.log(users);

  return (
    <Layout>
      <Head title="Results" />
      <div className="container, cont_button">
        <Heading className="homeHeading" content="Home" color="black" />
      </div>

      {users.map((user) => {
        console.log(user);
        return (
          <div key={user.id}>
            <ol className="list-group list-group-numbered p-3">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <a href={`detail/${String(user.id)}`}>
                      <h1>{user.name}</h1>
                    </a>
                  </div>
                  {user.gender}
                </div>
              </li>
            </ol>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  let users = [];

  try {
    const response = await axios.get(BASE_URL);

    console.log("response", response.data);

    users = response.data;
  } catch (error) {
    console.log(error);
  }

  console.log("users", users);

  return {
    props: {
      users: users,
    },
  };
}
