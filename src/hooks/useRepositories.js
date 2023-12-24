import { useEffect, useState } from "react";
import { localIp } from "../../env";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState();

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(`http://${localIp}:5000/api/repositories`);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
