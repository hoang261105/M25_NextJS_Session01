import Button from "@/components/Button";
import { content } from "../../pages/Company";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Bài 3 */}
      <h3>Họ và tên: Nguyễn Văn A</h3>
      <br />
      {/* Bài 4 */}
      <h3>Company: {content}</h3>
      <br />
      {/* Bài 5 */}
      <Button/>
      <br />
      {/* Bài 6 */}
      <Header/>
      <br />
      {/* Bài 7 */}
      <Footer/>
      <br />
      {/* Bài 10 */}
      <i className="fa-solid fa-mug-saucer"></i>
      <i className="fa-solid fa-eye"></i>
      <i className="fa-solid fa-eye"></i>
      {/* Bài 12 */}
      <Image src={"https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhat--Dem-Sai-G.jpg"} alt="load image" width={400} height={300}></Image>
      <Image src={"https://images2.thanhnien.vn/528068263637045248/2024/1/25/3b690baedbd9a609207c76684a3413d0-65a11b0a7e79d880-17061562931311973368410.jpg"} alt="load image" width={400} height={300}></Image>
    </>
  );
}
