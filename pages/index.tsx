import Button from "@/components/Button";
import Tabs from "@/components/Tabs";
import Typography from "@/components/Typography";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [tabs, setTabs] = useState([
    { name: "OVERVIEW", step: "01", current: true },
    { name: "Structure", step: "02", current: false },
    { name: "Surface", step: "03", current: false },
  ]);

  const router = useRouter();

  useEffect(() => {
    router.push("/Mercury");
  }, []);

  return <div></div>;
}
