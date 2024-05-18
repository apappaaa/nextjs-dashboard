import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customers'
};

export default async function Page() {
  return <h1>Customers Page</h1>;
}
