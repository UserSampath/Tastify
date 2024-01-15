import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import UserManagement from "./pages/userManagement/UserManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/side/SideBar";
import AllPost from "./pages/AllPost/AllPost";
import IPConfiguration from "./pages/IPConfiguration/IPConfiguration";
import ReportGenerating from "./pages/reportGenerating/ReportGenerating";
import Settings from "./pages/settings/Settings";
import ShowPost from "./pages/ShowPost/ShowPost";
import PostDetails from "./pages/PostDetails/PostDetails";

function App() {
  const posts = [
    {
      id: 1,
      title: "Spaghetti",
      description:
        "Spaghetti is a classic Italian pasta that is long, thin, and cylindrical. It is made from durum wheat semolina and water. It is often served al dente, meaning it has a firm bite. Spaghetti is versatile and pairs well with a variety of sauces, such as marinara, Bolognese, or carbonara. It is a staple in Italian cuisine and loved worldwide for its comforting and satisfying qualities.",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
      CreatedDate: "2022/12/12",
      likes: 10,
      firstName: "John",
      lastName: "Doe",
      profilePicture: "https://c8.alamy.com/comp/KEDB24/handsome-young-man-profile-KEDB24.jpg",
    },
    {
      id: 2,
      title: "Ramen",
      description:
        "Ramen is a Japanese noodle soup dish that originated from China. It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and topped with ingredients like sliced pork, nori, menma, and green onions. Ramen has become a global sensation, with various regional styles and creative adaptations enjoyed by people worldwide.",
      image:
        "https://sg1.gffoodservice.com.au/content/uploads/2020/02/article-hero-banner-food_trends-@1x.jpg",
      CreatedDate: "2022/12/12",
      likes: 10,
      firstName: "Jane",
      lastName: "Smith",
      profilePicture: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
    },
    {
      id: 3,
      title: "Udon",
      description:
        "Udon is a type of thick wheat noodle that is a staple in Japanese cuisine. It is often served hot as a noodle soup, with a mild soy-based broth and toppings like green onions, tempura, or thinly sliced kamaboko. Udon noodles have a chewy and soft texture, making them a comforting and hearty choice, especially during colder seasons.",
      image: "https://i.insider.com/622b74d18f97ab0018750b1b?width=700",
      CreatedDate: "2022/12/12",
      likes: 10,
      firstName: "Bob",
      lastName: "Johnson",
      profilePicture: "https://www.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg",
    },
    {
      id: 4,
      title: "Pasta Carbonara",
      description:
        "Pasta Carbonara is a classic Roman pasta dish known for its rich and creamy sauce. It typically includes spaghetti, eggs, Pecorino Romano cheese, guanciale, and black pepper. The sauce is made by mixing eggs and cheese with hot, drained pasta, creating a velvety coating. Pasta Carbonara is loved for its simplicity and decadent flavor, making it a favorite among Italian food enthusiasts.",
      image: "https://i.insider.com/622b74d18f97ab0018750b1b?width=700",
      CreatedDate: "2022/12/12",
      likes: 10,
      firstName: "Alice",
      lastName: "Anderson",
      profilePicture: "https://www.shutterstock.com/image-photo/happy-cheerful-young-african-business-260nw-2111421074.jpg",
    },
    {
      id: 5,
      title: "Pad Thai",
      description:
        "Pad Thai is a popular Thai stir-fried noodle dish that features rice noodles stir-fried with eggs, tofu or shrimp, bean sprouts, peanuts, and lime. It is known for its balance of sweet, sour, and salty flavors, with a hint of umami. Pad Thai has gained international popularity and is a delightful representation of Thai street food culture.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mYRDm5y9Vv2a1jffnzxWfzOApn_48ZP0rM9tCAJeoycdUCnpqaLXSpmZksz1KZCHbwA&usqp=CAU",
      CreatedDate: "2022/12/12",
      likes: 10,
      firstName: "Chris",
      lastName: "Clark",
      profilePicture: "https://www.shutterstock.com/image-photo/happy-millennial-hipster-girl-reading-260nw-1517143949.jpg",
    },
    {
      id: 6,
      title: "Soba",
      description:
        "Soba is a type of thin Japanese noodle made from buckwheat flour. It is often served chilled with a dipping sauce called tsuyu. Soba noodles are enjoyed for their nutty flavor and firm texture. They are a popular choice in Japanese cuisine and are commonly served on New Year's Eve as a symbol of longevity and good luck.",
      image: "https://i.insider.com/622b74d18f97ab0018750b1b?width=700",
      CreatedDate: "2022/12/12",
      likes: 10,
      firstName: "Eva",
      lastName: "Evans",
      profilePicture: "https://www.shutterstock.com/image-photo/planning-office-portrait-black-woman-260nw-2262612103.jpg",
    },
  ];
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        {/* <Route path="/register" element={<SignUp />}></Route> */}
        <Route path="/showPost" element={<ShowPost posts={posts} />} />
        <Route path="/post/:postId" element={<PostDetails posts={posts} />} />



        <Route path="all_post" element={<AllPost posts={posts}/>}></Route>
        <Route path="/user_Management" element={<UserManagement />}></Route>
        
        <Route path="/ip_configuration" element={<IPConfiguration />}></Route>
        <Route path="/report_generating" element={<ReportGenerating />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
