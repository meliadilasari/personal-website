import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Melia Dilasari",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
