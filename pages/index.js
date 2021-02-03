import { server } from '../config'
import FactList from "../components/FactList";

export default function Home({ facts }) {
  return (
    <div>
      <FactList facts={facts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/facts`);
  const facts = await res.json();

  return { props: { facts } };
};
