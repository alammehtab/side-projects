"use client";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });
      const data = await res.json();

      if (!res.ok) {
        setError(true);
      }

      setData(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
