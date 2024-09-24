import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/histori-docs/docs/overview');
  }, [history]);

  return null; // or add a loading spinner if needed
}
