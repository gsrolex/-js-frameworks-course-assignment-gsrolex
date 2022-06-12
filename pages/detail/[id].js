import axios from "axios";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../../api/api";

export default function UserDetail(props) {
  return (
    <Layout>
      <Head title={props.name} />
      <div className="card text-center">
        <div className="card-header">{props.gender}</div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.email}</p>
          <a href={`/`} className="btn btn-primary">
            Go Home
          </a>
        </div>
        <div className="card-footer text-muted">{props.status}</div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL);

    console.log(response.data);

    const users = response.data;

    const paths = users.map((user) => ({
      params: { id: String(user.id) },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  console.log(params);
  const url = `${BASE_URL}/${String(params.id)}`;

  let user = null;

  try {
    const response = await axios.get(url);

    user = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { user: user },
  };
}
